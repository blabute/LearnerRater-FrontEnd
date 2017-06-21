import React from 'react';
import ReviewForm from './ReviewForm';
import { reduxForm, SubmissionError } from 'redux-form';
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

  onSubmitClick({userName="", rating=""}) {

    let error={};
    let isError=false;
    const errMsgRequired=" Required";

    if (userName.trim()===""){
          error.userName=errMsgRequired;
          isError=true;

    }
    if (rating < 1){
          error.rating=errMsgRequired;
          isError=true;

    }

    if (isError){
      throw new SubmissionError(error);
    }
     else{
       const { reset } = this.props;

       this.setState({isOverlay: false});

       return reset();
     }


  }

  onCancelClick() {
    const { reset } = this.props;

    this.setState({isOverlay: false});

    return reset();
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <button type="button" onClick={this.onAddReviewClick} disabled={this.state.isOverlay}>Add Review</button>
        {this.state.isOverlay &&
            <form onSubmit={handleSubmit(this.onSubmitClick)}>
            <h3>Add Review</h3>
            <ReviewForm onStarClick={this.onStarClick}/>
            <button type="submit">Submit</button>
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
  reset: PropTypes.func,
  handleSubmit:PropTypes.isRequired
};

export default reduxForm({
  form: 'ReviewForm',
})(ReviewSystemHOC);
