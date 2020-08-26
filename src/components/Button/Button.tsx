import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>
}
