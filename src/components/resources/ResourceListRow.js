import React from 'react';
import PropTypes from 'prop-types';
import AddReviewButton from '../reviewSystem/AddReviewButton';
import ManageReviewOverlay from '../reviewSystem/ManageReviewOverlay';
import ReviewList from '../reviewSystem/ReviewList';
import StarRatingComponent from '../common/StarRatingComponent';
import { computeAverage } from '../../utils/mathHelper';
import ToggleReviewsVisibilityButton from '../reviewSystem/ToggleReviewsVisibilityButton';

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
  }

  openAddReviewOverlay() {
    this.setState({isAddReviewOverlayOpen: true});
  }

  closeAddReviewOverlay() {
    this.setState({isAddReviewOverlayOpen: false});
  }

  toggleReviewList() {
    this.setState({areReviewsVisible: !this.state.areReviewsVisible});
  }

  render() {

    const { resource } = this.props;
    const listOfRatings = resource.Reviews.map(review => review.Rating);
    const averageRating = computeAverage(listOfRatings);

    return (
      <div className="resource-item">

      <div className="manage-delete manage-delete--resource">
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

          <ManageReviewOverlay resourceId={resource.ID} isAddReviewOverlayOpen={this.state.isAddReviewOverlayOpen}
            closeOverlay={this.closeAddReviewOverlay} title={resource.Title} />

          {this.state.areReviewsVisible &&
            <ReviewList reviews={resource.Reviews} resourceId={resource.ID}/>
          }


        </div>{/* // __col-1 */}


        <div className="resource-item__col-2">

          <div className="resource-item__average-rating">
            {averageRating !== null ? (
              <div style={{display: 'flex'}}>
                <span style={{fontSize: '13px', fontWeight: 'bold', color: '#888', margin: '11px 12px auto' }}>AVERAGE RATING</span>
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


      </div>
    );
  }
}

ResourceListRow.propTypes = {
  resource: PropTypes.object.isRequired
};

export default ResourceListRow;
