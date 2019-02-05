import { SET_MOVIE } from '../actions';

const initialState = {
  selectedMovie:null
}

export default function(state=initialState,action){
  switch (action.type) {
    case SET_MOVIE:
      return{
        ...state,selectedMovie:action.payload
      }
    default:
      return state;
  }
}
