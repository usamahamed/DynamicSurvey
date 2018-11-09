import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import questionReducer from './containers/Question/reducer';

export default combineReducers({
  routing: routerReducer,
  question: questionReducer,
});
