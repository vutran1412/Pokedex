import React from 'react'

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.requestAllPokemon()
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map( (mon) => {
          return <li>{mon.name} <img src={mon.image_url} /></li>
        })}
      </ul>
    )
  }
}

export default PokemonIndex;