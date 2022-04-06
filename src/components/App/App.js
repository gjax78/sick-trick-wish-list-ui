import React, { Component } from 'react';
import Tricks from '../Tricks/Tricks'
import TrickCard from '../TrickCard/TrickCard'
import fetchAPI from '../../apiCalls.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    fetchAPI.getAllTricks()
    .then(data => {
      {console.log(data)}
      this.setState({ tricks: data })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks />
      </div>
    );
  }
}

export default App;
