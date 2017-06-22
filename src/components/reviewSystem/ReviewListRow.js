import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from '../common/StarRatingComponent';

const ReviewListRow = props => {

  const { review } = props;

  return (
    <div className="review-container">
      <h3>{review.Username}</h3>
      <p>{review.Comment}</p>
      <div>
        <StarRatingComponent name="Rating" value={review.Rating} editing={false} />
      </div>
    </div>
  );
};

ReviewListRow.propTypes = {
  review: PropTypes.object.isRequired
};

export default ReviewListRow;
