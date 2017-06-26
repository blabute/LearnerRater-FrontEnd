import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from '../common/StarRatingComponent';
import { connect } from 'react-redux';
import * as reviewActions from '../../actions/reviewActions';
import { bindActionCreators } from 'redux';

class ReviewListRow extends React.Component  {

  constructor() {
    super();

    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview() {
    const { review, resourceId } = this.props;

    this.props.actions.deleteReview(resourceId, review.ID);
  }

  render() {
    const { review, index, canDelete } = this.props;

    return (
      <div className="review-container">
        {canDelete &&
          <button type="button" onClick={this.deleteReview} id={`btnDeleteReview_${index}`} >Delete</button>
        }
        <h3>{review.Username}</h3>
        <p>{review.Comment}</p>
        <div className="star-rating-container">
          <StarRatingComponent name="Rating" value={review.Rating} editing={false} />
        </div>
      </div>
    );
  }
}

ReviewListRow.propTypes = {
  actions: PropTypes.object.isRequired,
  resourceId: PropTypes.number.isRequired,
  index: PropTypes.number,
  review: PropTypes.object.isRequired,
  canDelete: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    canDelete: state.userInterface.canDelete
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListRow);
