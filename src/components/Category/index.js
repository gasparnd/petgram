import React from 'react'

import { Image, Anchor, Loader } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'


export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '💫', loading = false }) => {
	if(loading) {
		return <Loader />
	}
	
	return(
    <Anchor href={path}>
  	  <Image src={cover} />
  	  { emoji }
    </Anchor>
	)
}