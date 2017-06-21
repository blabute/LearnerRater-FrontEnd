import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/resourcesubjects" activeClassName="active">Resource Subjects</Link>
      </nav>
  );
};

export default Header;