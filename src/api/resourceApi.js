import $ from 'jquery';

function getResourcesData(category){
  return $.getJSON('http://web5dev:80/LearnerRaterWCF/RESTApi.svc/GetResources?category='+category)
    .then(function(data) {
      return data;
    });
}

class ResourceApi {
  static getAllResources(category) {
    //debugger;
    return new Promise ((resolve) => {
      resolve(Object.assign([], getResourcesData(category)));
    });
  }
}

export default ResourceApi;
