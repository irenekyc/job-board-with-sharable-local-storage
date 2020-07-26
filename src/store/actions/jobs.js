import axios from 'axios'
import { SET_JOBRES, FETCHERROR, INIT_NEW_SEARCH, SET_PAGE } from './types'

export const newSearch = () => async dispatch => {
    dispatch({
        type: INIT_NEW_SEARCH,
    })
    dispatch({
        type: SET_PAGE,
        payload: 1,
    })

}
export const getData = (searchQuery, locationQuery, page = 1) => async dispatch => {
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?title=${searchQuery}&location=${locationQuery}&page=${page}`)

    try {

        dispatch({
            type: SET_JOBRES,
            payload: res.data
        })

    }
    catch (error) {
        dispatch({
            type: FETCHERROR,
            payload: error
        })
    }
}


export const getLatestJob = (page) => async dispatch => {
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`);
    try {
        dispatch({
            type: SET_JOBRES,
            payload: res.data
        })

    }
    catch (error) {
        dispatch({
            type: FETCHERROR,
            payload: error
        })
    }
}