import * as constants from './apiConsts';
import $ from 'jquery';

class UserApi {

  static login(user) {

    return $.ajax({
      type: "POST",
      contentType: "application/json",
      url: `${constants.REST_SERVICE_URL}Login`,
      data: JSON.stringify(user),
    })
    .then(() => {
      return user;
    });
  }

  static register(user) {

    return $.ajax({
      type: "POST",
      contentType: "application/json",
      url: `${constants.REST_SERVICE_URL}AddUser`,
      data: JSON.stringify(user),
    })
    .then(() => {
      return user;
    });
  }
}

export default UserApi;
