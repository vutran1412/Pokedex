import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions'


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      let newState = Object.assign({}, action.pokemon, state)
      return newState
    case RECEIVE_ONE_POKEMON:
      let nextState = Object.assign({}, state, {[action.pokemon.pokemon.id]: action.pokemon.pokemon})
      return nextState
    default:
      return state;
  }
}

export default pokemonReducer