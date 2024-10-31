import { StrictMode, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const App = lazy(() => import('./App.tsx'));
const Nav = lazy(() => import('./components/Nav.tsx'));
const Footer = lazy(() => import('./components/Footer.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
