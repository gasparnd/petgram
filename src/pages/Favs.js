import React from 'react'
import { Layout } from '../components/Layout'

import { FavsWithQuery } from '../containers/GetFavorites'

export const Favs = () => {
  return(
  	<Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>	
      <h1>Favorites</h1>
      <FavsWithQuery />
  	</Layout> 
  )
}