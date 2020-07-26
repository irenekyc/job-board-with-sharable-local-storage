import { createStore, applyMiddleware } from 'redux'
import {
    composeWithDevTools
} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {
    // initialJobs: [],
    // jobsRes: [],
    // filter: {
    //     searchQuery: "",
    //     locationQuery: ""
    // }
}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
