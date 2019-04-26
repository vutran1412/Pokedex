import { connect } from 'react-redux'
import { requestOnePokemon } from '../../actions/pokemon_actions'
import PokemonDetail from './pokemon_detail'
import { selectOnePokemon } from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
  return {pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]}
}

const mapDispatchToProps = dispatch => {
  return {requestOnePokemon: (poke_id) => dispatch(requestOnePokemon(poke_id))}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail)