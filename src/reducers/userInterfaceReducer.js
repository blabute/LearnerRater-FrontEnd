import * as types from '../actions/actionTypes';
import initalState from '../constants/initialState';

export default function userInterfaceReducer(state = initalState.userInterface, action) {
  switch (action.type) {
    case types.TOGGLE_CAN_DELETE_SUCCESS:
      return Object.assign({}, state, {
        canDelete: !state.canDelete
      });
    default:
      return state;
  }
}
