import React from 'react';
import { Shield, Mail, Phone, MapPin, ArrowLeft, ExternalLink } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Política de Privacidad</h1>
              <p className="text-gray-600 font-semibold">Última actualización: 1 de enero de 2025</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-blue-800 text-sm leading-relaxed">
              Tu privacidad es nuestra prioridad. En <strong>Luzia</strong>, comparador de luz y gas gestionado por <strong>Wasabi Trader SL</strong>, cumplimos estrictamente con el Reglamento General de Protección de Datos (RGPD) y la normativa española de protección de datos.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Responsable del Tratamiento</h2>
            <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
              <div>
                <p className="font-bold text-gray-900 text-lg">Wasabi Trader SL</p>
                <p className="text-gray-600 text-sm mt-1">Empresa titular y gestora de <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-semibold">www.luzia.pro</a> (marca Luzia)</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-cyan-600 mt-0.5 shrink-0" />
                    <span className="font-semibold text-gray-700">Polígono Campollano - Calle A, 7<br/>02006 Albacete, España</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-gray-500 w-5 text-center">B</span>
                    <span className="font-semibold text-gray-700">CIF: B42709378</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-600" />
                    <a href="mailto:info@wasabitrader.com" className="font-semibold text-gray-700 hover:text-cyan-600">info@wasabitrader.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-cyan-600" />
                    <span className="font-semibold text-gray-700">+34 621 50 83 00</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-3 mt-2">
                <p className="text-sm text-gray-600"><strong>Delegado de Protección de Datos:</strong> <a href="mailto:info@wasabitrader.com" className="text-cyan-600 hover:underline">info@wasabitrader.com</a></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Información que Recopilamos</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">2.1 Datos de Identificación</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Nombre completo, DNI/NIE, fecha de nacimiento</li>
                  <li>Dirección postal, teléfono, email</li>
                  <li>Datos bancarios: IBAN para domiciliación de pagos</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">2.2 Datos de Consumo Energético</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Facturas de luz y gas (consumo histórico)</li>
                  <li>Potencia contratada y tarifa actual</li>
                  <li>Preferencias comerciales y historial de consultas</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">2.3 Datos Técnicos</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Dirección IP y datos de navegación en <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a></li>
                  <li>Tipo de dispositivo y navegador</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Finalidades del Tratamiento</h2>
            <div className="space-y-3">
              {[
                { title: 'Gestión Comercial', items: ['Gestionar y responder a consultas comerciales', 'Elaborar presupuestos personalizados de luz y gas', 'Realizar seguimiento comercial y postventa', 'Envío de ofertas y promociones (con consentimiento)'] },
                { title: 'Prestación de Servicios', items: ['Comparación de tarifas energéticas en luzia.pro', 'Gestión de cambios de comercializadora', 'Facturación y atención al cliente', 'Resolución de incidencias'] },
                { title: 'Cumplimiento Legal', items: ['Obligaciones fiscales y contables', 'Reporte a organismos reguladores (CNMC)', 'Prevención de fraude', 'Atención a requerimientos judiciales'] }
              ].map((group) => (
                <div key={group.title} className="bg-cyan-50 rounded-xl p-5">
                  <h3 className="font-bold text-cyan-800 mb-2">{group.title}</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Base Legal del Tratamiento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Consentimiento explícito', desc: 'Para comunicaciones comerciales y marketing' },
                { label: 'Ejecución contractual', desc: 'Para la prestación de servicios energéticos' },
                { label: 'Interés legítimo', desc: 'Para mejora de servicios y análisis comercial' },
                { label: 'Obligación legal', desc: 'Para cumplimiento de normativa sectorial y fiscal' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Conservación de Datos</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 rounded-xl text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold">Tipo de dato</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold">Período de conservación</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    ['Consultas comerciales', '3 años desde el último contacto'],
                    ['Clientes activos', 'Durante la vigencia del contrato'],
                    ['Ex-clientes', '6 años tras finalización del contrato'],
                    ['Datos fiscales', '4 años según normativa fiscal española'],
                    ['Datos de navegación', 'Máximo 12 meses'],
                    ['Comunicaciones comerciales', 'Hasta revocación del consentimiento'],
                  ].map(([tipo, periodo]) => (
                    <tr key={tipo}>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">{tipo}</td>
                      <td className="border border-gray-200 px-4 py-3">{periodo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Destinatarios de los Datos</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">Proveedores de Servicios</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Empresas de hosting y servicios tecnológicos</li>
                  <li>Plataformas de email marketing y CRM</li>
                  <li>Google Analytics (análisis web de luzia.pro)</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">Terceros Obligatorios</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Distribuidoras eléctricas y gasistas</li>
                  <li>Comisión Nacional de los Mercados y la Competencia (CNMC)</li>
                  <li>Agencia Tributaria y organismos fiscales</li>
                  <li>Autoridades judiciales cuando sea requerido</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Sus Derechos</h2>
            <div className="bg-cyan-50 rounded-2xl p-6">
              <p className="text-gray-700 mb-4 font-semibold">Usted tiene pleno control sobre sus datos personales:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  ['Acceso', 'Conocer qué datos tenemos sobre usted'],
                  ['Rectificación', 'Corregir datos inexactos o incompletos'],
                  ['Supresión', 'Solicitar la eliminación de sus datos'],
                  ['Limitación', 'Restringir el tratamiento en ciertas circunstancias'],
                  ['Portabilidad', 'Recibir sus datos en formato estructurado'],
                  ['Oposición', 'Oponerse al tratamiento por motivos personales'],
                ].map(([derecho, desc]) => (
                  <div key={derecho} className="bg-white rounded-xl p-3">
                    <p className="font-bold text-gray-800 text-sm">{derecho}</p>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-cyan-200 pt-4">
                <p className="text-gray-700 text-sm">
                  Para ejercer sus derechos: <a href="mailto:info@wasabitrader.com" className="font-bold text-cyan-700 hover:underline">info@wasabitrader.com</a> — Plazo de respuesta: máximo 1 mes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">8. Medidas de Seguridad</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-3">Medidas Técnicas</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li>Cifrado SSL/TLS en todas las comunicaciones</li>
                  <li>Firewalls y detección de intrusiones</li>
                  <li>Copias de seguridad cifradas</li>
                  <li>Autenticación multifactor</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-3">Medidas Organizativas</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li>Control de acceso por roles</li>
                  <li>Formación continua en protección de datos</li>
                  <li>Auditorías internas regulares</li>
                  <li>Acuerdos de confidencialidad</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">9. Reclamaciones ante la Autoridad de Control</h2>
            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="text-gray-700 mb-3 leading-relaxed">Si considera que el tratamiento de sus datos no es conforme a la normativa, puede presentar reclamación ante:</p>
              <div className="space-y-2">
                <p className="font-bold text-gray-900">Agencia Española de Protección de Datos (AEPD)</p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <ExternalLink className="h-4 w-4" />
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.aepd.es</a>
                </div>
                <p className="text-sm text-gray-600">Teléfono: 901 100 099 — C/ Jorge Juan, 6. 28001 Madrid</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">10. Contacto</h2>
            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-4">Wasabi Trader SL — Departamento de Protección de Datos</p>
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

export default PrivacyPolicy;
