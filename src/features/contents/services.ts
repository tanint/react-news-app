import { get } from 'lodash'
import { useQuery, useInfiniteQuery } from 'react-query'

import { fetchAPI } from '@/lib/api'

type OptionsType = {
  limit?: number
  orderBy?: string
  q?: string
}

export const getContents = async (
  section?: string,
  options?: OptionsType,
  page = 1,
) => {
  const { orderBy = 'newest', limit = 12, q } = options

  const { data } = await fetchAPI({
    path: '/search',
    params: {
      page,
      'page-size': limit,
      'order-by': orderBy,
      'show-fields': 'bodyText,thumbnail',
      ...(section && { section }),
      ...(q && { q }),
    },
  })

  return {
    currentPage: get(data, 'response.currentPage'),
    pages: get(data, 'response.pages'),
    results: get(data, 'response.results', []).map((post) => ({
      id: post.id,
      title: post.webTitle,
      thumbnail: post.fields?.thumbnail,
      section: post.sectionId,
      body: post.fields?.bodyText,
    })),
  }
}

export const useQueryContents = (section, options: OptionsType) => {
  return useQuery([section, options], getContents)
}

export const useInfiniteQueryContents = (
  section,
  options: OptionsType,
  config = {},
) => {
  return useInfiniteQuery({
    queryKey: [
      section,
      {
        limit: 12,
        ...options,
      },
    ],
    queryFn: getContents,
    config: {
      ...config,
      getFetchMore: (lastGroup) => {
        const nextPage = lastGroup.currentPage + 1

        if (nextPage > lastGroup.pages) return false

        return nextPage
      },
    },
  })
}
