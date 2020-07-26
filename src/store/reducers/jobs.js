import { SET_JOBRES, INIT_NEW_SEARCH } from "../actions/types"

const initialState = {

}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case SET_JOBRES:
            return {
                newSearchLoading: false,
                filtered: payload,
            }
        case INIT_NEW_SEARCH:
            return {
                filtered: [],
                newSearchLoading: true
            }
        default:
            return state;
    }

}
