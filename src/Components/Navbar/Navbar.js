import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import boxd_logo from './../../resources/images/boxd.png';

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
        <div>
          <Link to='/'><img className='boxd_logo' src={ boxd_logo } alt='boxd' /></Link>
        </div>
        <div className='links'>
          <Link to='/Solutions'>Solutions</Link>
          <Link to='/Partners'>Partners</Link>
          <Link to='/OurStory'>Our Story</Link>
          <Link className='demo' to='/Demo'>Get Boxd!</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;