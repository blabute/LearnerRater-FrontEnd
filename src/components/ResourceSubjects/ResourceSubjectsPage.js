import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import ResourceSubjectsList from './ResourceSubjectsList';
import {loadResourceSubjects} from '../../actions/resourceSubjectActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ResourceSubjectsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  resourceSubjectsRow(resourceSubject, index) {
    return <div key={index}>{resourceSubject.Category}</div>;
  }

  render() {
    const {resourceSubjects} = this.props;
    return (
      <div>
        <Header/>
        <h1>Resource Subjects</h1>
        <ResourceSubjectsList resourceSubjects={resourceSubjects}/>
      </div>
    );
  }
}

ResourceSubjectsPage.propTypes = {
  resourceSubjects: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired
};

function mapStateToProps (state){
  //debugger;
  return {
    resourceSubjects: state.resourceSubjects
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators(loadResourceSubjects, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ResourceSubjectsPage);
