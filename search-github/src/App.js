// Props go down to child
import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
render() {
  return (
    <div className="App">
      <Header />
    </div>
    )
  }
}

export default App;

  // <div className="ui segment">
  //   <form onSubmit={this.formSubmit} className="ui form">
  //       <h1>Github Search</h1>
  //       <input type="text" value={this.state.value} placeholder="Search Github" size="50" onChange={this.onChange}/>
  //       <button onSubmit={this.onSubmit} variant="outlined" color="primary" size="small">Search</button>
  //     </div>
  //   </form>
  // </div> 

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
