import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/static/logo-platzi-video-BW2.png';
import UserIcon from '../assets/static/user-icon.png';

import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={Logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={UserIcon} alt='User' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><Link to='/login'>Iniciar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
