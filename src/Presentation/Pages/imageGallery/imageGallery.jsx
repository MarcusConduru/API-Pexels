import React from 'react'
import './imageGallery-styles.scss'
import { Footer, Header } from '../../Components'

const ImageGallery = () => {
  return (
    <div className='Gallery__container'>
      <Header />
      <section className='Gallery__content'>
        {Array(17).fill().map((el,index) => (
          <div key={index} className='Gallery__box'>
            <img src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" className='Gallery__img' />
            <div className='Gallery__photographer'>
              <p className='Gallery__title'>Fotogrado por:</p>
              <p className='Gallery__name'>jose lima de dois</p>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default ImageGallery