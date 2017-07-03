import React from 'react';
import PropTypes from 'prop-types';
import AddReviewButton from '../reviewSystem/AddReviewButton';
import ManageReviewOverlay from '../reviewSystem/ManageReviewOverlay';
import ReviewList from '../reviewSystem/ReviewList';
import StarRatingComponent from '../common/StarRatingComponent';
import { computeAverage } from '../../utils/mathHelper';
import ToggleReviewsVisibilityButton from '../reviewSystem/ToggleReviewsVisibilityButton';
import $ from 'jquery';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ResourceListRow extends React.Component {

  constructor() {
    super();

    this.state = {
      isAddReviewOverlayOpen: false,
      areReviewsVisible: false
    };

    this.openAddReviewOverlay = this.openAddReviewOverlay.bind(this);
    this.closeAddReviewOverlay = this.closeAddReviewOverlay.bind(this);
    this.toggleReviewList = this.toggleReviewList.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  openAddReviewOverlay() {
    this.setState({isAddReviewOverlayOpen: true});
  }

  closeAddReviewOverlay() {
    this.setState({isAddReviewOverlayOpen: false});
  }

  deleteCourse(){
    const { resource } = this.props;
    const r = confirm("Do you want to delete this resource?");
    if (r == true) {
      this.props.actions.deleteCourse(resource.ID);
    }
  }

  toggleReviewList() {

    const { resource, animationDuration } = this.props;

    $(`#reviewListContainer_${resource.ID}`).slideToggle({duration: animationDuration});
    this.setState({areReviewsVisible: !this.state.areReviewsVisible});
  }

  render() {

    const { resource } = this.props;
    const listOfRatings = resource.Reviews.map(review => review.Rating);
    const averageRating = computeAverage(listOfRatings);

    return (
      <div className="resource-item">

      <div className="manage-delete manage-delete--resource" onClick={this.deleteCourse} id={resource.ID}>
        <i className="fa fa-trash-o" />
      </div>

        <div className="resource-item__col-1">

          <div className="resource-item__title">
            <h1 className="resource-title">
              <i className="fa fa-graduation-cap" aria-hidden="true" />
              <a href={resource.URL} target="_blank">{resource.Title}</a>
            </h1>
          </div>

          <div className="resource-item__description"><p>{resource.Description}</p></div>

          <div className="resource-item__footer">

            <div className="resource-item__credentials">
              <span className="title">AUTHOR</span><span className="value">{resource.Author}</span>
              <span className="divider" />
              <span className="title">SOURCE</span><span className="value">{resource.Website}</span>
            </div>

            <ToggleReviewsVisibilityButton numberOfReviews={resource.Reviews.length} onClick={this.toggleReviewList}
              areReviewsVisible={this.state.areReviewsVisible}/>

          </div>

          {/* <div>Category: {resource.Category}</div> */}



        </div>{/* // __col-1 */}


        <div className="resource-item__col-2">

          <div className="resource-item__average-rating">
            {averageRating !== null ? (
              <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{fontSize: '13px', fontWeight: 'bold', color: '#888', margin: 'auto 12px' }}>AVERAGE RATING</span>
                <StarRatingComponent name="AverageRating" value={averageRating} editing={false} />
              </div>
            ) : (
              <div>
                Be the first to rate this resource!
              </div>
            )}
          </div>


          <AddReviewButton onClick={this.openAddReviewOverlay}/>

        </div>{/* // __col-2 */}



        <ManageReviewOverlay resourceId={resource.ID} isAddReviewOverlayOpen={this.state.isAddReviewOverlayOpen}
          closeOverlay={this.closeAddReviewOverlay} title={resource.Title} />

        <ReviewList reviews={resource.Reviews} resourceId={resource.ID} />




      </div>
    );
  }
}

ResourceListRow.propTypes = {
  resource: PropTypes.object.isRequired,
  animationDuration: PropTypes.number,
  actions: PropTypes.object.isRequired

};

function mapStateToProps (state){
  //debugger;
  //const subjectName = ownProps.params.subject;
  return {
    resources: state.resources,
    //subject: subjectName
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ResourceListRow);
