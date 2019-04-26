import React from 'react'
import { Provider } from 'react-redux'
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import PokemonDetailcontainer from './pokemon/pokemon_detail_container'
import { HashRouter, Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './item/item_detail_container'

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path='/' component={PokemonIndexContainer} />
      <Route path='/pokemon/:pokemonId' component={PokemonDetailcontainer} />
      <Route path='/pokemon/:pokemonId/item/:itemId' component={ItemDetailContainer}/>
    </HashRouter>
  </Provider>
)

export default Root;