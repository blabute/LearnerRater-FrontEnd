import React from 'react';
import ManageButton from './ManageButton';
import LoginButton from '../login/LoginButton';
import NameBadge from './NameBadge';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = props => {

  const { currentPage, areLoggedIn } = props;

  return (
    <div>
      <div className="header">

        <div>
          <h1>LearnerRater</h1>
          <h2>So you learned something. Now let us know what you think.</h2>
        </div>

        {areLoggedIn &&
          <NameBadge />
        }
        <LoginButton />
        {currentPage != "/" && areLoggedIn &&
          <ManageButton />
        }

      </div>
    </div>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string,
  areLoggedIn: PropTypes.bool
};

function mapStateToProps(state){
  return {
    areLoggedIn: state.login.areLoggedIn
  };
}

export default connect(mapStateToProps)(Header);
