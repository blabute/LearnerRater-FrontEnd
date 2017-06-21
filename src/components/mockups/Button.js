import React from 'react';



const Button = (props) => {

  const {buttonLabel, cssClass} = props;

  return (

    <button type="button" className={cssClass}>{buttonLabel}</button>

  );
};

export default Button;
