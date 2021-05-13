import React, { useState, useEffect } from 'react'

import '../assets/scss/components/pokemons.scss'
import Pokemon from './Pokemon'

const Pokemons = () => {
  const pokemonConfig = {
    count: 0,
    next: undefined,
    previous: null,
    results: [],
  }

  const [ pokemons, setState ] = useState(pokemonConfig)

  useEffect(() => {
    const API = 'https://pokeapi.co/api/v2/pokemon/?limit=50'

    async function getData() {
      try {
        const RESPONSE = await fetch(API),
              DATA = await RESPONSE.json(),
              { count, next, previous, results } = DATA

        setState({ 
          count, 
          next,
          previous, 
          results,
        })
      } catch (error) {
        console.error('ERROOOOOR: ', error)  
        setState({ 
        })
      }
    }

    getData()
  }, [])

  const { results } = pokemons

  return (
    <section className="pokemons">
      <Pokemon 
        pokemons={results}
      />
    </section>
  )
}

export default Pokemons