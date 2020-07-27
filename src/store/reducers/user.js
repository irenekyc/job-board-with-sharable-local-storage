import { OPEN_USER_AREA, CLOSE_USER_AREA } from "../actions/types"

const initialState = {
    userAreaOpen: false
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case OPEN_USER_AREA:
            return {
                userAreaOpen: true
            }
        case CLOSE_USER_AREA:
            return {
                userAreaOpen: false
            }
        default:
            return state;
    }

}
