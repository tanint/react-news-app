import React from 'react'
import Head from 'next/head'

import buildTags from './buildTags'

interface SeoTagsProps {
  title: string
}

function SeoTags(props: SeoTagsProps) {
  const { title } = props

  return <Head>{buildTags({ title })}</Head>
}

export default SeoTags
