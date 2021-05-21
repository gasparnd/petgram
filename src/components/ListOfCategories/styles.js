import styled, { css } from 'styled-components'

import { bounceDown } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 1rem 0;
  
  ${props => props.fixed && css`
    ${bounceDown({ time: '1s'})}
  	background: #fff;
  	border-radius: 60px;
  	box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  	left: 0;
  	margin: 0 auto;
  	max-width: 500px;
  	padding: 5px;
  	position: fixed;
  	right: 0;
  	top: -15px;
  	transform: scale(.6);
  	z-index: 1;
  `}
`

export const Item = styled.li`
  margin: 0;
  padding: 0 8px;

`