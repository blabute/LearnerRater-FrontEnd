import React from 'react';
import PropTypes from 'prop-types';

const AddReviewButton = props => {

  const { onClick } = props;

  return (
    <div className="resource-item__btn-review">
      <button type="button" className="btn" onClick={onClick} id="btnAddReview">YOU BE THE JUDGE</button>
    </div>
  );
};

AddReviewButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddReviewButton;
