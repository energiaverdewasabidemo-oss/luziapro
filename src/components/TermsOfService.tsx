import React from 'react';
import { FileText, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
              <FileText className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Términos y Condiciones</h1>
              <p className="text-gray-600 font-semibold">Última actualización: 1 de enero de 2025</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-blue-800 text-sm leading-relaxed">
              Condiciones contractuales que regulan el uso del comparador de luz y gas <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">www.luzia.pro</a>, operado por <strong>Wasabi Trader SL</strong> bajo la marca comercial <strong>Luzia</strong>.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Información de la Empresa</h2>
            <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
              <div>
                <p className="font-bold text-gray-900 text-lg">Wasabi Trader SL</p>
                <p className="text-gray-600 text-sm mt-1">Empresa gestora de <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-semibold">www.luzia.pro</a> bajo la marca comercial <strong>Luzia</strong></p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-cyan-600 mt-0.5 shrink-0" />
                    <span className="font-semibold text-gray-700 text-sm">Polígono Campollano - Calle A, 7<br/>02006 Albacete, España</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8"><strong>CIF:</strong> B42709378</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-600" />
                    <a href="mailto:info@wasabitrader.com" className="font-semibold text-gray-700 hover:text-cyan-600 text-sm">info@wasabitrader.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-cyan-600" />
                    <span className="font-semibold text-gray-700 text-sm">+34 621 50 83 00</span>
                  </div>
                  <p className="text-sm text-gray-500 ml-8">Lunes a Viernes, 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Objeto y Ámbito de Aplicación</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Los presentes Términos y Condiciones regulan el uso del servicio de comparación de tarifas de luz y gas ofrecido por <strong>Wasabi Trader SL</strong> a través de <a href="https://www.luzia.pro" target={`_blank`} rel=\"noopener noreferrer" className=\"text-cyan-600 hover:underline font-semibold">www.luzia.pro</a> (marca Luzia) y cualquier aplicación o canal digital asociado.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              El uso de nuestros servicios implica la aceptación plena de estos términos y condiciones.
            </p>
            <div className="bg-slate-50 rounded-xl p-5 mt-4">
              <h3 className="font-bold text-gray-800 mb-3">Servicios Ofrecidos en luzia.pro</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                <li>Comparación gratuita de tarifas de luz y gas</li>
                <li>Análisis personalizado de consumo energético</li>
                <li>Recomendaciones de tarifas más económicas</li>
                <li>Gestión completa del cambio de comercializadora</li>
                <li>Suministro de energía eléctrica 100% renovable</li>
                <li>Suministro de gas natural para uso doméstico y comercial</li>
                <li>Atención al cliente y soporte técnico</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">Servicios disponibles en todo el territorio español peninsular, Islas Baleares, Islas Canarias, Ceuta y Melilla, sujeto a disponibilidad de redes de distribución.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Gratuidad del Servicio de Comparación</h2>
            <div className="bg-green-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>El servicio de comparación de Luzia (www.luzia.pro) es completamente gratuito para los usuarios.</strong> Los ingresos de Wasabi Trader SL provienen de comisiones abonadas por las compañías energéticas cuando un usuario realiza un cambio de tarifa a través de nuestra plataforma, sin coste adicional para el cliente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Condiciones de Contratación</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-3">4.1 Modalidades de Contratación</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li>Formulario web en <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a> con confirmación telefónica</li>
                  <li>Llamada telefónica con grabación de la conversación</li>
                  <li>Contrato digital firmado electrónicamente</li>
                  <li>Visita comercial en domicilio o empresa</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-3">4.2 Documentación Necesaria</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li>DNI/NIE del titular del contrato</li>
                  <li>Última factura de luz y/o gas (para identificar el punto de suministro)</li>
                  <li>Datos bancarios para domiciliación (IBAN)</li>
                  <li>Autorización para el cambio de comercializadora</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Precios y Condiciones Económicas</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gray-200 rounded-xl text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold">Concepto</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    ['Término de Energía', 'Precio por kWh consumido según consumo real'],
                    ['Término de Potencia', 'Precio por kW contratado (fijo mensual)'],
                    ['Impuestos', 'IVA y otros impuestos según normativa fiscal'],
                    ['Peajes y Cargos', 'Regulados por la CNMC según normativa vigente'],
                  ].map(([concepto, desc]) => (
                    <tr key={concepto}>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">{concepto}</td>
                      <td className="border border-gray-200 px-4 py-3">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-cyan-50 rounded-xl p-5">
              <p className="text-sm text-cyan-800 font-semibold">Descuentos disponibles: hasta un 30% en suministro eléctrico, 30% en gas natural y 30% para pymes en consumo. Sujeto a condiciones específicas y disponibilidad.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Obligaciones del Usuario</h2>
            <div className="space-y-3">
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">El usuario se compromete a:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Usar el servicio de <a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a> de forma responsable y legal</li>
                  <li>No interferir con el funcionamiento de la plataforma</li>
                  <li>Respetar los derechos de propiedad intelectual de Wasabi Trader SL y marca Luzia</li>
                  <li>Pagar las facturas en los plazos establecidos</li>
                  <li>Comunicar cambios en los datos de contacto</li>
                  <li>Notificar averías o anomalías en el suministro</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Duración y Resolución del Contrato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">Duración</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li>Duración indefinida salvo pacto en contrario</li>
                  <li>Sin permanencia obligatoria</li>
                  <li>Renovación automática por períodos anuales</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">Resolución por el Cliente</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li>En cualquier momento sin penalizaciones</li>
                  <li>Con preaviso de 15 días naturales</li>
                  <li>Mediante comunicación escrita (email o carta)</li>
                  <li>Contratando con otra comercializadora</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Wasabi Trader SL</strong>, a través de <a href="https://www.luzia.pro" target={`_blank`} rel=\"noopener noreferrer" className=\"text-cyan-600 hover:underline">www.luzia.pro</a>, actúa como intermediario entre el usuario y las compañías energéticas. No nos responsabilizamos de:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                <li>Cambios en las tarifas por parte de las compañías</li>
                <li>Interrupciones del suministro energético</li>
                <li>Disputas entre el usuario y la compañía energética</li>
                <li>Fallos técnicos ajenos a nuestro control</li>
                <li>Causas de fuerza mayor (fenómenos meteorológicos, huelgas, ciberataques a infraestructuras críticas, etc.)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">9. Atención al Cliente y Reclamaciones</h2>
            <div className="bg-cyan-50 rounded-2xl p-6">
              <h3 className="font-bold text-cyan-800 mb-4">Procedimiento de Reclamaciones</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4 text-sm">
                <li>Primera instancia: contactar con nuestro servicio de atención al cliente (plazo de respuesta: máximo 15 días hábiles)</li>
                <li>Si no hay resolución: dirigirse a la CNMC</li>
                <li>Arbitraje: Juntas Arbitrales de Consumo</li>
                <li>Vía judicial como último recurso</li>
              </ol>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 bg-white rounded-lg p-3">
                  <Mail className="h-4 w-4 text-cyan-600" />
                  <a href="mailto:info@wasabitrader.com" className="text-sm font-semibold text-gray-800 hover:text-cyan-600">info@wasabitrader.com</a>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-lg p-3">
                  <Phone className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm font-semibold text-gray-800">+34 621 50 83 00</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">10. Propiedad Intelectual</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Todos los contenidos, marcas (incluyendo la marca <strong>Luzia</strong>), logos, diseños y tecnología del sitio <a href="https://www.luzia.pro" target={`_blank`} rel=\"noopener noreferrer" className=\"text-cyan-600 hover:underline">www.luzia.pro</a> son propiedad de <strong>Wasabi Trader SL</strong> y están protegidos por derechos de propiedad intelectual. Queda prohibida su reproducción, distribución o modificación sin autorización expresa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">11. Ley Aplicable y Jurisdicción</h2>
            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed text-sm mb-3">
                Estos términos se rigen por la legislación española, especialmente la Ley 24/2013 del Sector Eléctrico, la Ley 34/1998 del Sector de Hidrocarburos, el Código Civil y la Ley General para la Defensa de Consumidores y Usuarios.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de <strong>Albacete</strong>, sin perjuicio del fuero que pudiera corresponder al consumidor.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">12. Contacto y Consultas</h2>
            <div className="bg-slate-50 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-4">Wasabi Trader SL — Departamento Legal y Atención al Cliente (<a href="https://www.luzia.pro" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.luzia.pro</a>)</p>
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

export default TermsOfService;
