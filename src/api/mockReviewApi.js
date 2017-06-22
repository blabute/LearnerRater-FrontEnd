class ReviewApi {
  static saveReview(resourceId, review) {

    review = Object.assign({}, review);

    return new Promise((resolve) => {

      // simulate setting ID
      review.ID = Math.random();

      resolve(review);
    });
  }

  static deleteReview(resourceId) {

    return new Promise((resolve) => {

      resolve(resourceId);
    });
  }
}

export default ReviewApi;
