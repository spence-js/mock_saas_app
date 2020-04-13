import React from 'react';

import './HomePage.css'
import boxd_phone from './../../resources/images/boxd_phone.png';

const HomePage = () => {
  return (
    <div>
      <div>
        {/* <h1>Digital boxes for Consumer and Enterprise use</h1> */}
      </div>
      <img src={ boxd_phone } alt='boxd for iPhone' />
    </div>
  );
};

export default HomePage;