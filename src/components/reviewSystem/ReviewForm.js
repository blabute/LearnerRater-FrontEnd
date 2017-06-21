import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';
import PropTypes from 'prop-types';
import renderStarRatingComponent from '../common/renderStarRatingComponent';

const ReviewForm = props => {

  const { onStarClick } = props;

  return (
    <div>
      <Field tag="input" name="userName" component={renderField} type="text" label="Username" />
      <Field name="rating" component={renderStarRatingComponent} label="Rating" onStarClick={onStarClick} />
      <Field tag="textarea" name="comment" component={renderField} type="textarea" label="Comment" />
    </div>
  );
};

ReviewForm.propTypes = {
  onStarClick: PropTypes.func.isRequired
};

export default ReviewForm;
