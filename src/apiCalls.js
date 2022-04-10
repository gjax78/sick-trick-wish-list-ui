const fetchAPI = {
  getAllTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if (!response.ok) {
        throw new Error('Cannot load tricks. Sorry dude!')
      } else {
        return response.json()
      }
    })
  },

  postNewTricks(newTrick) {
    return fetch('http://localhost:3001/api/v1/tricks', {
      method: 'POST',
      body: JSON.stringify(newTrick),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if(!response.ok) {
        return response.json()
      }
    })
  }
}

export default fetchAPI
