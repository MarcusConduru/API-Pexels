import { getMethod } from './MethodsAxios'
import { UnexpectedError, NotFound, AccessDeniedError } from '../Validation/Errors'

const errorDeal = response => {
  switch (response.status) {
    case 200: return response.data 
    case 204: return []
    case 403: throw new AccessDeniedError()
    case 404: throw new NotFound() 
    default: throw new UnexpectedError()
  }
}

export const getGalleryImage = async (per_page) => {
  const response = await getMethod('curated', { params: { per_page: per_page} })
  return errorDeal(response)
}

export const getGalleryImageDetail = async (id) => {
  const response = await getMethod(`photos/${id}`)
  return errorDeal(response)
}

export const getGalleryImageSearch = async (per_page,queryParams) => {
  const response = await getMethod(`search`, { params: { per_page: per_page,  query: queryParams } })
  return errorDeal(response)
}