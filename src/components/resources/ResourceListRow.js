import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import ReviewSystemHOC from '../reviewSystem/ReviewSystemHOC';

const ResourceListRow = ({resource}) => {
  //debugger;
  return (
    <div className="resource-item">
      <div className="resource-item__col-1">

        <div className="resource-item__title">
          <h1 className="resource-title">
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            <Link to="{resource.URL}" activeClassName="active">{resource.Title}</Link>
          </h1>

        </div>

        <div className="resource-item__description"><p>{resource.Description}</p></div>

        <div className="resource-item__footer">

          <div className="resource-item__credentials">
            <span className="title">AUTHOR</span><span className="value">{resource.Author}</span>
            <span className="divider"></span>
            <span className="title">SOURCE</span><span className="value">{resource.Website}</span>
          </div>

          <div className="resource-item__btn-toggle-reviews">
            <button className="btn btn--light">Show Reviews / 7</button>
          </div>

        </div>

        {/* <div>Category: {resource.Category}</div> */}

        </div>{/* // __col-1 */}


        <div className="resource-item__col-2">

          <div className="resource-item__average-rating">
            <div>AVERAGE RATING {resource.AverageRating}</div>
          </div>


          <div className="resource-item__btn-review">
            <ReviewSystemHOC reviews={resource.Reviews} resourceId={resource.ID}/>
          </div>

        </div>{/* // __col-2 */}



    </div>
  );
};

ResourceListRow.propTypes = {
  resource: PropTypes.object.isRequired
};

export default ResourceListRow;
