import React from 'react'

interface ConfigBuildTagType {
  title: string
}

const buildTags = (config: ConfigBuildTagType) => {
  const tagsToRender = []

  if (config.title) {
    tagsToRender.push(<title key="title">{config.title}</title>)
  }

  return tagsToRender
}

export default buildTags
