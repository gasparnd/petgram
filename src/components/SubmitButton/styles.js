import styled from 'styled-components'

export const Button = styled.button`
  background-color: #5749f1;
  color: #fff;
  padding: .5rem;
  border: 1px solid #5749f1;
  border-radius: 3px;
  margin-top: 5px;
  display: block;
  &[disabled] {
    opacity: .3;
  }
`