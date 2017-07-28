import React from 'react';
import { Field } from 'redux-form';
import renderFieldMandatory from '../common/renderFieldMandatory';

const LoginForm = props => {

  const { errorMessage } = props;

  return (
    <div>
      <Field name="Username" tag="input" component={renderFieldMandatory} type="text" label="Username" id="inputUsername"/>
      <Field name="Password" tag="input" component={renderFieldMandatory} type="password" label="Password" id="inputPassword"/>
      {errorMessage &&
        <div>{errorMessage}</div>
      }
    </div>
  );
};

export default LoginForm;
