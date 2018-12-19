import React from 'react';

class Image extends React.Component{

  render(){

  return(
      <div>
        <div>
          <img className="img"
          src={`http://image.tmdb.org/t/p/w342${this.props.movie.backdrop_path}`} alt="moviebackdrop"/>
          <p className="title">{this.props.movie.original_title}</p>
          <p className="overview">{this.props.movie.overview}</p>
        </div>
      </div>
  )}
}

export default Image;