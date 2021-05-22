import React, { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {

  const [ storeValue, setStoreValue ] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch(err) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoreValue(value)
    } catch(err) {
      console.log(`Faild save data on local storage: ${err}`)
    }
  }
  return [ storeValue, setLocalStorage]
}
