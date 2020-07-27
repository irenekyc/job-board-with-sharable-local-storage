import { OPEN_USER_AREA, CLOSE_USER_AREA } from './types';

export const open_user_area = () => {
    console.log("open")
    return {
        type: OPEN_USER_AREA
    }
}

export const close_user_area = () => {
    return {
        type: CLOSE_USER_AREA
    }
}