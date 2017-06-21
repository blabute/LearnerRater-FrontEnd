import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router';

const ResourceSubjectsListRow = ({resourceSubject}) => {
  return (
    <div className="subject-tile">
      <h1>{resourceSubject.Category}</h1>
      <div className="badge">{resourceSubject.NumberOfResources}</div>
    </div>
  );
};

ResourceSubjectsListRow.propTypes = {
  resourceSubject: PropTypes.object.isRequired
};

export default ResourceSubjectsListRow;
