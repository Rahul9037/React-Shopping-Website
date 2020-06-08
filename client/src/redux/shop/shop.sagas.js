import { takeEvery, call, put, all } from 'redux-saga/effects';

import { FETCH_COLLECTIONS_START } from '../../types/types';

import { firestore, ConvertCollectionsToMap } from '../../firebase/firebase.utils';

import { FetchCollectionsSuccess, FetchCollectionsFailed } from '../shop/shop.action';

export function* FetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapShot = yield collectionRef.get()
        const collectionMap = yield call(ConvertCollectionsToMap, snapShot)
        yield put(FetchCollectionsSuccess(collectionMap))
    }
    catch (error) {
        yield put(FetchCollectionsFailed(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        FETCH_COLLECTIONS_START,
        FetchCollectionsAsync
    )
}

export function* shopSaga(){
    yield all([
        call(fetchCollectionsStart)
    ])
}