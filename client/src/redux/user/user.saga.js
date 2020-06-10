import { takeLatest, all, call, put } from 'redux-saga/effects';

import { signinSuccess, signinFailed , signOutSuccess ,signOutFailed , signUpSuccess,signUpFailed } from './user.action';

import { GOOGLE_SIGNIN_START, EMAIL_SIGNIN_START, CHECK_USER_SESSION, SIGNOUT_START , SIGNUP_START, SIGNUP_SUCCESS } from '../../types/types';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';


export function* getSnapshotFromUserAuth(userAuth , additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth , additionalData)
        const userSnapShot = yield userRef.get()
        yield put(signinSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
    }
    catch (error) {
        yield put(signinFailed(error))
    }
}

export function* signInWithGoogle() {
    try {
        console.log("fired");
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    }
    catch (error) {
        yield put(signinFailed(error))
    }
}

export function* signInWithEmail({ data: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    }
    catch (error) {
        yield put(signinFailed(error))
    }

}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) { return; }
        yield getSnapshotFromUserAuth(userAuth)
    }
    catch (error) {
        yield put(signinFailed(error))
    }
}

export function* signOut() {

    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    }
    catch(error)
    {
        yield put(signOutFailed(error))
    }
    
}

export function* signUp( { data : { email , password , displayName}}){
   
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess( { user , additionalData : { displayName}}))
    }
    catch(error)
    {
        yield put(signUpFailed(error))
    }
}

export function* signInOnSignUp( { data : { user , additionalData}}){
    try{
        yield getSnapshotFromUserAuth( user , additionalData)
    }
    catch(error)
    { 
        yield put(signUpFailed(error))

    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGNIN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(SIGNOUT_START, signOut)
}

export function* onSignUp(){
    yield takeLatest(SIGNUP_START , signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(SIGNUP_SUCCESS , signInOnSignUp)
}


export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUp),
        call(onSignUpSuccess)
    ])
}