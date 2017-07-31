import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userActions from '../../actions/userActions';
import RegisterForm from './RegisterForm';
import { reduxForm, change } from 'redux-form';
import { browserHistory, Link } from 'react-router';
import validate from './validate';

class ManageRegisterForm extends React.Component {

  constructor() {
    super();

    this.state = {
      errorMessage: null
    };

    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  onRegisterClick(values) {

    const { dispatch, change } = this.props;

    validate(values);

    this.props.actions.register()
      .then(() => browserHistory.goBack())
        .catch(error => {
          dispatch(change('Password', ''))
          this.setState({errorMessage: error.responseText});
        });
  }

  onCancelClick() {
    browserHistory.goBack();
  }

  render() {

    const { areLoggedIn, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onRegisterClick)}>
        <div className="qbox" style={{borderBottom: '1px solid #ccc'}}>
          <div className="question">{}</div>
          <div className="answer"><h3>Register</h3></div>
        </div>

        {areLoggedIn ? (
          <div>
            You are already logged in
          </div>
        ) : (
          <div>
            <RegisterForm />
            <div>{this.state.errorMessage}</div>
            <div className="qbox">
              <div className="question">
                {}
              </div>

              <div className="answer">
                <button type="submit" className="btn" id="btnSubmitRegister">Register</button>
                <button type="button" className="btn" id="btnCancelRegister" onClick={this.onCancelClick}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </form>
    );
  }
}

ManageRegisterForm.propTypes = {
  actions: PropTypes.object.isRequired,
  areLoggedIn: PropTypes.bool
};

const postRegister = reduxForm({
  form: 'RegisterForm',
})(ManageRegisterForm);

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
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

export default connect(mapStateToProps, mapDispatchToProps)(postRegister);
