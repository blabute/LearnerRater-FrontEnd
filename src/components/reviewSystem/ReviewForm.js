import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';
import PropTypes from 'prop-types';
import renderStarRatingComponent from '../common/renderStarRatingComponent';

const ReviewForm = props => {

  const { onStarClick } = props;

  return (
    <div>
      <Field name="Username" tag="input" component={renderField} type="text" label="Username" id="inputUsername"/>
      <Field name="Rating" component={renderStarRatingComponent} label="Rating" onStarClick={onStarClick} id="starRating"/>
      <Field name="Comment" tag="textarea" component={renderField} type="textarea" label="Comment" id="inputComment"/>
    </div>
  );
};

ReviewForm.propTypes = {
  onStarClick: PropTypes.func.isRequired
};

export default ReviewForm;
