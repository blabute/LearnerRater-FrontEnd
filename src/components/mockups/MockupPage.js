import React from 'react';
import Header from './Header';
import SectionTitle from './SectionTitle';
import SubjectTile from './SubjectTile';

const MockupPage = () => {
  return (
    <div>
      <Header />
      <SectionTitle />
      <section className="subject-tiles">
        <div className="subject-tile-container">
            <SubjectTile />
        </div>
      </section>
    </div>
  );
};

export default MockupPage;
