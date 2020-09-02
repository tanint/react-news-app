import React, { ReactElement } from 'react'

interface PageHeaderProps {
  title: string
  renderBookmark?: () => ReactElement
  renderSorting?: () => ReactElement
}

function PageHeader(props: PageHeaderProps) {
  const { title, renderBookmark, renderSorting } = props

  return (
    <div
      css={{
        padding: 'var(--space10) 0 var(--space8)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1
        css={{
          fontFamily: 'Georgia,serif',
          fontSize: '42px',
          textTransform: 'capitalize',
          fontWeight: 700,
        }}
      >
        {title}
      </h1>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        {renderBookmark && (
          <div css={{ marginRight: 'var(--space6)' }}>{renderBookmark()}</div>
        )}
        <div css={{ minWidth: '250px' }}>
          {renderSorting && renderSorting()}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
