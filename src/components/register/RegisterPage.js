import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userInterfaceActions from '../../actions/userInterfaceActions';
import ManageRegisterForm from './ManageRegisterForm';
import { browserHistory } from 'react-router'

class RegisterPage extends React.Component {

  constructor() {
    super();

    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  onRegisterClick() {
    const { areLoggedIn } = this.props;

    areLoggedIn ? this.props.actions.logout() : this.props.actions.register();
  }

  render() {

    return (
      <div>
        <ManageRegisterForm />
      </div>
    );
  }
}

RegisterPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
