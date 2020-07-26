import {
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
  CONFIRMATION_CODE,
  CONFIRMATION_CODE_FAILURE,
  CONFIRMATION_CODE_SUCCESS,
  IS_LOGGED_IN,
  IS_LOGGED_IN_FAILURE,
  IS_LOGGED_IN_SUCCESS,
  SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_SUCCESS,
  CONFIRM_NEW_PASSWORD,
  CONFIRM_NEW_PASSWORD_SUCCESS,
  CONFIRM_NEW_PASSWORD_FAILURE,
  RESEND_CODE, RESEND_CODE_SUCCESS, RESEND_CODE_FAILURE,
} from "../constants";

const initialState = {
  signup: null,
  signupLoader: false,
  signupError: null,

  confirmationCode: null,
  confirmationCodeLoader: false,
  confirmationCodeError: null,

  isLoggedIn: false,
  isLoggedInLoader: false,

  user: null,
  signin: null, // signin would be "user"
  signinLoader: false,
  signinError: null,

  forgotPassword: null,
  forgotPasswordLoader: null,
  forgotPasswordError: null,

  confirmNewPassword: null,
  confirmNewPasswordLoader: null,
  confirmNewPasswordError: null,

  resendCode: null,
  resendCodeLoader: false,
  resendCodeError: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////// RESEND CODE /////////////////////
    case RESEND_CODE:
      return {
        ...state,
        resendCode: null,
        resendCodeLoader: true,
        resendCodeError: null
      };

    case RESEND_CODE_SUCCESS:
      return {
        ...state,
        resendCode: action.payload,
        resendCodeLoader: false,
        resendCodeError: null
      };

    case RESEND_CODE_FAILURE:
      return {
        ...state,
        resendCode: null,
        resendCodeLoader: false,
        resendCodeError: action.error
      };

    ////////////////////////// SIGNUP /////////////////////
    case SIGNUP:
      return {
        ...state,
        signup: null,
        signupLoader: true,
        signupError: null
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: action.payload,
        signupLoader: false,
        signupError: null
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup: null,
        signupLoader: false,
        signupError: action.error
      };

    ////////////////////////// CONFIRMATION_CODE /////////////////////
    case CONFIRMATION_CODE:
      return {
        ...state,
        confirmationCode: null,
        confirmationCodeLoader: true,
        confirmationCodeError: null
      };

    case CONFIRMATION_CODE_SUCCESS:
      return {
        ...state,
        confirmationCode: action.payload,
        confirmationCodeLoader: false,
        confirmationCodeError: null
      };

    case CONFIRMATION_CODE_FAILURE:
      return {
        ...state,
        confirmationCode: null,
        confirmationCodeLoader: false,
        confirmationCodeError: action.error
      };

    ////////////////////////// LOGOUT_SUCCESS /////////////////////
    case LOGOUT_SUCCESS:
      return {
        state: initialState
      };
    //////////////////
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: false,
        isLoggedInLoader: true
      };

    case IS_LOGGED_IN_SUCCESS:
      var { attributes } = action.payload;
      var { sub, email_verified, name, email } = attributes;

      return {
        ...state,
        user: {
          userId: sub,
          type: attributes["custom:type"],
          firstName: attributes["custom:firstName"],
          lastName: attributes["custom:lastName"],
          email_verified,
          name,
          companyName: attributes["custom:companyName"],
          email
        },
        isLoggedIn: true,
        isLoggedInLoader: false
      };

    case IS_LOGGED_IN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoggedInLoader: false
      };
    case SIGNIN:
      return {
        ...state,
        signin: null,
        signinLoader: true,
        signinError: null,
        isLoggedIn: false
      };

    case SIGNIN_SUCCESS:
      var { attributes } = action.payload;
      var { sub, email_verified, name, email } = attributes;
      return {
        ...state,
        user: {
          userId: sub,
          type: attributes["custom:type"],
          firstName: attributes["custom:firstName"],
          lastName: attributes["custom:lastName"],
          email_verified,
          name,
          companyName: attributes["custom:companyName"],
          email
        },
        signin: action.payload,
        signinLoader: false,
        signinError: null,
        isLoggedIn: true
      };

    case SIGNIN_FAILURE:
      return {
        ...state,
        signin: null,
        signinLoader: false,
        signinError: action.error,
        isLoggedIn: false
      };
    ///////////// Forget password /////////////
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword: null,
        signupLoader: true,
        signupError: null,
        isLoggedIn: false
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: action.payload,
        signupLoader: false,
        signupError: null,
        isLoggedIn: false
      };

    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        user: null,
        signupLoader: false,
        forgotPasswordError: action.error,
        signupError: null,
        isLoggedIn: false
      };
    /////////////
    case CONFIRM_NEW_PASSWORD:
      return {
        ...state,
        confirmNewPassword: null,
        authLoader: true,
        confirmNewPasswordLoader: true,
        authError: null,
        isLoggedIn: false
      };

    case CONFIRM_NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        confirmNewPassword: action.payload,
        authLoader: false,
        confirmNewPasswordLoader: false,
        authError: null,
        isLoggedIn: false
      };

    case CONFIRM_NEW_PASSWORD_FAILURE:
      return {
        ...state,
        user: null,
        confirmNewPassword: null,
        authLoader: false,
        confirmNewPasswordLoader: false,
        confirmNewPasswordError: action.error,
        authError: null,
        isLoggedIn: false
      };

    default:
      return state;
  }
}
