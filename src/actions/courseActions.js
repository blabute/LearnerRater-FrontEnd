import * as types from './actionTypes';
import courseApi from '../api/courseApi';

export function createCourseSuccess(course){
  return {type:types.CREATE_COURSE_SUCCESS, course};
}

export function saveCourse(category) {
  return function (dispatch, getState) {

    const course = getState().form.CourseForm.values;
    //const review = getState().form.ReviewForm.values;
    //const courseJson=returnJason(course, review);
    return courseApi.saveCourse(category, course).then(course => {
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
