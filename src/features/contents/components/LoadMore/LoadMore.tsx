import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

type LoadmoreProps = {
  isLoading: boolean
  onClick: () => void
}

function LoadMore(props: LoadmoreProps & { children: ReactNode }) {
  const { isLoading, onClick } = props

  const handleClick = () => {
    if (!isLoading) {
      onClick()
    }
  }

  return (
    <ButtonStyled isLoading={isLoading} onClick={handleClick}>
      {props.children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.div(({ isLoading }: LoadmoreProps) => ({
  border: 'none',
  color: '#fff',
  borderRadius: '50px',
  padding: 'var(--space4) 40px',
  outline: 'none',
  minWidth: '180px',
  textAlign: 'center',

  ...(!isLoading && {
    backgroundColor: 'var(--color-primary)',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'var(--color-primary-light)',
    },
  }),

  ...(isLoading && {
    backgroundColor: '#6d8ab6',
    cursor: 'not-allowed',
  }),
}))

export default LoadMore
