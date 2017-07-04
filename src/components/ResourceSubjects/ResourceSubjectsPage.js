import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import ResourceSubjectsList from './ResourceSubjectsList';
import * as subjectActions from '../../actions/resourceSubjectActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ResourceSubjectsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.actions.loadResourceSubjects();
  }

  render() {
    const { resourceSubjects } = this.props;
    const url = this.props.location.pathname;

    return (
      <div>
        <Header currentPage={url} />
        <h2 className="section-title">Subjects</h2>
        <ResourceSubjectsList resourceSubjects={resourceSubjects}/>
      </div>
    );
  }
}

ResourceSubjectsPage.propTypes = {
  resourceSubjects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object
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

export default connect(mapStateToProps,mapDispatchToProps)(ResourceSubjectsPage);
