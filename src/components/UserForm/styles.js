import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const Wrapper = styled.section`
  border-radius: 25px;
  box-shadow: 0 10px 15px #ccc;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h2`
  color: #000;
  font-size: 2rem;
  margin-left: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 120px;
  padding: .5rem 1rem;
  min-width: 300px;
  justify-content: center;
  left: 0;
  rigt: 0;
  margin: 0 auto;
`

export const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #6c31d0;
  outline: none;
  padding: .5rem;
  margin-bottom: 8px ;
  display: block;
  &:focus {
  	background-color: #9566e4;
  }
  &[disabled] {
    opacity: .3;
  }
`
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
export const Toggle = styled.div`
  width: 100%;
  margin-top: 10px;
  text-align: center;
`

export const Link = styled(LinkRouter)`
  color: #5749f1;
`

export const Error = styled.span`
  color: #fff;
  background-color: #f05454; 
  padding: 5px;
  border: 1px solid #f05454;
  border-radius: 3px;
  font-size: 16px;
  width: max-content;
  left: 0;
  rigt: 0;
  margin: 0 auto;
`
