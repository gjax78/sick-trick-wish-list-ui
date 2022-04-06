import React from 'react'
import './TrickCard.css'

const TrickCard = ({ stance, name, obstacle, tutorial, id }) => {
  return (
    <div className='trick-card'>
      <h3>{stance} {name}</h3>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

export default TrickCard;
