import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';

const ReviewOverlay = props => {

  const { onStarClick, onSubmitClick, onCancelClick, submitting, handleSubmit } = props;

  return (

    <div className="overlay-container">
      <div className="overlay">

        <div className="overlay__header">
          <h1>Your Verdict Please</h1>
        </div>

        <div className="overlay__body">


          <form onSubmit={handleSubmit(onSubmitClick)}>
            <h3>(Resource Title)</h3>
            <ReviewForm onStarClick={onStarClick} />
            <div className="qbox">
              <div className="question">

              </div>

              <div className="answer">
                <button type="submit" className="btn" disabled={submitting} id="btnSubmitRating">Submit</button>
                <button type="button" className="btn" onClick={onCancelClick} id="btnCancelRating">Cancel</button>
              </div>
            </div>

          </form>


        </div>

      </div>
    </div>

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
