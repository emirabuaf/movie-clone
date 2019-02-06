import React from 'react';
import SearchBar from './SearchBar';
import tmdb from '../apis/tmdb';
import MovieListUpcoming from './MovieListUpcoming';
import MovieListPopular from './MovieListPopular';
import TvListPopular from './TvListPopular';

class Home extends React.Component{

  state = {
    upcomingMovies:[],
    popularMovies:[],
    tvshows:[]
          }


  loadUpcomingData = async() => {
    const upcoming = await tmdb.get('/movie/upcoming')
    console.log(upcoming)
    this.setState({upcomingMovies: upcoming.data.results})
  }
  loadPopularData = async() => {
    const popular = await tmdb.get('/movie/popular')
    this.setState({popularMovies: popular.data.results})
  }

  loadPopularTv = async() => {
    const populartv = await tmdb.get('/tv/popular')
    console.log(populartv)
    this.setState({tvshows: populartv.data.results})
  }


   componentDidMount(){
     this.loadUpcomingData();
     this.loadPopularData();
     this.loadPopularTv();
  }

  render(){
    return(
      <div>
        <SearchBar />
        <MovieListUpcoming title="Upcoming Movies" movies={this.state.upcomingMovies} />
        <MovieListPopular title="Popular Movies" movies={this.state.popularMovies} />
        <TvListPopular title="Popular Tv Show" tvshows={this.state.tvshows} />
      </div>
    );
  }
}


export default Home;
