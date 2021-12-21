import { getMethod } from './MethodsAxios'
import { UnexpectedError, NotFound, AccessDeniedError, UserInvalidErrors } from '../Validation/Errors'

const errorDeal = response => {
  switch (response.status) {
    case 200: return response.data 
    case 204: return []
    case 401: throw new UserInvalidErrors()
    case 403: throw new AccessDeniedError()
    case 404: throw new NotFound() 
    default: throw new UnexpectedError()
  }
}

export const getGalleryImage = async (per_page) => {
  return errorDeal(await getMethod('curated', { params: { per_page: per_page} }))
}

export const getGalleryImageDetail = async (id) => {
  return errorDeal(await getMethod(`photos/${id}`))
}

export const getGalleryImageSearch = async (per_page,queryParams) => {
  return errorDeal(await getMethod(`search`, { params: { per_page: per_page,  query: queryParams } }))
}