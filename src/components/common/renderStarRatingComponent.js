import React from 'react';
import StarRatingComponent from '../StarRatingComponent';

const renderStarRatingComponent = (field) => {

  const { input, label, onStarClick, meta:{touched, error} } = field;

  return (
    <div className="qbox">
      <div className="question">
        <label>{label}</label>
      </div>
      <div className="answer">
        <StarRatingComponent name={input.name} onStarClick={onStarClick} value={Number.parseInt(input.value)} />
        {touched && error &&
        <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default renderStarRatingComponent;
