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

  render() {
    return (
      <form>

        <input
          type='text'
          placeholder='stance'
          name='stance'
          value={this.state.stance}
        />

        <input
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
        />

        <input
          type='text'
          placeholder='obstacle'
          name='obstacle'
          value={this.state.obstacle}
        />

        <input
          type='text'
          placeholder='tutorial'
          name='tutorial'
          value={this.state.tutorial}
        />

        <button>SEND IT</button>
      </form>
    )
  }
}

export default Form
