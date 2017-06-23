import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';
import renderDropDownList from '../common/renderDropDownList';

const CourseForm = () =>  {
  return (
    <div>
      <Field name="category" component={renderDropDownList} label="Category" id="category"/>
      <Field tag="input" name="title" component={renderField} type="text" label="Title" id="title"/>
      <Field tag="input" name="author" component={renderField} type="text" label="Author" id="author"/>
      <Field tag="textarea" name="description" component={renderField} type="textarea" label="Description" id="description"/>
      <Field tag="input" name="website" component={renderField} type="text" label="Website" id="website"/>
      <Field tag="input" name="link" component={renderField} type="text" label="Link" id="link"/>
    </div>
  );
};


export default CourseForm;
