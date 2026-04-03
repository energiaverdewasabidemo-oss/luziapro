import { useState, useEffect } from 'react';
import { Upload, CheckCircle, FileText, Phone, TrendingDown, ArrowRight, Zap, Shield, Star, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { trackEvent } from '../lib/metaPixel';
interface SubirFacturaProps {
  onPageChange?: (page: string) => void;
}

export default function SubirFactura({ onPageChange }: SubirFacturaProps) {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    codigo_postal: '',
    cups: '',
    tipoCliente: 'particular'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState('https://wa.link/bb8kck');

useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const refParam = urlParams.get('ref');
  if (refParam) {
    const baseMessage = 'Hola LuzIA! Quiero ver el mejor precio para mi factura de luz. Infórmame por favor';
    const fullMessage = `${baseMessage}. Vengo de parte de ${refParam.toUpperCase()}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    setWhatsappUrl(`https://wa.me/34610764494?text=${encodedMessage}`);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const maxSizeBytes = 5 * 1024 * 1024;

    if (!allowedTypes.includes(selected.type)) {
      setError('Formato no permitido. Sube un archivo PDF, JPG o PNG.');
      e.target.value = '';
      return;
    }

    if (selected.size > maxSizeBytes) {
      setError('El archivo es demasiado grande. El tamaño máximo es 5 MB.');
      e.target.value = '';
      return;
    }

    setError(null);
    setFile(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    trackEvent('Lead');

    try {
      let facturaUrl: string | undefined;

      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = fileName;

        const { error: uploadError } = await supabase.storage
          .from('invoices')
          .upload(filePath, file);

        if (uploadError) {
          throw new Error(`Error al subir la factura: ${uploadError.message}`);
        }

        const { data: urlData } = supabase.storage
          .from('invoices')
          .getPublicUrl(filePath);

        facturaUrl = urlData.publicUrl;
      }

      const { error: insertError } = await supabase
        .from('leads')
        .insert([
          {
            nombre: formData.nombre,
            telefono: formData.telefono,
            email: formData.email,
            codigo_postal: formData.codigo_postal,
            cups: formData.cups || null,
            factura_url: facturaUrl,
          }
        ]);

      if (insertError) {
        throw new Error(`Error al guardar los datos: ${insertError.message}`);
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Ha ocurrido un error. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            ¡Factura recibida con éxito!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Nuestro equipo está analizando tu factura en este momento.<br />
            Te llamaremos en menos de 24 horas solo si podemos mejorar tu tarifa.
          </p>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 border border-pink-400/30">
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              ¿Qué ocurre ahora?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-pink-400 font-semibold">1</span>
                </div>
                <div>
                  <p className="text-white font-medium">Análisis detallado</p>
                  <p className="text-gray-400 text-sm">Revisamos tu contrato actual y comparamos con las mejores opciones del mercado</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-pink-400 font-semibold">2</span>
                </div>
                <div>
                  <p className="text-white font-medium">Identificamos ahorros</p>
                  <p className="text-gray-400 text-sm">Calculamos exactamente cuánto puedes ahorrar al mes y al año</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-pink-400 font-semibold">3</span>
                </div>
                <div>
                  <p className="text-white font-medium">Te contactamos</p>
                  <p className="text-gray-400 text-sm">Si encontramos una mejora, te llamamos. Si no, no te molestamos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12 max-w-6xl relative z-10">

        <div className="text-center mb-8 md:mb-16 relative">
          <div className="inline-flex items-center gap-2 bg-pink-400/20 border border-pink-400/40 rounded-full px-4 md:px-6 py-1.5 md:py-2 mb-4 md:mb-6 backdrop-blur-sm animate-pulse">
            <Zap className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 font-semibold text-sm">Análisis gratuito en menos de 24h</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight relative z-10">
            ¿Estás pagando de más en tu{' '}
            <span className="text-pink-400 relative inline-block">
              factura de luz
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-pink-400/20 blur-lg"></div>
            </span>
            <span className="text-pink-400">?</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto relative z-10 font-light">
            Descúbrelo en menos de 24 horas. Sube tu factura y recibe un estudio gratuito sin compromiso.
          </p>

          <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-pink-400/20 to-pink-500/20 border-2 border-pink-400 rounded-xl md:rounded-2xl px-4 md:px-8 py-3 md:py-4 mb-3 md:mb-4">
            <TrendingDown className="w-5 h-5 md:w-8 md:h-8 text-pink-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-white font-black text-lg md:text-2xl">Ahorra hasta 450€/año</p>
              <p className="text-pink-400 text-xs md:text-sm font-semibold">Solo con subir tu factura ahora</p>
            </div>
          </div>
          <p className="text-gray-500 text-xs mb-6 md:mb-10">* Resultados basados en casos reales. El ahorro varía según consumo y tarifa actual.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="group inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 md:px-10 py-4 md:py-5 rounded-full text-base md:text-xl font-bold hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-110 relative overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <svg className="w-5 h-5 md:w-6 md:h-6 relative z-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="relative z-10">Chatear con LuzIA</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-8 mt-6 md:mt-10 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />
              <span className="text-gray-400 text-xs md:text-sm">100% Confidencial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />
              <span className="text-gray-400 text-xs md:text-sm">Sin compromiso</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />
              <span className="text-gray-400 text-xs md:text-sm">Menos de 15 min</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/50 rounded-2xl md:rounded-3xl p-5 md:p-8 mb-8 md:mb-16 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Zap className="w-5 h-5 md:w-8 md:h-8 text-orange-400 animate-pulse flex-shrink-0" />
            <h3 className="text-xl md:text-3xl font-black text-white">¿Por qué hacerlo AHORA?</h3>
            <Zap className="w-5 h-5 md:w-8 md:h-8 text-orange-400 animate-pulse flex-shrink-0" />
          </div>
          <p className="text-sm md:text-xl text-gray-200 max-w-3xl mx-auto mb-3 md:mb-4">
            <span className="text-orange-400 font-bold">Estamos en el mejor momento del año</span> para cambiar de tarifa y cerrar contratos más baratos.
          </p>
          <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
            Las compañías eléctricas están lanzando ofertas agresivas. Cada día que esperas es dinero que pierdes.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-12 mb-8 md:mb-16 border border-pink-400/30">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">
            La realidad que <span className="text-pink-400">nadie te cuenta</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            <div className="text-center p-4 md:p-6 bg-slate-900/50 rounded-xl md:rounded-2xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <TrendingDown className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
              </div>
              <p className="text-gray-300 font-medium text-sm md:text-base mb-2">
                Estás pagando más que otros consumiendo menos
              </p>
            </div>
            <div className="text-center p-4 md:p-6 bg-slate-900/50 rounded-xl md:rounded-2xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
              </div>
              <p className="text-gray-300 font-medium text-sm md:text-base mb-2">
                No entiendes tu factura y estás pagando conceptos innecesarios
              </p>
            </div>
            <div className="text-center p-4 md:p-6 bg-slate-900/50 rounded-xl md:rounded-2xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-orange-400" />
              </div>
              <p className="text-gray-300 font-medium text-sm md:text-base mb-2">
                Estás en una tarifa antigua sin saberlo
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-400/10 to-cyan-500/10 border-2 border-pink-400/40 rounded-2xl md:rounded-3xl p-5 md:p-10 mb-8 md:mb-16 text-center">
          <h3 className="text-xl md:text-4xl font-black text-white mb-5 md:mb-8">
            Somos una de las asesorías energéticas que <span className="text-pink-400">más dinero ha ahorrado</span> a españoles
          </h3>

          <div className="max-w-4xl mx-auto mb-6 md:mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-bold text-sm md:text-lg">Ahorro total generado</span>
              <span className="text-pink-400 font-black text-lg md:text-2xl">7.500.000€</span>
            </div>
            <div className="h-6 bg-slate-900 rounded-full overflow-hidden border-2 border-pink-400/30">
              <div className="h-full bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse" style={{width: '85%'}}></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-900/50 rounded-xl md:rounded-2xl p-3 md:p-6 border border-pink-400/30">
              <p className="text-pink-400 font-black text-2xl md:text-4xl mb-1 md:mb-2">+26K</p>
              <p className="text-gray-300 font-semibold text-xs md:text-base">Clientes Satisfechos</p>
            </div>
            <div className="bg-slate-900/50 rounded-xl md:rounded-2xl p-3 md:p-6 border border-pink-400/30">
              <p className="text-pink-400 font-black text-2xl md:text-4xl mb-1 md:mb-2">287€</p>
              <p className="text-gray-300 font-semibold text-xs md:text-base">Ahorro medio/año*</p>
            </div>
            <div className="bg-slate-900/50 rounded-xl md:rounded-2xl p-3 md:p-6 border border-pink-400/30">
              <p className="text-pink-400 font-black text-2xl md:text-4xl mb-1 md:mb-2">97%</p>
              <p className="text-gray-300 font-semibold text-xs md:text-base">Satisfacción</p>
            </div>
          </div>
        </div>

        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-4 text-center">
            Cómo <span className="text-pink-400">funciona</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-400 text-center mb-6 md:mb-12">
            Todo el proceso dura <span className="text-pink-400 font-bold">menos de 15 minutos</span>. Tus datos son <span className="text-cyan-400 font-bold">100% confidenciales</span>.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 relative">
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-pink-400/50 via-pink-400/50 to-pink-400/50"></div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-5 md:p-8 h-full border-2 border-pink-400/30 hover:border-pink-400 transition-all duration-500 hover:shadow-pink-400/40 transform hover:scale-105 hover:-translate-y-2">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-pink-400/50 group-hover:shadow-2xl group-hover:shadow-pink-400/70 transition-all duration-500 relative">
                  <span className="text-white text-2xl md:text-3xl font-black">1</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-pink-400 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-lg md:text-2xl font-black text-white mb-2 md:mb-4 group-hover:text-pink-400 transition-colors">
                  Envía un WhatsApp a LUZIA
                </h3>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                  Envía un WhatsApp a LUZIA con tu factura de la luz. Te la analizará en menos de 2 minutos.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-5 md:p-8 h-full border-2 border-pink-400/30 hover:border-pink-400 transition-all duration-500 hover:shadow-pink-400/40 transform hover:scale-105 hover:-translate-y-2">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-pink-400/50 group-hover:shadow-2xl group-hover:shadow-pink-400/70 transition-all duration-500 relative">
                  <span className="text-white text-2xl md:text-3xl font-black">2</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
                <h3 className="text-lg md:text-2xl font-black text-white mb-2 md:mb-4 group-hover:text-pink-400 transition-colors">
                  LUZIA analiza tu factura
                </h3>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                  LUZIA analizará tu factura y te dirá cuánto ahorrar sin ningún tipo de compromiso. Datos 100% confidenciales.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-5 md:p-8 h-full border-2 border-pink-400/30 hover:border-pink-400 transition-all duration-500 hover:shadow-pink-400/40 transform hover:scale-105 hover:-translate-y-2">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-pink-400/50 group-hover:shadow-2xl group-hover:shadow-pink-400/70 transition-all duration-500 relative">
                  <span className="text-white text-2xl md:text-3xl font-black">3</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                <h3 className="text-lg md:text-2xl font-black text-white mb-2 md:mb-4 group-hover:text-pink-400 transition-colors">
                  Agenda hora con un asesor
                </h3>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                  Si quieres aprovechar el ahorro podrás agendar hora con un asesor para que te aplique la oferta y ahorres hasta €500 al año.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl md:rounded-3xl p-5 md:p-10 mb-8 md:mb-16 border-2 border-pink-400/40 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-red-500/20 rounded-full mb-4 md:mb-6">
            <span className="text-2xl md:text-4xl">🚫</span>
          </div>
          <h3 className="text-xl md:text-4xl font-black text-white mb-4 md:mb-6">
            <span className="text-red-400">NO somos</span> los típicos pesados que te llaman constantemente
          </h3>
          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            <p className="text-sm md:text-xl text-gray-300">
              <span className="text-pink-400 font-bold">Nuestra metodología es diferente.</span> No somos los vendedores de luz de turno que te acosan sin parar.
            </p>
            <p className="text-sm md:text-lg text-gray-400">
              Te contactamos una sola vez, con un análisis real. Si podemos ahorrarte dinero, te lo contamos. Si no, no te molestamos más. Así de simple y transparente.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-400/5 to-cyan-500/5 rounded-2xl md:rounded-3xl p-5 md:p-10 mb-8 md:mb-16 border border-pink-400/30">
          <div className="text-center mb-5 md:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-pink-400 rounded-full mb-4 md:mb-6">
              <span className="text-2xl md:text-4xl">🎯</span>
            </div>
            <h3 className="text-xl md:text-4xl font-black text-white mb-3 md:mb-4">
              Nuestra <span className="text-pink-400">metodología de análisis</span>
            </h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm md:text-xl text-gray-300 text-center mb-5 md:mb-8">
              Basada en más de <span className="text-pink-400 font-bold">200.000 contratos revisados</span> y herramientas de inteligencia artificial
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-pink-400/20">
                <h4 className="text-pink-400 font-black text-xl mb-3">✓ Análisis predictivo con IA</h4>
                <p className="text-gray-400">Comparamos tu factura con miles de tarifas en tiempo real para encontrar la mejor opción.</p>
              </div>
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-pink-400/20">
                <h4 className="text-pink-400 font-black text-xl mb-3">✓ Base de datos actualizada</h4>
                <p className="text-gray-400">Acceso a todas las ofertas del mercado, incluyendo las que no se publicitan.</p>
              </div>
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-pink-400/20">
                <h4 className="text-pink-400 font-black text-xl mb-3">✓ Análisis de consumo</h4>
                <p className="text-gray-400">Estudiamos tu patrón de consumo para optimizar al máximo tu ahorro.</p>
              </div>
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-pink-400/20">
                <h4 className="text-pink-400 font-black text-xl mb-3">✓ 92% de éxito</h4>
                <p className="text-gray-400">En más del 92% de casos encontramos ahorros significativos.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="formulario" className="relative mb-16 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-3xl mb-6 shadow-2xl shadow-[#25D366]/50 animate-pulse">
                <Phone className="w-10 h-10 text-white" />
              </div>
