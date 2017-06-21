import * as types from './actionTypes';
import ResourceApi from '../api/mockResourceApi';

export function loadResourcesSucess(resources) {
  return { type: types.LOAD_RESOURCES_SUCCESS, resources};
}

export function loadResources(){
  return function(dispatch) {
    //debugger;
    return ResourceApi.getAllResources().then(resources => {
      dispatch(loadResourcesSucess(resources));
    }).catch(error => {
      throw(error);
    });
  };
}
