import {SET_CURRENT_USER} from '../../types/types'

export const setCurrentUser = user => ({
    type : SET_CURRENT_USER,
    data : user
})