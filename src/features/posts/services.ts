import { get } from 'lodash'
import { useQuery } from 'react-query'

import { fetchAPI } from '@/lib/api'

export const POST_KEY = 'posts'

export const getPosts = async (_, params) => {
  const { section } = params

  const { data } = await fetchAPI({
    path: `/${section}`,
  })

  return get(data, 'response.results', [])
}

export function usePosts({ section }) {
  return useQuery([POST_KEY, { section }], getPosts)
}
