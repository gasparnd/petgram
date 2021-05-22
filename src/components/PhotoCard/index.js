import React, { useEffect, useRef, useState } from 'react'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Article, ImgWrapper, Img, Button } from './styles'

const DEFAULT_PHOTO = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_PHOTO}) => {
  const key = `like-${id}`
  const [ show, ref ] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  const LikedIcon = liked ? MdFavorite : MdFavoriteBorder

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
          <Button type="button" onClick={ () => setLiked(!liked)}>
            <LikedIcon size='32px' />
            { likes } likes!
          </Button>
        </>
      }
    </Article>
  )
} 