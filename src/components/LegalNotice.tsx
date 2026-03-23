import React from 'react';
import { Scale, Mail, Phone, MapPin, ArrowLeft, Building2, AlertTriangle, Globe, FileText, Shield } from 'lucide-react';

interface LegalNoticeProps {
  onBack: () => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack }) => {
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
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Aviso Legal</h1>
              <p className="text-gray-600 font-semibold">Información Legal y Condiciones de Uso</p>
              <p className="text-gray-500 text-sm">Última actualización: 1 de enero de 2025</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-4">
            <p className="text-amber-800 text-sm leading-relaxed">
              Información legal obligatoria según la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">1. Datos Identificativos del Titular</h2>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">Wasabi Trader SL</h3>
                <p className="text-gray-600 text-sm">LUZIA es una marca comercial gestionada por Wasabi Trader SL</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">CIF</span>
                    <p className="text-gray-800 font-semibold">B42709378</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">Domicilio Social</span>
                      <p className="text-gray-700 text-sm">Polígono Campollano - Calle A, 7<br />02006, Albacete, España</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">+34 621 50 83 00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">info@luzia.pro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">luzia.pro</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-purple-200 pt-4 mt-2">
                <h4 className="font-bold text-gray-800 mb-2">Actividad Empresarial</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <p><strong>Objeto Social:</strong> Comercialización de energía eléctrica y gas natural</p>
                  <p><strong>CNAE:</strong> 3513 - Distribución de energía eléctrica</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Objeto del Sitio Web</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              El presente aviso legal regula el uso del sitio web <strong>luzia.pro</strong>, del que es titular Wasabi Trader SL a través de su marca comercial LUZIA.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong>Finalidad:</strong> Proporcionar información sobre servicios de suministro energético, facilitar la contratación online y ofrecer atención al cliente digital.
            </p>
            <p className="text-gray-600 leading-relaxed">
              La utilización de la web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal en la versión publicada en el momento del acceso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Condiciones de Acceso y Uso</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">3.1 Condiciones Generales</h3>
                <p className="text-gray-600 leading-relaxed">
                  El acceso y uso de esta web se rige por la legalidad vigente y el principio de buena fe, comprometiéndose el usuario a realizar un uso adecuado conforme a la ley, la moral, las buenas costumbres y el orden público.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">3.2 Usos Prohibidos</h3>
                <div className="bg-red-50 rounded-2xl p-4">
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2 text-sm">
                    <li>Realizar actividades ilícitas, fraudulentas o que infrinjan derechos de terceros</li>
                    <li>Transmitir o difundir contenidos violentos, obscenos, abusivos o ilícitos</li>
                    <li>Introducir virus informáticos o realizar acciones que puedan dañar los sistemas</li>
                    <li>Intentar acceder a áreas restringidas de los sistemas informáticos</li>
                    <li>Utilizar la web para enviar comunicaciones comerciales no solicitadas</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Contenidos del Sitio Web</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Los contenidos tienen carácter meramente informativo sobre los servicios de suministro energético. Wasabi Trader SL se esfuerza por mantener la información actualizada y precisa, pero no garantiza su exactitud, completitud o actualidad en todo momento.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
                <p className="text-yellow-800 text-sm">
                  Los precios mostrados son orientativos y pueden variar según las condiciones del mercado energético. Las condiciones definitivas se establecerán en el contrato correspondiente.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-orange-500" />
              <h2 className="text-2xl font-black text-gray-900">5. Exclusión de Responsabilidades</h2>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">5.1 Disponibilidad del Servicio</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Wasabi Trader SL no garantiza la disponibilidad y continuidad del funcionamiento de la web. No se responsabiliza de interrupciones, suspensiones o desconexiones del servicio.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">5.2 Contenidos y Uso Indebido</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Wasabi Trader SL excluye responsabilidad por errores en los contenidos, uso ilícito de la web por parte de usuarios, o daños causados por terceros mediante intromisiones ilegítimas fuera de su control.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">6. Propiedad Intelectual e Industrial</h2>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Wasabi Trader SL o a terceros que han autorizado su uso.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>Queda prohibida</strong> la reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos sin la autorización expresa de Wasabi Trader SL.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Enlaces a Terceros</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">7.1 Enlaces Salientes</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Wasabi Trader SL no ejerce ningún tipo de control sobre los sitios web enlazados y no asume responsabilidad alguna por sus contenidos, disponibilidad o servicios prestados.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">7.2 Enlaces Entrantes</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Los enlaces a nuestro sitio web desde sitios externos requieren autorización previa. El establecimiento de enlaces no autorizados no implica ningún tipo de relación con el titular del sitio externo.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-black text-gray-900">8. Protección de Datos Personales</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              El tratamiento de los datos personales realizados a través de esta web se regirá por lo establecido en la Política de Privacidad, en cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">9. Marco Regulatorio del Sector Energético</h2>
            <div className="bg-cyan-50 rounded-2xl p-6">
              <p className="text-gray-700 mb-3 text-sm font-semibold">Wasabi Trader SL desarrolla su actividad en el marco de la normativa vigente:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2 text-sm">
                <li>Ley 24/2013, de 26 de diciembre, del Sector Eléctrico</li>
                <li>Ley 34/1998, de 7 de octubre, del Sector de Hidrocarburos</li>
                <li>Real Decreto 1955/2000, regulador de actividades de gas natural</li>
                <li>Normativa de la CNMC (Comisión Nacional de los Mercados y la Competencia)</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Wasabi Trader SL está debidamente autorizada para el ejercicio de la actividad de comercialización de energía eléctrica y gas natural, cumpliendo con todos los requisitos establecidos por la normativa sectorial vigente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">10. Modificaciones del Aviso Legal</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Wasabi Trader SL se reserva el derecho de realizar modificaciones en este Aviso Legal sin previo aviso, en función de cambios en la legislación aplicable, modificaciones en los servicios ofrecidos o adaptaciones técnicas y comerciales. Las modificaciones serán válidas desde su publicación en la web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">11. Legislación Aplicable y Jurisdicción</h2>
            <div className="bg-purple-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                Las presentes condiciones se rigen por la legislación española, específicamente la Ley 34/2002 de Servicios de la Sociedad de la Información, el Código Civil español, la Ley General para la Defensa de Consumidores y Usuarios, y la normativa sectorial energética.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de la web, las partes se someten expresamente a la jurisdicción de los Juzgados y Tribunales de <strong>Albacete</strong>, renunciando a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">12. Contacto</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Para cualquier consulta, sugerencia o reclamación relacionada con este Aviso Legal:
            </p>
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
              <p className="text-gray-500 text-xs mt-4">Horario de atención: Lunes a Viernes, 9:00 - 17:00h</p>
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
          <span className="text-gray-500">Términos y Condiciones</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">Política de Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
