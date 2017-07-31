import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';

const LoginForm = () => {

  return (
    <div>
      <Field name="Username" tag="input" isRequired={true} component={renderField} type="text" label="Username" id="inputUsername"/>
      <Field name="Password" tag="input" isRequired={true} component={renderField} type="password" label="Password" id="inputPassword"/>
    </div>
  );
};

export default LoginForm;
