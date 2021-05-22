import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { GlobalWrapper } from './components/GlobalWrapper'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('details')
  return(
  	<>
  	  <GlobalWrapper>
  	    <GlobalStyles />
  	    <Logo />
        {
          detailId  
            ? <PhotoCardWithQuery id={detailId} />
            : <>
                <ListOfCategories />
                <ListOfPhotoCards />
              </>
        }
  	  </GlobalWrapper>
  	</>
  )
}