import React from 'react';
import PropTypes from 'prop-types';
import CourseOverlay from './CourseOverlay';
import * as subjectActions from '../../actions/resourceSubjectActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ManageCourseOverlay extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.actions.loadResourceSubjects();
    this.onCancelClick = this.onCancelClick.bind(this);
  }
  onCancelClick() {
    const { closeOverlay } = this.props;

    this.setState({isOverlay: false});
    closeOverlay();

    //return reset();
  }

  render() {
    const {resourceSubjects, isAddCourseOverlayOpen} = this.props;
    return (
      <div>
        {isAddCourseOverlayOpen &&
        <CourseOverlay resourceSubjects={resourceSubjects} onCancelClick={this.onCancelClick}/>
        }
      </div>
    );
  }
}

ManageCourseOverlay.propTypes = {
  resourceSubjects: PropTypes.array.isRequired,
  closeOverlay: PropTypes.func,
  actions: PropTypes.object.isRequired,
  isAddCourseOverlayOpen: PropTypes.bool
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

export default connect(mapStateToProps,mapDispatchToProps)(ManageCourseOverlay);
