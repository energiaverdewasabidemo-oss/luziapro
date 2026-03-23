import React from 'react';
import { Cookie, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 mb-6 font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver</span>
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Cookie className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Política de Cookies</h1>
              <p className="text-gray-600 font-semibold">Última actualización: Enero 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Información del Responsable</h2>
            <div className="bg-purple-50 rounded-2xl p-6 space-y-3">
              <p className="font-bold text-gray-800 text-lg">
                LUZIA - Comparador de Luz y Gas &mdash;{' '}
                <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.luzia.pro</a>
              </p>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">Dirección: Calle Andarella 2 pt 9, España</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">Email: info@luzia.pro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">Teléfono: 621 50 83 00</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. ¿Qué son las Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando
              visita{' '}<a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">www.luzia.pro</a>.
              {' '}Nos ayudan a mejorar su experiencia de navegación, recordar
              sus preferencias y analizar cómo utiliza nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Tipos de Cookies que Utilizamos</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">🔧 Cookies Técnicas (Necesarias)</h3>
                <p className="text-gray-700 mb-2">Esenciales para el funcionamiento del sitio web.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Gestión de sesiones de usuario</li>
                  <li>Seguridad y autenticación</li>
                  <li>Funcionamiento del comparador</li>
                </ul>
                <p className="text-sm text-blue-600 mt-2 font-semibold">Duración: Sesión</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">📊 Cookies Analíticas</h3>
                <p className="text-gray-700 mb-2">Nos ayudan a entender cómo los usuarios interactúan con <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">www.luzia.pro</a>.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Google Analytics (tráfico y comportamiento)</li>
                  <li>Estadísticas de uso del comparador</li>
                  <li>Análisis de rendimiento</li>
                </ul>
                <p className="text-sm text-green-600 mt-2 font-semibold">Duración: 2 años</p>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">🎯 Cookies de Personalización</h3>
                <p className="text-gray-700 mb-2">Recordamos sus preferencias para mejorar su experiencia.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Preferencias de idioma</li>
                  <li>Configuración del comparador</li>
                  <li>Historial de búsquedas</li>
                </ul>
                <p className="text-sm text-yellow-600 mt-2 font-semibold">Duración: 1 año</p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-3">📢 Cookies Publicitarias</h3>
                <p className="text-gray-700 mb-2">Para mostrar anuncios relevantes y medir su efectividad.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Google Ads y Facebook Pixel</li>
                  <li>Remarketing y retargeting</li>
                  <li>Medición de conversiones</li>
                </ul>
                <p className="text-sm text-purple-600 mt-2 font-semibold">Duración: 90 días</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Cookies de Terceros</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Servicio</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Finalidad</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Más información</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-3">Análisis de tráfico web</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
                        Política de Google
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Google Ads</td>
                    <td className="border border-gray-300 px-4 py-3">Publicidad personalizada</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline">
                        Política de Anuncios
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Facebook Pixel</td>
                    <td className="border border-gray-300 px-4 py-3">Remarketing y conversiones</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="https://www.facebook.com/privacy/explanation" className="text-blue-600 hover:underline">
                        Política de Facebook
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
              <h3 className="text-lg font-bold text-cyan-800 mb-3">Cómo gestionar sus cookies:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Panel de configuración:</strong> Use nuestro banner de cookies para personalizar sus preferencias</li>
                <li><strong>Navegador:</strong> Configure las cookies desde la configuración de su navegador</li>
                <li><strong>Herramientas externas:</strong> Use herramientas como Google Ads Settings o Facebook Ad Preferences</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Configuración por Navegador</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-bold text-gray-800 mb-2">Chrome</h4>
                <p className="text-sm text-gray-600">Configuración → Privacidad y seguridad → Cookies</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-bold text-gray-800 mb-2">Firefox</h4>
                <p className="text-sm text-gray-600">Opciones → Privacidad y seguridad → Cookies</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-bold text-gray-800 mb-2">Safari</h4>
                <p className="text-sm text-gray-600">Preferencias → Privacidad → Cookies</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-bold text-gray-800 mb-2">Edge</h4>
                <p className="text-sm text-gray-600">Configuración → Privacidad → Cookies</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Contacto</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Para cualquier consulta sobre nuestra política de cookies:
            </p>
            <div className="bg-purple-50 rounded-2xl p-4">
              <p className="font-semibold text-gray-800">
                Email: info@luzia.pro<br/>
                Teléfono: 621 50 83 00<br/>
                Dirección: Calle Andarella 2 pt 9, España
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;