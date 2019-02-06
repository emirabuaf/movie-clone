import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Icon } from 'semantic-ui-react';

class MovieInfo extends React.Component{




  render(){
    const backgroundImg = {
     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.8)), url("https://image.tmdb.org/t/p/original/${
       this.props.selectedMovie.backdrop_path
     }")`
   };
   const backwithPoster = {
   backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.8) 60%), url("https://image.tmdb.org/t/p/original/${
     this.props.selectedMovie.poster_path
   }")`
 };

  return(
      <div className="background-image" style={this.props.selectedMovie.backdrop_path !== null ? backgroundImg : backwithPoster}>
        <p style={{marginLeft:'47%',fontSize:25}}>{this.props.selectedMovie.original_title}</p>
        <img  style={{marginLeft: '20%'}}
        src={`http://image.tmdb.org/t/p/w780${this.props.selectedMovie.backdrop_path}`} alt="moviebackdrop"/>
      <div style={{float:'right',marginRight:45}}>
        <p>Release Date: {this.props.selectedMovie.release_date}</p>
        <p>Vote: {this.props.selectedMovie.vote_average}<Icon name="star" color="yellow" /></p>
      </div>
        <p style={{width:800,marginLeft: '20%'}} >{this.props.selectedMovie.overview}</p>
        <p>{this.props.data.homepage}</p>
      </div>
  )}
}

const mapStateToProps = (state) => {
  return{
    selectedMovie:state.movie.selectedMovie,
    data:state.movie.data
  }
}

export default connect(mapStateToProps,actions)(MovieInfo);
