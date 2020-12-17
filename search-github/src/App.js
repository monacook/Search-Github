import React from 'react';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    value:''
    };
  }

  onChange = (e) => {
    this.setState({value: e.target.value})
    // console.log(this.state.value)
  }

  onSubmit = (e) => {
   e.preventDefault()
   console.log("hello")
   this.props.onSubmit(this.state.value)
  }
  

  render(){
    console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <h1>Github Search</h1>
            <input type="text" value={this.state.value} placeholder="Search Github" size="50" onChange={this.onChange}/>
            <button onSubmit={this.onSubmit} variant="outlined" color="primary" size="small">Search</button>
          </div>
        </form>
      </div> 
    )
  }
}

export default App;