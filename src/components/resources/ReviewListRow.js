import React from 'react';
import PropTypes from 'prop-types';

const ReviewListRow = ({review}) => {
  return (
    <div>
      <br/>
      <div>Username: {review.Username}</div>
      <div>Rating: {review.Rating}</div>
      <div>Comment: {review.Comment}</div>
    </div>
  );
};

ReviewListRow.propTypes = {
  review: PropTypes.object.isRequired
};

export default ReviewListRow;
