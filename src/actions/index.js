import axios from 'axios';

export const SET_MOVIE = 'SET_MOVIE';
export const FETCH_TRAILER = 'FETCH_TRAILER';
export const SET_TV_SHOW = 'SET_TV_SHOW';


export function setMovie(movie){
  return{
    type:SET_MOVIE,
    payload:movie
  }
}

export const fetchTrailer = async() =>{
    const response = await axios.get('https://api.themoviedb.org/3/movie/522681?api_key=a953b1fe43592371e88772d4e636f7bf&append_to_response=videos')
    return{
      type:"FETCH_TRAILER",
      payload:response
    }
  }

export function setTvShow(show){
  return{
    type:SET_TV_SHOW,
    payload:show
  }
}
