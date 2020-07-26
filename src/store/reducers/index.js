import { combineReducers } from 'redux'
import jobs from './jobs'
import query from './query'


const rootReducer = combineReducers({
    jobs,
    query

})

export default rootReducer
