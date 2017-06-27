import React from 'react';
import PropTypes from 'prop-types';
import CourseOverlay from './CourseOverlay';
import * as subjectActions from '../../actions/resourceSubjectActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { reduxForm, SubmissionError } from 'redux-form';
import * as courseActions from '../../actions/courseActions';

class ManageCourseOverlay extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.actions.loadResourceSubjects();
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }
  onCancelClick() {
    const { closeOverlay } = this.props;

    this.setState({isOverlay: false});
    closeOverlay();

    //return reset();
  }
  onSubmitClick (values) {
    //debugger;
  const { closeOverlay } = this.props;
  const {category="React",title="", author="", description="", website="", link="", Username="", Rating="1"} = values;

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
       this.props.actions.saveCourse(category);
       closeOverlay();
     }
  }

  render() {
    const {resourceSubjects, isAddCourseOverlayOpen, title, handleSubmit} = this.props;
    return (
      <div>
        {isAddCourseOverlayOpen &&
        <CourseOverlay resourceSubjects={resourceSubjects} onCancelClick={this.onCancelClick} onSubmitClick={this.onSubmitClick}
        handleSubmit={handleSubmit} title={title}/>
        }
      </div>
    );
  }
}

ManageCourseOverlay.propTypes = {
  actions: PropTypes.object.isRequired,
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
})(ManageCourseOverlay);

export default connect(mapStateToProps,mapDispatchToProps)(postAddCourse);
