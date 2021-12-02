import getMethod from './MethodsAxios'
import { UnexpectedError,NotFound } from '../Validation/Errors'

const getGalleryImage = () => {
  const response = getMethod('')

  switch (response) {
    case 200: return response.data 
    case 204: return []
    case 404: throw new NotFound() 
    default: throw new UnexpectedError()
  }
}