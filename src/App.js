import React from 'react'

import { Category } from './components/Category'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { GlobalWrapper } from './components/GlobalWrapper'

export const App = () => {
  return(
  	<>
  	  <GlobalWrapper>
  	    <GlobalStyles />
  	    <Logo />
  	    <ListOfCategories />
  	    <ListOfPhotoCards />
  	  </GlobalWrapper>
  	</>
  )
}