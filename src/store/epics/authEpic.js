import { Observable } from "rxjs/Rx";
import { authAction } from "../action/index";
import {
  SIGNUP, SIGNUP_FAILURE,
  LOGOUT, CONFIRMATION_CODE,
  IS_LOGGED_IN,
  SIGNIN,
  FORGOT_PASSWORD,
  CONFIRM_NEW_PASSWORD,
  RESEND_CODE
} from "../constants";
import { signup, logout, confirm, login, isLoggedIn, forgotPassword, confirmNewPassword, resendSignUp } from "../../services/AuthService";
import store from '../store.js';
import { NotificationManager } from "react-notifications";
export default class authEpic {
  static signup = action$ =>
    action$.ofType(SIGNUP)
      .switchMap(({ payload }) => {
        const { email, password, name, type, /*gender, birthdate,*/ companyName, firstName, lastName } = payload

        // with common attributes
        const requestPayload = {
          email,
          password,
          name,
          'custom:type': type
        }

        if (type && type.toLowerCase() === 'consumer') {
          // requestPayload['gender'] = gender
          // requestPayload['birthdate'] = birthdate
          requestPayload['custom:firstName'] = firstName
          requestPayload['custom:lastName'] = lastName
        }

        if (type && type.toLowerCase() === 'business') {
          requestPayload['custom:companyName'] = companyName
        }

        return Observable.fromPromise(signup(requestPayload))
          .switchMap((res) => {
            if (res.type && res.type === SIGNUP_FAILURE) {
              return Observable.of(authAction.signupFailure(res.message))
            } else {
              return Observable.of(
                authAction.signupSuccess(res)
              )
            }
          })
          .catch((error) => {
            const { message } = error
            return Observable.of(authAction.signupFailure(message))
          })
      })

  static logout = action$ =>
    action$.ofType(LOGOUT)
      .switchMap(({ payload }) => {
        return Observable.fromPromise(logout())
          .switchMap((res) => {
            return Observable.of(authAction.logoutSuccess(res))
          })
          .catch((error) => {
            return Observable.of(authAction.logoutFailure(JSON.stringify(error)))
          })
      })

  static confirmationCode = action$ =>
    action$.ofType(CONFIRMATION_CODE)
      .switchMap(({ payload }) => {
        // payload = {confirmationCode : number, userId}
        const { confirmationCode } = payload
        let email, password;

        if (store.getState().authReducer["signup"]) {
          email = store.getState().authReducer["signup"].email
          password = store.getState().authReducer["signup"].password
        }
        else if (store.getState().authReducer["resendCode"]) {
          email = store.getState().authReducer["resendCode"].email
          password = store.getState().authReducer["resendCode"].password
        }
        return Observable.fromPromise(confirm(email, confirmationCode))
          .switchMap((res) => {
            return Observable.of(
              authAction.confirmationCodeSuccess(res),
              authAction.signin({ email, password })
            )
          })
          .catch((error) => {
            const { message } = error
            return Observable.of(authAction.confirmationCodeFailure(message))
          })
      })

  //  sign in
  static signIn = (action$) =>
    action$.ofType(SIGNIN)
      .switchMap(({ payload }) => {
        const { email, password } = payload
        return Observable.fromPromise(login(email, password))
          .catch((error) => {
            return Observable.of(
              authAction.signinFailure(error)
            )
          })
          .switchMap((res) => {
            if (res.type && res.type === 'SIGNIN_FAILURE') {
              const { message, code } = res.error
              if (code === "UserNotConfirmedException") {
                return Observable.of(
                  authAction.signinFailure(message),
                  authAction.resendCode({ email, password })
                )
              }
              else {
                return Observable.of(
                  authAction.signinFailure(message)
                )
              }
            } else {
              return Observable.of(
                authAction.signinSuccess(res),
                // authAction.getUserByName({ name: res.name })
              );
            }
          })
      })

  static isLoggedIn = (action$) =>
    action$.ofType(IS_LOGGED_IN)
      .switchMap(() => {
        return Observable.fromPromise(isLoggedIn())
          .catch((err) => {
            return Observable.of(authAction.isLoggedInFailure(err))
          })
          .switchMap((res) => {
            if (res.type && res.type === 'IS_LOGGED_IN_FAILURE') {
              return Observable.of(authAction.isLoggedInFailure(res))
            } else {
              return Observable.of(
                authAction.isLoggedInSuccess(res),
                // authAction.getUserById({ userID: res.email ? res.email : res.id })
              )
            }
          })
      });

  static forgotPassword = (action$) =>
    action$.ofType(FORGOT_PASSWORD)
      .switchMap(({ payload }) => {
        return Observable.fromPromise(forgotPassword(payload))
          .catch((err) => {
            return Observable.of(authAction.forgotPasswordFailure(err.message))
          })
      })
      .switchMap((res) => {
        if (res.type && res.type === 'FORGOT_PASSWORD_FAILURE') {
          return Observable.of(authAction.forgotPasswordFailure(res.error))
        } else {
          return Observable.of(
            authAction.forgotPasswordSuccess(res)
          )
        }
      });
  static confirmNewPassword = (action$) =>
    action$.ofType(CONFIRM_NEW_PASSWORD)
      .switchMap(({ payload }) => {

        let { email, code, password } = payload;
        return Observable.fromPromise(confirmNewPassword(email, code, password))
          .catch((err) => {
            return Observable.of(authAction.confirmNewPasswordFailure(err.message))
          })
      })
      .switchMap(() => {
        return Observable.of(
          authAction.confirmNewPasswordSuccess({ message: "Password Successfully Changed!" })
        )
      });

  static resendCode = action$ =>
    action$.ofType(RESEND_CODE)
      .switchMap(({ payload }) => {
        const { email, password } = payload
        return Observable.fromPromise(resendSignUp(email))
          .switchMap((res) => {
            NotificationManager.success("Welcome back! We sent you a new confirmation code.");
            return Observable.of(
              authAction.resendCodeSuccess({ ...res, email, password })
            )
          })
          .catch((error) => {
            NotificationManager.error(error);
            return Observable.of(authAction.resendCodeFailure(error))
          })
      })

}

