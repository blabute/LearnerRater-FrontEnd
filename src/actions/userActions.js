import * as types from './actionTypes';
import userApi from '../api/userApi';
import bcrypt  from 'bcryptjs';

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

    let login = getState().form.LoginForm.values;

    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash(login.Password, salt, function(err, hash) {
    //       login = Object.assign({}, login, {
    //         Password: hash
    //       });
    //     });
    // });
    // var salt = bcrypt.genSaltSync(10);
    bcrypt.hash(login.Password, 8, function(err, hash) {
      login = Object.assign({}, login, {
        Password: hash
      });
    });

    return userApi.login(login).then(login => {
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

export function registerSuccess() {
  return { type: types.REGISTER_SUCCESS };
}

export function register() {
  return function (dispatch, getState) {

    let user = getState().form.RegisterForm.values;

    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash(login.Password, salt, function(err, hash) {
    //       login = Object.assign({}, login, {
    //         Password: hash
    //       });
    //     });
    // });
    // var salt = bcrypt.genSaltSync(10);
    // bcrypt.hash(login.Password, 8, function(err, hash) {
    //   login = Object.assign({}, login, {
    //     Password: hash
    //   });
    // });
debugger;
    return userApi.register(user).then(user => {
        // dispatch(attemptToLogin(login.Username));
        // dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}
