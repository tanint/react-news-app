import React, { Fragment, ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
}

function PageWrapper(props: PageWrapperProps) {
  return <Fragment>{props.children}</Fragment>
}

export default PageWrapper
