import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import courses from './courseReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import resourceSubjects from './resourceSubjectReducer';
import resources from './resourceReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  courses,
  form: reduxFormReducer,
  resourceSubjects,
  resources
});

export default rootReducer;
