import * as types from '../actions/actionTypes';
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
export default function courseReducer(state=[], action){
  switch(action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state,
        Object.assign({}, returnJson(action.course))
      ];
      default:
        return state;

  }
}
