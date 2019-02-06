import { combineReducers } from 'redux';
import MovieReducer from './movieReducer';
import TvReducer from './tvReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  movie:MovieReducer,
  tv:TvReducer,
  router:routerReducer
})

export default rootReducer;
