import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    authorization: 'API KEY'
  }
})
export default api