import React from 'react';
import PropTypes from 'prop-types';
import CoursePage from './CoursePage';
import * as subjectActions from '../../actions/resourceSubjectActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { reduxForm, SubmissionError } from 'redux-form';
import * as courseActions from '../../actions/courseActions';
import { browserHistory } from 'react-router';

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.actions.loadResourceSubjects();
    this.onStarClick = this.onStarClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }
  onCancelClick() {
    const { closeOverlay, reset } = this.props;

    this.setState({isOverlay: false});
    closeOverlay();

    return reset();
  }

  onStarClick(nextValue, prevValue, name) {
    this.props.change(name, nextValue);
  }

  onSubmitClick (values) {
  const { closeOverlay, subject, reset} = this.props;
  const {Category="",Title="", Author="", Description="", Website="", URL="", Username="", Rating=""} = values;
    let error={};
    let isError=false;
    const errMsgRequired=" Required";
    const errMaxSize=" Exceeded max field size";
    if (Title.trim()===""){
      error.Title=errMsgRequired;
      isError=true;
    }
    else if (Title.length>100){
      error.Title=errMaxSize;
      isError=true;
    }

    if (Author.trim()===""){
      error.Author=errMsgRequired;
      isError=true;
    }
    else if (Author.length>50){
      error.Author=errMaxSize;
      isError=true;
    }

    if (Description.trim()===""){
      error.Description=errMsgRequired;
      isError=true;

    }
    if (Website.trim()===""){
      error.Website=errMsgRequired;
      isError=true;
    }
    else if (Website.length>50){
      error.Website=errMaxSize;
      isError=true;
    }

    if (URL.trim()===""){
      error.URL=errMsgRequired;
      isError=true;
    }
    else if (!(URL.includes("http://")) && (!URL.includes("https://"))){
        error.URL=" URL link should start with http:// OR https://";
        isError=true;
      }
      else if (URL.length>300){
          error.URL=errMaxSize;
          isError=true;
        }
    if (Username.trim()===""){
          error.Username=errMsgRequired;
          isError=true;
    }
    else if (Username.length>50){
          error.Username=errMaxSize;
          isError=true;
    }
    if (Rating < 1){
          error.Rating=errMsgRequired;
          isError=true;

    }

    if (isError){
      throw new SubmissionError(error);
    }
     else{
      this.props.actions.saveCourse();
      if (subject!==Category)
      {
       browserHistory.push('/resources/'+Category);
       window.location.reload();
      }
      else {
       closeOverlay();
       reset();
      }
     }
  }

  render() {
    const {isAddCourseOverlayOpen, title, handleSubmit, resourceSubjects, subject} = this.props;
    return (
      <div>
        {isAddCourseOverlayOpen &&
        <CoursePage subjectTitle={subject} onStarClick={this.onStarClick} resourceSubjects={resourceSubjects} onCancelClick={this.onCancelClick} onSubmitClick={this.onSubmitClick}
        handleSubmit={handleSubmit} title={title}/>
        }
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  change: PropTypes.func,
  resourceSubjects: PropTypes.array.isRequired,
  closeOverlay: PropTypes.func,
  actions: PropTypes.object.isRequired,
  isAddCourseOverlayOpen: PropTypes.bool,
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  subject: PropTypes.string,
  reset: PropTypes.func
};

function mapStateToProps (state,ownProps){
  return {
    resourceSubjects: state.resourceSubjects,
    initialValues:{
      Category: ownProps.subject,
      Username: state.login.username
    }
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({...courseActions, ...subjectActions}, dispatch)
  };
}

const postAddCourse = reduxForm({
  form: 'CourseForm',
})(ManageCoursePage);

export default connect(mapStateToProps,mapDispatchToProps)(postAddCourse);
