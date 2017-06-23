import * as types from './actionTypes';

export function toggleCanDeleteSuccess() {
  return {type: types.TOGGLE_CAN_DELETE_SUCCESS};
}

export function openAddReviewOverlaySuccess() {
  return {type: types.OPEN_ADD_REVIEW_OVERLAY_SUCCESS};
}

export function closeAddReviewOverlaySuccess() {
  return {type: types.CLOSE_ADD_REVIEW_OVERLAY_SUCCESS};
}

export function toggleReviewsVisibilitySuccess() {
  return {type: types.TOGGLE_REVIEWS_VISIBILITY_SUCCESS};
}

export function toggleCanDelete() {
  return function (dispatch) {
      dispatch(toggleCanDeleteSuccess());
  };
}

export function openAddReviewOverlay() {
  return function (dispatch) {
      dispatch(openAddReviewOverlaySuccess());
  };
}

export function closeAddReviewOverlay() {
  return function (dispatch) {
      dispatch(closeAddReviewOverlaySuccess());
  };
}

export function toggleReviewsVisibility() {
  return function (dispatch) {
      dispatch(toggleReviewsVisibilitySuccess());
  };
}
