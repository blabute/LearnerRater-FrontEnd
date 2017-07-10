import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import ResourceList from './ResourceList';
import * as resourceActions from '../../actions/resourceActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ManageCoursePage from '../addCourses/ManageCoursePage';

const sortDirectionAsc = "asc";
const sortDirectionDesc = "desc";

class ResourcePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resource: {subjectTitle: props.params.subject},
      isAddCourseOverlayOpen: false,
      sortBy: {columnName: "Title", direction: sortDirectionAsc}
    };
    this.load_Resources(this.state.resource.subjectTitle);

    this.openAddCourseOverlay = this.openAddCourseOverlay.bind(this);
    this.closeAddCourseOverlay = this.closeAddCourseOverlay.bind(this);
    this.load_Resources = this.load_Resources.bind(this);
    this.sortBarClick = this.sortBarClick.bind(this);
  }

  openAddCourseOverlay() {
    this.setState({isAddCourseOverlayOpen: true});
  }

  closeAddCourseOverlay() {
    this.setState({isAddCourseOverlayOpen: false});
  }

  load_Resources(subjectTitle){
  this.props.actions.loadResources(subjectTitle);
  }

  toggleSortState(columnName){
    let direction = null;
    if(this.state.sortBy.direction === sortDirectionAsc) direction = sortDirectionDesc;
    else direction = sortDirectionAsc;

    const sortBy = {
      columnName: columnName,
      direction: direction
    };
    this.setState({sortBy:sortBy});
  }

  getChevronClassname(columnName, sortBy){
    if(columnName === sortBy.columnName){
      if(sortBy.direction === sortDirectionAsc)
        return "fa fa-chevron-up";
      else return "fa fa-chevron-down";
    }
    else return "";
  }

  compare(sortBy) {
    let sortOrder = 1;
    if(sortBy.direction === sortDirectionDesc) sortOrder = -1;
    return function (a,b) {
        let result = 0;
        if(typeof a[sortBy.columnName] === "number" ){
          result = (parseInt(a[sortBy.columnName]) < parseInt(b[sortBy.columnName])) ? -1 : (parseInt(a[sortBy.columnName]) > parseInt(b[sortBy.columnName])) ? 1 : 0;
        }
        else result = (a[sortBy.columnName].toLowerCase() < b[sortBy.columnName].toLowerCase()) ? -1 : (a[sortBy.columnName].toLowerCase() > b[sortBy.columnName].toLowerCase()) ? 1 : 0;

        return result * sortOrder;
    };
}

  sortResources(resources, sortBy){
    let sortedResources = null;
    sortedResources =[].slice.call(resources).sort(this.compare(sortBy));
    return sortedResources;
  }

  sortBarClick(columnName){
    this.toggleSortState(columnName);
  }

  render() {
    const mainTitleStyle = {

      fontWeight: 'normal',
      whiteSpace: 'nowrap'

    };

    let resources = this.sortResources(this.props.resources,this.state.sortBy);

    return (
      <div>
        <Header/>
        <ManageCoursePage subject={this.state.resource.subjectTitle} isAddCourseOverlayOpen={this.state.isAddCourseOverlayOpen}
          closeOverlay={this.closeAddCourseOverlay} />
        {!this.state.isAddCourseOverlayOpen &&
        <div>
        <div className="main-title">
          <h2>
            <span style={mainTitleStyle}>
              <i className="fa fa-chevron-left sm-query-hide" />
              <Link to="/">Subjects</Link>
              /&nbsp;
            </span>
            {this.state.resource.subjectTitle}
            <div className="badge" id={`numberOfReviewsBadge`}>
              {resources.length}
            </div>
          </h2>
          <button type="button" onClick={this.openAddCourseOverlay} className="btn"><i className="fa fa-plus" id="btnAddCourse"/> ADD RESOURCE LINK</button>
        </div>


        <div className="sort-bar">
          <a href="#" onClick = {()=>this.sortBarClick("Title")}>NAME<i className={this.getChevronClassname("Title",this.state.sortBy)} /></a>
          <a href="#" onClick = {()=>this.sortBarClick("AverageRating")}><i className={this.getChevronClassname("AverageRating", this.state.sortBy)} />AVERAGE RATING</a>
        </div>

        <ResourceList resources={resources} animationDuration={250}  />
        </div>
      }

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
