import * as types from  '../actions/actionTypes';

export default function resourceReducer(state = [], action) {
  //debugger;
  switch (action.type) {
    case types.LOAD_RESOURCES_SUCCESS:
      return action.resources;

    default:
      return state;
  }
}
