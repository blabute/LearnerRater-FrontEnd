import React from 'react';
import Header from './Header';
import SectionTitle from './SectionTitle';
import SubjectTile from './SubjectTile';
import Button from './Button';
import ButtonWithIcon from './ButtonWithIcon';

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
      <ButtonWithIcon />
      <Button cssClass={"btn"} buttonLabel={"You be the judge"} />
    </div>
  );
};

export default MockupPage;
