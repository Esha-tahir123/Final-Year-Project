import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import AdminRoutes from './components/admin/AdminRoutes';

const rootElement = document.getElementById('root');

createRoot(rootElement).render( // Use createRoot instead of ReactDOM.createRoot
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
