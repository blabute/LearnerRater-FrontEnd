import React from 'react';
import StarRatingComponent from '../StarRatingComponent';

const renderStarRatingComponent = (field) => {

  const { input, onStarClick } = field;

  return (
    <StarRatingComponent name={input.name} onStarClick={onStarClick} value={input.value} />
  );
};

export default renderStarRatingComponent;
