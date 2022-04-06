import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form>

        <input
          type='text'
          placeholder='stance'
          name='stance'
          value={this.state.stance}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}

        />

        <input
          type='text'
          placeholder='obstacle'
          name='obstacle'
          value={this.state.obstacle}
          onChange={event => this.handleChange(event)}

        />

        <input
          type='text'
          placeholder='tutorial'
          name='tutorial'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
          
        />

        <button>SEND IT</button>
      </form>
    )
  }
}

export default Form
