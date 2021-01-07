// Props go down to child
import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ListDisplay from './components/listDisplay';
import './App.css'

class App extends Component {
  state = { 
    value: [], 
    totalCount: []
    }

onSearchSubmit = (value) => {
  axios.get('https://api.github.com/search/users', {
    params: { q: value },
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      this.setState({ value: response.data.items, totalCount: response.data.total_count})
        // console.log(response)
        // console.log("hello");
        console.log()
    })
    .catch(error => {
        console.log("Error-->>")
        console.log(error.response)
    })
  // console.log(value)
}

render() {
  return (
    <div className="App">
      <Header />
      <p>Number of Search Results: {this.state.totalCount}</p>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <ListDisplay value={this.state.value} />
    </div>
    )
  }
}

export default App;