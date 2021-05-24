import React, { useContext } from 'react'
import { Layout } from '../components/Layout'
import { Context } from '../Context'

import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return(
  	<Layout title='Usuario'>
      <h1>User</h1>
      <SubmitButton onClick={ removeAuth } type='button'>
        Cerrar Sesión
      </SubmitButton>
  	</Layout>
  )
}