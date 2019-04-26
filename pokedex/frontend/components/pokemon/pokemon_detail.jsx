import React from 'react';
import { Link } from 'react-router-dom'
import ItemDetailContainer from '../item/item_detail_container'

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.requestOnePokemon(this.props.match.params.pokemonId)
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.pokemonId === this.props.match.params.pokemonId){
      return null
    } else {
      this.props.requestOnePokemon(this.props.match.params.pokemonId)

    }
  }

  render() {
    if(this.props.pokemon === undefined || this.props.pokemon.attack === undefined) {
      return <h1>Loading...</h1>
    }
    const mon = this.props.pokemon
    debugger
    return (
      <div className="poke-details">
        <img src={mon.image_url}/>
        <h2>{mon.name}</h2>
        <ul>
          <li>Type: {mon.poke_type}</li>
          <li>Attack: {mon.attack}</li>
          <li>Defense: {mon.defense}</li>
          <li>Moves: {mon.moves.join(', ')}</li>
        </ul>
        <div>
          {mon.item_ids.map(item_id=>{
            return <Link to={'/pokemon/' + this.props.match.pokemonId + '/item/' + item_id}>
              <p>Item {item_id}</p>
            </Link>
          })}
        </div>
      </div>
    )
  }
}

export default PokemonDetail