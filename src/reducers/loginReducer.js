import * as types from '../actions/actionTypes';
import initalState from '../constants/initialState';

export default function loginReducer(state = initalState.login, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        areLoggedIn: true,
        email: action.user.Email,
        fullName: action.user.FullName,
        username: action.user.Username,
        isAdmin: action.user.IsAdmin
      });
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, {
        areLoggedIn: false,
        username: action.user.Username
      });
    default:
      return state;
  }
}
