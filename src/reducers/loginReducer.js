import * as types from '../actions/actionTypes';
import initalState from '../constants/initialState';

export default function loginReducer(state = initalState.login, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        areLoggedIn: true
      });
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        areLoggedIn: false
      });
    default:
      return state;
  }
}
