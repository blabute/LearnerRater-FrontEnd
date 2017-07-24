import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userInterfaceActions from '../../actions/userInterfaceActions';
import { Link } from 'react-router';

class LoginButton extends React.Component {

  constructor() {
    super();

    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick() {
    const { actions: { logout } } = this.props;

    logout();
  }

  render() {
    const { areLoggedIn } = this.props;

    return (
      <div>
        {areLoggedIn ? (
          <button type="button" className="btn" id="btnLogout" onClick={() => {if(confirm('Are you sure you want to logout?')) {this.onLogoutClick();}}} >
            Logout
          </button>
        ) : (
          <button type="button" className="btn" id="btnLogin">
            <Link to="/login" style={{color: "inherit", textDecoration: "inherit"}} >Login</Link>
          </button>
        )}
      </div>
    );
  }
}

LoginButton.propTypes = {
  actions: PropTypes.object.isRequired,
  areLoggedIn: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userInterfaceActions, dispatch)
  };
}

function mapStateToProps(state){
  return {
    areLoggedIn: state.userInterface.areLoggedIn
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
