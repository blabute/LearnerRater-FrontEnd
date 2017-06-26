import * as constants from './apiConsts';
import $ from 'jquery';

class ReviewApi {

  static saveReview(resourceId, review) {

    return $.ajax({
      type: "POST",
      contentType: "application/json",
      url: `${constants.REST_SERVICE_URL}AddReview?resourceid=${resourceId}`,
      data: JSON.stringify(review),
    })
    .then((id) => {
      return Object.assign({}, review, { ID: id });
    });
  }

  static deleteReview(resourceId, reviewId) {

    return $.ajax({
      type: "DELETE",
      url: `${constants.REST_SERVICE_URL}DeleteReview?resourceid=${resourceId}&reviewid=${reviewId}`
    });
  }
}

export default ReviewApi;
