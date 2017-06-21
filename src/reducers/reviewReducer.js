import * as types from '../actions/actionTypes';

export default function reviewReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_REVIEW_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.review)
      ];
    default:
      return state;
  }
}
