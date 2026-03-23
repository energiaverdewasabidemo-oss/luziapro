import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import App from './App.tsx';
import SubirFactura from './pages/SubirFactura.tsx';
import AfiliadosLogin from './pages/afiliados/Login.tsx';
import AfiliadosRegistro from './pages/afiliados/Registro.tsx';
import AfiliadosPanel from './pages/afiliados/Panel.tsx';
import { AfiliadosAuthProvider } from './lib/afiliadosAuth.tsx';
import './index.css';

function SubirFacturaWrapper() {
  const navigate = useNavigate();
  const handlePageChange = (page: string) => {
    const routes: Record<string, string> = {
      privacy: '/privacidad',
      legal: '/aviso-legal',
      terms: '/terminos',
      cookies: '/cookies',
    };
    navigate(routes[page] ?? '/');
  };
  return <SubirFactura onPageChange={handlePageChange} />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AfiliadosAuthProvider>
        <Routes>
          <Route path="/subir-factura" element={<SubirFacturaWrapper />} />
          <Route path="/afiliados" element={<AfiliadosPanel />} />
          <Route path="/afiliados/login" element={<AfiliadosLogin />} />
          <Route path="/afiliados/registro" element={<AfiliadosRegistro />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </AfiliadosAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
