import { get } from 'lodash'
import sanitizeHtml from 'sanitize-html'
import dayjs from 'dayjs'

import { fetchAPI } from '@/lib/api'

export const getSingleContent = async (contentId) => {
  const { data } = await fetchAPI({
    path: `/${contentId}`,
    params: {
      'show-fields': 'body,headline,thumbnail',
      shouldHideAdverts: 'true',
    },
  })

  return {
    id: get(data, 'response.content.id'),
    title: get(data, 'response.content.webTitle'),
    thumbnail: get(data, 'response.content.fields.thumbnail'),
    section: get(data, 'response.content.sectionId'),
    publicationDate: dayjs(
      get(data, 'response.content.webPublicationDate'),
    ).format('ddd D MMM YYYY hh.mm BST'),
    headline: get(data, 'response.content.fields.headline'),
    body: sanitizeContent(get(data, 'response.content.fields.body', '')),
  }
}

const sanitizeContent = (html) => {
  return sanitizeHtml(html, {
    allowedTags: [
      'img',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'p',
      'a',
      'ul',
      'ol',
      'nl',
      'li',
      'b',
      'i',
      'strong',
      'figure',
      'figcaption',
      'em',
      'strike',
      'abbr',
      'code',
      'hr',
      'br',
      'div',
      'time',
      'table',
      'thead',
      'caption',
      'tbody',
      'tr',
      'th',
      'td',
      'pre',
      'iframe',
    ],
    allowedIframeDomains: [
      'youtube.com',
      'youtube-nocookie.com',
      'dailymotion.com',
    ],
    allowedAttributes: {
      iframe: ['src'],
      figure: ['class'],
      img: ['src'],
      a: ['href'],
    },
  })
}
