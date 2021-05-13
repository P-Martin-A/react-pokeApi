import React from 'react'

import Header from '../layouts/Header'
import PokemonDetails from '../components/PokemonDetails'

const Pokemon = (props) => (
  <React.Fragment>
    <Header 
      propsRouterHeader={props}
    />
    <PokemonDetails 
      propsRouterPokemonDetails={props}
    />
  </React.Fragment>
)

export default Pokemon