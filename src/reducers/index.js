import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import courses from './courseReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  routing: routerReducer,
  courses,
  form: reduxFormReducer
});

export default rootReducer;
