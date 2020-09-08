import React, { ReactNode } from 'react'

import { MainLayout } from '@/components/Layouts'

interface PageWrapperProps {
  children: ReactNode
}

function PageWrapper(props: PageWrapperProps) {
  return <MainLayout>{props.children}</MainLayout>
}

export default PageWrapper
