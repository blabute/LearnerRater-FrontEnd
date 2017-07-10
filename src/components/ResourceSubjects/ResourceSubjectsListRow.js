import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import { removeSpaces } from '../../utils/stringHelper';

const ResourceSubjectsListRow = ({resourceSubject}) => {
  return (
    <Link to={'/resources/' + resourceSubject.Category}  className="subject-tile">
      <h1>{resourceSubject.Category}</h1>
      <div className="badge" id={`numberOfResourcesBadge-${removeSpaces(resourceSubject.Category)}`}>
        {resourceSubject.NumberOfResources}
      </div>
    </Link>
  );
};

ResourceSubjectsListRow.propTypes = {
  resourceSubject: PropTypes.object.isRequired
};

export default ResourceSubjectsListRow;
