import React from 'react'

import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [], loading }} = {}) => {
  if(loading) {
    return [1, 2, 3, 4].map((item) => <PhotoCard key={item} loading={loading} />)
  }
  return(
    <ul>
      {
      	photos.map(photo => (
      	  <li key={photo.id}>
      	  	<PhotoCard {...photo} />
      	  </li>
      	))
      }
    </ul>
  )
}
