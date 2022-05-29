import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="" />
      </Link>
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <Link to="/news" href="#">
              Новости
            </Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
