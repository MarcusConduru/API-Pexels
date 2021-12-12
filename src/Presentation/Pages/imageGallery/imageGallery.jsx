/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import './imageGallery-styles.scss'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Footer, Header, Loading, LoadingPulse,ErrorMessage,Context } from '../../Components'
import { getGalleryImage, getGalleryImageSearch } from '../../../Services/events'
import { FaFrown } from "react-icons/fa"
import Zoom from 'react-reveal/Zoom'; 

const ImageGallery = () => {
  const [imageGallery, setImageGallery] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingObserver, setIsLoadingObserver] = useState(false);
  const [perPage,setPerPage] = useState(0)
  const history = useHistory()
  const { pathname } = useLocation()

  useEffect(() => {
    (async () => {
      try {
        const response = pathname.split('/')[1].length ? await getGalleryImageSearch(perPage, pathname.split('/')[1]) : await getGalleryImage(perPage)
        setImageGallery(response)  
        setIsLoading(true)
        setIsLoadingObserver(false) 
      } catch (error) {
        setError(error.message)
      }
    })()
  },[perPage,pathname])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entry) => {
      if(entry.some(entries => entries.isIntersecting)) {
        setPerPage((PerPageElement) => PerPageElement + 20)
        setIsLoadingObserver(true)
      }
    })

    intersectionObserver.observe(document.getElementById('observer'))

    return () => intersectionObserver.disconnect()
  },[])

  const handleMoveDetailedImage = (name) => {
    history.push({
      pathname: `/imagem/${name}`,
    })
  }

  return (
    <div className='Gallery__container'>
      <Context.Provider value={{ setIsLoading,setPerPage }}>
        <Header />
      </Context.Provider>
      <section className='Gallery__content'>
        {isLoading ? 
          imageGallery.photos.length ?
            imageGallery.photos.map((el) => (
              <Zoom>
                <div key={el.id} className='Gallery__box' onClick={() => handleMoveDetailedImage(el.url.split('/')[4])}>
                  <img 
                    loading="lazy"
                    src={el.src.landscape}
                    srcSet={`
                      ${el.src.landscape} 1200w,
                      ${el.src.large} 940w,
                      ${el.src.portrait} 800w,
                      ${el.src.tiny} 280w,
                    `}
                    className='Gallery__img' 
                  />
                  <div className='Gallery__photographer'>
                    <p className='Gallery__title'>Fotogrado por:</p>
                    <p className='Gallery__name'>{el.photographer}</p>
                  </div>
                </div>
              </Zoom>
            )) : 
            <div className='Gallery__empty'>
              <FaFrown className='Gallery__icon' />
              <p className='Gallery__text'>Nenhuma Imagem Encontrada</p>
            </div> :
          error ? 
            <ErrorMessage error={error} />
          : 
          <LoadingPulse />
        }
      <div id='observer' />
      </section>
      {isLoading && isLoadingObserver &&  <Loading />}
      <Footer />
    </div>
  )
}

export default ImageGallery