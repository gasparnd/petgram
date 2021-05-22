import styled from 'styled-components'

import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 100px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2); 
  object-fit: cover;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`
export const Loader = styled.div`
  background: #dddddd;
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 100%;
  height: 200px;
`
