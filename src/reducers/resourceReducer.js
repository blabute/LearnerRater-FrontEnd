import * as types from  '../actions/actionTypes';
import reviewReducer from './reviewReducer';

export default function resourceReducer(state = [], action) {
  //debugger;
  switch (action.type) {
    case types.LOAD_RESOURCES_SUCCESS:
      return action.resources;
    case types.CREATE_REVIEW_SUCCESS: {

      const updatedState = state.map(resource => {

          if(resource.ID !== action.resourceId) {
            return resource;
          }
          else {
            return {
              ...resource,
              Reviews: reviewReducer(resource.Reviews, action)
            };
          }
      });

      return updatedState;
    }

    default:
      return state;
  }
}
