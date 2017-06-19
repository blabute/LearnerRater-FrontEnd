import React from 'react';
import { Field } from 'redux-form';
import renderField from '../common/renderField';
import StarRatingComponent from '../StarRatingComponent';
import PropTypes from 'prop-types';

const ReviewForm = props => {

  const { rating } = props;

  return (
    <div>
      <Field name="userName" component={renderField} type="text" label="Username" />
      <StarRatingComponent
        name="rating"
        value={rating}
      />
      <Field name="comment" component={renderField} type="text" label="Comment" />
    </div>
  );
};

ReviewForm.propTypes = {
  rating: PropTypes.number
};

export default ReviewForm;
