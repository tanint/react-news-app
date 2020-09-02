import React from 'react'
import styled from '@emotion/styled'

function CircularProgress() {
  return (
    <Svg>
      <circle cx="50" cy="50" r="30" fill="none" strokeWidth="5" />
    </Svg>
  )
}

const Svg = styled.svg`
  animation: rotate 2s linear infinite;
  position: relative;
  height: 100px;
  width: 100px;

  circle {
    stroke-dasharray: 1, 300;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
    stroke: #164ea7;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 300;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 100, 300;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 100, 300;
      stroke-dashoffset: -200;
    }
  }
`

export default CircularProgress
