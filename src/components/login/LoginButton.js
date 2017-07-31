import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userActions from '../../actions/userActions';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

class LoginButton extends React.Component {

  constructor() {
    super();

    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.navigateToLoginPage = this.navigateToLoginPage.bind(this);
  }

  onLogoutClick() {
    const { actions: { logout } } = this.props;

    logout();
  }

  navigateToLoginPage() {
    browserHistory.push("/login");
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
          <button type="button" className="btn" id="btnLogin" onClick={this.navigateToLoginPage}>Login</button>
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
    actions: bindActionCreators(userActions, dispatch)
  };
}

function mapStateToProps(state){
  return {
    areLoggedIn: state.login.areLoggedIn
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
