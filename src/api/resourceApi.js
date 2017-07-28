import $ from 'jquery';
import * as apiConsts from './apiConsts';

function getResourcesData(category){
  return $.getJSON(apiConsts.REST_SERVICE_URL + 'GetResources?category='+category)
    .then(function(data) {
      return data;
    });
}

class ResourceApi {
  static getAllResources(category) {
    return new Promise ((resolve) => {
      resolve(Object.assign([], getResourcesData(category)));
    });
  }
}

export default ResourceApi;
