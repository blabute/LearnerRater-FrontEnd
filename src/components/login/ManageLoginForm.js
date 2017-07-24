import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userInterfaceActions from '../../actions/userInterfaceActions';
import LoginForm from './LoginForm';
import { reduxForm } from 'redux-form';

class ManageLoginForm extends React.Component {

  constructor() {
    super();

    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick() {

    this.props.actions.login();
  }

  render() {

    const { areLoggedIn } = this.props;

    return (
      <form>
        <div className="qbox" style={{borderBottom: '1px solid #ccc'}}>
          <div className="question">{}</div>
          <div className="answer"><h3>Login</h3></div>
        </div>

        {areLoggedIn ? (
          <div>
            You are already logged in
          </div>
        ) : (
          <div>
            <LoginForm />
            <div className="qbox">
              <div className="question">
                {}
              </div>

              <div className="answer">
                <button type="submit" className="btn" id="btnSubmitLogin">Login</button>
                <button type="button" className="btn" id="btnCancelLogin">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </form>
    );
  }
}

ManageLoginForm.propTypes = {
  actions: PropTypes.object.isRequired,
  areLoggedIn: PropTypes.bool
};

const postLogin = reduxForm({
  form: 'LoginForm',
})(ManageLoginForm);

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

export default connect(mapStateToProps, mapDispatchToProps)(postLogin);
