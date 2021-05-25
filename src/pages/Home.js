import React from 'react'
import { Layout } from '../components/Layout'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

const HomePage = ( { id } ) => {
  return(
  	<Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de anímales domésticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})