import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import './css/responsive.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);