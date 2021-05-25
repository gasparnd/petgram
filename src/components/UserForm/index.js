import React from 'react'

import { SubmitButton } from '../SubmitButton' 

import { useInputValue } from '../../hooks/useInputValue'
import { Container, Wrapper, Title, Form, Input, Toggle, Link, Error } from './styles'

export const UserForm = ({ title, onSubmit, disabled, error, isLogin}) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = ev => {
  	ev.preventDefault()
  	onSubmit({ 
  	  email: email.value, 
  	  password: password.value 
  	})
  }
  return(
  	<Container>
  	  <Wrapper>
  	   	<Title>{title}</Title>
        <Form disabled={disabled} onSubmit={handleSubmit}>
          <Input 
            type='email' 
            placeholder='Email'
            onChange={ email.onChange } 
          	disabled={disabled}
            {...email}
          />
          <Input 
            type='password' 
            placeholder='Contraseña'
            onChange={ password.onChange } 
            disabled={disabled}
            {...password}
          />
          <SubmitButton disabled={disabled}>{title}</SubmitButton>
        </Form>
        {
  	      error 
  	        && <Error>{error}</Error>
  	    }
      </Wrapper>
    </Container>
  )
}
