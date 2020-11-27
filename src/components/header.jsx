/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <header className="header">
    <img src="img/logo.png" alt="logo" className="logo" />
    <form action="#" className="search">
      <input type="text" className="search__input" placeholder="Search hotels" />
      <button className="search__button">
        <svg className="search__icon">
          <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
        </svg>
      </button>
    </form>
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="img/sprite.svg#icon-bookmark" />
        </svg>
        <span className="user-nav__notification">5</span>
      </div>
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="img/sprite.svg#icon-chat" />
        </svg>
        <span className="user-nav__notification">8</span>
      </div>
      <div className="user-nav__user">
        <img src="img/user.jpg" alt="user photo" className="user-nav__user-photo" />
        <span className="user-nav__user-name">Asmovic</span>
      </div>
    </nav>
  </header>
);
