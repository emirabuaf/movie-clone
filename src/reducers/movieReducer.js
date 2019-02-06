import { SET_MOVIE,FETCH_TRAILER } from '../actions';

const initialState = {
  selectedMovie:null,
  data:[]
}

export default function(state=initialState,action){
  switch (action.type) {
    case SET_MOVIE:
      return{
        ...state,selectedMovie:action.payload
      }
    case FETCH_TRAILER:
      return{
        ...state,data:action.payload.data
      }
    default:
      return state;
  }
}
