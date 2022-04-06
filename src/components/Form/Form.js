import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
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

  createNewTrick = (event) => {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTrick(newTrick)
  }

  render() {
    return (
      <form>
      {
      // <select value={this.state.stance} onChange={event => this.handleChange(event)}>
      //   <option value='choose'>Choose your stance:</option>
      //   <option value={this.state.stance}>Regular</option>
      //   <option value={this.state.stance}>Switch</option>
      // </select>
      }
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

        <button onClick={event => this.createNewTrick(event)}>SEND IT</button>
      </form>
    )
  }
}

export default Form
