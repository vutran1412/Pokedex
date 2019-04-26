import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions'

const itemsReducer = (state = {}, action) => {
  Object.freeze()
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      let nextState = Object.assign({}, state, action.pokemon.items)
      return nextState
    default:
      return state
  }
}

export default itemsReducer