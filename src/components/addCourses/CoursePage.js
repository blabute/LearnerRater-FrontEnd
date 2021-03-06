import React from 'react';
import ReviewForm from '../reviewSystem/ReviewForm';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';
//import * as categories from '../../api/categories';

class CoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      isOverlay: false
    };
  }

  render() {
    const { onStarClick, handleSubmit, resourceSubjects, onCancelClick, onSubmitClick } = this.props;
    // const ddOptions = resourceSubjects.map((resourceSubject) =>
    // <option key={resourceSubject.Category} value={resourceSubject.Category} >{resourceSubject.Category}</option>);

    return (
       <form onSubmit={handleSubmit(onSubmitClick)} className="form--add-resource">
        <div className="main-title">
          <h2>Add Resource Link</h2>
        </div>
        <CourseForm dropDownOptions={resourceSubjects}/>
        <ReviewForm onStarClick={onStarClick}/>
        <div className="qbox">
          <div className="question" />
          <div className="answer">
            <button type="submit" className="btn" id="btnSubmitCourse">Submit</button>
            <button type="button" className="btn" onClick={onCancelClick} id="btnCancelCourse">Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

CoursePage.propTypes = {
  onStarClick: PropTypes.func,
  change: PropTypes.func,
  handleSubmit:PropTypes.func,
  resourceSubjects:PropTypes.array.isRequired,
  onCancelClick:PropTypes.func,
  onSubmitClick:PropTypes.func
};

export default CoursePage;
