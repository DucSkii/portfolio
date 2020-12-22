import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import pageTransition from './ducks/pageTransition'
import drawer from './ducks/drawer'

const reducers = combineReducers({
  pageTransition: pageTransition,
  drawer: drawer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store