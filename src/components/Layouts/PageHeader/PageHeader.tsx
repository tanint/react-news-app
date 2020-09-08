import React, { ReactElement } from 'react'
import { useTheme } from 'emotion-theming'

interface PageHeaderProps {
  title: string
  renderBookmark?: () => ReactElement
  renderSorting?: () => ReactElement
}

function PageHeader(props: PageHeaderProps) {
  const { title, renderBookmark, renderSorting } = props
  const { media } = useTheme()

  return (
    <div
      css={{
        padding: 'var(--space10) 0 var(--space8)',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',

        [media.sm]: {
          flexDirection: 'row',
        },
      }}
    >
      <h1
        css={{
          fontFamily: 'Georgia,serif',
          fontSize: '42px',
          textTransform: 'capitalize',
          fontWeight: 700,
          marginBottom: 'var(--space4)',

          [media.sm]: {
            marginBottom: 0,
          },
        }}
      >
        {title}
      </h1>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',

          [media.xs]: {
            alignItems: 'center',
            flexDirection: 'row',
          },
        }}
      >
        {renderBookmark && (
          <div
            css={{
              marginRight: 'var(--space6)',
              marginBottom: 'var(--space6)',

              [media.xs]: {
                marginBottom: 0,
              },
            }}
          >
            {renderBookmark()}
          </div>
        )}
        <div css={{ minWidth: '250px' }}>
          {renderSorting && renderSorting()}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
