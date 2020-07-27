import { combineReducers } from 'redux'
import jobs from './jobs'
import query from './query'
import user from './user'


const rootReducer = combineReducers({
    jobs,
    query,
    user

})

export default rootReducer
