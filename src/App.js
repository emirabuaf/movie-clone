import React,{ Component } from 'react';
import Home from './components/Home';
import MovieInfo from './components/MovieInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:movie_id" component={MovieInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
