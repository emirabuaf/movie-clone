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
              <Route path="/movie/:movie_id" component={MovieInfo} />
              <Route path="/tv/:tv_id" component={TvInfo} />
            </Switch>
          </BrowserRouter>
        )
    }
}

export default App;
