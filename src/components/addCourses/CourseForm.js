import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';

const CourseForm = () =>  {
  return (
    <div>
      <Field tag="input" name="category" component={renderField} type="text" label="Category" />
      <Field tag="input" name="title" component={renderField} type="text" label="Title" />
      <Field tag="input" name="author" component={renderField} type="text" label="Author" />
      <Field tag="textarea" name="description" component={renderField} type="textarea" label="Description" />
      <Field tag="input" name="website" component={renderField} type="text" label="Website" />
      <Field tag="input" name="link" component={renderField} type="text" label="Link" />
    </div>
  );
};


export default CourseForm;
