import React from 'react';
import PropTypes from 'prop-types';
import CoursePage from './CoursePage';
import * as subjectActions from '../../actions/resourceSubjectActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { reduxForm, SubmissionError } from 'redux-form';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.actions.loadResourceSubjects();
    this.onStarClick = this.onStarClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }
  onCancelClick() {
    const { closeOverlay } = this.props;

    this.setState({isOverlay: false});
    closeOverlay();

    //return reset();
  }

  onStarClick(nextValue, prevValue, name) {
    this.props.change(name, nextValue);
  }

  onSubmitClick (values) {
    //debugger;
  const { closeOverlay } = this.props;
  const {Category="React",Title="", Author="", Description="", Website="", URL="", Username="", Rating=""} = values;

    let error={};
    let isError=false;
    const errMsgRequired=" Required";
    if (Category.trim()===""){
      error.Category=errMsgRequired;
      isError=true;

    }
    if (Title.trim()===""){
      error.Title=errMsgRequired;
      isError=true;

    }
    if (Author.trim()===""){
      error.Author=errMsgRequired;
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
    if (URL.trim()===""){
      error.URL=errMsgRequired;
      isError=true;
    }

    if (Username.trim()===""){
          error.Username=errMsgRequired;
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
       this.props.actions.saveCourse(Category);
       closeOverlay();
     }
  }

  render() {
    const {resourceSubjects, isAddCourseOverlayOpen, title, handleSubmit} = this.props;
    return (
      <div>
        {isAddCourseOverlayOpen &&
        <CoursePage onStarClick={this.onStarClick} resourceSubjects={resourceSubjects} onCancelClick={this.onCancelClick} onSubmitClick={this.onSubmitClick}
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
  title: PropTypes.string
};

function mapStateToProps (state){
  return {
    resourceSubjects: state.resourceSubjects
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
