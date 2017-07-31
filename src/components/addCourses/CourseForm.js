import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import renderField from '../common/renderField';

const CourseForm = (props) =>  {

  const {dropDownOptions} = props;

  return (
    <div style={{marginTop: '30px'}}>
      <div className="qbox">
          <div className="question">
            <label>Category</label>
          </div>
          <div className="answer">
          <Field name="Category" component="select" id="category">
            {dropDownOptions.map((dropDownOption) =>
              <option key={dropDownOption.Category} value={dropDownOption.Category} >{dropDownOption.Category}</option>
            )}
          </Field>
        </div>
      </div>
      <Field tag="input" name="Title" isRequired={true} id="Title" component={renderField} type="text" label="Title" />
      <Field tag="input" name="Author" isRequired={true} id="Author" component={renderField} type="text" label="Author" />
      <Field tag="textarea" name="Description" isRequired={true} id="Description" component={renderField} type="textarea" label="Description" />
      <Field tag="input" name="Website" isRequired={true} id ="Website" component={renderField} type="text" label="Website" />
      <Field tag="input" name="URL" isRequired={true} id="URL"  component={renderField} type="text" label="Link" />
    </div>
  );
};

CourseForm.propTypes = {
  dropDownOptions: PropTypes.array.isRequired
};

export default CourseForm;
