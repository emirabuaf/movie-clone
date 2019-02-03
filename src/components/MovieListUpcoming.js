import React from 'react';
import Image from './Image';
import '../App.css';

const MovieList = (props) => {
  const movies = props.movies
  const upcoming =movies.slice(0,15).map((movie) =>{
    return (
    <Image key={movie.id} movie={movie}/>
    )
  })
  return(
    <div className="image-list">
      <h3 className="upcoming">{props.title}
      </h3>
      {upcoming}
    </div>
  )
}

export default MovieList;
