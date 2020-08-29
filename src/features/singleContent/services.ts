import { get } from 'lodash'
import sanitizeHtml from 'sanitize-html'
import { fetchAPI } from '@/lib/api'

type OptionsType = {
  contentId: string
}

export const getSingleContent = async (_, apiOptions: OptionsType) => {
  const { data } = await fetchAPI({
    path: `/${apiOptions.contentId}`,
    params: {
      'show-fields': 'body,headline',
      shouldHideAdverts: 'true',
    },
  })

  return {
    title: get(data, 'response.content.webTitle'),
    publicationDate: get(data, 'response.content.webPublicationDate'),
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
    },
  })
}
