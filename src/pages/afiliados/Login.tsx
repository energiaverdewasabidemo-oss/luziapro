import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Zap, Mail, Lock, AlertCircle, Eye, EyeOff, Sparkles } from 'lucide-react';
import { useAfiliadosAuth } from '../../lib/afiliadosAuth';

const AfiliadosLogin = () => {
  const { signIn, user } = useAfiliadosAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/afiliados', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    navigate('/afiliados', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/8 rounded-full blur-2xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
            <div className="relative">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-2xl shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-500 transform group-hover:scale-110 border-2 border-white/20">
                <Zap className="h-7 w-7 text-white drop-shadow-lg animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-3xl font-black bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                LUZIA
              </span>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">COMPARADOR IA</span>
                <Sparkles className="h-2.5 w-2.5 text-cyan-400 animate-spin" />
              </div>
            </div>
          </Link>
          <h1 className="text-3xl font-black text-white mb-2">Panel de Afiliados</h1>
          <p className="text-gray-400">Accede a tu panel para ver tus comisiones y leads</p>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-xl border border-pink-400/20 rounded-2xl p-8 shadow-2xl shadow-black/40">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="flex items-center space-x-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <div className="flex items-center bg-slate-900 border border-slate-600 rounded-xl focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400/50 transition-colors">
                <Mail className="ml-4 flex-shrink-0 h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 bg-transparent px-3 py-3 text-white placeholder-gray-500 focus:outline-none"
                  style={{ WebkitBoxShadow: '0 0 0 1000px rgb(15 23 42) inset', WebkitTextFillColor: 'white' }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Contraseña</label>
              <div className="flex items-center bg-slate-900 border border-slate-600 rounded-xl focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400/50 transition-colors">
                <Lock className="ml-4 flex-shrink-0 h-5 w-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent px-3 py-3 text-white placeholder-gray-500 focus:outline-none"
                  style={{ WebkitBoxShadow: '0 0 0 1000px rgb(15 23 42) inset', WebkitTextFillColor: 'white' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="mr-4 flex-shrink-0 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white py-3 rounded-xl font-black text-lg hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Zap className="h-5 w-5" />
                  <span>Entrar al panel</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center border-t border-slate-700 pt-6">
            <p className="text-gray-400 text-sm">
              ¿No tienes cuenta?{' '}
              <Link to="/afiliados/registro" className="text-pink-400 font-semibold hover:text-pink-300 hover:underline transition-colors">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
            Volver a la web
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AfiliadosLogin;
