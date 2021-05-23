import React from 'react'

import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md"
import { Nav, Link } from './styles'

export const NavBar = () => {
  return(
  	<Nav>
  	  <Link to='/'>
  	  	<MdHome />
  	  </Link>
  	  <Link to='/favs'>
  	  	<MdFavoriteBorder />
  	  </Link>
  	  <Link to='/user'>
  	  	<MdPersonOutline />
  	  </Link>
  	</Nav>
  )
}