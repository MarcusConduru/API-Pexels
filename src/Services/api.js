import axios from 'axios'

const api = axios.create({
  baseURL: '',
  headers: {
    authorization: ''
  }
})

export default api