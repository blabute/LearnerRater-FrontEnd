import React from 'react';
import ReviewForm from './ReviewForm';
import { reduxForm } from 'redux-form';

class ReviewSystemHOC extends React.Component {

  constructor() {
    super();

    this.state = {
      isOverlay: false,
      rating: 0
    };
  }

  render() {
    return (
      <form>
        <h3>Add Review</h3>
        <ReviewForm rating={this.state.rating}/>
        <button type="button">Submit</button>
        <button type="button">Cancel</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'ReviewForm',
})(ReviewSystemHOC);
