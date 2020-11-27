/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <nav className="sidebar">
    <ul className="side-nav">
      <li className="side-nav__item side-nav__item--active">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-home" />
          </svg>
          <span>Home</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-aircraft-take-off" />
          </svg>
          <span>Flight</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-key" />
          </svg>
          <span>Car rental</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-map" />
          </svg>
          <span>Tours</span>
        </a>
      </li>
    </ul>
    <div className="legal">
      © 2020 by Asmovic. All rights reserverd.
    </div>
  </nav>
);
