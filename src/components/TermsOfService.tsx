import React from 'react';
import { FileText, Mail, Phone, MapPin, ArrowLeft, Zap, CheckCircle, AlertTriangle, Scale, Shield, RefreshCw, Leaf } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
              <FileText className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Términos y Condiciones</h1>
              <p className="text-gray-600 font-semibold">Condiciones Generales de Contratación de Servicios Energéticos</p>
              <p className="text-gray-500 text-sm">Última actualización: 1 de enero de 2025</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mt-4">
            <p className="text-blue-800 text-sm leading-relaxed">
              Condiciones contractuales que regulan la prestación de servicios de suministro energético por parte de Wasabi Trader SL a través de su marca comercial LUZIA.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">1. Información General de la Empresa</h2>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">Wasabi Trader SL</h3>
                <p className="text-gray-600 text-sm">LUZIA es una marca comercial gestionada por Wasabi Trader SL</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-sm">
                <div>
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">CIF</span>
                  <p className="text-gray-800 font-semibold">B42709378</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">Registro Mercantil</span>
                  <p className="text-gray-700">Inscrita en el Registro Mercantil de Albacete</p>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Polígono Campollano - Calle A, 7<br />02006, Albacete, España</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">+34 621 50 83 00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">info@luzia.pro</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-purple-200 pt-3 text-sm text-gray-500">
                Horario de Atención: Lunes a Viernes, 9:00 - 17:00 | Autorización CNMC: Comercializadora autorizada
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Objeto y Ámbito de Aplicación</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Los presentes Términos y Condiciones regulan la relación contractual entre Wasabi Trader SL (a través de su marca LUZIA) y sus clientes para la prestación de servicios de suministro energético.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-50 rounded-2xl p-4">
                <h3 className="font-bold text-cyan-800 mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4" /> Servicios Ofrecidos
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Suministro de energía eléctrica 100% renovable</li>
                  <li>Suministro de gas natural doméstico y comercial</li>
                  <li>Gestión integral de facturación y contratos</li>
                  <li>Cambio de comercializadora (gestión completa)</li>
                  <li>Atención al cliente y soporte técnico</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4">
                <h3 className="font-bold text-purple-800 mb-3">Ámbito Territorial</h3>
                <p className="text-gray-600 text-sm">
                  Servicios disponibles en todo el territorio español peninsular, Islas Baleares, Islas Canarias, Ceuta y Melilla, sujeto a la disponibilidad de las redes de distribución correspondientes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Condiciones de Contratación</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">3.1 Modalidades de Contratación</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { label: 'Formulario web', desc: 'Con confirmación telefónica' },
                    { label: 'Llamada telefónica', desc: 'Con grabación de la conversación' },
                    { label: 'Contrato digital', desc: 'Firmado electrónicamente' },
                    { label: 'Visita comercial', desc: 'En tu domicilio o empresa' },
                    { label: 'Email', desc: 'Intercambio de documentación' },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-3 text-sm">
                      <p className="font-semibold text-gray-800">{item.label}</p>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">3.2 Documentación Necesaria</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2 text-sm">
                  <li>DNI/NIE del titular del contrato</li>
                  <li>Última factura de luz y/o gas (para identificar el punto de suministro)</li>
                  <li>Datos bancarios para domiciliación (IBAN)</li>
                  <li>Datos de contacto actualizados</li>
                  <li>Autorización para el cambio de comercializadora</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <h3 className="text-sm font-bold text-amber-800 mb-2">3.3 Verificación y Confirmación</h3>
                <p className="text-amber-700 text-sm">Todos los contratos están sujetos a verificación: confirmación telefónica, verificación de titularidad, comprobación de viabilidad técnica y validación de la documentación aportada.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Precios y Condiciones Económicas</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">4.1 Estructura de Precios</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="text-left p-3 font-bold text-gray-800 rounded-tl-xl">Concepto</th>
                        <th className="text-left p-3 font-bold text-gray-800">Descripción</th>
                        <th className="text-left p-3 font-bold text-gray-800 rounded-tr-xl">Aplicación</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="bg-gray-50">
                        <td className="p-3 font-semibold text-gray-700">Término de Energía</td>
                        <td className="p-3 text-gray-600">Precio por kWh consumido</td>
                        <td className="p-3 text-gray-600">Según consumo real</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-gray-700">Término de Potencia</td>
                        <td className="p-3 text-gray-600">Precio por kW contratado</td>
                        <td className="p-3 text-gray-600">Fijo mensual</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-semibold text-gray-700">Impuestos</td>
                        <td className="p-3 text-gray-600">IVA y otros impuestos</td>
                        <td className="p-3 text-gray-600">Según normativa fiscal</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-gray-700">Peajes y Cargos</td>
                        <td className="p-3 text-gray-600">Regulados por la CNMC</td>
                        <td className="p-3 text-gray-600">Según normativa</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-2xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2 text-sm">Precios Indexados</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Vinculados al mercado mayorista de electricidad</li>
                    <li>Actualizados según el precio del pool eléctrico</li>
                    <li>Máxima transparencia en la formación del precio</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-4">
                  <h4 className="font-bold text-green-800 mb-2 text-sm">Precios Fijos</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Precio estable durante el período acordado</li>
                    <li>Protección frente a volatilidad del mercado</li>
                    <li>Facilita la planificación del gasto energético</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
                <p className="text-yellow-800 text-sm font-semibold mb-1">Ofertas y Promociones</p>
                <p className="text-yellow-700 text-sm">Las ofertas están sujetas a condiciones específicas, disponibilidad y pueden tener limitaciones temporales o geográficas. Las condiciones definitivas se detallarán en el momento de la contratación.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Facturación y Pago</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-3">5.1 Ciclo de Facturación</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><strong>Periodicidad:</strong> Facturación mensual</li>
                  <li><strong>Lecturas:</strong> Reales o estimadas</li>
                  <li><strong>Emisión:</strong> Entre los días 1 y 5 de cada mes</li>
                  <li><strong>Envío:</strong> Email preferentemente o correo postal</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-3">5.2 Métodos de Pago</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>Domiciliación bancaria (recomendado)</li>
                  <li>Transferencia bancaria</li>
                  <li>Pago online a través de nuestra web</li>
                  <li>Otros métodos (consultar disponibilidad)</li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-4">
              <p className="text-amber-800 text-sm"><strong>Plazos de pago:</strong> 20 días naturales desde la emisión. El retraso genera intereses de demora según normativa vigente. En caso de impago, posible suspensión del suministro tras notificación previa.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-black text-gray-900">6. Derechos y Obligaciones de las Partes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-2xl p-5">
                <h3 className="font-bold text-green-800 mb-3">Derechos del Cliente</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Recibir suministro en las condiciones contratadas</li>
                  <li>Información clara y transparente sobre precios</li>
                  <li>Atención al cliente personalizada</li>
                  <li>Cambiar de comercializadora sin penalizaciones</li>
                  <li>Acceder a mecanismos de resolución de conflictos</li>
                  <li>Recibir compensaciones por interrupciones</li>
                  <li>Solicitar información sobre tu consumo</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-5">
                <h3 className="font-bold text-blue-800 mb-3">Obligaciones del Cliente</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Permitir el acceso para lecturas y mantenimiento</li>
                  <li>Pagar las facturas en los plazos establecidos</li>
                  <li>Comunicar cambios en los datos de contacto</li>
                  <li>Hacer un uso responsable del suministro</li>
                  <li>Notificar averías o anomalías</li>
                  <li>Cumplir con las normas de seguridad aplicables</li>
                </ul>
              </div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-5 mt-4">
              <h3 className="font-bold text-purple-800 mb-3">Obligaciones de Wasabi Trader SL</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-gray-600">
                <p>Suministrar energía en las condiciones contratadas</p>
                <p>Gestionar eficientemente el proceso de cambio</p>
                <p>Proporcionar información clara sobre precios</p>
                <p>Resolver incidencias en el menor tiempo posible</p>
                <p>Cumplir con toda la normativa sectorial aplicable</p>
                <p>Proteger los datos personales conforme al RGPD</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">7. Duración y Resolución del Contrato</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">7.1 Duración</h3>
                <p className="text-gray-600 text-sm">Duración indefinida salvo pacto en contrario, con inicio desde la fecha de alta en el sistema. Renovación automática por períodos anuales. Sin permanencia: posibilidad de resolución en cualquier momento.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-2xl p-4">
                  <h3 className="font-bold text-green-800 mb-2 text-sm">7.2 Resolución por el Cliente</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>En cualquier momento sin penalizaciones</li>
                    <li>Con preaviso de 15 días naturales</li>
                    <li>Mediante comunicación escrita o telefónica</li>
                    <li>Contratando con otra comercializadora</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-2xl p-4">
                  <h3 className="font-bold text-red-800 mb-2 text-sm">7.3 Resolución por la Empresa</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Impago reiterado tras requerimiento</li>
                    <li>Incumplimiento grave de obligaciones</li>
                    <li>Uso fraudulento o manipulación del suministro</li>
                    <li>Facilitación de datos falsos o inexactos</li>
                  </ul>
                  <p className="text-red-700 text-xs mt-2">En todos los casos se seguirá el procedimiento legal con notificación previa.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">8. Atención al Cliente y Reclamaciones</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-2xl p-5">
                <h3 className="font-bold text-purple-800 mb-3">Canales de Atención</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="h-4 w-4 text-purple-600" />
                    <span>+34 621 50 83 00</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="h-4 w-4 text-purple-600" />
                    <span>info@luzia.pro</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-4 w-4 text-purple-600" />
                    <span>Pol. Campollano - C/ A, 7, Albacete</span>
                  </div>
                  <p className="text-gray-500 text-xs pt-1">Lunes a Viernes, 9:00 - 17:00h</p>
                </div>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-5">
                <h3 className="font-bold text-cyan-800 mb-3">Procedimiento de Reclamaciones</h3>
                <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside ml-2">
                  <li>Contactar con nuestro servicio de atención al cliente</li>
                  <li>Plazo de respuesta: máximo 15 días hábiles</li>
                  <li>Si no hay resolución: dirigirse a la CNMC</li>
                  <li>Arbitraje: Juntas Arbitrales de Consumo</li>
                  <li>Vía judicial como último recurso</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">9. Protección de Datos y Privacidad</h2>
            </div>
            <div className="bg-purple-50 rounded-2xl p-5">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                El tratamiento de los datos personales se rige por la Política de Privacidad de Wasabi Trader SL, en cumplimiento del RGPD y la LOPDGDD.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                <p>Tratamiento lícito y transparente de datos personales</p>
                <p>Medidas de seguridad técnicas y organizativas</p>
                <p>Respeto a todos los derechos del interesado</p>
                <p>No cesión de datos a terceros sin consentimiento</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-orange-500" />
              <h2 className="text-2xl font-black text-gray-900">10. Fuerza Mayor</h2>
            </div>
            <div className="bg-orange-50 rounded-2xl p-5">
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                Se consideran causas de fuerza mayor las circunstancias extraordinarias e imprevisibles que impidan el cumplimiento de las obligaciones contractuales, incluyendo: fenómenos meteorológicos extremos, desastres naturales, fallos generalizados en las redes de transporte y distribución, huelgas del sector, decisiones de autoridades competentes, pandemias o emergencias sanitarias declaradas, y ciberataques a infraestructuras críticas.
              </p>
              <p className="text-gray-600 text-sm">En caso de fuerza mayor, se suspenden temporalmente las obligaciones afectadas sin aplicar penalizaciones, informando a los clientes y restableciendo el servicio tan pronto como sea posible.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">11. Modificaciones de los Términos</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Wasabi Trader SL se reserva el derecho a modificar estos términos para adaptarlos a cambios en la legislación sectorial, nuevos servicios, mejoras comerciales o adaptaciones técnicas.
            </p>
            <div className="bg-blue-50 rounded-2xl p-4 text-sm">
              <p className="text-blue-800 font-semibold mb-1">Proceso de notificación:</p>
              <p className="text-blue-700">Notificación previa mínimo 30 días antes de la entrada en vigor, por email, carta, web o factura. La continuidad en el servicio implica aceptación tácita. Siempre con posibilidad de resolución sin penalización.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">12. Legislación Aplicable y Jurisdicción</h2>
            </div>
            <div className="bg-purple-50 rounded-2xl p-5">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Estos términos se rigen por la legislación española: Ley 24/2013 del Sector Eléctrico, Ley 34/1998 del Sector de Hidrocarburos, Real Decreto 1955/2000, Código Civil español, Ley General para la Defensa de Consumidores y Usuarios, y normativa de la CNMC.
              </p>
              <p className="text-gray-700 text-sm">
                Para resolución de conflictos: mediación amistosa en primer término, arbitraje de consumo, y como última instancia, los Juzgados y Tribunales de <strong>Albacete</strong>, respetando siempre el fuero del domicilio del consumidor.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-black text-gray-900">13. Sostenibilidad e Innovación</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-2xl p-4">
                <h3 className="font-bold text-green-800 mb-2 text-sm">Compromiso Medioambiental</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Energía 100% renovable con garantía de origen</li>
                  <li>Contribución a la reducción de emisiones de CO₂</li>
                  <li>Promoción del uso eficiente de la energía</li>
                  <li>Apoyo a proyectos de energías renovables</li>
                </ul>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-4">
                <h3 className="font-bold text-cyan-800 mb-2 text-sm">Innovación Tecnológica</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Plataformas digitales de gestión</li>
                  <li>Sistemas de monitorización en tiempo real</li>
                  <li>Herramientas de eficiencia energética</li>
                  <li>Atención mediante IA (LUZIA)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">14. Contacto y Consultas</h2>
            <p className="text-gray-600 text-sm mb-4">Para cualquier consulta, aclaración o sugerencia sobre estos Términos y Condiciones:</p>
            <div className="bg-purple-50 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <p className="text-gray-500 text-xs mt-4">Horario: Lunes a Viernes, 9:00 - 17:00h</p>
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
          <span className="text-gray-500">Política de Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
