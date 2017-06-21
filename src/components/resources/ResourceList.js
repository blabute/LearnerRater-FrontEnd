import React  from 'react';
import PropTypes from 'prop-types';
import ResourceListRow from './ResourceListRow';

const ResourceList = ({resources}) => {
  //debugger;
  return (
    <div className="resource-list-container">
      {resources.map(resource =>
        <ResourceListRow key={resource.ID} resource={resource}/>
      )}
    </div>
  );
};

ResourceList.propTypes = {
  resources: PropTypes.array.isRequired
};

export default ResourceList;
