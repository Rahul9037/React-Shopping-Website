import { takeEvery , put , call ,all} from 'redux-saga/effects';

import { SIGNOUT_SUCCESS } from '../../types/types';

import { clearCart } from './cart.action';

export function* clearCartonSignOut(){
    yield put(clearCart())
}

export function* onClearCart(){
    yield takeEvery(SIGNOUT_SUCCESS , clearCartonSignOut)
}

export function* cartSaga(){
    yield all([
        call(onClearCart)
    ])
}