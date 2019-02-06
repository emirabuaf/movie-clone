import { SET_TV_SHOW} from '../actions';

const initialState = {
  selectedTvShow:null,
}

export default function(state=initialState,action){
  switch (action.type) {
    case SET_TV_SHOW:
      return{
        ...state,selectedTvShow:action.payload
      }
    default:
      return state;
  }
}
