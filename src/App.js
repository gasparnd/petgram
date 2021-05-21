import React from 'react'

import { Category } from './components/Category'
import { ListOfCategories } from './components/ListOfCategories'

import { GlobalStyles } from './GlobalStyles'

export const App = () => {
  return(
  	<>
  	  <GlobalStyles />
  	  <ListOfCategories />
  	</>
  )
}