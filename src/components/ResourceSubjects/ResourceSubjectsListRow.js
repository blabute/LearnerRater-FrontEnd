import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const ResourceSubjectsListRow = ({resourceSubject}) => {
  return (
    <Link to={'/resources/' + resourceSubject.Category} >
      <div className="subject-tile">
        <h1>{resourceSubject.Category}</h1>
        <div className="badge">{resourceSubject.NumberOfResources}</div>
      </div>
    </Link>
  );
};

ResourceSubjectsListRow.propTypes = {
  resourceSubject: PropTypes.object.isRequired
};

export default ResourceSubjectsListRow;
