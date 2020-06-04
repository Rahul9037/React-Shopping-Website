import {SET_CURRENT_USER,GOOGLE_SIGNIN_START,EMAIL_SIGNIN_START,
    SIGNIN_FAILED ,SIGNIN_SUCCESS,
    CHECK_USER_SESSION,
    SIGNOUT_START,SIGNOUT_SUCCESS,SIGNOUT_FAILED,
    SIGNUP_START,SIGNUP_SUCCESS,SIGNUP_FAILED } from '../../types/types'

export const setCurrentUser = user => ({
    type : SET_CURRENT_USER,
    data : user
})

export const googleSigninStart = () => ({
    type : GOOGLE_SIGNIN_START
})

export const emailSigninStart = (emailAndPassword) => ({
    type : EMAIL_SIGNIN_START,
    data : emailAndPassword
})

export const signinSuccess = user => ({
    type : SIGNIN_SUCCESS,
    data : user
})

export const signinFailed = errorMessage => ({
    type : SIGNIN_FAILED,
    data : errorMessage
})

export const checkUserSession = () => ({
    type : CHECK_USER_SESSION
})

export const signOutStart = () => ({
 type : SIGNOUT_START
})

export const signOutSuccess = () => ({
type : SIGNOUT_SUCCESS
})

export const signOutFailed = errorMessage => ({
    type :SIGNOUT_FAILED,
    data : errorMessage
})


export const signUpStart = (signUpDetails) => ({
    type : SIGNUP_START,
    data : signUpDetails
})

export const signUpSuccess = ({user , additionalData}) => ({
    type: SIGNUP_SUCCESS,
    data : {user , additionalData}
})

export const signUpFailed = errorMessage => ({
    type : SIGNUP_FAILED,
    data : errorMessage
})

