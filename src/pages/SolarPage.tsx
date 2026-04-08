import { Sun, Zap, TrendingDown, Shield, Battery, Euro, Calculator, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WHATSAPP_URL = 'https://wa.me/34621508300?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20la%20instalaci%C3%B3n%20de%20placas%20solares%20para%20mi%20hogar.';

export default function SolarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 shadow-lg">
              <Sun className="w-6 h-6" />
              Instalaciones Fotovoltaicas para Hogares
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ahorra hasta un <span className="text-orange-600">77%</span> con Energía Solar
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              Financia el 100% • Ahorra el 60% en el IRPF • Seis primeras facturas gratis
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Euro className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Financiación 100%</h3>
              <p className="text-gray-600 text-lg">Desde 80€/mes sin entrada inicial. Empieza a ahorrar desde el primer día.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">60% Deducible IRPF</h3>
              <p className="text-gray-600 text-lg">Hasta 4.470€ de deducción en tu declaración de la renta.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">6 Facturas Gratis</h3>
              <p className="text-gray-600 text-lg">Contratando la luz con Alumbra, tus primeras seis facturas son gratis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-900 to-purple-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Elige tu solución Alumbra Conecta
          </h2>
          <p className="text-xl text-purple-200 text-center mb-12">
            Una solución adaptada a cada estilo de vida según tu consumo
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Conecta 8 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-700 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-bold">Alumbra Conecta 8</h3>
                  <Sun className="w-12 h-12 text-amber-300" />
                </div>
                <p className="text-purple-200 text-lg">Consumo medio</p>
              </div>

              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6">
                  La opción más acorde en viviendas pareadas o unifamiliares con un consumo eléctrico medio.
                </p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 mb-6 border-2 border-orange-200">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-orange-600">1.360€</span>
                    <span className="text-2xl text-gray-600">+ IVA</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1 line-through">Precio base: 5.900€ + IVA</p>
                  <p className="text-green-700 font-semibold text-lg">Amortiza en 3-4 años</p>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <Battery className="w-5 h-5 text-orange-600" />
                    Instalación completa
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>8 paneles de 580 Wp</strong> - 4.64 kWp de potencia total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Batería incluida de 2.4 kWh</strong> (ampliable a 4.8 kWh)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Inversor de 4 kWn híbrido</strong> con sistema BACK-UP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Certificados de Eficiencia Energética</strong> incluidos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Producción y ahorro</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Producción asegurada</p>
                      <p className="text-2xl font-bold text-purple-700">6.637 kWh</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Ahorro estimado año 1</p>
                      <p className="text-2xl font-bold text-green-600">981€</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-start gap-2">
                    <Calculator className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Descuento IBI: -1.000€</p>
                      <p className="text-gray-600">Hasta el 50% durante 5 años</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calculator className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Deducción IRPF: -3.540€</p>
                      <p className="text-gray-600">Hasta el 60% deducible en Renta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Garantías extendidas</p>
                      <p className="text-gray-600">10 años inversores • 25 años paneles</p>
                    </div>
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Solicitar Conecta 8
                </a>
                <p className="text-center text-sm text-gray-600 mt-3">Financiación desde 80€/mes</p>
              </div>
            </div>

            {/* Conecta 12 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all transform hover:scale-105 border-4 border-orange-400">
              <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-6 text-white relative">
                <div className="absolute top-4 right-4 bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-bold">
                  MÁS POPULAR
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-bold">Alumbra Conecta 12</h3>
                  <Sun className="w-12 h-12 text-yellow-300" />
                </div>
                <p className="text-orange-100 text-lg">Consumo alto</p>
              </div>

              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6">
                  La forma más rentable de gestionar la energía en hogares con un consumo eléctrico alto.
                </p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 mb-6 border-2 border-orange-300">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-orange-600">1.980€</span>
                    <span className="text-2xl text-gray-600">+ IVA</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1 line-through">Precio base: 7.450€ + IVA</p>
                  <p className="text-green-700 font-semibold text-lg">Amortiza en 3-4 años</p>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <Battery className="w-5 h-5 text-orange-600" />
                    Instalación completa
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>12 paneles de 580 Wp</strong> - 6.96 kWp de potencia total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Batería incluida de 2.4 kWh</strong> (ampliable a 4.8 kWh)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Inversor de 5 kWn híbrido</strong> con sistema BACK-UP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Certificados de Eficiencia Energética</strong> incluidos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 mb-6 border border-orange-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Producción y ahorro</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Producción asegurada</p>
                      <p className="text-2xl font-bold text-orange-600">9.832 kWh</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Ahorro estimado año 1</p>
                      <p className="text-2xl font-bold text-green-600">1.286€</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-start gap-2">
                    <Calculator className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Descuento IBI: -1.000€</p>
                      <p className="text-gray-600">Hasta el 50% durante 5 años</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calculator className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Deducción IRPF: -4.470€</p>
                      <p className="text-gray-600">Hasta el 60% deducible en Renta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Garantías extendidas</p>
                      <p className="text-gray-600">10 años inversores • 25 años paneles</p>
                    </div>
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Solicitar Conecta 12
                </a>
                <p className="text-center text-sm text-gray-600 mt-3">Financiación desde 105€/mes</p>
              </div>
            </div>
          </div>

          <p className="text-center text-white text-sm mt-8">
            Promoción sujeta a los términos y condiciones publicadas en alumbraenergia.es/alumbraconecta
          </p>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Ventajas adicionales
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Battery className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Batería Virtual</h3>
              <p className="text-gray-600">Contratando la luz con Alumbra, almacena tu excedente de energía</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Sistema BACK-UP</h3>
              <p className="text-gray-600">Protección contra apagones para circuitos críticos (+200€)</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Batería PLUS</h3>
              <p className="text-gray-600">Amplía tu batería a 4.8 kWh por solo 400€ adicionales</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Certificados incluidos</h3>
              <p className="text-gray-600">Eficiencia energética inicial y final para deducciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empieza a ahorrar hoy mismo
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Únete a miles de hogares que ya están ahorrando con energía solar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/subir-factura"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <Calculator className="w-6 h-6" />
              Calcular mi ahorro
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
