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
  }

  onStarClick(nextValue, prevValue, name) {
    this.props.change(name, nextValue);
  }

  render() {
    return (
      <form>
        <h3>Add Review</h3>
        <ReviewForm onStarClick={this.onStarClick}/>
        <button type="button">Submit</button>
        <button type="button">Cancel</button>
      </form>
    );
  }
}

ReviewSystemHOC.propTypes = {
  change: PropTypes.func
};

export default reduxForm({
  form: 'ReviewForm',
})(ReviewSystemHOC);
