import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducer'

export default createStore(reducer, applyMiddleware(ReduxThunk))