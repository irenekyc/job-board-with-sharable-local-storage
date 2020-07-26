import { SET_FILTER_OPTIONS, CLEAR_FILTER, SET_JOBRES, FETCHERROR, SET_PAGE } from './types'

export const set_filter = (search, location) => {
    return {
        type: SET_FILTER_OPTIONS,
        payload: {
            search,
            location,
        }
    }
}

export const set_page = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
}

export const clear_filter = () => {
    return {
        type: CLEAR_FILTER
    }
}
