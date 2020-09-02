import React, { useRef, useState } from 'react'
import { find } from 'lodash'
import styled from '@emotion/styled'

import { Icon } from '@/components/uikit'
import { useOnClickOutside } from '@/lib/hooks'

interface SelectInputProps {
  options: {
    value: string
    label: string
  }[]
  onChange: (value: string) => void
  initialValue: string
  isOpen?: boolean
}

function SelectInput(props: SelectInputProps) {
  const { options, initialValue, onChange } = props
  const containerRef = useRef()
  const optionsRef = useRef()

  const [isOpen, setOpen] = useState(props.isOpen || false)
  const [activeOption, setActiveOption] = useState(
    find(options, (o) => o.value === initialValue),
  )

  useOnClickOutside(
    containerRef,
    () => {
      if (isOpen) {
        setOpen(false)
      }
    },
    [optionsRef],
  )

  return (
    <Wrapper ref={containerRef}>
      <Input isOpen={isOpen} onClick={() => setOpen((s) => !s)}>
        <span>{activeOption.label}</span>
        <Icon iconSize={22} name="arrow" iconPath="M7 10l5 5 5-5z" />
      </Input>
      {isOpen && (
        <Options ref={optionsRef}>
          {options.map((option) => (
            <OptionItem
              key={option.value}
              isActive={activeOption.value === option.value}
              onClick={() => {
                setActiveOption(option)
                setOpen(false)
                onChange(option.value)
              }}
            >
              {option.label}
            </OptionItem>
          ))}
        </Options>
      )}
    </Wrapper>
  )
}

type InputProps = {
  isOpen: boolean
}

const Input = styled.div(({ isOpen }: InputProps) => ({
  padding: '8px var(--space3)',
  borderBottom: '1px solid #949494',
  cursor: 'pointer',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  ...(isOpen && {
    backgroundColor: '#f8f8f8',
  }),
}))

const Wrapper = styled.div`
  position: relative;
`

const Options = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 900;
  top: 100%;
  left: 0;
  right: 0;
`

type OptionItem = {
  isActive: boolean
  onClick: () => void
}

const OptionItem = styled.div(({ isActive }: OptionItem) => ({
  padding: '15px var(--space3)',
  borderBottom: '1px solid #eee',
  cursor: 'pointer',
  userSelect: 'none',

  '&:last-child': {
    border: 'none',
  },

  ...(!isActive && {
    '&:hover': {
      backgroundColor: '#ebeff7',
    },
  }),

  ...(isActive && {
    backgroundColor: 'var(--color-primary)',
    color: '#fff',
  }),
}))

export default SelectInput
