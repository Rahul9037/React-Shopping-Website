
import { UPDATE_COLLECTION } from '../../types/types';

const INITIAL_STATE = { 
    collections : ''
}

const shopReducer = ( state = INITIAL_STATE , action) => {
    switch(action.type)
    {
        case UPDATE_COLLECTION:
            return {
                ...state,
                collections : action.data
            }
        default :
        return state
    }
}

export default shopReducer;