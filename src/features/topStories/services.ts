import { get } from 'lodash'
import { useQuery } from 'react-query'

import { fetchAPI } from '@/lib/api'

type OptionsType = {
  section: string
  limit: number
}

export const getTopStories = async (section, options: OptionsType) => {
  const { data } = await fetchAPI({
    path: '/search',
    params: {
      section,
      'page-size': options.limit,
      'show-fields': 'bodyText,thumbnail',
    },
  })

  return get(data, 'response.results', []).map((post) => {
    return {
      id: post.id,
      title: post.webTitle,
      thumbnail: post.fields?.thumbnail,
      section: post.sectionId,
      body: post.fields?.bodyText,
    }
  })
}

export function useQueryTopStories(options: OptionsType) {
  return useQuery(['topStories', options], getTopStories)
}
