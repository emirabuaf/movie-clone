import React from 'react';
import tmdb from '../apis/tmdb';
import './App.css';
import logo from '../images/logo.jpg';
import Autosuggest from 'react-autosuggest';


function getSuggestionValue(suggestion) {
return suggestion.original_title;
}

function renderSuggestion(suggestion) {
  return (
  <div>
    <span className="search-title">{suggestion.original_title}</span>
  <div>
      <img className="search-logo"
      src={`http://image.tmdb.org/t/p/w342${suggestion.poster_path}`}/>
    </div>
  </div>
  );
}


class SearchBar extends React.Component{

  state = {
    value:'',
    suggestions:[]
  }

  onSearchSubmit = async (search) => {
    const response = await tmdb.get('/search/movie',{
      params:{
        query:search
      }
    })
  }

onChange = (event, { newValue,method }) => {
    console.log(newValue)
    this.setState({
      value: newValue
    });
  };

     onSuggestionsFetchRequested = async ({ value }) => {
    const response = await tmdb.get('/search/movie',{
      params:{
      query:value,
      maximum:1
      }
    })
    console.log(response)
    this.setState({ suggestions:response.data.results})

  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  render(){
  const { value, suggestions } = this.state;
  const inputProps = {
    placeholder: "Search Movie",
    value,
    onChange: this.onChange
  };
    return(
    <div className="content">
      <nav>
        <a className="nav-logo" href="#">
          <img src={logo}/>
        </a>
          <div className="search-bar">

              <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
          </div>
      </nav>
    </div>
    )
  }
}


export default SearchBar;
