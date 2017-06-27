import * as constants from './apiConsts';
import $ from 'jquery';

class CourseApi {

  static saveCourse(category, course) {

    return $.ajax({
      type: "POST",
      contentType: "application/json",
      url: `${constants.REST_SERVICE_URL}AddResource?category=${category}`,
      data: JSON.stringify(course),
    })
    .then((id) => {
      return Object.assign({}, course, { ID: id });
    });
  }

}

export default CourseApi;
