import {  FETCH_COLLECTIONS_FAILED, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } from '../../types/types';
import { firestore, ConvertCollectionsToMap } from '../../firebase/firebase.utils';


export const FetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
})

export const FetchCollectionsSuccess = collectionMap => ({
    type : FETCH_COLLECTIONS_SUCCESS,
    data : collectionMap
})

export const FetchCollectionsFailed = errorMessage => ({
    type : FETCH_COLLECTIONS_FAILED,
    data : errorMessage
})

export const FetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(FetchCollectionsStart())
        collectionRef
        .get()
        .then(snapShot => {
            const collectionMap = ConvertCollectionsToMap(snapShot)
            dispatch(FetchCollectionsSuccess(collectionMap))
        })
        .catch(error => dispatch(FetchCollectionsFailed(error.message)))
    }
}