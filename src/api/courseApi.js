import * as constants from './apiConsts';
import $ from 'jquery';

class CourseApi {

  static saveCourse(category, course) {
      const {Category="",Title="", Author="", Description="", Website="", URL="", Username="", Rating="", Comment=""} = course;
      const dataJson = {
            "Author":Author,
            "Category":Category,
            "Description":Description,
            "Reviews":[{
                "Comment":Comment,
                "Rating":Rating,
                "Username":Username
              }
            ],
            "Title":Title,
            "URL":URL,
            "Website":Website
          };

      return $.ajax({
        type: "POST",
        contentType: "application/json",
        url: `${constants.REST_SERVICE_URL}AddResource?category=${Category}`,
        data:  JSON.stringify(dataJson),
      })
      .then((id) => {
        return Object.assign({}, course, { ID: id });
      });
    }

  }


export default CourseApi;
