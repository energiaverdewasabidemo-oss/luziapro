import { useState, useMemo } from 'react';
import { Calculator, TrendingDown, Zap, Euro, Sun, ChevronDown, ChevronUp } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/34621508300?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20la%20instalaci%C3%B3n%20de%20placas%20solares%20para%20mi%20hogar.';

const PRICE_INCREASE_RATE = 0.04;
const PANEL_DEGRADATION = 0.005;
const SYSTEM_LIFE_YEARS = 25;

interface YearData {
  year: number;
  annualSaving: number;
  cumulativeSaving: number;
  electricityPrice: number;
  roi: number;
}

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(120);
  const [systemType, setSystemType] = useState<'conecta8' | 'conecta12'>('conecta8');
  const [showAllYears, setShowAllYears] = useState(false);

  const systemData = {
    conecta8: {
      name: 'Conecta 8',
      netCost: 1360,
      baseCost: 5900,
      irpfDeduction: 3540,
      ibiDiscount: 1000,
      annualProduction: 6637,
      selfConsumptionRate: 0.7,
    },
    conecta12: {
      name: 'Conecta 12',
      netCost: 1980,
      baseCost: 7450,
      irpfDeduction: 4470,
      ibiDiscount: 1000,
      annualProduction: 9832,
      selfConsumptionRate: 0.75,
    },
  };

  const sys = systemData[systemType];
  const annualBill = monthlyBill * 12;
  const pricePerKwh = 0.18;

  const projectionData = useMemo<YearData[]>(() => {
    const years: YearData[] = [];
    let cumulative = -sys.netCost;

    for (let y = 1; y <= SYSTEM_LIFE_YEARS; y++) {
      const currentPrice = pricePerKwh * Math.pow(1 + PRICE_INCREASE_RATE, y - 1);
      const degradedProduction = sys.annualProduction * Math.pow(1 - PANEL_DEGRADATION, y - 1);
      const maxKwhFromBill = annualBill / currentPrice;
      const selfConsumed = Math.min(degradedProduction * sys.selfConsumptionRate, maxKwhFromBill);
      const annualSaving = selfConsumed * currentPrice;
      cumulative += annualSaving;

      years.push({
        year: y,
        annualSaving: Math.round(annualSaving),
        cumulativeSaving: Math.round(cumulative),
        electricityPrice: Math.round(currentPrice * 100) / 100,
        roi: Math.round(((cumulative + sys.netCost) / sys.netCost) * 100),
      });
    }
    return years;
  }, [monthlyBill, systemType, sys, annualBill]);

  const breakEvenYear = projectionData.find(d => d.cumulativeSaving >= 0)?.year ?? null;
  const totalSaving25y = projectionData[SYSTEM_LIFE_YEARS - 1]?.cumulativeSaving ?? 0;
  const year1Saving = projectionData[0]?.annualSaving ?? 0;
  const savingPercent = Math.round((year1Saving / annualBill) * 100);

  const visibleYears = showAllYears ? projectionData : projectionData.filter(d => [1, 2, 3, 5, 10, 15, 20, 25].includes(d.year));

  const maxCumulative = Math.max(...projectionData.map(d => d.cumulativeSaving));
  const minCumulative = Math.min(...projectionData.map(d => d.cumulativeSaving));
  const chartRange = maxCumulative - minCumulative;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            <Calculator className="w-4 h-4" />
            Calculadora de Ahorro Solar
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Descubre tu ahorro en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">25 años</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Ajusta tu factura mensual y elige tu instalación para ver la proyección de ahorro año a año.
          </p>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            * Los resultados mostrados son estimativos y aproximados. El ahorro real puede variar en función del consumo, la orientación de los paneles, las horas de sol y la evolución del precio de la electricidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Controls */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6">
              <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                Factura mensual actual
              </label>
              <div className="relative mb-3">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 font-bold text-xl">€</span>
                <input
                  type="number"
                  min={40}
                  max={500}
                  value={monthlyBill}
                  onChange={e => setMonthlyBill(Math.max(40, Math.min(500, Number(e.target.value))))}
                  className="w-full bg-gray-900 border border-gray-600 text-white text-2xl font-bold pl-10 pr-4 py-4 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <input
                type="range"
                min={40}
                max={500}
                step={5}
                value={monthlyBill}
                onChange={e => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>40€</span>
                <span>500€</span>
              </div>
            </div>

            <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6">
              <label className="block text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
                Instalación
              </label>
              <div className="space-y-3">
                {(['conecta8', 'conecta12'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setSystemType(type)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      systemType === type
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-gray-600 bg-gray-900/50 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-bold text-base ${systemType === type ? 'text-amber-400' : 'text-white'}`}>
                          {systemData[type].name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {type === 'conecta8' ? '8 paneles · 4.64 kWp' : '12 paneles · 6.96 kWp'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`font-black text-lg ${systemType === type ? 'text-amber-400' : 'text-white'}`}>
                          {systemData[type].netCost.toLocaleString('es-ES')}€
                        </p>
                        <p className="text-gray-500 text-xs">precio neto</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary stats */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Ahorro primer año
                </div>
                <span className="text-white font-black text-xl">{year1Saving.toLocaleString('es-ES')}€</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <TrendingDown className="w-4 h-4 text-green-400" />
                  Reducción factura
                </div>
                <span className="text-green-400 font-black text-xl">{savingPercent}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Sun className="w-4 h-4 text-amber-400" />
                  Amortización
                </div>
                <span className="text-white font-black text-xl">
                  {breakEvenYear ? `Año ${breakEvenYear}` : 'No aplica'}
                </span>
              </div>
              <div className="border-t border-amber-500/20 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Euro className="w-4 h-4 text-amber-400" />
                  Beneficio total 25 años
                </div>
                <span className="text-amber-400 font-black text-2xl">+{totalSaving25y.toLocaleString('es-ES')}€</span>
              </div>
            </div>
          </div>

          {/* Chart + Table */}
          <div className="lg:col-span-3 space-y-6">
            {/* Visual Bar Chart */}
            <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wide">Beneficio acumulado (€)</h3>
              <div className="relative h-40">
                {(() => {
                  const absMax = Math.max(Math.abs(maxCumulative), Math.abs(minCumulative)) || 1;
                  const zeroPercent = (Math.abs(minCumulative) / (Math.abs(maxCumulative) + Math.abs(minCumulative))) * 100;
                  return (
                    <>
                      <div
                        className="absolute w-full border-t border-gray-500/50"
                        style={{ top: `${100 - zeroPercent}%` }}
                      />
                      <div className="flex items-stretch gap-0.5 h-full">
                        {projectionData.map((d, i) => {
                          const isPositive = d.cumulativeSaving >= 0;
                          const isBreakEven = d.year === breakEvenYear;
                          const posHeightPct = isPositive ? (d.cumulativeSaving / absMax) * zeroPercent : 0;
                          const negHeightPct = !isPositive ? (Math.abs(d.cumulativeSaving) / absMax) * (100 - zeroPercent) : 0;

                          return (
                            <div
                              key={i}
                              className="flex-1 flex flex-col group relative"
                              style={{ height: '100%' }}
                            >
                              <div style={{ height: `${100 - zeroPercent - posHeightPct}%` }} />
                              {isPositive && (
                                <div
                                  className={`w-full rounded-t transition-all group-hover:opacity-80 ${
                                    isBreakEven
                                      ? 'bg-gradient-to-t from-amber-500 to-amber-300'
                                      : 'bg-gradient-to-t from-green-600 to-green-400'
                                  }`}
                                  style={{ height: `${Math.max(1, posHeightPct)}%` }}
                                />
                              )}
                              {!isPositive && (
                                <div
                                  className="w-full rounded-b bg-gradient-to-b from-red-700 to-red-500 transition-all group-hover:opacity-80"
                                  style={{ height: `${Math.max(1, negHeightPct)}%` }}
                                />
                              )}
                              <div style={{ height: `${zeroPercent - negHeightPct}%` }} />
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                Año {d.year}: {d.cumulativeSaving >= 0 ? '+' : ''}{d.cumulativeSaving.toLocaleString('es-ES')}€
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })()}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Año 1</span>
                <span className="text-amber-400 font-semibold">Amortización: Año {breakEvenYear}</span>
                <span>Año 25</span>
              </div>
            </div>

            {/* Data table */}
            <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900/80 border-b border-gray-700">
                      <th className="text-left text-gray-400 font-semibold px-4 py-3 uppercase tracking-wide text-xs">Año</th>
                      <th className="text-right text-gray-400 font-semibold px-4 py-3 uppercase tracking-wide text-xs">Ahorro anual</th>
                      <th className="text-right text-gray-400 font-semibold px-4 py-3 uppercase tracking-wide text-xs">Beneficio acumulado</th>
                      <th className="text-right text-gray-400 font-semibold px-4 py-3 uppercase tracking-wide text-xs hidden sm:table-cell">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleYears.map((d, i) => {
                      const isBreakEven = d.year === breakEvenYear;
                      const isPositive = d.cumulativeSaving >= 0;
                      return (
                        <tr
                          key={i}
                          className={`border-b border-gray-700/50 transition-colors ${
                            isBreakEven
                              ? 'bg-amber-500/10 border-amber-500/30'
                              : i % 2 === 0
                              ? 'bg-transparent'
                              : 'bg-gray-900/30'
                          }`}
                        >
                          <td className="px-4 py-3 text-white font-bold">
                            {isBreakEven ? (
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                                {d.year}
                                <span className="text-amber-400 text-xs font-semibold ml-1">AMORTIZADO</span>
                              </span>
                            ) : (
                              d.year
                            )}
                          </td>
                          <td className="px-4 py-3 text-right text-green-400 font-semibold">
                            +{d.annualSaving.toLocaleString('es-ES')}€
                          </td>
                          <td className={`px-4 py-3 text-right font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                            {isPositive ? '+' : ''}{d.cumulativeSaving.toLocaleString('es-ES')}€
                          </td>
                          <td className={`px-4 py-3 text-right font-semibold hidden sm:table-cell ${d.roi >= 0 ? 'text-amber-400' : 'text-gray-500'}`}>
                            {d.roi >= 0 ? '+' : ''}{d.roi}%
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => setShowAllYears(!showAllYears)}
                className="w-full py-3 text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center justify-center gap-2 border-t border-gray-700"
              >
                {showAllYears ? (
                  <><ChevronUp className="w-4 h-4" /> Ver menos</>
                ) : (
                  <><ChevronDown className="w-4 h-4" /> Ver todos los años</>
                )}
              </button>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-4 px-6 rounded-xl text-center text-lg shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:scale-[1.02]"
            >
              Quiero ahorrar {year1Saving.toLocaleString('es-ES')}€ este ano
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
