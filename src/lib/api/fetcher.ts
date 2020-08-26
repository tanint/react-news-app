import axios from 'axios'

import { getBaseUrl } from './helpers'

interface fetchApiType {
  path: string
  url?: string
  params?: object
}

export function fetchAPI({
  url = process.env.NEXT_PUBLIC_API_URL,
  path,
  params,
  ...options
}: fetchApiType) {
  return axios({
    baseURL: getBaseUrl({ url, path }),
    params: {
      'api-key': process.env.NEXT_PUBLIC_API_KEY,
      ...params,
    },
    ...options,
  })
}
