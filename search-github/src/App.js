// Props go down to child
import React, { Component } from 'react';
import Header from './components/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
  super();
  this.state = {
    value:''
    };
  }
 
// Import the api
 async getUsers = (term) => {
   const response = await axios.get('https://api.github.com/search/users?q=repository', {
     q: 'q'
   }
  )
}

// Search Submit 


// change that is happening right here
   onChange = (e) => {
    this.setState({value: e.target.value})
  }

  // form to submit right here

  formSubmit = (e) => {
   e.preventDefault()
   console.log(this.state.value)
  }

  // all for it to render right here including forn
render() {
  return (
    <div className="App">
      <Header />
        <form onSubmit={this.formSubmit} className="ui form">
          <input type="text" value={this.state.value} placeholder="Search Github" size="50" onChange={this.onChange}/>
          <button onSubmit={this.onSubmit} variant="outlined" color="primary" size="small">Search</button>
        </form>
    </div>
    )
  }
}

export default App;

















//   const onChange = (e) => {
//        this.setState({value: e.target.value})
//   }
// }

// class App extends React.Component {
//   constructor() {
//   super();
//   this.state = {
//     value:''
//     };
//   }

//   onChange = (e) => {
//     this.setState({value: e.target.value})
//   }

//   formSubmit = (e) => {
//    e.preventDefault()
//    console.log(this.state.value)
//   }
  

//   render(){
