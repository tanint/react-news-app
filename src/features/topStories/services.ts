import { get } from 'lodash'
import { useQuery } from 'react-query'

import { fetchAPI } from '@/lib/api'

type OptionsType = {
  section: string
  limit: number
}

export const getTopStories = async (_, options: OptionsType) => {
  const { data } = await fetchAPI({
    path: '/search',
    params: {
      section: options.section,
      'page-size': options.limit,
      'show-fields': 'body',
    },
  })

  return get(data, 'response.results', [])
}

export function useQueryTopStories(options: OptionsType) {
  return useQuery(['topStories', options], getTopStories)
}
