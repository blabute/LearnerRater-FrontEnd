import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import resourceSubjects from './resourceSubjectReducer';
import resources from './resourceReducer';
import userInterface from './userInterfaceReducer';
import course from './courseReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  course,
  form: reduxFormReducer,
  resourceSubjects,
  resources,
  userInterface
});

export default rootReducer;
