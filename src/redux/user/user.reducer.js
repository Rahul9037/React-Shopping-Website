import { SIGNIN_SUCCESS, SIGNIN_FAILED, SIGNOUT_SUCCESS, SIGNOUT_FAILED,SIGNUP_FAILED } from "../../types/types";

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.data,
                errorMessage: null
            }

        case SIGNIN_FAILED:
        case SIGNOUT_FAILED:
        case SIGNUP_FAILED:
            return {
                ...state,
                errorMessage: action.data
            }

        case SIGNOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                errorMessage: null
            }
            
        default:
            return state
    }
}

export default userReducer;