import React,{ Component } from 'react';
import Home from './components/Home';
import MovieInfo from './components/MovieInfo';
import TvInfo from './components/TvInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:movie_id" component={MovieInfo} />
          <Switch>
          <Route path="/:tv_id" component={TvInfo} />
          </Switch>
        </Switch>
      </BrowserRouter>

    )
  }
}


export default App;
