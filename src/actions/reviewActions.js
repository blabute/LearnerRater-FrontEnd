import * as types from './actionTypes';
import reviewApi from '../api/mockReviewApi';

export function createReviewSuccess(review, resourceId) {
  return {type: types.CREATE_REVIEW_SUCCESS, review, resourceId: resourceId};
}

export function saveReview(resouceId) {
  return function (dispatch, getState) {
    const review = getState().form.ReviewForm.values;

    return reviewApi.saveReview(resouceId, review).then(review => {
        dispatch(createReviewSuccess(review, resouceId));
    }).catch(error => {
      throw(error);
    });
  };
}
