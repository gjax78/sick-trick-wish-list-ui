const fetchAPI = {
  getAllTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if (!response.ok) {
        throw new Error('Cannot load tricks. Sorry dude!')
      }
      return response.json()
    })
  }
}

export default fetchAPI
