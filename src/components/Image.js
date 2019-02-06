import React from 'react';
import '../App.css';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Image extends React.Component{

selectMovie = () => {
  this.props.setMovie(this.props.movie)
}


  render(){
  return(
    <Link to={"movie/" + this.props.movie.id}>
      <div onClick={() => this.selectMovie()}>
        <div className="item">
          <img className="img"
          src={`http://image.tmdb.org/t/p/w342${this.props.movie.backdrop_path}`} alt="moviebackdrop"/>
          <p className="title">{this.props.movie.original_title}</p>
          <p className="overview">{this.props.movie.overview}</p>
        </div>
      </div>
    </Link>
  )}
}

const mapStateToProps = (state) => {
  return{
    selectedMovie:state.movie.selectedMovie
  }
}

export default connect(mapStateToProps,actions)(Image);
