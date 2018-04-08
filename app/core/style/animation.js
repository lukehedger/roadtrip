import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const slideLeft = keyframes`
  from {
    transform: translate(140px, 10px);
  }
  to {
    transform: translate(120px, 0px);
  }
`

export const slideRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(8%);
  }
`
