import {
  SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
  CONFIRMATION_CODE, CONFIRMATION_CODE_SUCCESS, CONFIRMATION_CODE_FAILURE,
  SIGNIN, SIGNIN_FAILURE, SIGNIN_SUCCESS, isLoggedIn, IS_LOGGED_IN, IS_LOGGED_IN_FAILURE, IS_LOGGED_IN_SUCCESS,
  FORGOT_PASSWORD, FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_SUCCESS,
  CONFIRM_NEW_PASSWORD, CONFIRM_NEW_PASSWORD_SUCCESS, CONFIRM_NEW_PASSWORD_FAILURE,
  RESEND_CODE, RESEND_CODE_SUCCESS, RESEND_CODE_FAILURE,
} from "../constants";

export class authAction {

  ////////////////////////  SIGNUP  ////////////////////
  static signup(payload) {
    return {
      type: SIGNUP,
      payload
    };
  }
  static signupSuccess(payload) {
    return {
      type: SIGNUP_SUCCESS,
      payload
    };
  }
  static signupFailure(error) {
    return {
      type: SIGNUP_FAILURE,
      error
    };
  }

  ////////////////////////  LOGOUT  ////////////////////
  static logout(payload) {
    return {
      type: LOGOUT,
      payload
    };
  }
  static logoutSuccess(payload) {
    return {
      type: LOGOUT_SUCCESS,
      payload
    };
  }
  static logoutFailure(error) {
    return {
      type: LOGOUT_FAILURE,
      error
    };
  }
  ///////////// sign in //////////////
  static signin(payload) {
    return {
      type: SIGNIN,
      payload
    }
  }

  static signinSuccess(payload) {
    return {
      type: SIGNIN_SUCCESS,
      payload
    }
  }

  static signinFailure(error) {
    return {
      type: SIGNIN_FAILURE,
      error
    }
  }

  ///////////// isLoggin //////////////
  static isLoggedIn(payload) {
    return {
      type: IS_LOGGED_IN,
      payload
    }
  }

  static isLoggedInSuccess(payload) {
    return {
      type: IS_LOGGED_IN_SUCCESS,
      payload
    }
  }

  static isLoggedInFailure(error) {
    return {
      type: IS_LOGGED_IN_FAILURE,
      error
    }
  }

  ////////////////////////  CONFIRMATION_CODE  ////////////////////
  static confirmationCode(payload) {
    return {
      type: CONFIRMATION_CODE,
      payload
    };
  }
  static confirmationCodeSuccess(payload) {
    return {
      type: CONFIRMATION_CODE_SUCCESS,
      payload
    };
  }
  static confirmationCodeFailure(error) {
    return {
      type: CONFIRMATION_CODE_FAILURE,
      error
    };
  }
  /////////////  Forgot password /////////////
  static forgotPassword(payload) {
    return {
      type: FORGOT_PASSWORD,
      payload
    }
  }

  static forgotPasswordSuccess(payload) {
    return {
      type: FORGOT_PASSWORD_SUCCESS,
      payload
    }
  }

  static forgotPasswordFailure(error) {
    return {
      type: FORGOT_PASSWORD_FAILURE,
      error
    }
  }
  ///////////// confirm password /////////////
  static confirmNewPassword(payload) {
    return {
      type: CONFIRM_NEW_PASSWORD,
      payload
    }
  }

  static confirmNewPasswordSuccess(payload) {
    return {
      type: CONFIRM_NEW_PASSWORD_SUCCESS,
      payload
    }
  }

  static confirmNewPasswordFailure(error) {
    return {
      type: CONFIRM_NEW_PASSWORD_FAILURE,
      error
    }
  }

  ////////////////////////  RESENDCODE  ////////////////////
  static resendCode(payload) {
    return {
      type: RESEND_CODE,
      payload,
    };
  }
  static resendCodeSuccess(payload) {
    return {
      type: RESEND_CODE_SUCCESS,
      payload,
    };
  }
  static resendCodeFailure(error) {
    return {
      type: RESEND_CODE_FAILURE,
      error,
    };
  }
}
