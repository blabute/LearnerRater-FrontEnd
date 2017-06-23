
import $ from 'jquery';

function getResourceSubjectsData(){
  return $.getJSON('http://web5dev:80/LearnerRaterWCF/RESTApi.svc/GetCategories')
    .then(function(data) {
      return data;
    });
}


class ResourceSubjectApi {
  static getAllResourceSubjects() {
    //debugger;
    return new Promise ((resolve) => {
      resolve(Object.assign([], getResourceSubjectsData()));
    });
  }
}

export default ResourceSubjectApi;
