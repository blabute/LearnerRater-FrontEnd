import React from 'react';
import ReviewOverlay from './ReviewOverlay';
import { reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as reviewActions from '../../actions/reviewActions';
import * as userInterfaceActions from '../../actions/userInterfaceActions';

class ManageReviewOverlay extends React.Component {

  constructor() {
    super();

    this.onStarClick = this.onStarClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
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
     this.props.actions.closeAddReviewOverlay();

     return reset();
   }
  }

  onCancelClick() {
    const { reset } = this.props;

    this.setState({isOverlay: false});
    this.props.actions.closeAddReviewOverlay();

    return reset();
  }

  render() {
    const { isAddReviewOverlayOpen, submitting, handleSubmit } = this.props;

    return (
      <div>
        {isAddReviewOverlayOpen &&
          <ReviewOverlay onStarClick={this.onStarClick} onSubmitClick={this.onSubmitClick} onCancelClick={this.onCancelClick}
            handleSubmit={handleSubmit} submitting={submitting} />
        }
      </div>
    );
  }
}

ManageReviewOverlay.propTypes = {
  actions: PropTypes.object.isRequired,
  resourceId: PropTypes.number.isRequired,
  isAddReviewOverlayOpen: PropTypes.bool,
  handleSubmit: PropTypes.func,
  change: PropTypes.func,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

const postNewReview = reduxForm({
  form: 'ReviewForm',
})(ManageReviewOverlay);

function mapStateToProps(state) {
  return {
    isAddReviewOverlayOpen: state.userInterface.isAddReviewOverlayOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...reviewActions, ...userInterfaceActions}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(postNewReview);
