import { useState } from 'react'

export const useInputValue = initialState => {
  const [value, setValue] = useState(initialState)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}