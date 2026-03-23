import React from 'react';
import { Cookie, Mail, Phone, MapPin, ArrowLeft, Shield, BarChart2, Settings, Megaphone, Globe, Lock, RefreshCw } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

const CookieTable: React.FC<{ rows: { name: string; purpose: string; duration: string; provider: string }[] }> = ({ rows }) => (
  <div className="overflow-x-auto mt-3">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-left p-3 font-bold text-gray-700">Nombre</th>
          <th className="text-left p-3 font-bold text-gray-700">Propósito</th>
          <th className="text-left p-3 font-bold text-gray-700">Duración</th>
          <th className="text-left p-3 font-bold text-gray-700">Proveedor</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="p-3 font-mono text-xs font-semibold text-gray-700">{row.name}</td>
            <td className="p-3 text-gray-600">{row.purpose}</td>
            <td className="p-3 text-gray-500 whitespace-nowrap">{row.duration}</td>
            <td className="p-3 text-gray-500">{row.provider}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 mb-6 font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver a la web principal</span>
          </button>

          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Cookie className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Política de Cookies</h1>
              <p className="text-gray-600 font-semibold">Información sobre el uso de cookies y tecnologías similares</p>
              <p className="text-gray-500 text-sm">Última actualización: 1 de enero de 2025</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-4">
            <p className="text-amber-800 text-sm leading-relaxed">
              Transparencia total sobre el uso de cookies en nuestro sitio web wasabienergia.es, gestionado por Wasabi Trader SL a través de su marca LUZIA.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, smartphone) cuando visitas un sitio web. Permiten que el sitio recuerde información sobre tu visita, como tus preferencias de idioma y otras configuraciones.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: 'Tamaño pequeño', desc: 'Generalmente menos de 4KB' },
                { label: 'Información limitada', desc: 'Solo datos específicos y necesarios' },
                { label: 'Temporales o persistentes', desc: 'Una sesión o más tiempo' },
                { label: 'Seguras', desc: 'No ejecutan código ni virus' },
                { label: 'Controlables', desc: 'Gestionables desde tu navegador' },
              ].map((item, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-3 text-sm">
                  <p className="font-semibold text-purple-800">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. ¿Cómo Utilizamos las Cookies?</h2>
            <div className="bg-cyan-50 rounded-2xl p-5">
              <p className="text-gray-700 text-sm mb-3">En wasabienergia.es utilizamos cookies para mejorar tu experiencia de navegación y proporcionar servicios personalizados:</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Mejorar la funcionalidad y rendimiento del sitio web</li>
                <li>Analizar cómo los usuarios interactúan con nuestro contenido</li>
                <li>Personalizar tu experiencia de navegación</li>
                <li>Recordar tus preferencias y configuraciones</li>
                <li>Facilitar el proceso de contratación de servicios</li>
                <li>Mejorar nuestros servicios de atención al cliente</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">3. Tipos de Cookies que Utilizamos</h2>

            <div className="space-y-6">
              <div className="border border-blue-200 rounded-2xl overflow-hidden">
                <div className="bg-blue-50 p-4 flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="font-bold text-blue-800">3.1 Cookies Técnicas (Estrictamente Necesarias)</h3>
                    <p className="text-blue-600 text-xs">Esenciales para el funcionamiento. No se pueden desactivar.</p>
                  </div>
                </div>
                <CookieTable rows={[
                  { name: 'session_id', purpose: 'Mantener la sesión del usuario activa durante la navegación', duration: 'Sesión', provider: 'Primera parte' },
                  { name: 'cookie_consent', purpose: 'Recordar las preferencias de aceptación de cookies', duration: '1 año', provider: 'Primera parte' },
                  { name: 'csrf_token', purpose: 'Protección contra ataques de falsificación de solicitudes', duration: 'Sesión', provider: 'Primera parte' },
                  { name: 'load_balancer', purpose: 'Distribución de carga entre servidores', duration: 'Sesión', provider: 'Primera parte' },
                ]} />
              </div>

              <div className="border border-green-200 rounded-2xl overflow-hidden">
                <div className="bg-green-50 p-4 flex items-center gap-3">
                  <BarChart2 className="h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-bold text-green-800">3.2 Cookies de Rendimiento y Analíticas</h3>
                    <p className="text-green-600 text-xs">Nos ayudan a entender cómo los visitantes interactúan con el sitio.</p>
                  </div>
                </div>
                <CookieTable rows={[
                  { name: '_ga', purpose: 'Distinguir usuarios únicos asignando un ID generado aleatoriamente', duration: '2 años', provider: 'Google Analytics' },
                  { name: '_ga_*', purpose: 'Mantener el estado de la sesión para Google Analytics 4', duration: '2 años', provider: 'Google Analytics' },
                  { name: '_gid', purpose: 'Distinguir usuarios únicos en un período de 24 horas', duration: '24 horas', provider: 'Google Analytics' },
                  { name: '_gat', purpose: 'Limitar la velocidad de solicitudes a Google Analytics', duration: '1 minuto', provider: 'Google Analytics' },
                ]} />
              </div>

              <div className="border border-yellow-200 rounded-2xl overflow-hidden">
                <div className="bg-yellow-50 p-4 flex items-center gap-3">
                  <Settings className="h-5 w-5 text-yellow-600" />
                  <div>
                    <h3 className="font-bold text-yellow-800">3.3 Cookies de Funcionalidad</h3>
                    <p className="text-yellow-600 text-xs">Recuerdan tus elecciones para mejorar tu experiencia.</p>
                  </div>
                </div>
                <CookieTable rows={[
                  { name: 'user_preferences', purpose: 'Recordar preferencias del usuario (idioma, región, etc.)', duration: '6 meses', provider: 'Primera parte' },
                  { name: 'form_data', purpose: 'Guardar temporalmente datos del formulario de contacto', duration: '1 día', provider: 'Primera parte' },
                  { name: 'calculator_settings', purpose: 'Recordar configuraciones de la calculadora de ahorro', duration: '30 días', provider: 'Primera parte' },
                  { name: 'theme_preference', purpose: 'Recordar preferencias de tema visual', duration: '1 año', provider: 'Primera parte' },
                ]} />
              </div>

              <div className="border border-red-200 rounded-2xl overflow-hidden">
                <div className="bg-red-50 p-4 flex items-center gap-3">
                  <Megaphone className="h-5 w-5 text-red-500" />
                  <div>
                    <h3 className="font-bold text-red-800">3.4 Cookies de Marketing y Publicidad</h3>
                    <p className="text-red-500 text-xs">Para anuncios relevantes y medir la efectividad de campañas. Requieren consentimiento explícito.</p>
                  </div>
                </div>
                <CookieTable rows={[
                  { name: '_fbp', purpose: 'Facebook Pixel - Seguimiento de conversiones y remarketing', duration: '3 meses', provider: 'Facebook' },
                  { name: 'ads_preferences', purpose: 'Personalización de anuncios basada en intereses', duration: '1 año', provider: 'Primera parte' },
                  { name: 'campaign_source', purpose: 'Identificar la fuente de tráfico de campañas', duration: '30 días', provider: 'Primera parte' },
                  { name: 'conversion_tracking', purpose: 'Medir conversiones de formularios y contrataciones', duration: '90 días', provider: 'Primera parte' },
                ]} />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Cookies de Terceros</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-orange-500" /> Google Analytics
                </h3>
                <p className="text-gray-600 text-sm mb-2">Utilizamos Google Analytics para analizar el uso del sitio y mejorar la experiencia del usuario. Información recopilada: páginas visitadas, tiempo de permanencia, dispositivo utilizado.</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">Política de Privacidad de Google</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Facebook', desc: 'Botones de "Me gusta" y seguimiento de conversiones', link: 'https://www.facebook.com/policy/cookies/' },
                  { name: 'Twitter / X', desc: 'Botones de compartir y widgets integrados', link: 'https://twitter.com/en/privacy' },
                  { name: 'LinkedIn', desc: 'Botones de compartir y seguimiento profesional', link: 'https://www.linkedin.com/legal/cookie-policy' },
                  { name: 'WhatsApp', desc: 'Widget de contacto directo', link: 'https://www.whatsapp.com/legal/privacy-policy' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-sm">
                    <p className="font-semibold text-gray-800 mb-1">{item.name}</p>
                    <p className="text-gray-500 text-xs mb-2">{item.desc}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">Política de Cookies</a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Gestión y Control de Cookies</h2>
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-2xl p-5">
                <h3 className="font-bold text-purple-800 mb-2">5.1 Panel de Configuración</h3>
                <p className="text-gray-600 text-sm">Puedes gestionar tus preferencias de cookies en cualquier momento desde el banner de cookies: activa o desactiva categorías específicas, guarda tus preferencias para futuras visitas y modifica tu configuración cuando lo desees.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-3">5.2 Guías por Navegador</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: 'Google Chrome', path: 'Configuración > Privacidad y seguridad > Cookies' },
                    { name: 'Mozilla Firefox', path: 'Opciones > Privacidad y seguridad' },
                    { name: 'Safari', path: 'Preferencias > Privacidad' },
                    { name: 'Microsoft Edge', path: 'Configuración > Cookies y permisos del sitio' },
                  ].map((b, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-3 text-xs">
                      <p className="font-bold text-gray-800 mb-1">{b.name}</p>
                      <p className="text-gray-500">{b.path}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">6. Consentimiento y Base Legal</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-2xl p-5">
                <h3 className="font-bold text-blue-800 mb-3 text-sm">Base Legal por Tipo de Cookie</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cookies técnicas</span>
                    <span className="text-blue-600 font-semibold text-xs">Interés legítimo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cookies analíticas</span>
                    <span className="text-green-600 font-semibold text-xs">Consentimiento</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cookies de funcionalidad</span>
                    <span className="text-green-600 font-semibold text-xs">Consentimiento</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cookies de marketing</span>
                    <span className="text-red-600 font-semibold text-xs">Consentimiento explícito</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-2xl p-5">
                <h3 className="font-bold text-green-800 mb-3 text-sm">Tu Consentimiento</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Informado: explicamos claramente qué cookies usamos</li>
                  <li>Específico: elige qué tipos de cookies aceptar</li>
                  <li>Revocable: cambia tu decisión en cualquier momento</li>
                  <li>Libre: no condicionamos el acceso al sitio</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Tecnologías Similares</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-2xl p-4 text-sm">
                <h3 className="font-bold text-gray-800 mb-2">Local Storage</h3>
                <p className="text-gray-600">Configuraciones de la calculadora de ahorro, preferencias de visualización y datos temporales de formularios.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 text-sm">
                <h3 className="font-bold text-gray-800 mb-2">Session Storage</h3>
                <p className="text-gray-600">Estado de navegación entre páginas, datos temporales de formularios y configuraciones de sesión.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 text-sm">
                <h3 className="font-bold text-gray-800 mb-2">Web Beacons</h3>
                <p className="text-gray-600">Pequeñas imágenes transparentes que ayudan a entender cómo interactúas con nuestros emails y contenido web.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">8. Seguridad y Privacidad</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-2xl p-5">
                <h3 className="font-bold text-purple-800 mb-2 text-sm">Medidas de Seguridad</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Cifrado de cookies sensibles</li>
                  <li>Transmisión segura mediante HTTPS</li>
                  <li>Limitación del acceso a datos de cookies</li>
                  <li>Auditorías regulares de seguridad</li>
                  <li>Cumplimiento con RGPD y LOPDGDD</li>
                </ul>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-5">
                <h3 className="font-bold text-cyan-800 mb-2 text-sm">Retención de Datos</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li><strong>Cookies de sesión:</strong> se eliminan al cerrar el navegador</li>
                  <li><strong>Cookies persistentes:</strong> según duración especificada</li>
                  <li><strong>Datos analíticos:</strong> máximo 26 meses (Google Analytics)</li>
                  <li><strong>Datos de marketing:</strong> hasta revocación del consentimiento</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">9. Actualizaciones de la Política</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Podemos actualizar esta Política de Cookies para reflejar cambios en nuestras prácticas, nuevas funcionalidades, cambios en la legislación o mejoras tecnológicas.
            </p>
            <div className="bg-blue-50 rounded-2xl p-4 text-sm">
              <p className="text-blue-800 font-semibold mb-1">Te mantendremos informado:</p>
              <p className="text-blue-700">Notificación en el sitio web sobre cambios significativos, actualización de la fecha de "última modificación", y posibilidad de revisar y actualizar tu consentimiento. Comunicación por email para cambios importantes.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">10. Contacto y Consultas</h2>
            <p className="text-gray-600 text-sm mb-4">
              Si tienes preguntas sobre nuestra Política de Cookies o deseas ejercer tus derechos:
            </p>
            <div className="bg-purple-50 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Email</p>
                    <p className="font-semibold text-gray-800 text-sm">info@luzia.pro</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Teléfono</p>
                    <p className="font-semibold text-gray-800 text-sm">+34 621 50 83 00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Dirección</p>
                    <p className="font-semibold text-gray-800 text-sm">Pol. Campollano - C/ A, 7<br />02006 Albacete</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-purple-200 pt-3 text-sm text-gray-500 flex flex-wrap gap-4">
                <span>Horario: Lunes a Viernes, 9:00 - 17:00h</span>
                <span>Tiempo de respuesta: Máximo 72 horas</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 mt-3 text-sm">
              <p className="text-gray-700"><strong>Delegado de Protección de Datos:</strong> Para consultas específicas sobre protección de datos y cookies, contacta en <span className="text-purple-700 font-semibold">info@luzia.pro</span></p>
            </div>
          </section>

        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
          <button onClick={onBack} className="text-purple-600 hover:text-purple-800 font-semibold flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> Volver a la web principal
          </button>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">Política de Privacidad</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">Aviso Legal</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">Términos y Condiciones</span>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
