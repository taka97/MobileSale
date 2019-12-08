import { combineReducers } from 'redux';
import auth from './auth';
import step from './step';

export default combineReducers({
  auth, step
});
