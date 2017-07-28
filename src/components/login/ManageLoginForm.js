import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as loginActions from '../../actions/loginActions';
import LoginForm from './LoginForm';
import { reduxForm, change } from 'redux-form';
import { browserHistory } from 'react-router';

class ManageLoginForm extends React.Component {

  constructor() {
    super();

    this.state = {
      errorMessage: null
    };

    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick() {

    const { dispatch, change } = this.props;

    this.props.actions.login()
      .then(() => browserHistory.goBack())
        .catch(error => {
          dispatch(change('Password', ''))
          this.setState({errorMessage: error.responseText});
        });
  }

  render() {

    const { areLoggedIn, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onLoginClick)}>
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
            <LoginForm errorMessage={this.state.errorMessage} />
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
    actions: bindActionCreators(loginActions, dispatch)
  };
}

function mapStateToProps(state){
  return {
    areLoggedIn: state.login.areLoggedIn,
    initialValues: {
      Username: state.login.username
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(postLogin);
