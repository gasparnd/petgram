import React, { useState, useEffect } from 'react'

import { Category } from '../Category'

import { List, Item } from './styles'


const useCategoriesData = props => {
  const [ categories, setCategories ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    const API_URL = 'https://petgram-server-gasparnd.vercel.app'
    setLoading(true)
    fetch(`${API_URL}/categories`)
      .then( res => res.json())
      .then( data => {
        setCategories(data)
        setLoading(false)
      })
      .catch( err => {
        console.log(`Fetch error: ${err}`)
        setError(err)
      })
  },[])

  return { categories, loading, error }  
}

export const ListOfCategories = () => {
  const { categories, loading, error } = useCategoriesData()
  const [ showFixed, setShowFixed ] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
  	<List fixed={fixed}>
  	  {
        loading
        ? <Item key='loading'>
            <Category loading={loading} />
          </Item>
  	  	: categories.map( category => (
  	  	  <Item key={category.id}>
  	  	    <Category {...category}/>
  	  	  </Item>
  	  	))
  	  }
  	</List>
  )

  return(
    <>
      {renderList()}
      { showFixed && renderList(true)}
    </>
  )
}
