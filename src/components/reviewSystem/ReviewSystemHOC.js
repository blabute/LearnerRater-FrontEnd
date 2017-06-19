import React from 'react';
import ReviewForm from './ReviewForm';
import { reduxForm } from 'redux-form';

class ReviewSystemHOC extends React.Component {

  render() {
    return (
      <form>
        <div>
          <h3>Add Review</h3>
          <ReviewForm />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'ReviewFormTest',
})(ReviewSystemHOC);
