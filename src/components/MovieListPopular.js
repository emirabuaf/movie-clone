import React from 'react';
import Image from './Image';
import '../App.css';

const MovieListPopular = (props) => {
  const movies = props.movies
  const popular =movies.slice(0,15).map((movie) =>{
    return (
    <Image key={movie.id} movie={movie}/>
    )
  })
  return(
    <div className="image-list">
      <h3 className="popular">{props.title}</h3>
      {popular}
    </div>
  )
}

export default MovieListPopular;
