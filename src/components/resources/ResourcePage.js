import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import ResourceList from './ResourceList';
import {loadResources} from '../../actions/resourceActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ResourcePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  resourceRow(resource, index) {
    return <div key={index}>{resource.ID}</div>;
  }

  render() {
    const {resources} = this.props;
    return (
      <div>
        <Header/>
        <h1>Resource List - All </h1>
        <ResourceList resources={resources}/>
      </div>
    );
  }
}

ResourcePage.propTypes = {
  resources: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired
};

function mapStateToProps (state){
  //debugger;
  return {
    resources: state.resources
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators(loadResources, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ResourcePage);
