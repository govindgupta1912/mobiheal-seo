

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './components/ui/theme-provider';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <BrowserRouter>
     <HelmetProvider> {/* This is REQUIRED */}
      <App />
    </HelmetProvider>
  </BrowserRouter>
);
