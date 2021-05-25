import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Link, Image } from './styles'

export const ListOfFavs = ({ favs }) => (
  <Grid>
    {
      favs.length === 0 
        ? <p>Todavía no les has dado like a ninguna fotografía</p>
        : favs.map(fav => (
            <Link key={fav.id} to={`/detail/${fav.id}`}>
      	      <Image src={fav.src} />
      	    </Link>
          ))
    }
  </Grid>
)

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
