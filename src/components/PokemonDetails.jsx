import React, { useEffect, useState } from 'react'

import '../assets/scss/components/pokemonDetails.scss'

const PokemonDetails = ({propsRouterPokemonDetails}) => {
  const pokemonDetails = {
    img: undefined,              
    name: undefined,              
    type: undefined,
    index: 0,              
    hp: 0,              
    attack: 0,
    defending: 0, 
    special: 0,
  }

  const [ detail, setDetail ] = useState(pokemonDetails)

  const ID = propsRouterPokemonDetails.match.params.id

  useEffect(() => {
    const API = 'https://pokeapi.co/api/v2/pokemon/'

    async function getData(id) {
      try {
        const RESPONSE = await fetch(`${API}${id}`),
              DATA = await RESPONSE.json()

        setDetail({
          img: DATA.sprites.other.dream_world.front_default,              
          name: DATA.name,              
          index: DATA.game_indices[0].game_index,              
          type: DATA.types[0].type.name,
          hp: DATA.stats[0].base_stat,              
          attack: DATA.stats[1].base_stat,
          defending: DATA.stats[2].base_stat, 
          special: DATA.stats[3].base_stat,
        })
      } catch (error) {
        console.error('ERROOOOR: ', error)
      }
    }

    getData(ID)
  }, [ID])

  const { img, name, index, type, hp, attack, defending, special } = detail

  return (
    <React.Fragment>
      <section className="details">
        <div className="details_col">
          <img className="details_col-image"
            src={img} 
            alt={name} 
          />
        </div>
        <div className="details_col">
          <div className="details_col-info">
            <h2 className="details_col-info-name">
              {name}
              <i className="details_col-info-index">#{index}</i>
            </h2>
            <b className="details_col-info-type">{type}</b>
            <ul className="details_col-info-stats">
              <li className="details_col-info-stat">
                Health Power: 
                <span className="details_col-info-stat-text">{hp}</span>
              </li>
              <li className="details_col-info-stat">
                Attack:
                <span className="details_col-info-stat-text">{attack}</span>
              </li>
              <li className="details_col-info-stat">
                Defending:
                <span className="details_col-info-stat-text">{defending}</span>
              </li>
              <li className="details_col-info-stat">
                Special:
                <span className="details_col-info-stat-text">{special}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default PokemonDetails