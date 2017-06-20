import React  from 'react';
import PropTypes from 'prop-types';
import ResourceSubjectsListRow from './ResourceSubjectsListRow';

const ResourceSubjectsList = ({resourceSubjects}) => {
  //debugger;
  return (
    <table>
      <thead>
      <tr>
        <th>Category</th>
        <th>NumberOfResources</th>
      </tr>
      </thead>
      <tbody>
      {resourceSubjects.map(resourceSubject =>
        <ResourceSubjectsListRow key={resourceSubject.Category} resourceSubject={resourceSubject}/>
      )}
      </tbody>
    </table>
  );
};

ResourceSubjectsList.propTypes = {
  resourceSubjects: PropTypes.array.isRequired
};

export default ResourceSubjectsList;
