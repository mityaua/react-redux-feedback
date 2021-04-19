import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store'; // Обьект с методами, экземпляр редакса
import { Provider } from 'react-redux'; // Провайдер для доступности хранилища везде

import App from './App.jsx';

import 'modern-normalize/modern-normalize.css';
import './App.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
