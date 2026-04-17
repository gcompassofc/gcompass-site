import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import Imobiliaria from './pages/imobiliaria/Imobiliaria.tsx';
import ImobiliariaForms from './pages/imobiliaria-forms/ImobiliariaForms.tsx';
import ImobiliariaFormsAnalise from './pages/imobiliaria-forms-analise/ImobiliariaFormsAnalise.tsx';
import OpaCronograma from './pages/opacronograma/OpaCronograma.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/imobiliaria" element={<Imobiliaria />} />
        <Route path="/imobiliaria-forms" element={<ImobiliariaForms />} />
        <Route path="/imobiliaria-forms-analise" element={<ImobiliariaFormsAnalise />} />
        <Route path="/opacronograma" element={<OpaCronograma />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </StrictMode>,
);
