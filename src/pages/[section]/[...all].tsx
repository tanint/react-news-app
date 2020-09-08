import React from 'react'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'
import { useQuery } from 'react-query'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

import { SeoTags } from '@/lib/Seo'
import { Loading } from '@/components/Loading'

import { getSingleContent } from '@/features/singleContent'
import { BookmarkButton } from '@/features/bookmarks'

function Content() {
  const { asPath, query } = useRouter()
  const { data, status } = useQuery({
    queryKey: [asPath],
    queryFn: getSingleContent,
    config: {
      enabled: !isEmpty(query),
    },
  })
  const { media } = useTheme()

  const isLoading = status !== 'success'

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div css={{ position: 'relative', marginBottom: 'var(--space10)' }}>
          <SeoTags title={data.title} />
          <div
            css={{
              borderBottom: '1px solid #EAEAEA',
              padding: 'var(--space4) 0',
              display: 'grid',
              gap: 'var(--space4)',
              margin: 'var(--space10) 0 var(--space4)',
              maxWidth: '100%',

              [media.md]: {
                maxWidth: '60%',
              },
            }}
          >
            <div>
              <BookmarkButton article={data} />
            </div>
            <div
              css={{
                textTransform: 'uppercase',
                fontSize: '14px',
                letterSpacing: '0.5px',
              }}
            >
              {data.publicationDate}
            </div>
            <h1
              css={{
                fontFamily: 'Georgia,serif',
                textTransform: 'capitalize',
                fontWeight: 700,
                fontSize: '28px',

                [media.sm]: {
                  fontSize: '34px',
                },

                [media.md]: {
                  fontSize: '42px',
                },
              }}
            >
              {data.title}
            </h1>
            {data.headline !== data.title && (
              <div
                css={{
                  margin: '20px 0',
                  fontWeight: 700,
                  fontFamily: 'Georgia,serif',
                  fontSize: '18px',

                  [media.md]: {
                    fontSize: '22px',
                  },
                }}
              >
                {data.headline}
              </div>
            )}
          </div>
          <ContentBox dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      )}
    </div>
  )
}

const ContentBox = styled.div(({ theme }) => {
  const { media } = theme

  return {
    '& > *': {
      maxWidth: '100%',

      [media.md]: {
        maxWidth: '60%',
      },
    },

    p: {
      marginBottom: 'var(--space6)',
      lineHeight: '1.4',
    },

    'figure.element': {
      marginBottom: 'var(--space4)',
    },

    figcaption: {
      color: '#909090',
      fontSize: '14px',
      lineHeight: '1.4',
    },
  }
})

export default Content
