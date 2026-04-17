import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Imobiliaria from './pages/imobiliaria/Imobiliaria.tsx';
import ImobiliariaForms from './pages/imobiliaria-forms/ImobiliariaForms.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/imobiliaria" element={<Imobiliaria />} />
        <Route path="/imobiliaria-forms" element={<ImobiliariaForms />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
