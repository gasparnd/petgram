import React, { useEffect, useRef, useState } from 'react'

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Article, ImgWrapper, Img, Button } from './styles'

const DEFAULT_PHOTO = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_PHOTO}) => {
  const key = `like-${id}`

  const ref = useRef(null)
  const [ show, setShow ] = useState(false)
  const [ liked, setLiked ] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch(err) {
      return false
    }
  })

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

  const LikedIcon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch(err) {
      console.log(`Faild save data on local storage: ${err}`)
    }
  }

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
          <Button type="button" onClick={ () => setLocalStorage(!liked)}>
            <LikedIcon size='32px' />
            { likes } likes!
          </Button>
        </>
      }
    </Article>
  )
} 