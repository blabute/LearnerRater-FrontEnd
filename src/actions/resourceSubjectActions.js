import * as types from './actionTypes';
import ResourceSubjectApi from '../api/mockResourceSubjectApi';

export function loadResourceSubjectsSucess(resourceSubjects) {
  return { type: types.LOAD_RESOURCESUBJECT_SUCCESS, resourceSubjects};
}

export function loadResourceSubjects(){
  return function(dispatch) {
    //debugger;
    return ResourceSubjectApi.getAllResourceSubjects().then(resourceSubjects => {
      dispatch(loadResourceSubjectsSucess(resourceSubjects));
    }).catch(error => {
      throw(error);
    });
  };
}
