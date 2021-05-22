import React, { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const [ show, setShow ] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer') 

    ).then( () => {

      const observer = new IntersectionObserver( entries => {
        const { isIntersecting } = entries[0]
        if(isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current) 
    })
    
  }, [ref])

  return [ show, ref ]
}