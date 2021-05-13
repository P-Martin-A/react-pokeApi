import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/scss/components/pokemon.scss'

const Pokemon = ({ pokemons }) => (
  <React.Fragment>
    {pokemons.map(({name, url}) => {
      const ID = url.split('/')[6]
      return (
        <article className="pokemon"
          key={ID}
        >
          <Link className="pokemon_card"
            to={`${ID}/pokemon`}
          >
            <figure className="pokemon_card-container">
              <img className="pokemon_card-container-image"
                src={`https://pokeres.bastionbot.org/images/pokemon/${ID}.png`} 
                alt={name} 
                />
              <figcaption className="pokemon_card-container-name">{name}</figcaption>
            </figure>
          </Link>
        </article>
      )
    })}
  </React.Fragment>
) 

export default Pokemon