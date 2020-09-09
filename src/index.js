import React from 'react';
import ReactDOM from 'react-dom';
import './estilo.css';

import Menu from './menu/Menu'
import Footer from './menu/Footer'
import Busca from './menu/Busca'
ReactDOM.render(
  <React.StrictMode>
    <Menu page="home" />
    <Busca />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);