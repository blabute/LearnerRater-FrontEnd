import * as constants from './apiConsts';
import $ from 'jquery';

class UserApi {

  static login(user) {

    return $.ajax({
      type: "GET",
      url: `${constants.REST_SERVICE_URL}GetUser/${user.Username}`,
    })
    .then(password => {
      return password;
    });
  }

  static register(user) {

    return $.ajax({
      type: "POST",
      contentType: "application/json",
      url: `${constants.REST_SERVICE_URL}AddUser`,
      data: JSON.stringify(user)
    })
    .then(() => {
      return user;
    });
  }
}

export default UserApi;
