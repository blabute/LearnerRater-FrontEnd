import React from 'react';
import ManageButton from './ManageButton';

const Header = () => {
  return (
    <div>
      <div className="header">

        <div>
          <h1>LearnerRater</h1>
          <h2>So you learned something. Now let us know what you think.</h2>
        </div>
        <ManageButton />

      </div>
    </div>
  );
};

export default Header;
