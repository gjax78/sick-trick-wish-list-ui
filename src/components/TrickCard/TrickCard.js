import React from 'react'

const TrickCard = ({ stance, name, obstacle, tutorial, id }) => {
  return (
    <div className='trick-card'>
      <h1>Trick Card</h1>
      <h3>{name}</h3>
      <p>{stance}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>
    </div>
  )
}

export default TrickCard;
