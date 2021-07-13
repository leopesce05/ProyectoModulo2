import React from 'react';
import './header.css'
import logo from '../img/logo.png'
const Header =(props)=>{
  
      return(
        <header className={props.play}>
            <img className='logo' src={logo} alt='LOGO' />
            <h1 className='nombre'>Mateify</h1>
            <p className='derecha'>{props.user}</p>
        </header>
      )
  
  }
  
  export default Header;