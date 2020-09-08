import React from 'react'

import { Icon } from '@/components/uikit'

export const BookmarkIcon = () => {
  return (
    <Icon
      iconSize={16}
      name="BookmarkIcon"
      iconPath="M18,1.14H6A2.44,2.44,0,0,0,3.55,3.55V22.86L12,19.24l8.45,3.62V3.55A2.44,2.44,0,0,0,18,1.14Z"
    />
  )
}

export const BookmarkOffIcon = () => {
  return (
    <Icon
      iconSize={16}
      name="BookmarkOffIcon"
      iconPath="M18,1.14H6A2.42,2.42,0,0,0,3.54,3.55V22.86L12,19.24l8.44,3.62V3.55A2.42,2.42,0,0,0,18,1.14Zm0,18.1-6-2.63L6,19.24V4.76A1.22,1.22,0,0,1,7.16,3.55h9.65A1.21,1.21,0,0,1,18,4.76Z"
    />
  )
}
