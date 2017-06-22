import React from 'react';
import PropTypes from 'prop-types';

const renderField = (props) => {

  const {input, label, type, id, meta:{touched, error} } = props;

  return (
    <div className="qbox">
      <div className="question">
        <label>{label}</label>
      </div>
      <div className="answer">
        <props.tag {...input} placeholder={label} type={type} id={id}/>
        {touched && error &&
        <span className="error">{error}</span>}
      </div>
    </div>
  );
};

renderField.propTypes = {
  tag: PropTypes.string,
  id: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

export default renderField;
