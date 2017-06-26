import React from 'react';
import PropTypes from 'prop-types';
import CourseHOC from './CourseHOC';
import * as subjectActions from '../../actions/resourceSubjectActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.actions.loadResourceSubjects();
  }

  render() {
    const {resourceSubjects} = this.props;
              
    return (
      <div>
        <CourseHOC resourceSubjects={resourceSubjects}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  resourceSubjects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state){
  return {
    resourceSubjects: state.resourceSubjects
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators(subjectActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
