import React from 'react'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'
import { useQuery } from 'react-query'

import { PageWrapper } from '@/lib/page'
import { getSingleContent } from '@/features/singleContent'
import { SeoTags } from '@/lib/Seo'

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
    <PageWrapper>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <SeoTags title={data.title as string} />
          <div>{data.publicationDate}</div>
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
            <div css={{ margin: '20px 0' }}>{data.headline}</div>
          )}
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      )}
    </PageWrapper>
  )
}

export default Content
