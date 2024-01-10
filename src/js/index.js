import '../css/global.css';
import '../scss/global.scss';
import App from './App';

// import Three from './three';

// document.addEventListener('DOMContentLoaded', () => {});

// window.addEventListener('load', () => {
//   const canvas = document.querySelector('#canvas');
//   new App().init();

//   if (canvas) {
//     // new Three(document.querySelector('#canvas'));
//     // window.app.init();
//   }
// });
import ready from 'domready';

ready(() => {
  window.app = new App();
  window.app.init();
});

