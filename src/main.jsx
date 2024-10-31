// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';  // Importa o reset CSS do Ant Design
import './index.css';          // Importa o CSS global com as configurações ajustadas
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>         
        <App />             
      </BrowserRouter>  
    </Provider>    
  </React.StrictMode>,
);
