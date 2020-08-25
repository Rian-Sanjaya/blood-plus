import React from 'react';
import { useHistory } from 'react-router-dom';
import home from '../assets/images/home.png';
import love from '../assets/images/love.png';
import plus from '../assets/images/plus.png';

const Menu = () => {
  const history = useHistory();

  return (
    <div className="menu-box">
      <ul className="menu-container">
        <li onClick={() => history.push({ pathname: '/' })}>
          <img src={home} alt="Home" style={{ width: '35px' }} />
        </li>
        <li onClick={() => history.push({ pathname: '/requestblood' })}>
          <img src={plus} alt="Plus" style={{ width: '35px' }} />
        </li>
        <li onClick={() => history.push({ pathname: '/profil' })}>
          <img src={love} alt="Love" style={{ width: '35px' }} />
        </li>
      </ul>
    </div>
  )
};

export default Menu;