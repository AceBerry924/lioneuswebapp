import { Auth } from "aws-amplify";

export const signup = user => {
  const { email, password } = user;
  delete user.password;
  return new Promise((resolve, reject) => {
    Auth.signUp({
      username: email,
      password,
      attributes: { ...user }
    })
      .then(u =>
        resolve({
          email: u.user.username,
          userId: u.userSub,
          verified: u.userConfirmed,
          type: user["custom:type"],
          companyName: user["custom:companyName"],
          password,
          ...user
        })
      )
      .catch(error => reject(error));
  });
};

export const signupWithPhone = user => {
  const { email, password, firstname, lastname, phone } = user;
  return new Promise((resolve, reject) => {
    Auth.signUp({
      username: email,
      password,
      attributes: {
        email, // optional
        phone_number: phone // optional - E.164 number convention
        // other custom attributes
      }
    })
      .then(u =>
        resolve({
          email: u.user.username,
          userId: u.userSub,
          verified: u.userConfirmed,
          firstname,
          lastname,
          phone,
          password
        })
      )
      .catch(error => reject(error));
  });
};

export const confirm = (email, confirmationCode) => {
  return new Promise(async (resolve, reject) => {
    Auth.confirmSignUp(email, confirmationCode)
      .then(confirmedUser => resolve({ confirmedUser, email }))
      .catch(error => reject(error.message));
  });
};

export const login = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await Auth.signIn(email, password);
      resolve(user);
    } catch (e) {
      // ALERT here we can check which error we are receiving
      reject(e);
    }
  });
};

export const logout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await Auth.signOut({ global: true });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export const forgotPassword = username => {
  return Auth.forgotPassword(username);
};

export const confirmNewPassword = (user, code, newPassword) => {
  return Auth.forgotPasswordSubmit(user, code, newPassword);
};

export const isLoggedIn = (user, confirmationCode) => {
  return new Promise(async (resolve, reject) => {
    Auth.currentAuthenticatedUser()
      .then(user => resolve(user))
      .catch(err => reject(err.message));
  });
};

export const resendSignUp = (username) => {
  return new Promise(async (resolve, reject) => {
    Auth.resendSignUp(username)
      .then(data => resolve({ data }))
      .catch(error => reject(error.message));
  });
};
