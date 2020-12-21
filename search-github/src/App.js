// Props go down to child
import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
// import Octokit  from "@octokit/core";
import axios from 'axios';

class App extends Component {

onSearchSubmit = (value) => {
  axios.get('https://api.github.com/search/users', {
    params: { q: value },
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
        console.log(response)
        console.log("hello");
        console.log()
    })
    .catch(error => {
        console.log("Error-->>")
        console.log(error.response)
    })
  console.log(value)
}

render() {
  return (
    <div className="App">
      <Header />
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    )
  }
}

export default App;