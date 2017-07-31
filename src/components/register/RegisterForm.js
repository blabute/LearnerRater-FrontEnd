import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';

const RegisterForm = () => {

  return (
    <div>
      <Field name="Username" tag="input" isRequired={true} component={renderField} type="text" label="Username" id="inputUsername"/>
      <Field name="Password" tag="input" isRequired={true} component={renderField} type="password" label="Password" id="inputPassword"/>
      <Field name="ConfirmPassword" tag="input" isRequired={true} component={renderField} type="password" label="Confirm Password" id="inputConfirmPassword"/>
      <Field name="Email" tag="input" isRequired={true} component={renderField} type="email" label="Email" id="inputEmail"/>
      <Field name="FullName" tag="input" isRequired={true} component={renderField} type="text" label="Full Name" id="input"/>
    </div>
  );
};

export default RegisterForm;
