import React, { useState } from 'react';
import { Shield, Award, Users, ChevronDown, ChevronUp } from 'lucide-react';

const TrustSection = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const guarantees = [
    {
      icon: Shield,
      title: "Seguridad garantizada",
      description: "Tus datos están protegidos con encriptación bancaria. Nunca compartimos información personal."
    },
    {
      icon: Award,
      title: "Transparencia total",
      description: "Sin comisiones ocultas ni letra pequeña. Todo claro desde el primer momento."
    },
    {
      icon: Users,
      title: "Soporte humano",
      description: "Nuestro equipo de expertos está disponible para ayudarte en cada paso del proceso."
    }
  ];

  const faqs = [
    {
      question: "¿Es realmente gratis usar LUZIA?",
      answer: "Sí, LUZIA es completamente gratuito para los usuarios. Nos financiamos a través de comisiones que recibimos de las compañías energéticas cuando realizas un cambio de tarifa, sin coste adicional para ti."
    },
    {
      question: "¿Cómo puede LUZIA garantizar que ahorre dinero?",
      answer: "Nuestra IA analiza tu perfil de consumo real contra todas las tarifas disponibles en el mercado. Solo recomendamos cambios cuando podemos garantizar un ahorro significativo basado en datos reales."
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con la nueva tarifa?",
      answer: "Todas las tarifas que recomendamos son sin permanencia, lo que significa que puedes cambiar en cualquier momento sin penalizaciones. Además, te ayudamos gratuitamente con cualquier gestión necesaria."
    },
    {
      question: "¿Cuánto tiempo tarda el cambio de compañía?",
      answer: "El proceso de cambio se produce entre los días 1 al 5 del mes. Durante este tiempo, tu suministro nunca se interrumpe y nosotros nos encargamos de todas las gestiones con ambas compañías."
    },
    {
      question: "¿LUZIA trabaja con todas las compañías eléctricas?",
      answer: "Trabajamos con más de 30 compañías energéticas en España, incluyendo todas las principales del mercado. Esto nos permite ofrecerte la comparación más completa del sector."
    }
  ];

  return (
    <section id="confianza" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Tu confianza es nuestra prioridad
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
            Garantizamos <span className="font-black text-pink-400">transparencia total</span>,
            <span className="font-black text-cyan-400"> máxima seguridad</span> y el mejor servicio en cada interacción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center transform hover:scale-105 lg:hover:scale-110 transition-all duration-500">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-xl lg:shadow-2xl hover:shadow-pink-500/50 transition-all duration-500">
                <guarantee.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-white mb-4 lg:mb-6">
                {guarantee.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-base lg:text-lg font-medium">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl lg:text-4xl font-black text-center text-white mb-12 lg:mb-16">
            Preguntas frecuentes
          </h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl overflow-hidden border-2 border-pink-400/20 hover:shadow-pink-500/25 hover:border-pink-400/40 transition-all duration-500">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full px-6 lg:px-8 py-6 lg:py-8 text-left flex justify-between items-center hover:bg-pink-400/5 transition-colors"
                >
                  <span className="text-lg lg:text-xl font-black text-white pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 lg:h-6 lg:w-6 text-pink-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 lg:h-6 lg:w-6 text-pink-400 flex-shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <p className="text-gray-400 leading-relaxed text-base lg:text-lg font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;