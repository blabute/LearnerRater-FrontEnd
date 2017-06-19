import React from 'react';
import {Field} from 'redux-form';
import renderField from '../common/renderField';

const ReviewForm = () => {
  return (
    <div>
      <Field name="userName" component={renderField} type="text" label="Username" />
      <Field name="userName" component={renderField} type="text" label="Username" />
    </div>
  );
};

export default ReviewForm;
