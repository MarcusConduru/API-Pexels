import React from 'react'
import './header-styles.scss'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className='Header__content'>
      <div className='Header__box'>
        <img className='Header__image' src="https://reactnative.dev/img/tiny_logo.png" alt="icon" />
        <div className='Header__form'> 
          <form >
            <input className='Header__input' type="text" placeholder='Buscar Foto' />
            <button type='submit' className='Header__btn'>
              <FaSearch className='Header__icon' />
            </button>
          </form>
        </div>
      </div>

      <div className='Header__box'>
        <Link className='Header__link' to="/">Modelo</Link>
        <Link className='Header__link' to="/">Sobre</Link>
        <Link className='Header__link' to="/">FAQ</Link>
      </div>
    </header>
  )
}

export default Header