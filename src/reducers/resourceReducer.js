import * as types from  '../actions/actionTypes';
import reviewReducer from './reviewReducer';
function returnJson(data){
  const {Category="",Title="", Author="", Description="", Website="", URL="", Username="", Rating="", Comment="", ID=""} = data;
  const dataJson = {
        "Author":Author,
        "Category":Category,
        "Description":Description,
        "ID":ID,
        "Reviews":[{
            "Comment":Comment,
            "Rating":Rating,
            "Username":Username
          }
        ],
        "Title":Title,
        "URL":URL,
        "Website":Website
      };
  return (dataJson);
}
export default function resourceReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_RESOURCES_SUCCESS:
      return action.resources;
    case types.CREATE_REVIEW_SUCCESS:
    case types.DELETE_REVIEW_SUCCESS:{

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

    case types.CREATE_COURSE_SUCCESS:
    debugger;
      return [...state,
        Object.assign({}, returnJson(action.course))
      ];
    case types.DELETE_COURSE_SUCCESS:
    debugger;
        return [
          ...state.filter(course => course.ID !== action.resourceId)
        ];
    default:
      return state;
  }
}
