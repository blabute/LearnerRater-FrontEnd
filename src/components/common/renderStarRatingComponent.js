import React from 'react';
import StarRatingComponent from './StarRatingComponent';

const renderStarRatingComponent = (field) => {

  const { input, isRequired, label, onStarClick, meta:{touched, error} } = field;

  return (
    <div className="qbox qbox--starrating">
      <div className="question">
        <label>{label}
          {isRequired && <span className="is-required">*</span>}
        </label>
      </div>
      <div className="answer">
        <StarRatingComponent name={input.name} onStarClick={onStarClick} value={Number.parseInt(input.value)} />
        {touched && error &&
        <span className="error"><i className="fa fa-exclamation-circle" />{error}</span>}
      </div>
    </div>
  );
};

export default renderStarRatingComponent;
