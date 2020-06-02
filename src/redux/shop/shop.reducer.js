
import { FETCH_COLLECTIONS_FAILED,FETCH_COLLECTIONS_START,FETCH_COLLECTIONS_SUCCESS } from '../../types/types';

const INITIAL_STATE = { 
    collections : null,
    isFetching : false,
    errorMessage : undefined
}

const shopReducer = ( state = INITIAL_STATE , action) => {
    switch(action.type)
    {
        case FETCH_COLLECTIONS_START : 
        return{
            ...state,
            isFetching : true
        }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching : false,
                collections : action.data
            }
        case FETCH_COLLECTIONS_FAILED :
            return{
                ...state,
                isFetching : false,
                errorMessage : action.data
            }
        default :
        return state
    }
}

export default shopReducer;