import React from 'react'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'
import { useQuery } from 'react-query'
import styled from '@emotion/styled'

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
              maxWidth: '60%',
              margin: 'var(--space10) 0 var(--space4)',
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
                fontSize: '42px',
                textTransform: 'capitalize',
                fontWeight: 700,
              }}
            >
              {data.title}
            </h1>
            {data.headline !== data.title && (
              <div
                css={{
                  margin: '20px 0',
                  fontSize: '22px',
                  fontWeight: 700,
                  fontFamily: 'Georgia,serif',
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

const ContentBox = styled.div`
  & > * {
    max-width: 60%;
  }

  p {
    margin-bottom: var(--space6);
    line-height: 1.4;
  }

  figure.element {
    margin-bottom: var(--space4);
  }

  figcaption {
    color: #909090;
    font-size: 14px;
    line-height: 1.4;
  }
`

export default Content
