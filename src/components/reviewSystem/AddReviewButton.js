import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userInterfaceActions from '../../actions/userInterfaceActions';

class AddReviewButton extends React.Component {

  constructor() {
    super();

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.actions.openAddReviewOverlay();
  }

  render() {

    return (
      <div className="resource-item__btn-review">
        <button type="button" className="btn" onClick={this.onButtonClick} id="btnAddReview">YOU BE THE JUDGE</button>
      </div>
    );
  }
}

AddReviewButton.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userInterfaceActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AddReviewButton);
