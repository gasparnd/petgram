import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ onClick, children, disabled }) => (
  <Button onClick={onClick} disabled={disabled} >{children}</Button>
)