import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import imageReducer from './reducers/imageReducer'

const rootReducer = combineReducers({
	imageReducer,
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore
