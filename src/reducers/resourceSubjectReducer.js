import * as types from  '../actions/actionTypes';

export default function resourceSubjectReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_RESOURCESUBJECT_SUCCESS:
      return action.resourceSubjects;

    default:
      return state;
  }
}
