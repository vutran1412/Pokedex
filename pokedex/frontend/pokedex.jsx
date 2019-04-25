import React from 'react'
import ReactDOM from 'react-dom';
import { requestAllPokemon } from './actions/pokemon_actions'
import * as APIUtil from './util/api_util'
import configureStore from './store/store'
import { selectAllPokemon } from './reducers/selectors'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.selectAllPokemon = selectAllPokemon
  window.requestAllPokemon = requestAllPokemon
  window.fetchAllPokemon = APIUtil.fetchAllPokemon
  ReactDOM.render(<Root store={store} />, root);
})