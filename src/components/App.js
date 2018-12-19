import React from 'react';
import SearchBar from './SearchBar';
import tmdb from '../apis/tmdb';
import MovieListUpcoming from './MovieListUpcoming';
import MovieListPopular from './MovieListPopular';

class App extends React.Component{

  state = {upcomingMovies:[],
          popularMovies:[]}


  loadUpcomingData = async() => {
    const upcoming = await tmdb.get('/movie/upcoming')
    this.setState({upcomingMovies: upcoming.data.results})
  }
  loadPopularData = async() => {
    const popular = await tmdb.get('/movie/popular')
    this.setState({popularMovies: popular.data.results})
  }


   componentDidMount(){
     this.loadUpcomingData()
     this.loadPopularData()
  }

  render(){
    return(
      <div>
        <SearchBar />
        <MovieListUpcoming title="Upcoming Movies" movies={this.state.upcomingMovies} />
        <MovieListPopular title="Popular Movies" movies={this.state.popularMovies} />
      </div>
    );
  }
}


export default App;
