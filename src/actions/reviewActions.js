import * as types from './actionTypes';
import reviewApi from '../api/reviewApi';

export function createReviewSuccess(review, resourceId) {
  return {type: types.CREATE_REVIEW_SUCCESS, review, resourceId: resourceId};
}

export function deleteReviewSuccess(resourceId, reviewId) {
  return {type: types.DELETE_REVIEW_SUCCESS, resourceId, reviewId};
}

export function saveReview(resourceId) {
  return function (dispatch, getState) {
    const review = getState().form.ReviewForm.values;

    return reviewApi.saveReview(resourceId, review).then(review => {
        dispatch(createReviewSuccess(review, resourceId));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteReview(resourceId, reviewId) {
  return function (dispatch) {

    return reviewApi.deleteReview(resourceId, reviewId).then(() => {
        dispatch(deleteReviewSuccess(resourceId, reviewId));
    }).catch(error => {
      throw(error);
    });
  };
}
