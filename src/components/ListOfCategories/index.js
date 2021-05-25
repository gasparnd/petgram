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

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
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
  	  	      <Category route={`/pet/${category.id}`} {...category}/>
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

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
