import React from 'react';
import Tv from './Tv';
import '../App.css';

const TvListPopular = (props) => {
  const tvshows = props.tvshows
  const tvpopular=tvshows.slice(0,15).map((show) =>{
    return (
    <Tv key={show.id} show={show}/>
    )
  })
  return(
    <div className="image-list">
      <h3 className="upcoming">{props.title}
      </h3>
      {tvpopular}
    </div>
  )
}

export default TvListPopular;
