import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './Store';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { apiSlice } from "./Api/apiSlice";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
          <App />
      </Provider>
    </ApiProvider>
 
);
reportWebVitals();
