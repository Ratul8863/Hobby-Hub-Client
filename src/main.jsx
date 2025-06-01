import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { router } from './Router/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RouterProvider router={router} />
        <ToastContainer />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
