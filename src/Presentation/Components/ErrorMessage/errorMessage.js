import React from 'react'
import './errorMessage-styles.scss'

const ErrorMessage = ({error}) => {
  return (
    <div className='Message__fail'>
      <h2 className='Message__error'>{error}</h2>
    </div>
  )
}

export default ErrorMessage