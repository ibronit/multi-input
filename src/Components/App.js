import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App row">
	<div className="col s12">
	    <Form />
	</div>
      </div>
    );
  }
}

export default App;
