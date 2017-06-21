class ReviewApi {
  static saveReview(resourceId, review) {

    review = Object.assign({}, review);

    return new Promise((resolve) => {

      // simulate setting ID
      review.ID = Math.random();

      resolve(review);
    });
  }
}

export default ReviewApi;
