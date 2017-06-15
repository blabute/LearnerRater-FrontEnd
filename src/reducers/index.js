import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import courses from './courseReducer';



const rootReducer = combineReducers({
  routing: routerReducer,courses
});

export default rootReducer;
