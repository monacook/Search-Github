import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// import { Octokit } from "@octokit/core";

class App extends React.Component {

  render(){
    return (
      <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <h1>Github Search</h1>
                        <Input type="text" value="" placeholder="Search Github"/>
                        <Button variant="outlined" color="primary" size="small">Search</Button>
                    </div>
                </form>
            </div>
      
    )
  }
}

export default App;