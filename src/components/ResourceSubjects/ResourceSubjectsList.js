import React  from 'react';
import PropTypes from 'prop-types';
import ResourceSubjectsListRow from './ResourceSubjectsListRow';

const ResourceSubjectsList = ({resourceSubjects}) => {
  //debugger;
  return (
    <section className="subject-tiles">

      <div className="subject-tile-container">

        {resourceSubjects.map(resourceSubject =>
          <ResourceSubjectsListRow key={resourceSubject.Category} resourceSubject={resourceSubject}/>
        )}

      </div>

    </section>
  );
};

ResourceSubjectsList.propTypes = {
  resourceSubjects: PropTypes.array.isRequired
};

export default ResourceSubjectsList;
