
import $ from 'jquery';
import * as apiConsts from './apiConsts';

function getResourceSubjectsData(){
  return $.getJSON(apiConsts.REST_SERVICE_URL + 'GetCategories')
    .then(function(data) {
      return data;
    });
}


class ResourceSubjectApi {
  static getAllResourceSubjects() {
    return new Promise ((resolve) => {
      resolve(Object.assign([], getResourceSubjectsData()));
    });
  }
}

export default ResourceSubjectApi;
