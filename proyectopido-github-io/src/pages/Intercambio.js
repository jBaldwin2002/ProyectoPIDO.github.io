import { useState } from 'react';
import Sidebar from '../components/Sidebar';

function Intercambio() {
    const [fromAmount, setFromAmount] = useState(1000);
    const [toAmount, setToAmount] = useState(920);

    const handleSwap = () => {
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    };

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
            <Sidebar />

            <main className="flex-1 p-6 md:p-10 flex flex-col items-center">
                <div className="w-full max-w-4xl">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight">Intercambio de Divisas</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">
                            Intercambia tus activos al instante con tasas de mercado en tiempo real.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Exchange Card */}
                        <div className="lg:col-span-3">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-purple-600/10">
                                {/* From Section */}
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Desde</label>
                                        <span className="text-xs text-slate-500">
                                            Saldo: <span className="font-medium text-purple-600">$12,450.00</span>
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-purple-600/5 rounded-xl border border-purple-600/10 focus-within:border-purple-600 transition-colors">
                                        <select className="bg-transparent border-none focus:ring-0 font-bold text-lg min-w-[100px]">
                                            <option value="USD">🇺🇸 USD</option>
                                            <option value="EUR">🇪🇺 EUR</option>
                                            <option value="GBP">🇬🇧 GBP</option>
                                        </select>
                                        <input
                                            className="flex-1 bg-transparent border-none focus:ring-0 text-right text-2xl font-bold placeholder:text-slate-400"
                                            placeholder="0.00"
                                            type="number"
                                            value={fromAmount}
                                            onChange={(e) => setFromAmount(parseFloat(e.target.value))}
                                        />
                                    </div>
                                </div>

                                {/* Swap Button */}
                                <div className="relative flex justify-center h-4 mb-6">
                                    <button
                                        onClick={handleSwap}
                                        className="absolute -top-4 z-10 size-10 bg-purple-600 text-white rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                    >
                                        <span className="material-symbols-outlined">swap_vert</span>
                                    </button>
                                </div>

                                {/* To Section */}
                                <div className="space-y-2 mb-8">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">A</label>
                                        <span className="text-xs text-slate-500">Recibo Estimado</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-purple-600/5 rounded-xl border border-purple-600/10 focus-within:border-purple-600 transition-colors">
                                        <select className="bg-transparent border-none focus:ring-0 font-bold text-lg min-w-[100px]">
                                            <option value="EUR">🇪🇺 EUR</option>
                                            <option value="USD">🇺🇸 USD</option>
                                            <option value="GBP">🇬🇧 GBP</option>
                                        </select>
                                        <input
                                            className="flex-1 bg-transparent border-none focus:ring-0 text-right text-2xl font-bold text-purple-600"
                                            placeholder="0.00"
                                            readOnly
                                            type="number"
                                            value={toAmount}
                                        />
                                    </div>
                                </div>

                                {/* Details & Fees */}
                                <div className="space-y-3 pt-6 border-t border-purple-600/10">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-500">Tasa de Cambio</span>
                                        <span className="text-sm font-medium">1 USD = 0.92 EUR</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-500">Comisión de Transacción (0.5%)</span>
                                        <span className="text-sm font-medium text-purple-600">$5.00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-500">Tiempo de Procesamiento</span>
                                        <span className="text-sm font-medium">Al instante</span>
                                    </div>
                                </div>

                                <button className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 group">
                                    Intercambiar Ahora
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Rate Chart Widget */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-purple-600/10">
                                <h3 className="font-bold text-sm mb-4">Tendencia del Mercado (24h)</h3>
                                <div className="h-32 w-full bg-purple-600/5 rounded-lg relative overflow-hidden flex items-end">
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
                                    <div className="w-full h-full bg-gradient-to-r from-purple-400/20 to-purple-600/20 flex items-end justify-around px-2">
                                        {[20, 35, 50, 40, 60, 55, 70, 65].map((height, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 bg-purple-500/40 rounded-t mx-1"
                                                style={{ height: `${height}%` }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="text-center">
                                        <p className="text-[10px] text-slate-500 uppercase">Mín</p>
                                        <p className="font-bold">0.915</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] text-slate-500 uppercase">Actual</p>
                                        <p className="font-bold text-purple-600">0.920</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] text-slate-500 uppercase">Máx</p>
                                        <p className="font-bold">0.928</p>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-purple-600/10">
                                    <div className="size-10 shrink-0 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">verified_user</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Transacciones Seguras</p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            Seguridad de nivel bancario cifrada para cada operación.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-purple-600/10">
                                    <div className="size-10 shrink-0 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">bolt</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Liquidez Instantánea</p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            Los fondos están disponibles en su billetera de inmediato.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Intercambio;
