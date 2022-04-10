import React, { Component } from 'react'
import './Form.css'

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
        <select className='stance'
          name='stance'
          onChange={event => this.handleChange(event)}>
          <option value=' '>Choose your stance</option>
          <option value='Regular'>Regular</option>
          <option value='Switch'>Switch</option>
        </select>

        <input className='name'
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <select className='obstacle'
          name='obstacle'
          onChange={event => this.handleChange(event)}>
          <option value=' '>Choose your Obstacle</option>
          <option value='Flatground'>Flatground</option>
          <option value='Ledge'>Ledge</option>
          <option value='Rail'>Rail</option>
          <option value='Stairs'>Stairs</option>
          <option value='Pool'>Pool</option>
        </select>

        <input className='tutorial'
          type='text'
          placeholder='tutorial'
          name='tutorial'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.createNewTrick(event)}>SEND IT!</button>
      </form>
    )
  }
}

export default Form
