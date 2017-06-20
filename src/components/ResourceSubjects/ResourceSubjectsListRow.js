import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router';

const ResourceSubjectsListRow = ({resourceSubject}) => {
  return (
    <tr>
      <td>{resourceSubject.Category}</td>
      <td>{resourceSubject.NumberOfResources}</td>
    </tr>
  );
};

ResourceSubjectsListRow.propTypes = {
  resourceSubject: PropTypes.object.isRequired
};

export default ResourceSubjectsListRow;
