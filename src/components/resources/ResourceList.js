import React  from 'react';
import PropTypes from 'prop-types';
import ResourceListRow from './ResourceListRow';

const ResourceList = props => {

  const { resources, animationDuration } = props;

  return (
    <div className="resource-list-container">
      {resources.map(resource =>
        <ResourceListRow key={resource.ID} resource={resource} animationDuration={animationDuration}/>
      )}
    </div>
  );
};

ResourceList.propTypes = {
  resources: PropTypes.array.isRequired,
  animationDuration: PropTypes.number,
};

export default ResourceList;
