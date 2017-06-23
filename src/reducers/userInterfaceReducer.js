import * as types from '../actions/actionTypes';
import initalState from '../constants/initialState';

export default function userInterfaceReducer(state = initalState.userInterface, action) {
  switch (action.type) {
    case types.TOGGLE_CAN_DELETE_SUCCESS:
      return Object.assign({}, state, {
        canDelete: !state.canDelete
      });
    case types.OPEN_ADD_REVIEW_OVERLAY_SUCCESS:
      return Object.assign({}, state, {
        isOverlay: true,
        isAddReviewOverlayOpen: true
      });
    case types.CLOSE_ADD_REVIEW_OVERLAY_SUCCESS:
      return Object.assign({}, state, {
        isOverlay: false,
        isAddReviewOverlayOpen: false
      });
    case types.TOGGLE_REVIEWS_VISIBILITY_SUCCESS:
      return Object.assign({}, state, {
        areReviewsVisible: !state.areReviewsVisible
      });
    default:
      return state;
  }
}
