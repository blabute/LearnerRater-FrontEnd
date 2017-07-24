import React from 'react';
import { Field } from 'redux-form';
import renderFieldMandatory from '../common/renderFieldMandatory';

const LoginForm = () => {

  return (
    <div>
      <Field name="Username" tag="input" component={renderFieldMandatory} type="text" label="Username" id="inputUsername"/>
      <Field name="Password" tag="input" component={renderFieldMandatory} type="text" label="Password" id="inputPassword"/>
    </div>
  );
};

export default LoginForm;
