import React from 'react';
import PropTypes from 'prop-types';

const ToggleReviewsVisibilityButton = props => {

  const { numberOfReviews, areReviewsVisible, onClick } = props;

  return (
    <div className="resource-item__btn-toggle-reviews">
      <button className="btn btn--light" onClick={onClick} id="btnToggleReviewVisibility">
        {areReviewsVisible ? "Hide Reviews" : "Show Reviews"} / {numberOfReviews || 0}
      </button>
    </div>
  );
};

ToggleReviewsVisibilityButton.propTypes = {
  numberOfReviews: PropTypes.number.isRequired,
  areReviewsVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ToggleReviewsVisibilityButton;
