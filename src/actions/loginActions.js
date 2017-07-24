import * as types from './actionTypes';

export function loginSuccess() {
  return {type: types.LOGIN_SUCCESS};
}

export function logoutSuccess() {
  return {type: types.LOGOUT_SUCCESS};
}

export function login() {
  return function (dispatch) {
      dispatch(loginSuccess());
  };
}

export function logout() {
  return function (dispatch) {
      dispatch(logoutSuccess());
  };
}
