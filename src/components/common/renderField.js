import React from 'react';
import PropTypes from 'prop-types';

const renderField = (props) => {

  const { input, label, type } = props;

  return (
    <div className="qbox">
      <div className="question">
        <label>{label}</label>
      </div>
      <div className="answer">
        <input {...input} placeholder={label} type={type} />
      </div>
    </div>
  );
};

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default renderField;
