import { combineEpics } from 'redux-observable';
import authEpic from './authEpic'

const rootEpic = combineEpics(
    authEpic.signup,
    authEpic.logout,
    authEpic.confirmationCode,
    authEpic.signIn,
    authEpic.isLoggedIn,
    authEpic.forgotPassword,
    authEpic.confirmNewPassword,
    authEpic.resendCode,
)

export default rootEpic;