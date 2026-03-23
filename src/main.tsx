import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import SubirFactura from './pages/SubirFactura.tsx';
import AfiliadosLogin from './pages/afiliados/Login.tsx';
import AfiliadosRegistro from './pages/afiliados/Registro.tsx';
import AfiliadosPanel from './pages/afiliados/Panel.tsx';
import { AfiliadosAuthProvider } from './lib/afiliadosAuth.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AfiliadosAuthProvider>
        <Routes>
          <Route path="/subir-factura" element={<SubirFactura />} />
          <Route path="/afiliados" element={<AfiliadosPanel />} />
          <Route path="/afiliados/login" element={<AfiliadosLogin />} />
          <Route path="/afiliados/registro" element={<AfiliadosRegistro />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </AfiliadosAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
