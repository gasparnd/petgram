import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'

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
  	    <ListOfPhotoCards categoryId={1} />
  	  </GlobalWrapper>
  	</>
  )
}