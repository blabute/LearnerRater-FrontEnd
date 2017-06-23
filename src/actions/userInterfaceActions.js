import * as types from './actionTypes';

export function toggleCanDeleteSuccess() {
  return {type: types.TOGGLE_CAN_DELETE_SUCCESS};
}

export function toggleCanDelete() {
  return function (dispatch) {
      dispatch(toggleCanDeleteSuccess());
  };
}
