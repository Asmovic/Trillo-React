/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Main from '../components/main';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <Main />
        </div>
      </div>

    );
  }
}

export default HomePage;
