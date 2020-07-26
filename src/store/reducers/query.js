import { SET_FILTER_OPTIONS, CLEAR_FILTER, SET_PAGE } from '../actions/types'

const initialState = {
    search: null,
    location: null,
    page: 1,
    filteredSearch: false
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case SET_FILTER_OPTIONS:
            return {
                ...state,
                search: payload.search,
                location: payload.location,
                filteredSearch: true
            }
        case SET_PAGE:
            return {
                ...state,
                page: payload
            }
        case CLEAR_FILTER:
            return {
                ...state,
                search: null,
                location: null,
                filteredSearch: false
            }
        default:
            return state;
    }

}