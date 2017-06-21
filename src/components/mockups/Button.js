import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {

  const {buttonLabel, cssClass} = props;

  return (

    <button type="button" className={cssClass}>{buttonLabel}</button>

  );
};

Button.propTypes = {
  buttonLabel: PropTypes.string,
  cssClass: PropTypes.string
};

export default Button;
