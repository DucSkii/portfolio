import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import drawer from './ducks/drawer'

const reducers = combineReducers({
  drawer: drawer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store