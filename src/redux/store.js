import { createStore, applyMiddleware } from 'redux'
import userReducer from './userReducer'
import thunkMiddleware from 'redux-thunk'

const store = createStore(userReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {})
export default store