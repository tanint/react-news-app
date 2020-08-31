import { get } from 'lodash'
import { useQuery } from 'react-query'

import { fetchAPI } from '@/lib/api'

type OptionsType = {
  limit?: number
  orderBy?: string
}

export const getContents = async (
  section: string,
  options: OptionsType,
  page = 1,
) => {
  const { orderBy = 'newest', limit = 9 } = options

  const { data } = await fetchAPI({
    path: '/search',
    params: {
      section,
      page,
      'page-size': limit,
      'order-by': orderBy,
      'show-fields': 'bodyText,thumbnail',
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

export function useQueryContents(section, options: OptionsType) {
  return useQuery([section, options], getContents)
}
