import React from 'react'

import { Grid, Link, Image } from './styles'

export const ListOfFavs = ({ favs = [] }) => (
  <Grid>
    {
      favs.map(fav => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
      	  <Image src={fav.src} />
      	</Link>
      ))
    }
  </Grid>
)
