import React from 'react'
import { Router } from '@reach/router'

import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'

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
            : <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
              </Router>
        }
  	  </GlobalWrapper>
  	</>
  )
}