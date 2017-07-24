import React from 'react';
import ManageButton from './ManageButton';
import LoginButton from '../login/LoginButton';
import PropTypes from 'prop-types';

const Header = props => {

  const { currentPage } = props;

  return (
    <div>
      <div className="header">

        <div>
          <h1>LearnerRater</h1>
          <h2>So you learned something. Now let us know what you think.</h2>
        </div>

        <LoginButton />
        {currentPage != "/" &&
          <ManageButton />
        }

      </div>
    </div>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string
};

export default Header;
