

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeProvider } from './components/ui/theme-provider';

const root = document.getElementById('root')!;

// Always use hydrateRoot for SSR
ReactDOM.hydrateRoot(
  root,
  <BrowserRouter>
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="securemdm-ui-theme">
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </BrowserRouter>
);
