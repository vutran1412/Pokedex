import { Link } from 'react-router-dom'
import React from 'react'

const PokemonIndexItem = (props) => {
  return (
    <li>
      <Link to={"/pokemon/" + props.pokemon.id}>
        {props.pokemon.name} <img src={props.pokemon.image_url} />
      </Link>
    </li>
  )
}
export default PokemonIndexItem