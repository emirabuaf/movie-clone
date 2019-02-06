import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Icon } from 'semantic-ui-react';

class TvInfo extends React.Component{




  render(){
    const backgroundImg = {
     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.8)), url("https://image.tmdb.org/t/p/original/${
       this.props.selectedTvShow.backdrop_path
     }")`
   };
   const backwithPoster = {
   backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.8) 60%), url("https://image.tmdb.org/t/p/original/${
     this.props.selectedTvShow.poster_path
   }")`
 };

  return(
      <div className="background-image" style={this.props.selectedTvShow.backdrop_path !== null ? backgroundImg : backwithPoster}>
        <p style={{marginLeft:'47%',fontSize:25}}>{this.props.selectedTvShow.name}</p>
        <img  style={{marginLeft: '20%'}}
        src={`http://image.tmdb.org/t/p/w780${this.props.selectedTvShow.backdrop_path}`} alt="showbackdrop"/>
      <div style={{float:'right',marginRight:45}}>
        <p>Release Date: {this.props.selectedTvShow.release_date}</p>
        <p>Vote: {this.props.selectedTvShow.vote_average}<Icon name="star" color="yellow" /></p>
      </div>
        <p style={{width:800,marginLeft: '20%'}} >{this.props.selectedTvShow.overview}</p>
      </div>
  )}
}

const mapStateToProps = (state) => {
  return{
    selectedTvShow:state.tv.selectedTvShow,
  }
}

export default connect(mapStateToProps,actions)(TvInfo);
