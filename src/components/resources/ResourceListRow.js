import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import ReviewSystemHOC from '../reviewSystem/ReviewSystemHOC';

const ResourceListRow = ({resource}) => {
  //debugger;
  return (
    <div>
      <div>{resource.Title}</div>
      <div>By: {resource.Author}</div>
      <div>WebSite: {resource.Website}</div>
      <div>Average: {resource.AverageRating}</div>
      <div>Category: {resource.Category}</div>
      <div>Description: {resource.Description}</div>
      <div>URL:
        <Link to="{resource.URL}" activeClassName="active">{resource.URL}</Link>
      </div>
      <div>
        <ReviewSystemHOC reviews={resource.Reviews} resourceId={resource.ID}/>
      </div>
      <hr/>
    </div>
  );
};

ResourceListRow.propTypes = {
  resource: PropTypes.object.isRequired
};

export default ResourceListRow;
