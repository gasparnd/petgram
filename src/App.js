import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { GlobalWrapper } from './components/GlobalWrapper'

export const App = () => {
  return(
  	<>
  	  <GlobalStyles />
  	  <GlobalWrapper>
  	    <Logo />
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
        </Router>
  	  </GlobalWrapper>
  	</>
  )
}