import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import pageTransition from './ducks/pageTransition'

const reducers = combineReducers({
  pageTransition: pageTransition,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store