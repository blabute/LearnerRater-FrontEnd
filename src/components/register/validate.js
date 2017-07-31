import { SubmissionError } from 'redux-form';

function validate(values) {

  const { Username, Password, ConfirmPassword, Email, FullName } = values;
  const errMsgRequired = " Required";
  const errMsgMaxLength = " Exceeded max field size";
  let errors = {};
  let isError = false;

  if (!Username) {
    errors.Username = errMsgRequired;
    isError = true;
  }
  else if (Username.length > 50) {
    errors.Username = errMsgMaxLength;
    isError = true;
  }

  if (!Password){
    errors.Password = errMsgRequired;
    isError = true;
  } else if(Password !== ConfirmPassword){
    errors.Password = ' testing';
    isError = true;
  }

  if (!ConfirmPassword){
    errors.ConfirmPassword = errMsgRequired;
    isError = true;
  }

  if (!Email){
    errors.Email = errMsgRequired;
    isError = true;
  }

  if (!FullName){
    errors.FullName = errMsgRequired;
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(errors);
  }
}

export default validate;
