import { combineReducers } from 'redux';
import MovieReducer from './movieReducer';
import TvReducer from './tvReducer';

const rootReducer = combineReducers({
  movie:MovieReducer,
  tv:TvReducer
})

export default rootReducer;
