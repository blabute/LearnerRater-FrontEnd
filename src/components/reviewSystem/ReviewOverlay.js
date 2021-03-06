import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';

class ReviewOverlay extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    document.body.classList.add('is-overlayed');
  }

  componentWillUnmount() {
    document.body.classList.remove('is-overlayed');
  }

  render() {

    const { onStarClick, onSubmitClick, onCancelClick, submitting, handleSubmit, title } = this.props;

    return (

      <div className="overlay-container">
        <div className="overlay">

          <div className="overlay__header">
            <h1>Your Verdict Please</h1>
          </div>

          <div className="overlay__body">


            <form onSubmit={handleSubmit(onSubmitClick)}>
              <div className="qbox" style={{borderBottom: '1px solid #ccc'}}>
                <div className="question">Resource Title</div>
                <div className="answer"><h3>{title}</h3></div>
              </div>

              <ReviewForm onStarClick={onStarClick} />
              <div className="qbox">
                <div className="question">
                  {}
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
  }
}

ReviewOverlay.propTypes = {
  onStarClick: PropTypes.func,
  onSubmitClick: PropTypes.func,
  onCancelClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};

export default ReviewOverlay;
