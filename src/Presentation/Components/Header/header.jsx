import React, { useContext, useState } from 'react'
import './header-styles.scss'
import { Link } from "react-router-dom";
import { FaSearch,FaAlignJustify, FaRegTimesCircle } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import { Context } from '..';

const Header = () => {
  const [textSearch, setTextSearch] = useState('')
  const [modal, setModal] = useState(false)
  const history = useHistory()
  const { setIsLoading,setPerPage } = useContext(Context)
  
  const handleSearchImageGallery = (event) => {
    event.preventDefault()
    setIsLoading(false)
    setPerPage(20)
    history.push(`/${textSearch}`)
  }

  return (
    <header className='Header__content'>
      <div className='Header__box'>
        <Link to='/'>
          <img className='Header__image' src="https://reactnative.dev/img/tiny_logo.png" alt="icon" />
        </Link>
        <div className='Header__form'> 
          <form onSubmit={(e) => handleSearchImageGallery(e)}>
            <input className='Header__input' type="text" placeholder='Buscar Foto' value={textSearch} onChange={(e) => setTextSearch(e.target.value)} />
            <button type='submit' className='Header__btn'>
              <FaSearch className='Header__icon' />
            </button>
          </form>
        </div>
      </div>

      <div className='Header__options' onClick={() => setModal(true)}>
        <FaAlignJustify className='Header__icon--options' />
      </div>

      <div className='Header__box'>
        <Link className='Header__link' to="/">Modelo</Link>
        <Link className='Header__link' to="/">Sobre</Link>
        <Link className='Header__link' to="/">FAQ</Link>
      </div>

      <div className='Header__box--options' style={{ transform: `scale(${modal ? 1 : 2})`, opacity: modal ? 1 : 0, visibility: modal ? 'visible' : 'hidden' }}>
        <button className='Header__close' onClick={() => setModal(false)}>
          <FaRegTimesCircle className='Header__icon--close' />
        </button>
        <Link className='Header__link--options' to="/">Modelo</Link>
        <Link className='Header__link--options' to="/">Sobre</Link>
        <Link className='Header__link--options' to="/">FAQ</Link>
      </div>
    </header>
  )
}

export default Header