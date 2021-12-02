import api from "./api"

const getMethod = async (url, params) => {
  try {
    return await api.get(url,params)
  } catch (error) {
    return error.response
  }
}
