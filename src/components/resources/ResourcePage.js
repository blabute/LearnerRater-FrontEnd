import React from 'react';
import { Link } from 'react-router';
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

    const mainTitleStyle = {

      fontWeight: 'normal'

    };


    const {resources} = this.props;
    return (
      <div>
        <Header/>

        <div className="main-title">
          <h2><span style={mainTitleStyle}><i className="fa fa-chevron-left" /><Link to="/">Subjects</Link> /&nbsp;</span> React <div className="badge">7</div></h2>
          <button type="button" className="btn"><i className="fa fa-plus" /> ADD RESOURCE LINK</button>
        </div>

        <div className="sort-bar">
          <a href="#">NAME<i className="fa fa-chevron-down" /></a>
          <a href="#"><i className="fa fa-chevron-up" />AVERAGE RATING</a>
        </div>

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
