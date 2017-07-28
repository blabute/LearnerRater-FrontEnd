import * as constants from './apiConsts';
import $ from 'jquery';

class LoginApi {

  static login(login) {

    return $.ajax({
      type: "POST",
      contentType: "application/json",
      url: `${constants.REST_SERVICE_URL}Login`,
      data: JSON.stringify(login),
    })
    .then(() => {
      return login;
    });
  }
}

export default LoginApi;
