export function selectAllPokemon(state) {
  return Object.values(state.entities.pokemon)
}