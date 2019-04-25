import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/root_reducer'
import logger from 'redux-logger'
import { pokeThunk } from '../middleware/thunk'

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(pokeThunk, logger)
  );
}

export default configureStore