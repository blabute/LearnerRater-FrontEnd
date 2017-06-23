import * as types from './actionTypes';
import ResourceApi from '../api/resourceApi';

export function loadResourcesSucess(resources) {
  return { type: types.LOAD_RESOURCES_SUCCESS, resources};
}

export function loadResources(category){
  return function(dispatch) {
    //debugger;
    return ResourceApi.getAllResources(category).then(resources => {
      dispatch(loadResourcesSucess(resources));
    }).catch(error => {
      throw(error);
    });
  };
}
