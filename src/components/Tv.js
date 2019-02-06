import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Tv extends React.Component{

  setTvShow = () => {
    this.props.setTvShow(this.props.show)
  }

  render(){
  return(
    <Link to={"/" + this.props.show.id}>
      <div onClick={() => this.setTvShow()}>
        <div className="item">
          <img className="img"
          src={`http://image.tmdb.org/t/p/w342${this.props.show.backdrop_path}`} alt="showbackdrop"/>
          <p className="title">{this.props.show.name}</p>
          <p className="overview">{this.props.show.overview}</p>
        </div>
      </div>
    </Link>

  )}
}

const mapStateToProps = (state) => {
  return{
    selectedTvShow:state.tv.selectedTvShow
  }
}

export default connect(mapStateToProps,actions)(Tv);
