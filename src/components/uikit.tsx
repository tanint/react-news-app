import React from 'react'
import styled from '@emotion/styled'

interface IconProps {
  name: string
  iconPath: string
  className?: string
  iconFill?: string
  iconSize?: number
}

export const Text = styled(({ as: Tag = 'p', ...props }) => {
  return <Tag {...props} />
})

export const Container = styled.div`
  max-width: var(--width-container);
  margin: 0 auto;
  padding: 0 var(--space5);
`

export const Icon = (props: IconProps) => {
  const {
    name,
    className,
    iconPath,
    iconFill = 'currentcolor',
    iconSize = 24,
  } = props

  return (
    <svg
      className={className}
      width={iconSize}
      height={iconSize}
      viewBox={`0 0 24 24`}
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      id={name}
    >
      <path d={iconPath} fill={iconFill} />
    </svg>
  )
}

export default Icon
