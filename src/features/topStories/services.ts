import { get } from 'lodash'
import { useQuery } from 'react-query'
import sanitizeHtml from 'sanitize-html'

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

  return get(data, 'response.results', []).map((post) => {
    return {
      title: post.webTitle,
      body: sanitizeHtml(post.fields?.body, {
        allowedTags: [],
        allowedAttributes: {},
        textFilter: (text) => text.replace('• ', ''),
      }),
    }
  })
}

export function useQueryTopStories(options: OptionsType) {
  return useQuery(['topStories', options], getTopStories)
}
