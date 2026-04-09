import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
  Zap, Copy, CheckCheck, LogOut, Users, Home, Briefcase,
  TrendingUp, Euro, Calendar, AlertCircle, Award, Sparkles
} from 'lucide-react';
import { useAfiliadosAuth } from '../../lib/afiliadosAuth';
import { supabase } from '../../lib/supabase';

interface AffiliateLead {
  id: string;
  nombre: string;
  telefono: string;
  ref: string;
  tipo: string;
  estado: string;
  comision_activa: boolean;
  fecha: string;
}

const ESTADO_LABELS: Record<string, { label: string; color: string }> = {
  nuevo: { label: 'Nuevo', color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' },
  contactado: { label: 'Contactado', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30' },
  cerrado: { label: 'Cerrado', color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30' },
  rechazado: { label: 'Rechazado', color: 'text-red-400 bg-red-400/10 border-red-400/30' },
};

const TIPO_LABELS: Record<string, { label: string; color: string }> = {
  hogar: { label: 'Hogar', color: 'text-pink-400 bg-pink-400/10 border-pink-400/30' },
  negocio: { label: 'Negocio', color: 'text-orange-400 bg-orange-400/10 border-orange-400/30' },
};

const StatCard = ({
  icon: Icon, label, value, sub, accent = false
}: {
  icon: React.ElementType; label: string; value: string | number; sub?: string; accent?: boolean;
}) => (
  <div className={`bg-slate-800/80 border rounded-2xl p-6 flex flex-col space-y-2 hover:scale-[1.02] transition-transform duration-200 ${accent ? 'border-pink-400/40 shadow-lg shadow-pink-500/10' : 'border-slate-700/50'}`}>
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent ? 'bg-gradient-to-br from-pink-500/20 to-cyan-500/20' : 'bg-slate-700/50'}`}>
      <Icon className={`h-5 w-5 ${accent ? 'text-pink-400' : 'text-gray-400'}`} />
    </div>
    <p className="text-gray-400 text-sm font-medium">{label}</p>
    <p className={`text-3xl font-black ${accent ? 'bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent' : 'text-white'}`}>{value}</p>
    {sub && <p className="text-gray-500 text-xs">{sub}</p>}
  </div>
);

const AfiliadosPanel = () => {
  const { user, afiliado, loading, signOut } = useAfiliadosAuth();
  const [leads, setLeads] = useState<AffiliateLead[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!afiliado) return;
    const fetchLeads = async () => {
      setLeadsLoading(true);
      const { data } = await supabase
        .from('affiliate_leads')
        .select('*')
        .eq('ref', afiliado.ref)
        .order('fecha', { ascending: false });
      setLeads(data || []);
      setLeadsLoading(false);
    };
    fetchLeads();
  }, [afiliado]);

  const handleCopy = () => {
    if (!afiliado) return;
    const link = `https://luzia.pro/subir-factura?ref=${afiliado.ref}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/afiliados/login" replace />;
  }

  if (!afiliado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/40">
            <AlertCircle className="h-10 w-10 text-red-400" />
          </div>
          <h2 className="text-2xl font-black text-white mb-3">Perfil no encontrado</h2>
          <p className="text-gray-400 mb-6">No se pudo cargar tu perfil de afiliado. Por favor, contacta con soporte.</p>
          <button
            onClick={signOut}
            className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            Volver al login
          </button>
        </div>
      </div>
    );
  }

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const totalLeads = leads.length;
  const leadsCerrados = leads.filter(l => l.estado === 'cerrado').length;
  const hogaresActivos = leads.filter(l => l.tipo === 'hogar' && l.comision_activa).length;
  const negociosActivos = leads.filter(l => l.tipo === 'negocio' && l.comision_activa).length;

  const leadsEsteMes = leads.filter(l => new Date(l.fecha) >= startOfMonth);
  const hogaresEsteMes = leadsEsteMes.filter(l => l.tipo === 'hogar' && l.comision_activa).length;
  const negociosEsteMes = leadsEsteMes.filter(l => l.tipo === 'negocio' && l.comision_activa).length;
  const comisionMes = hogaresEsteMes * 2 + negociosEsteMes * 10;
  const comisionTotal = hogaresActivos * 2 + negociosActivos * 10;

  const refLink = `https://luzia.pro/subir-factura?ref=${afiliado.ref}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 bg-slate-900/90 backdrop-blur-xl border-b border-pink-400/20 sticky top-0 shadow-lg shadow-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-pink-500/50 transition-all duration-500 transform group-hover:scale-110 border border-white/20">
                  <Zap className="h-5 w-5 text-white drop-shadow-lg animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                  LUZIA
                </span>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-wider leading-none">COMPARADOR IA</span>
                  <Sparkles className="h-2 w-2 text-cyan-400 animate-spin" />
                </div>
              </div>
            </Link>

            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-400/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-semibold">{afiliado.nombre}</span>
              </div>
              <button
                onClick={signOut}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm px-3 py-2 rounded-xl hover:bg-slate-800"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-1">
            Hola, <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">{afiliado.nombre.split(' ')[0]}</span>
          </h1>
          <p className="text-gray-400">Panel de afiliados · código <span className="font-mono text-gray-300">{afiliado.ref}</span></p>
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 via-slate-800/50 to-cyan-500/10 border border-pink-400/30 rounded-2xl p-6 mb-8">
          <p className="text-sm text-gray-400 mb-3 font-semibold uppercase tracking-wider">Tu link de afiliado</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 bg-slate-900 rounded-xl px-4 py-3 border border-slate-700 font-mono text-cyan-400 text-sm sm:text-base break-all">
              {refLink}
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap ${
                copied
                  ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                  : 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105'
              }`}
            >
              {copied ? <CheckCheck className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              <span>{copied ? 'Copiado!' : 'Copiar link'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Users} label="Leads generados" value={totalLeads} />
          <StatCard icon={Award} label="Leads cerrados" value={leadsCerrados} />
          <StatCard icon={Home} label="Hogares activos" value={hogaresActivos} sub="2€ / mes cada uno" />
          <StatCard icon={Briefcase} label="Negocios activos" value={negociosActivos} sub="10€ / mes cada uno" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <StatCard
            icon={TrendingUp}
            label="Comisiones este mes"
            value={`${comisionMes}€`}
            sub={`${hogaresEsteMes} hogares + ${negociosEsteMes} negocios activos`}
            accent
          />
          <StatCard
            icon={Euro}
            label="Comisiones acumuladas"
            value={`${comisionTotal}€`}
            sub="Total histórico basado en clientes activos"
            accent
          />
        </div>

        <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-700/50">
            <h2 className="text-xl font-black text-white">Mis leads</h2>
            <p className="text-gray-400 text-sm mt-1">{totalLeads} leads registrados con tu código</p>
          </div>

          {leadsLoading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-8 h-8 border-2 border-pink-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : leads.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-600" />
              </div>
              <p className="text-gray-400 font-semibold mb-2">Sin leads todavía</p>
              <p className="text-gray-500 text-sm">Comparte tu link para empezar a generar comisiones</p>
            </div>
          ) : (
            <>
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nombre</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tipo</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Estado</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Fecha</th>
                      <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Comisión</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {leads.map(lead => {
                      const estadoInfo = ESTADO_LABELS[lead.estado] || ESTADO_LABELS.nuevo;
                      const tipoInfo = TIPO_LABELS[lead.tipo] || TIPO_LABELS.hogar;
                      const comision = lead.comision_activa ? (lead.tipo === 'negocio' ? '10€' : '2€') : '—';
                      return (
                        <tr key={lead.id} className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-6 py-4">
                            <p className="text-white font-medium">{lead.nombre}</p>
                            <p className="text-gray-500 text-xs">{lead.telefono}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${tipoInfo.color}`}>
                              {tipoInfo.label}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${estadoInfo.color}`}>
                              {estadoInfo.label}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(lead.fecha).toLocaleDateString('es-ES')}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className={`font-bold ${lead.comision_activa ? 'text-pink-400' : 'text-gray-600'}`}>
                              {comision}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="sm:hidden divide-y divide-slate-800/50">
                {leads.map(lead => {
                  const estadoInfo = ESTADO_LABELS[lead.estado] || ESTADO_LABELS.nuevo;
                  const tipoInfo = TIPO_LABELS[lead.tipo] || TIPO_LABELS.hogar;
                  const comision = lead.comision_activa ? (lead.tipo === 'negocio' ? '10€' : '2€') : '—';
                  return (
                    <div key={lead.id} className="px-4 py-4 hover:bg-slate-700/20 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-white font-medium">{lead.nombre}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{lead.telefono}</p>
                        </div>
                        <span className={`font-bold text-sm ${lead.comision_activa ? 'text-pink-400' : 'text-gray-600'}`}>
                          {comision}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 flex-wrap gap-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${tipoInfo.color}`}>
                          {tipoInfo.label}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${estadoInfo.color}`}>
                          {estadoInfo.label}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {new Date(lead.fecha).toLocaleDateString('es-ES')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-600 text-sm">
            Comisiones: <span className="text-gray-500">Hogar = 2€/mes</span> · <span className="text-gray-500">Negocio = 10€/mes</span>
          </p>
          <p className="text-gray-700 text-xs mt-2">Las comisiones se activan cuando el cliente está activo en la plataforma</p>
        </div>
      </main>
    </div>
  );
};

export default AfiliadosPanel;
