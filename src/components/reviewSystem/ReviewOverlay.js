import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';

const ReviewOverlay = props => {

  const { onStarClick, onSubmitClick, onCancelClick, submitting, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onSubmitClick)}>
      <h3>Add Review</h3>
      <ReviewForm onStarClick={onStarClick} />
      <button type="submit" disabled={submitting} id="btnSubmitRating">Submit</button>
      <button type="button" onClick={onCancelClick} id="btnCancelRating">Cancel</button>
    </form>
  );
};

ReviewOverlay.propTypes = {
  onStarClick: PropTypes.func,
  onSubmitClick: PropTypes.func,
  onCancelClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};

export default ReviewOverlay;
