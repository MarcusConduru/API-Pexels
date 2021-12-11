import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    authorization: '563492ad6f91700001000001a627014a4ed34c1286042d5326d0baed'
    // Chave Da Api
  }
})
export default api