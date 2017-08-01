import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NameBadge = props => {

  const { username } = props;

  return (
    <div>
      Hello, {username}
    </div>
  );
};

NameBadge.propTypes = {
  username: PropTypes.bool
};

function mapStateToProps(state){

  const username = state.login.fullName || state.login.username;

  return {
    username: username
  };
}

export default connect(mapStateToProps)(NameBadge);
