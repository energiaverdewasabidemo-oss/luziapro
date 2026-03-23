import React from 'react';
import { Cookie, Mail, Phone, MapPin, ArrowLeft, ExternalLink } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-cyan-600 hover:text-cyan-800 mb-6 font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver a <a href="https://www.luzia.pro" className="underline">www.luzia.pro</a></span>
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl flex items-center justify-center">
              <Cookie className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Política de Cookies</h1>
              <p className="text-gray-600 font-semibold">Última actualización: 1 de enero de 2025</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-blue-800 text-sm leading-relaxed">
              Transparencia total sobre el uso de cookies en <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">www.luzia.pro</a>, comparador de luz y gas operado por <strong>Wasabi Trader SL</strong> bajo la marca comercial <strong>Luzia</strong>.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Información del Responsable</h2>
            <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
              <div>
                <p className="font-bold text-gray-900 text-lg">Wasabi Trader SL</p>
                <p className="text-gray-600 text-sm mt-1">
                  Titular y gestora de{' '}
                  <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-semibold">www.luzia.pro</a>
                  {' '}(marca Luzia) — <strong>CIF: B42709378</strong>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-cyan-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">Polígono Campollano - Calle A, 7<br/>02006 Albacete, España</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-cyan-600" />
                  <a href="mailto:info@wasabitrader.com" className="text-gray-700 hover:text-cyan-600 text-sm">info@wasabitrader.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-cyan-600" />
                  <span className="text-gray-700 text-sm">+34 621 50 83 00</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. ¿Qué son las Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando
              visita{' '}<a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-semibold">www.luzia.pro</a>.
              {' '}Nos ayudan a mejorar su experiencia de navegación, recordar
              sus preferencias y analizar cómo utiliza nuestros servicios.
            </p>
            <div className="bg-slate-50 rounded-xl p-4 mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                ['Tamaño pequeño', 'Generalmente menos de 4KB'],
                ['Información limitada', 'Solo datos específicos y necesarios'],
                ['Controlables', 'Gestionables desde su navegador'],
                ['Temporales o persistentes', 'De sesión o con duración definida'],
                ['Seguras', 'No ejecutan código ni transmiten virus'],
              ].map(([titulo, desc]) => (
                <div key={titulo} className="bg-white rounded-lg p-3">
                  <p className="font-bold text-gray-800 text-xs">{titulo}</p>
                  <p className="text-gray-500 text-xs mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Tipos de Cookies que Utilizamos</h2>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Cookies Técnicas (Necesarias)</h3>
                <p className="text-gray-700 mb-2 text-sm">Esenciales para el funcionamiento de <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a>. No se pueden desactivar.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-blue-100">
                      <th className="border border-blue-200 px-3 py-2 text-left">Nombre</th>
                      <th className="border border-blue-200 px-3 py-2 text-left">Propósito</th>
                      <th className="border border-blue-200 px-3 py-2 text-left">Duración</th>
                    </tr></thead>
                    <tbody className="text-gray-600">
                      {[
                        ['session_id', 'Mantener la sesión activa durante la navegación', 'Sesión'],
                        ['cookie_consent', 'Recordar preferencias de aceptación de cookies', '1 año'],
                        ['csrf_token', 'Protección contra ataques de falsificación', 'Sesión'],
                      ].map(([n, p, d]) => (
                        <tr key={n}><td className="border border-blue-200 px-3 py-2 font-mono">{n}</td><td className="border border-blue-200 px-3 py-2">{p}</td><td className="border border-blue-200 px-3 py-2">{d}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-blue-600 mt-2 font-semibold">Base legal: Interés legítimo</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">Cookies Analíticas</h3>
                <p className="text-gray-700 mb-2 text-sm">Nos ayudan a entender cómo los usuarios interactúan con <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a>.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-green-100">
                      <th className="border border-green-200 px-3 py-2 text-left">Nombre</th>
                      <th className="border border-green-200 px-3 py-2 text-left">Propósito</th>
                      <th className="border border-green-200 px-3 py-2 text-left">Duración</th>
                    </tr></thead>
                    <tbody className="text-gray-600">
                      {[
                        ['_ga', 'Distinguir usuarios únicos (Google Analytics)', '2 años'],
                        ['_ga_*', 'Mantener estado de sesión para GA4', '2 años'],
                        ['_gid', 'Distinguir usuarios en período de 24h', '24 horas'],
                      ].map(([n, p, d]) => (
                        <tr key={n}><td className="border border-green-200 px-3 py-2 font-mono">{n}</td><td className="border border-green-200 px-3 py-2">{p}</td><td className="border border-green-200 px-3 py-2">{d}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-green-600 mt-2 font-semibold">Base legal: Consentimiento del usuario</p>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">Cookies de Personalización</h3>
                <p className="text-gray-700 mb-2 text-sm">Recuerdan sus elecciones en <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a> para mejorar su experiencia.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li>Preferencias de idioma y configuración del comparador</li>
                  <li>Configuraciones de la calculadora de ahorro energético</li>
                  <li>Datos temporales de formularios</li>
                </ul>
                <p className="text-xs text-yellow-600 mt-2 font-semibold">Duración: hasta 1 año — Base legal: Consentimiento</p>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-orange-800 mb-3">Cookies de Marketing y Publicidad</h3>
                <p className="text-gray-700 mb-2 text-sm">Para mostrar anuncios relevantes sobre tarifas de luz y gas, y medir la efectividad de campañas.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-orange-100">
                      <th className="border border-orange-200 px-3 py-2 text-left">Nombre</th>
                      <th className="border border-orange-200 px-3 py-2 text-left">Propósito</th>
                      <th className="border border-orange-200 px-3 py-2 text-left">Duración</th>
                    </tr></thead>
                    <tbody className="text-gray-600">
                      {[
                        ['_fbp', 'Facebook Pixel — Seguimiento y remarketing', '3 meses'],
                        ['conversion_tracking', 'Medir conversiones en luzia.pro', '90 días'],
                        ['campaign_source', 'Identificar fuente de tráfico de campañas', '30 días'],
                      ].map(([n, p, d]) => (
                        <tr key={n}><td className="border border-orange-200 px-3 py-2 font-mono">{n}</td><td className="border border-orange-200 px-3 py-2">{p}</td><td className="border border-orange-200 px-3 py-2">{d}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-orange-600 mt-2 font-semibold">Base legal: Consentimiento explícito del usuario</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Cookies de Terceros</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 rounded-lg text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold">Servicio</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold">Finalidad</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold">Más información</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold">Google Analytics</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Análisis de tráfico en www.luzia.pro</td>
                    <td className="border border-gray-200 px-4 py-3">
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline flex items-center space-x-1">
                        <span>Política de Google</span><ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold">Google Ads</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Publicidad personalizada</td>
                    <td className="border border-gray-200 px-4 py-3">
                      <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline flex items-center space-x-1">
                        <span>Política de Anuncios</span><ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold">Facebook Pixel</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">Remarketing y conversiones</td>
                    <td className="border border-gray-200 px-4 py-3">
                      <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline flex items-center space-x-1">
                        <span>Política de Facebook</span><ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Gestión de Cookies</h2>
            <div className="bg-cyan-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-cyan-800 mb-3">Cómo gestionar sus cookies en www.luzia.pro:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-sm">
                <li><strong>Panel de configuración:</strong> Use nuestro banner de cookies para personalizar sus preferencias en cualquier momento</li>
                <li><strong>Navegador:</strong> Configure las cookies desde la configuración de su navegador</li>
                <li><strong>Herramientas externas:</strong> Google Ads Settings, Facebook Ad Preferences</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Configuración por Navegador</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ['Chrome', 'Configuración > Privacidad y seguridad > Cookies'],
                ['Firefox', 'Opciones > Privacidad y seguridad > Cookies'],
                ['Safari', 'Preferencias > Privacidad > Cookies'],
                ['Edge', 'Configuración > Cookies y permisos del sitio'],
              ].map(([nav, ruta]) => (
                <div key={nav} className="bg-slate-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-1">{nav}</h4>
                  <p className="text-sm text-gray-600">{ruta}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Base Legal y Consentimiento</h2>
            <div className="space-y-3">
              <div className="bg-slate-50 rounded-xl p-5 text-sm">
                <p className="text-gray-700 leading-relaxed">
                  El uso de cookies en <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a> se fundamenta en el <strong>consentimiento informado</strong> del usuario para cookies no esenciales, y en el <strong>interés legítimo</strong> para las cookies técnicas imprescindibles para el funcionamiento del sitio.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Puede revocar su consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo. El acceso a <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a> no está condicionado a la aceptación de cookies no esenciales.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">8. Contacto y Consultas</h2>
            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-2">Wasabi Trader SL — Delegado de Protección de Datos</p>
              <p className="text-gray-600 text-sm mb-4">Para cualquier consulta sobre el uso de cookies en <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a>:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-cyan-600" />
                  <a href="mailto:info@wasabitrader.com" className="font-semibold text-gray-800 hover:text-cyan-600 text-sm">info@wasabitrader.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-cyan-600" />
                  <span className="font-semibold text-gray-800 text-sm">+34 621 50 83 00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-cyan-600" />
                  <span className="font-semibold text-gray-800 text-sm">Polígono Campollano - Calle A, 7, Albacete</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Horario: Lunes a Viernes, 9:00 - 18:00 — Tiempo de respuesta: máximo 72 horas</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
