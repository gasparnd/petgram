import React, { useEffect, useRef, useState } from 'react'
import { Link } from '@reach/router'

import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

import { Article, ImgWrapper, Img, Loader } from './styles'

const DEFAULT_PHOTO = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_PHOTO, loading = false}) => {
  const [ show, ref ] = useNearScreen()

  const handleFavClick = () => setLiked(!liked)
  
  if(loading) {
    return <Loader ref={ref} />
  }

  return(
    <Article ref={ref}>
      {
        show &&
        <>
          <Link to={`/detail/${id}`}>
       		  <ImgWrapper>
       		    <Img src={src} />
       		  </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: {
                    input: { id }
                  } })
                }
                return(
                  <FavButton 
                    liked={liked} 
                    likes={likes} 
                    onClick={handleFavClick} 
                  />
                )
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
} 