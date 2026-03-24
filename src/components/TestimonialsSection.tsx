import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Familia de 4 personas",
      content: "LUZIA me ayudó a ahorrar más de 400€ al año. El proceso fue súper fácil y el ahorro real. ¡100% recomendable!",
      rating: 5,
      savings: "€426/año"
    },
    {
      name: "Carlos Ruiz",
      role: "Propietario de negocio",
      content: "Como empresario, cada euro cuenta. LUZIA encontró una tarifa comercial que me ahorra 15% mensual en electricidad.",
      rating: 5,
      savings: "€1,240/año"
    },
    {
      name: "Ana Martín",
      role: "Jubilada",
      content: "Pensé que cambiar de compañía sería complicado, pero LUZIA lo hizo todo por mí. Ahora pago mucho menos cada mes.",
      rating: 5,
      savings: "€218/año"
    }
  ];

  const partners = [
    { name: "Iberdrola", img: "/logo-iberdolaa-1100x612.png" },
    { name: "Endesa", img: "/Captura-de-pantalla-2016-01-28-a-las-19.00.55.jpg" },
    { name: "Naturgy", img: "/naturgy_pantone_principal_positiva.jpg" },
    { name: "Repsol", img: "/Repsol_2025_(vertical).svg.png" },
    { name: "Wasabi Energía Verde", img: "/wasabi-logo-main.png" },
  ];

  return (
    <section id="testimonios" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
            <span className="font-black text-pink-400">+100.000 españoles</span> ya confían en LUZIA para
            <span className="font-black text-cyan-400"> ahorrar en su factura de luz y gas</span>
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-xl lg:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-3 hover:scale-105 border-2 border-pink-400/20 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl"></div>
              
              <div className="relative">
              <div className="flex items-center mb-3 lg:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-400 fill-current drop-shadow-lg" />
                ))}
              </div>
              
              <div className="mb-4 lg:mb-6">
                <Quote className="h-6 w-6 lg:h-8 lg:w-8 text-pink-400 mb-3 lg:mb-4" />
                <p className="text-gray-300 italic leading-relaxed text-base lg:text-lg font-medium">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t-2 border-pink-400/20 pt-4 lg:pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-black text-white text-base lg:text-lg">{testimonial.name}</h4>
                    <p className="text-xs lg:text-sm text-gray-400 font-semibold">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl lg:text-2xl font-black text-green-600">{testimonial.savings}</div>
                    <div className="text-xs text-gray-500 font-semibold">AHORRO ANUAL</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-black text-white mb-8 lg:mb-12">
            Colaboramos con las <span className="text-pink-400">principales energéticas</span> de España
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-pink-500/20 border-2 border-transparent hover:border-pink-400/30 transition-all duration-300 hover:scale-105 p-4"
                style={{ width: '160px', height: '90px' }}
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;