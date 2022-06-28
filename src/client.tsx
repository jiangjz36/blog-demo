import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './jsx/App'
const root = document.querySelector('#root')
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , root
)