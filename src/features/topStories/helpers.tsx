import { isEmpty } from 'lodash'

export const chunkByPattern = (list, pattern) => {
  if (isEmpty(list)) return []

  const chunk = pattern.split('|').map((member) => {
    const inner = member.split(',').map((x) => list[x])

    return inner
  })

  return chunk
}
