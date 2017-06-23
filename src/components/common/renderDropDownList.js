import React from 'react';
import DropDownList from './DropDownList';

const renderDropDownList = (field) => {

  const { input, label, meta:{touched, error} } = field;

  return (
    <div className="qbox">
      <div className="question">
        <label>{label}</label>
      </div>
      <div className="answer">
        <DropDownList name={input.name} value={input.value} />
         {touched && error &&
        <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default renderDropDownList;
