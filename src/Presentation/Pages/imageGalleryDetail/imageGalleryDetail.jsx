/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Header, Footer, Context } from '../../Components'
import { getGalleryImageDetail } from '../../../Services/events'
import './imageGalleryDetail-styles.scss'

const ImageGalleryDetail = () => {
  const { title } = useParams()
  const ParamsTitle = title.split('-')
  const [IsLoading,setIsLoading] = useState(false)
  const [error,setError] = useState()
  const [PerPage,setPerPage] = useState()
  const [imageDetail,setImageDetail] = useState()

  useEffect(() => {
    getGalleryImageDetail(ParamsTitle[ParamsTitle.length - 1]).then(response => {
      setImageDetail(response)
      setIsLoading(true)
    }).catch(error => {
      setError(error.message)
    })
  }, [])

  return (
    <div className='Detail__container'>
      <Context.Provider value={{ setPerPage,setIsLoading }}>
        <Header />
      </Context.Provider>
      {IsLoading ? 
        <section className='Detail__content'>
          <img 
            src={imageDetail.src.landscape}
            srcSet={`
              ${imageDetail.src.landscape} 1200w,
              ${imageDetail.src.large} 940w,
              ${imageDetail.src.portrait} 800w,
              ${imageDetail.src.tiny} 280w,
            `}imageDetail
            className='Detail__image'
          />
          
          <div className='Detail__box'>
            <h2 className='Detail__second'>Detalhes Da Foto</h2>
            <p className='Detail__text'>Fotografo:<a href={imageDetail.photographer_url} target='_blank' className='Detail__link'> {imageDetail.photographer}</a></p>
            <p className='Detail__text'>Resolução:<span className='Detail__info'>{imageDetail.width + 'x' + imageDetail.height}</span></p>
            <p className='Detail__text'>Fonte Original:<a href={imageDetail.url} target='_blank' className='Detail__link'>Pixels</a></p>
            <p className='Detail__text'>Cor:<span className='Detail__color' style={{ backgroundColor: imageDetail.avg_color }} /></p>
          </div>
        </section> :
        <div></div>
      }
      <Footer />
    </div>
  )
}

export default ImageGalleryDetail