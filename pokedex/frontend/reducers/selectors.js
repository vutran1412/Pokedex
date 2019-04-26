export function selectAllPokemon(state) {
  return Object.values(state.entities.pokemon)
}

export function selectOnePokemon(state, pokemonId) {
  // debugger
  return Object.values(state.entities.pokemon[pokemonId])
}

export function selectPokemonItem(state, itemId) {
  return Object.values(state.entities.items[itemId])
}