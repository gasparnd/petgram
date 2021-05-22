import React from 'react'

import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const FavButton = ({ liked, likes, onClick }) => {

  return(
    <Button type="button" onClick={ onClick }>
      {
      	liked 
      	  ? <MdFavorite size='32px' color='#f05454' /> 
      	  : <MdFavoriteBorder size='32px' color='#222831' />
      }
      
      { likes } likes
    </Button>
  )
}
