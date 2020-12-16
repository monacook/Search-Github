import React from 'react';
// import { Octokit } from "@octokit/core";

class App extends React.Component {
  render(){
    return (
      <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <h1>Github Search</h1>
                        <input type="text" value="" placeholder="Search Github" size="50"/>
                        <button variant="outlined" color="primary" size="small">Search</button>
                    </div>
                </form>
            </div>
      
    )
  }
}

export default App;