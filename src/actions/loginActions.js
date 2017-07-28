import * as types from './actionTypes';
import loginApi from '../api/loginApi';

export function attemptToLogin(username) {
  return {type: types.LOGIN_ATTEMPT, username: username};
}

export function loginSuccess() {
  return {type: types.LOGIN_SUCCESS};
}

export function logoutSuccess() {
  return {type: types.LOGOUT_SUCCESS};
}

export function login() {
  return function (dispatch, getState) {

    const login = getState().form.LoginForm.values;

    return loginApi.login(login).then(login => {
        dispatch(attemptToLogin(login.Username));
        dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logout() {
  return function (dispatch) {
    dispatch(logoutSuccess());
  };
}
