import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import App from './App.js';
import { Colors } from './styles/colors';
import './assets/fonts/MontserratAlt1-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: ${Colors.BackgroundColorPrimary};
    font-size: 16px;
  }
  @font-face {
    font-family: 'Montserratalt1';
    src: local('MontserratAlt1-Bold'), url('./assets/fonts/MontserratAlt1-Bold.ttf') format('ttf');
    font-weight: bold;
  }
  *{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
