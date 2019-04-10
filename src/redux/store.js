import {
	applyMiddleware,
	combineReducers,
	createStore
} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//Link reducers of all modules here.
import { register_reducer } from './redux_insurance'


let reducers=combineReducers({
  register_reducer
})

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
