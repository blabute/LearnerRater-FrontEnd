import React from 'react';
import { Link, IndexLink } from 'react-router';
import ManageButton from './ManageButton';

const Header = () => {
  return (
    <div>
      <nav>
        <IndexLink to="/" activeClassName="active">Resource Subjects</IndexLink>
        {" | "}
        <Link to="/resources" activeClassName="active">Resources</Link>
      </nav>

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
