import React from 'react';
import { Scale, Mail, Phone, MapPin, ArrowLeft, ExternalLink } from 'lucide-react';

interface LegalNoticeProps {
  onBack: () => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack }) => {
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
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Aviso Legal</h1>
              <p className="text-gray-600 font-semibold">Última actualización: 1 de enero de 2025</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-blue-800 text-sm leading-relaxed">
              Información legal obligatoria según la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE). El sitio web <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">www.luzia.pro</a> es titularidad de <strong>Wasabi Trader SL</strong>, que opera bajo la marca comercial <strong>Luzia</strong>.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Datos Identificativos del Titular</h2>
            <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
              <div>
                <p className="font-bold text-gray-900 text-xl">Wasabi Trader SL</p>
                <p className="text-gray-600 text-sm mt-1">Titular del sitio web <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-semibold">www.luzia.pro</a>, operado bajo la marca comercial <strong>Luzia</strong></p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">CIF</p>
                    <p className="font-semibold text-gray-800">B42709378</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Domicilio Social</p>
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-cyan-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">Polígono Campollano - Calle A, 7<br/>02006 Albacete, España</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Registro Mercantil</p>
                    <p className="text-gray-700 text-sm">Inscrita en el Registro Mercantil de Albacete</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Sitio Web</p>
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4 text-cyan-600" />
                      <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-semibold">www.luzia.pro</a>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-cyan-600" />
                      <a href="mailto:info@wasabitrader.com" className="text-gray-700 hover:text-cyan-600 text-sm">info@wasabitrader.com</a>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Teléfono</p>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-cyan-600" />
                      <span className="text-gray-700 text-sm">+34 621 50 83 00</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Actividad</p>
                    <p className="text-gray-700 text-sm">Comparación y comercialización de tarifas de energía eléctrica y gas natural</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Objeto del Sitio Web</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              El presente aviso legal regula el uso del sitio web <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-semibold">www.luzia.pro</a> (en adelante, "la web"), del que es titular <strong>Wasabi Trader SL</strong>, que lo opera bajo la marca comercial <strong>Luzia</strong>.
            </p>
            <div className="bg-cyan-50 rounded-2xl p-6">
              <h3 className="font-bold text-cyan-800 mb-3">Finalidad del sitio web:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Comparación gratuita de tarifas de luz y gas del mercado español</li>
                <li>Análisis personalizado de consumo energético</li>
                <li>Asesoramiento energético especializado</li>
                <li>Gestión de cambios de comercializadora</li>
                <li>Atención al cliente y soporte técnico</li>
              </ul>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4 text-sm">
              La utilización de la web atribuye la condición de usuario e implica la aceptación plena de todas las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Condiciones de Acceso y Uso</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">3.1 Condiciones Generales</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  El acceso y uso de <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a> es gratuito y se rige por la legalidad vigente y el principio de buena fe. El usuario se compromete a un uso adecuado conforme a la ley, la moral y las buenas costumbres.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">3.2 Usos Prohibidos</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li>Realizar actividades ilícitas o que infrinjan derechos de terceros</li>
                  <li>Transmitir contenidos violentos, abusivos, discriminatorios o ilícitos</li>
                  <li>Introducir virus informáticos o realizar acciones que dañen los sistemas</li>
                  <li>Intentar acceder a áreas restringidas de los sistemas</li>
                  <li>Utilizar la web para enviar comunicaciones no solicitadas</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Propiedad Intelectual e Industrial</h2>
            <div className="bg-amber-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                Todos los contenidos de <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a>, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a <strong>Wasabi Trader SL</strong> o a terceros que han autorizado su uso. La marca comercial <strong>Luzia</strong> es titularidad de Wasabi Trader SL.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>Queda expresamente prohibida</strong> la reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se realice con los contenidos sin autorización expresa y por escrito de Wasabi Trader SL.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Exclusión de Responsabilidades</h2>
            <div className="space-y-4">
              {[
                { title: '5.1 Disponibilidad del Servicio', text: 'Wasabi Trader SL no garantiza la disponibilidad y continuidad de www.luzia.pro. Cuando sea razonablemente posible, se advertirá previamente de las interrupciones en el funcionamiento de la web.' },
                { title: '5.2 Contenidos e Información', text: 'Las tarifas y condiciones mostradas en luzia.pro provienen de las compañías energéticas. Wasabi Trader SL no se responsabiliza de cambios posteriores en dichas condiciones ni de errores en la información facilitada por terceros.' },
                { title: '5.3 Uso Indebido', text: 'Wasabi Trader SL no será responsable de los daños causados por el uso ilícito o incorrecto de la web por parte de los usuarios, ni de las intromisiones ilegítimas de terceros fuera de su control.' },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Normativa del Sector Energético</h2>
            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="text-gray-700 text-sm mb-3">Wasabi Trader SL desarrolla su actividad en el marco de la normativa del sector energético español:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                <li>Ley 24/2013, de 26 de diciembre, del Sector Eléctrico</li>
                <li>Ley 34/1998, de 7 de octubre, del Sector de Hidrocarburos</li>
                <li>Real Decreto 1955/2000, regulador de actividades de gas natural</li>
                <li>Normativa de la CNMC (Comisión Nacional de los Mercados y la Competencia)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Protección de Datos y Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-50 rounded-xl p-5">
                <h3 className="font-bold text-cyan-800 mb-2">Política de Privacidad</h3>
                <p className="text-gray-600 text-sm">El tratamiento de datos personales en <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a> se rige por nuestra Política de Privacidad, en cumplimiento del RGPD y la LOPDGDD.</p>
              </div>
              <div className="bg-cyan-50 rounded-xl p-5">
                <h3 className="font-bold text-cyan-800 mb-2">Política de Cookies</h3>
                <p className="text-gray-600 text-sm">Este sitio web utiliza cookies para mejorar la experiencia del usuario. Para información detallada, consulte nuestra Política de Cookies.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">8. Legislación Aplicable y Jurisdicción</h2>
            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                Las presentes condiciones se rigen por la legislación española, específicamente la Ley 34/2002 de Servicios de la Sociedad de la Información, el Código Civil español y la Ley General para la Defensa de Consumidores y Usuarios.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Para la resolución de cualquier controversia derivada del acceso o uso de <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a>, las partes se someten expresamente a la jurisdicción de los Juzgados y Tribunales de <strong>Albacete</strong>, sin perjuicio del fuero que pudiera corresponder al consumidor.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">9. Contacto</h2>
            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-4">Wasabi Trader SL — titular de <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a></p>
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
              <p className="text-sm text-gray-500 mt-4">Horario: Lunes a Viernes, 9:00 - 18:00</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
