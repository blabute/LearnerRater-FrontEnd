import React from 'react';
import PropTypes from 'prop-types';
import ReviewListRow from './ReviewListRow';

const ReviewList = props => {

  const { reviews } = props;

  return (
    <div className="review-container">
      {reviews.map((review, index) => {
        return <ReviewListRow key={index} review={review} />;
      })}
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
