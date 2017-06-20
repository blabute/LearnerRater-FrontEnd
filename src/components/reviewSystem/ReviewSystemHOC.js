import React from 'react';
import ReviewForm from './ReviewForm';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class ReviewSystemHOC extends React.Component {

  constructor() {
    super();

    this.state = {
      isOverlay: false
    };

    this.onStarClick = this.onStarClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.props.change(name, nextValue);
  }

  onSubmitClick() {
    const { reset } = this.props;

    return reset();
  }

  onCancelClick() {
    const { reset } = this.props;

    return reset();
  }

  render() {
    return (
      <form>
        <h3>Add Review</h3>
        <ReviewForm onStarClick={this.onStarClick}/>
        <button type="button" onClick={this.onSubmitClick}>Submit</button>
        <button type="button" onClick={this.onCancelClick}>Cancel</button>
      </form>
    );
  }
}

ReviewSystemHOC.propTypes = {
  onStarClick: PropTypes.func,
  change: PropTypes.func,
  reset: PropTypes.func
};

export default reduxForm({
  form: 'ReviewForm',
})(ReviewSystemHOC);
