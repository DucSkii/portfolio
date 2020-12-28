import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import drawer from './ducks/drawer'
import emailSent from './ducks/emailSent'

const reducers = combineReducers({
  drawer,
  emailSent,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store