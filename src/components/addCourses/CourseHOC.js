import React from 'react';
import ReviewForm from '../reviewSystem/ReviewForm';
import {reduxForm, SubmissionError} from 'redux-form';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';

class CoursesHOC extends React.Component {

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

submit ({category="",title="", author="", description="", website="", link="", userName="", rating=""}) {

  let error={};
  let isError=false;
  const errMsgRequired=" Required";
  if (category.trim()===""){
    error.category=errMsgRequired;
    isError=true;

  }
  if (title.trim()===""){
    error.title=errMsgRequired;
    isError=true;

  }
  if (author.trim()===""){
    error.author=errMsgRequired;
    isError=true;

  }
  if (description.trim()===""){
    error.description=errMsgRequired;
    isError=true;

  }
  if (website.trim()===""){
    error.website=errMsgRequired;
    isError=true;

  }
  if (link.trim()===""){
    error.link=errMsgRequired;
    isError=true;
  }

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
     //save to server ;
   }
}
  render() {
    const {handleSubmit} = this.props;
    return (
       <form onSubmit={handleSubmit(this.submit)}>
        <h3>Add Course</h3>
        <CourseForm/>
        <ReviewForm onStarClick={this.onStarClick}/>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </form>
    );
  }
}

CoursesHOC.propTypes = {
  change: PropTypes.func,
  handleSubmit:PropTypes.isRequired
};

export default reduxForm({
  form: 'AddCourseForm',
})(CoursesHOC);
