export function getBaseUrl({ url = process.env.NEXT_PUBLIC_API_URL, path }) {
  const urlObject = {
    url,

    ...(path && { path }),
  }

  return Object.values(urlObject).join('')
}
