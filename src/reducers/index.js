import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import courses from './courseReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import resourceSubjects from './resourceSubjectReducer';
import resources from './resourceReducer';
import userInterface from './userInterfaceReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  courses,
  form: reduxFormReducer,
  resourceSubjects,
  resources,
  userInterface
});

export default rootReducer;
