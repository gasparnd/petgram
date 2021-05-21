import React, { useEffect, useRef, useState } from 'react'

import { MdFavoriteBorder } from "react-icons/md";
import { Article, ImgWrapper, Img, Button } from './styles'

const DEFAULT_PHOTO = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_PHOTO}) => {
  const ref = useRef(null)
  const [ show, setShow ] = useState(false)

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

  return(
    <Article ref={ref}>
      {
        show &&
        <>
          <a href={`details/${id}`}>
       		<ImgWrapper>
       		  <Img src={src} />
       		</ImgWrapper>
          </a>
          <Button type="button">
            <MdFavoriteBorder size='32px' /> 
            { likes } likes!
          </Button>
        </>
      }
    </Article>
  )
} 