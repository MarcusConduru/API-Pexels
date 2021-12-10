import React, { useEffect, useState } from 'react'
import './imageGallery-styles.scss'
import { Footer, Header } from '../../Components'
import { getGalleryImage,getGalleryImageSearch,getGalleryImageDetail } from '../../../Services/events'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const ImageGallery = () => {
  const [imageGallery, setImageGallery] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [perPage,setPerPage] = useState(15)
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    getGalleryImage(perPage).then(response => {
      setImageGallery(response)  
      setIsLoading(true)
    }).catch(error => {
      setError(error.message)
    })
  },[])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entry) => {
      if(entry.some(entries => entries.isIntersecting)) {
        setPerPage((PerPageElement) => PerPageElement + 15)
      }
    })

    intersectionObserver.observe(document.getElementById('observer'))

    return () => intersectionObserver.disconnect()
  },[])

  const handleSeachImage = () => {
    history.push({
      pathname: 's'
    })
  }

  return (
    <div className='Gallery__container'>
      <Header />
      <section className='Gallery__content'>
        {Array(17).fill().map((el,index) => (
          <div key={index} className='Gallery__box'>
            <img 
              srcset="
                https://images.unsplash.com/photo-1609058745811-2e87ab15790a?w=800 800w,
                https://images.unsplash.com/photo-1608749333098-a72487cff005?w=1000 1000w,
                https://images.unsplash.com/photo-1601758176559-76c75ead317a?w=1250 1250w,
                https://images.unsplash.com/photo-1609017879390-e1968a80ec6e?w=1500 1500w,
                https://images.unsplash.com/photo-1609027910482-839beaea931e?w=1750 1750w,
                https://images.unsplash.com/photo-1609008804635-571054f8d863?w=2000 2000w"
              className='Gallery__img' 
            />
            <div className='Gallery__photographer'>
              <p className='Gallery__title'>Fotogrado por:</p>
              <p className='Gallery__name'>jose lima de dois</p>
            </div>
          </div>
        ))}
      </section>
      <Footer />
      <div id='observer' />
    </div>
  )
}

export default ImageGallery