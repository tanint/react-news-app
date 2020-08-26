import axios from 'axios'

import { getBaseUrl } from './helpers'

interface fetchApiType {
  path: string
  url?: string
}

export function fetchAPI({
  url = process.env.NEXT_PUBLIC_API_URL,
  path,
  ...options
}: fetchApiType) {
  return axios({
    baseURL: getBaseUrl({ url, path }),
    ...options,
  })
}
