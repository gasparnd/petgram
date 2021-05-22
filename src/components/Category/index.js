import React from 'react'

import { Image, Link, Loader } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'


export const Category = ({ cover = DEFAULT_IMAGE, route, emoji = '💫', loading = false }) => {
	if(loading) {
		return <Loader />
	}

	return(
      <Link to={route}>
  	    <Image src={cover} />
  	    { emoji }
      </Link>
	)
}