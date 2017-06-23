import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';
import * as categories from '../../api/categories';

const CourseForm = () =>  {
  return (
    <div>
      <div className="qbox">
          <div className="question">
            <label>Category</label>
          </div>
          <div className="answer">
          <Field name="category" component="select" id="category">
              {categories.items.map((category) =>
              <option key={category.id} value={category.itemName}>{category.itemName}</option>
              )}
          </Field>
        </div>
      </div>
      <Field tag="input" name="title" component={renderField} type="text" label="Title" />
      <Field tag="input" name="author" component={renderField} type="text" label="Author" />
      <Field tag="textarea" name="description" component={renderField} type="textarea" label="Description" />
      <Field tag="input" name="website" component={renderField} type="text" label="Website" />
      <Field tag="input" name="link" component={renderField} type="text" label="Link" />
    </div>
  );
};


export default CourseForm;
