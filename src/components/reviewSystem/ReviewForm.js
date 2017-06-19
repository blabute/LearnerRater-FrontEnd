import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';
import StarRatingComponent from '../StarRatingComponent';
import PropTypes from 'prop-types';

const ReviewForm = props => {

  const { onStarClick } = props;

  return (
    <div>
      <Field name="userName" component={renderField} type="text" label="Username" />
      <StarRatingComponent name="rating" onStarClick={onStarClick} />
      <Field name="comment" component={renderField} type="text" label="Comment" />
    </div>
  );
};

ReviewForm.propTypes = {
  rating: PropTypes.number,
  onStarClick: PropTypes.func
};

export default ReviewForm;
