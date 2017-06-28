import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';
import PropTypes from 'prop-types';


const CourseForm = (props) =>  {
  const {data} = props;
  return (
    <div style={{marginTop: '30px'}}>
      <div className="qbox">
          <div className="question">
            <label>Category</label>
          </div>
          <div className="answer">
          <Field name="Category" component="select" id="category">
          {data}
          </Field>
        </div>
      </div>
      <Field tag="input" name="Title" id="Title" component={renderField} type="text" label="Title" />
      <Field tag="input" name="Author" id="Author" component={renderField} type="text" label="Author" />
      <Field tag="textarea" name="Description" id="Description" component={renderField} type="textarea" label="Description" />
      <Field tag="input" name="Website" id ="Website" component={renderField} type="text" label="Website" />
      <Field tag="input" name="URL" id="URL"  component={renderField} type="text" label="Link" />
    </div>
  );
};

CourseForm.propTypes = {
  data:PropTypes.array.isRequired
};


export default CourseForm;
