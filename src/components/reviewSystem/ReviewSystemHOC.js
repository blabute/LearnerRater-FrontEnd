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

    this.onAddReviewClick = this.onAddReviewClick.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  onAddReviewClick() {
    this.setState({isOverlay: true});
  }

  onStarClick(nextValue, prevValue, name) {
    this.props.change(name, nextValue);
  }

  onSubmitClick() {
    const { reset } = this.props;

    this.setState({isOverlay: false});

    return reset();
  }

  onCancelClick() {
    const { reset } = this.props;

    this.setState({isOverlay: false});

    return reset();
  }

  render() {

    return (
      <div>
        <button type="button" onClick={this.onAddReviewClick} disabled={this.state.isOverlay}>Add Review</button>
        {this.state.isOverlay &&
          <form>
            <h3>Add Review</h3>
            <ReviewForm onStarClick={this.onStarClick}/>
            <button type="button" onClick={this.onSubmitClick}>Submit</button>
            <button type="button" onClick={this.onCancelClick}>Cancel</button>
          </form>
        }
      </div>
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
