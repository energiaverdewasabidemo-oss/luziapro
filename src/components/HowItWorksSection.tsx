import React from 'react';
import { Upload, Brain, Zap, CheckCircle } from 'lucide-react';

interface HowItWorksSectionProps {
  onGoToSubirFactura: () => void;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onGoToSubirFactura }) => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Sube tu factura",
      description: "Simplemente fotografía o sube tu última factura. LUZIA extrae automáticamente todos los datos: consumo, potencia, tarifa actual y costes ocultos.",
      color: "from-blue-600 to-blue-700"
    },
    {
      number: "02",
      icon: Brain,
      title: "IA compara en 30 segundos",
      description: "Nuestra inteligencia artificial compara +1000 tarifas de todas las compañías, calcula tu ahorro real y te muestra las mejores opciones.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      number: "03",
      icon: Zap,
      title: "Cambio automático",
      description: "Elige la mejor opción y nosotros gestionamos todo: contacto con compañías, papeleo, seguimiento. Tú solo empiezas a ahorrar desde el primer día.",
      color: "from-green-500 to-green-600"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Seguimiento continuo",
      description: "Monitorizamos tu tarifa 24/7 y te avisamos si aparece una opción mejor. Optimización automática para que siempre tengas el mejor precio.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Ahorra en tu factura en 4 pasos con <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">LUZIA</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
            Proceso 100% automatizado con <span className="font-black text-pink-400">inteligencia artificial</span> y soporte de <span className="font-black text-cyan-400">expertos humanos</span>
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-cyan-400 to-pink-400 transform -translate-y-1/2 rounded-full shadow-lg animate-pulse"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group transform hover:scale-105 lg:hover:scale-110 transition-all duration-500">
                <div className="relative mb-6 lg:mb-8">
                  {/* Step Number */}
                  <div className={`absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-slate-800 border-2 lg:border-4 border-pink-400/50 rounded-full flex items-center justify-center font-black text-pink-400 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all duration-500 group-hover:scale-125 shadow-xl lg:shadow-2xl text-sm lg:text-base`}>
                    {step.number}
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${step.color} rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl lg:shadow-2xl group-hover:shadow-purple-500/50`}>
                    <step.icon className="h-10 w-10 lg:h-12 lg:w-12 text-white drop-shadow-lg" />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl lg:rounded-3xl`}></div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-black text-white mb-4 lg:mb-6 group-hover:text-pink-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm lg:text-base max-w-sm mx-auto group-hover:text-gray-300 transition-colors font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl lg:rounded-3xl p-6 lg:p-10 mb-8 lg:mb-10 border-2 border-pink-400/30 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <div className="text-center">
                <p className="text-lg lg:text-2xl font-black text-pink-400 mb-2">⚡ 30 SEGUNDOS</p>
                <p className="text-gray-300 font-semibold text-sm lg:text-base">Comparación Completa</p>
              </div>
              <div className="text-center">
                <p className="text-lg lg:text-2xl font-black text-cyan-400 mb-2">💰 €487/AÑO</p>
                <p className="text-gray-300 font-semibold text-sm lg:text-base">Ahorro Medio Garantizado</p>
              </div>
              <div className="text-center">
                <p className="text-lg lg:text-2xl font-black text-green-400 mb-2">✅ 100% SEGURO</p>
                <p className="text-gray-300 font-semibold text-sm lg:text-base">Solo Recomendamos Si Ahorras</p>
              </div>
            </div>
          </div>

          <button
            onClick={onGoToSubirFactura}
            className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-8 lg:px-16 py-4 lg:py-8 rounded-2xl lg:rounded-3xl font-black text-xl lg:text-3xl hover:from-pink-400 hover:to-cyan-400 transition-all duration-500 transform hover:scale-105 lg:hover:scale-110 shadow-xl lg:shadow-2xl hover:shadow-pink-500/50 border-2 lg:border-4 border-white/20"
          >
            💡 COMPARAR TARIFAS GRATIS
          </button>

          <p className="text-gray-400 text-sm lg:text-lg mt-4 lg:mt-6 font-semibold">
            ✓ Sin compromiso ✓ Sin permanencia ✓ Cancelación gratuita ✓ Garantía de ahorro
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;