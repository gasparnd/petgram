import React, { useState, useEffect } from 'react'

import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    const API_URL = 'https://petgram-server-gasparnd.vercel.app'

    fetch(`${API_URL}/categories`)
      .then( res => res.json())
      .then( data => setCategories(data))
      .catch( err => console.log(`Fetch error: ${err}`))
  },[])
  return(
  	<List>
  	  {
  	  	categories.map( category => (
  	  	  <Item key={category.id}>
  	  	    <Category {...category}/>
  	  	  </Item>
  	  	))
  	  }
  	</List>
  )
}