import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import './index.css';

ReactDOM.render(
  <>
    <Header/>
    <Main/>
    <Footer/>
  </>
  ,
  document.getElementById('root')
);

console.log(
  `
  Olá!

  *Tecnologias usadas neste Projeto:
  - HTML;
  - CSS;
  - Javascript;
  - SCSS;
  - ReactJs.
  `
)