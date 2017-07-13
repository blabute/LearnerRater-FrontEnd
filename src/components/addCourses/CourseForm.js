import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import renderFieldMandatory from '../common/renderFieldMandatory';

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
      <Field tag="input" name="Title" id="Title" component={renderFieldMandatory} type="text" label="Title" />
      <Field tag="input" name="Author" id="Author" component={renderFieldMandatory} type="text" label="Author" />
      <Field tag="textarea" name="Description" id="Description" component={renderFieldMandatory} type="textarea" label="Description" />
      <Field tag="input" name="Website" id ="Website" component={renderFieldMandatory} type="text" label="Website" />
      <Field tag="input" name="URL" id="URL"  component={renderFieldMandatory} type="text" label="Link" />
    </div>
  );
};

CourseForm.propTypes = {
  dropDownOptions: PropTypes.array.isRequired
};

export default CourseForm;
