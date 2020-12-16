import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      error: null,
      repos: []
    }
  }

  // function that gets the api request from Github search api
  // store that into state by using setState
  render(){
    
    return (
      <p> hello</p>
    )
  }
}

export default App;