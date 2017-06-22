import React from 'react';
import ReviewList from './ReviewList';
import ReviewOverlay from './ReviewOverlay';
import { reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as reviewActions from '../../actions/reviewActions';
import * as userInterfaceActions from '../../actions/userInterfaceActions';

class ReviewSystemHOC extends React.Component {

  constructor() {
    super();

    this.state = {
      isOverlay: false,
      areReviewsVisible: false
    };

    this.onToggleReviewClick = this.onToggleReviewClick.bind(this);
    this.onAddReviewClick = this.onAddReviewClick.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  onToggleReviewClick() {
    this.setState({areReviewsVisible: !this.state.areReviewsVisible});
  }

  onAddReviewClick() {
    this.setState({isOverlay: true});
  }

  onStarClick(nextValue, prevValue, name) {
    this.props.change(name, nextValue);
  }

  onSubmitClick(values) {
    let errors = {};
    let isError = false;
    const errMsgRequired =" Required";
    const { Username, Rating } = values;
    const { reset, resourceId } = this.props;

    if (!Username){
      errors.Username = errMsgRequired;
      isError = true;
    }
    if (!Rating){
      errors.Rating = errMsgRequired;
      isError = true;
    }

    if (isError) {
      throw new SubmissionError(errors);
    }
   else {
     this.setState({isOverlay: false});
     this.props.actions.saveReview(resourceId);

     return reset();
   }
  }

  onCancelClick() {
    const { reset } = this.props;

    this.setState({isOverlay: false});

    return reset();
  }

  render() {
    const { resourceId, reviews, submitting, handleSubmit } = this.props;

    return (
      <div>
        <button type="button" className="btn" onClick={this.onToggleReviewClick} id="btnToggleReviews">
          {this.state.areReviewsVisible ? "Hide Reviews" : "Show Reviews"} / {reviews.length || 0}
        </button>
        <button type="button" className="btn" onClick={this.onAddReviewClick} disabled={this.state.isOverlay} id="btnAddReview">YOU BE THE JUDGE</button>
        {this.state.isOverlay &&
          <ReviewOverlay onStarClick={this.onStarClick} onSubmitClick={this.onSubmitClick} onCancelClick={this.onCancelClick}
            handleSubmit={handleSubmit} submitting={submitting} />
        }
        {this.state.areReviewsVisible &&
          <ReviewList resourceId={resourceId} reviews={reviews} />
        }
      </div>
    );
  }
}

ReviewSystemHOC.propTypes = {
  actions: PropTypes.object.isRequired,
  resourceId: PropTypes.number.isRequired,
  reviews: PropTypes.array,
  onStarClick: PropTypes.func,
  change: PropTypes.func,
  reset: PropTypes.func,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};

const postNewRating = reduxForm({
  form: 'ReviewForm',
})(ReviewSystemHOC);

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...reviewActions, ...userInterfaceActions}, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(postNewRating);
