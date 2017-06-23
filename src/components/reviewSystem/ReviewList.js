import React from 'react';
import PropTypes from 'prop-types';
import ReviewListRow from './ReviewListRow';
import { connect } from 'react-redux';

const ReviewList = props => {

  const { reviews, resourceId, areReviewsVisible } = props;

  return (
    <div>
      {areReviewsVisible &&
        <div className="review-container">
          {reviews.map((review, index) => {
            return <ReviewListRow key={index} index={index} review={review} resourceId={resourceId} />;
          })}
        </div>
      }
    </div>
  );
};

ReviewList.propTypes = {
  resourceId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  areReviewsVisible: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    areReviewsVisible: state.userInterface.areReviewsVisible
  };
}

export default connect(mapStateToProps)(ReviewList);
