import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/resourcesubjects" activeClassName="active">Resource Subjects</Link>
      </nav>

      <div className="header">

        <h1>LearnerRater</h1>
        <h2>So you learned something. Now let us know what you think.</h2>

      </div>
    </div>
  );
};

export default Header;
