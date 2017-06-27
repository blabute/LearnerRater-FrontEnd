import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import ResourceList from './ResourceList';
import * as resourceActions from '../../actions/resourceActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ManageCourseOverlay from '../addCourses/ManageCourseOverlay';


class ResourcePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    //debugger;
    this.state = {
      resource: {subjectTitle: props.params.subject},
      isAddCourseOverlayOpen: false
    };
    this.props.actions.loadResources(this.state.resource.subjectTitle);

    this.openAddCourseOverlay = this.openAddCourseOverlay.bind(this);
    this.closeAddCourseOverlay = this.closeAddCourseOverlay.bind(this);
  }

  openAddCourseOverlay() {
    this.setState({isAddCourseOverlayOpen: true});
  }

  closeAddCourseOverlay() {
    this.setState({isAddCourseOverlayOpen: false});
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
          <h2><span style={mainTitleStyle}><i className="fa fa-chevron-left" /><Link to="/">Subjects</Link> /&nbsp;</span> {this.state.resource.subjectTitle} <div className="badge">{resources.length}</div></h2>
          <button type="button" onClick={this.openAddCourseOverlay} className="btn"><i className="fa fa-plus" /> ADD RESOURCE LINK</button>
        </div>

        <div className="sort-bar">
          <a href="#">NAME<i className="fa fa-chevron-down" /></a>
          <a href="#"><i className="fa fa-chevron-up" />AVERAGE RATING</a>
        </div>

        <ResourceList resources={resources} animationDuration={250}/>

        <ManageCourseOverlay isAddCourseOverlayOpen={this.state.isAddCourseOverlayOpen}
          closeOverlay={this.closeAddCourseOverlay}  />
      </div>
    );
  }
}

ResourcePage.propTypes = {
  resources: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps){
  //debugger;
  const subjectName = ownProps.params.subject;
  return {
    resources: state.resources,
    subject: subjectName
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators(resourceActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ResourcePage);
