import React from 'react'

const Tricks = ({ tricks }) => {
  const trickCards = tricks.map(trick => {
    return (
      <TrickCard
      
      />
    )
  })

  return (
    <div className='tricks-container'>
      {trickCards}
    </div>
  )
}

export default Tricks;
