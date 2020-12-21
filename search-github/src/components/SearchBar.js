import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
    super();
    this.state = {
        value:''
        };
    }

    onChange = (e) => {
    this.setState({value: e.target.value})
  }
    formSubmit = (e) => {
   e.preventDefault() 
   this.props.onSubmit(this.state.value)
  }


render() {
    return (
        <form onSubmit={this.formSubmit}>
          <input 
          type="text" 
          value={this.state.value} 
          placeholder="Search Github" 
          size="50" 
          onChange={this.onChange}/>
          <button 
          onSubmit={this.formSubmit}>
          Search
          </button>
        </form>
        )
    }
}

export default SearchBar;