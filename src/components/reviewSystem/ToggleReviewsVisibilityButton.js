import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInterfaceActions from '../../actions/userInterfaceActions';

class ToggleReviewsVisibilityButton extends React.Component {

  constructor() {
    super();

    this.toggleReviewVisiblity = this.toggleReviewVisiblity.bind(this);
  }

  toggleReviewVisiblity() {
    this.props.actions.toggleReviewsVisibility();
  }

  render() {
    const { numberOfReviews, areReviewsVisible } = this.props;

    return (
      <div className="resource-item__btn-toggle-reviews">
        <button className="btn btn--light" onClick={this.toggleReviewVisiblity}>
          {areReviewsVisible ? "Hide Reviews" : "Show Reviews"} / {numberOfReviews || 0}
        </button>
      </div>
    );
  }
}

ToggleReviewsVisibilityButton.propTypes = {
  actions: PropTypes.object.isRequired,
  numberOfReviews: PropTypes.number.isRequired,
  areReviewsVisible: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    areReviewsVisible: state.userInterface.areReviewsVisible
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userInterfaceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleReviewsVisibilityButton);
