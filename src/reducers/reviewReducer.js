import * as types from '../actions/actionTypes';

export default function reviewReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_REVIEW_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.review)
      ];
    case types.DELETE_REVIEW_SUCCESS:
      return [
        ...state.filter(review => review.ID !== action.reviewId)
      ];
    default:
      return state;
  }
}
