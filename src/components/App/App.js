import React, { Component } from 'react';
import Tricks from '../Tricks/Tricks'
import TrickCard from '../TrickCard/TrickCard'
import Form from '../Form/Form'
import fetchAPI from '../../apiCalls.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  fetchAllTricks = () => {
    fetchAPI.getAllTricks()
    .then(data => {
      this.setState({ tricks: data })
    })
  }

  componentDidMount() {
    this.fetchAllTricks()

  }

  addTrick = (newTrick) => {
    fetchAPI.postNewTricks(newTrick)
    .then(() => this.fetchAllTricks())
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
