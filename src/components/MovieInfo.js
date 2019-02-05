import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

class MovieInfo extends React.Component{


  render(){
  return(
      <div>
      <p>{this.props.selectedMovie.original_title}</p>
      <img className="img"
      src={`http://image.tmdb.org/t/p/w780${this.props.selectedMovie.backdrop_path}`} alt="moviebackdrop"/>
      </div>
  )}
}

const mapStateToProps = (state) => {
  return{
    selectedMovie:state.movie.selectedMovie
  }
}

export default connect(mapStateToProps)(MovieInfo);
