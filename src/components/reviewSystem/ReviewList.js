import React from 'react';
import PropTypes from 'prop-types';
import ReviewListRow from './ReviewListRow';

const ReviewList = props => {

  const { reviews, resourceId } = props;

  return (
    <div className="review-container">
      {reviews.map((review, index) => {
        return <ReviewListRow key={index} index={index} review={review} resourceId={resourceId} />;
      })}
    </div>
  );
};

ReviewList.propTypes = {
  resourceId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
