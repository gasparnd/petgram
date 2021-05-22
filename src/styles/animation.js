import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

const loaderKeyFrame = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 0px;
  }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) => (
  css`animation: ${time} ${bounceDownKeyFrames} ${type};`
)

export const fadeIn = ({ time = '1s', type = 'ease'} = {}) => (
  css`animation: ${time} ${fadeInKeyFrames} ${type};`
)

export const loader = ({ time = '100000s', type = 'ease'} = {}) => {
  css`animation: ${loaderKeyFrame}`
}