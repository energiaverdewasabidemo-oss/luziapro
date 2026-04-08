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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/50 backdrop-blur-sm text-amber-300 px-5 py-2 rounded-full text-sm font-semibold mb-8 tracking-wide uppercase">
            <Sun className="w-4 h-4" />
            Instalaciones Fotovoltaicas para Hogares
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            Ahorra hasta un{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              77%
            </span>
            <br />
            con Energía Solar
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Financia el 100% &nbsp;·&nbsp; Ahorra el 60% en el IRPF &nbsp;·&nbsp; Seis primeras facturas gratis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-5 px-10 rounded-2xl text-lg shadow-2xl hover:shadow-amber-500/40 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Pedir información gratis
            </a>
            <Link
              to="/subir-factura"
              className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <Calculator className="w-5 h-5" />
              Calcular mi ahorro
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Euro className="w-6 h-6 text-white" />
              </div>
              <p className="text-white font-bold text-lg leading-tight">Financiación</p>
              <p className="text-amber-300 font-black text-2xl">100%</p>
              <p className="text-white/60 text-xs mt-1">Desde 80€/mes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <p className="text-white font-bold text-lg leading-tight">Deducción</p>
              <p className="text-amber-300 font-black text-2xl">IRPF 60%</p>
              <p className="text-white/60 text-xs mt-1">Hasta 4.470€</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <p className="text-white font-bold text-lg leading-tight">Facturas</p>
              <p className="text-amber-300 font-black text-2xl">6 gratis</p>
              <p className="text-white/60 text-xs mt-1">Con Alumbra luz</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
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
