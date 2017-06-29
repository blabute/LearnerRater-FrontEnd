import * as types from './actionTypes';
import courseApi from '../api/courseApi';

export function createCourseSuccess(course){
  return {type:types.CREATE_COURSE_SUCCESS, course};
}

export function saveCourse() {
  return function (dispatch, getState) {

    const course = getState().form.CourseForm.values;
    return courseApi.saveCourse(course).then(course => {
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteCourseSuccess(resourceId) {
  return {type: types.DELETE_COURSE_SUCCESS, resourceId};
}

export function deleteCourse(resourceId) {
  return function (dispatch) {

    return courseApi.deleteCourse(resourceId).then(() => {
        dispatch(deleteCourseSuccess(resourceId));
    }).catch(error => {
      throw(error);
    });
  };
}
