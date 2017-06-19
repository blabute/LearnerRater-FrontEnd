import React from 'react';
import PropTypes from 'prop-types';

const renderField = (props) => {

  const { input, label, type } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
    </div>
  );
};

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default renderField;
