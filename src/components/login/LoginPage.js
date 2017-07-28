import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userInterfaceActions from '../../actions/userInterfaceActions';
import ManageLoginForm from './ManageLoginForm';
import { browserHistory } from 'react-router'

class LoginPage extends React.Component {

  constructor() {
    super();

    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick() {
    const { areLoggedIn } = this.props;

    areLoggedIn ? this.props.actions.logout() : this.props.actions.login();
  }

  render() {

    return (
      <div>
        <ManageLoginForm />
      </div>
    );
  }
}

LoginPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
