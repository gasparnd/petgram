import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
import { NotRegisterUser } from './pages/NotRegisterUser'

import { Logo } from './components/Logo'
import { GlobalWrapper } from './components/GlobalWrapper'
import { NavBar } from './components/NavBar'

import { GlobalStyles } from './styles/GlobalStyles'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {
  const { isAuth } = useContext(Context)
  return(
  	<>
  	  <GlobalStyles />
      <GlobalWrapper>
  	    <Logo />
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <NotRegisterUser path='/login' />}
          {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
          {!isAuth && <Redirect noThrow from='/user' to='/login' />}
          {isAuth && <Redirect noThrow from='/login' to='/' />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>
        <NavBar />
      </GlobalWrapper>
  	</>
  )
}