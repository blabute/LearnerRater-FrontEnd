import * as types from './actionTypes';
import userApi from '../api/userApi';
import bcrypt  from 'bcryptjs';

export function loginSuccess(user) {
  return {type: types.LOGIN_SUCCESS, user: user};
}

export function logoutSuccess() {
  return {type: types.LOGOUT_SUCCESS};
}

export function login() {
  return function (dispatch, getState) {

    let user = getState().form.LoginForm.values;
    let response = {};

    return userApi.login(user)
      .then(userResponse => {

        response = userResponse;
        return bcrypt.compare(user.Password, userResponse.Password);
      })
      .then(function(result) {

        if(!result) {
          throw new Error('Password is incorrect');
        }
      })
      .then(() => {
        dispatch(loginSuccess(response));
      })
    .catch(error => {
      throw(error);
    });
  };
}

export function logout() {
  return function (dispatch) {
    dispatch(logoutSuccess());
  };
}

export function registerSuccess(user) {
  return { type: types.REGISTER_SUCCESS, user: user };
}

export function register() {
  return function (dispatch, getState) {

    let user = getState().form.RegisterForm.values;

    return bcrypt.hash(user.Password, 10).then(function(hash) {
      user = Object.assign({}, user, {
        Password: hash,
        ConfirmPassword: null
      });
    })
    .then(() => userApi.register(user))
    .then(user => {
      dispatch(registerSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}
