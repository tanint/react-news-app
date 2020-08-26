import { useQuery } from 'react-query'

import { fetchAPI } from '@/lib/api'

export const POST_KEY = 'posts'

export const getPosts = async () => {
  const { data } = await fetchAPI({
    path: '/posts',
  })

  return data
}

export function usePosts() {
  return useQuery(POST_KEY, getPosts)
}
