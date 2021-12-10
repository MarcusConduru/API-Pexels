import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    authorization: '563492ad6f91700001000001b6b33a477eee4c5ba06322bd76272386'
  }
})

export default api