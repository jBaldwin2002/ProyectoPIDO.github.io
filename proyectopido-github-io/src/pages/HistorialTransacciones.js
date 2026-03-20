import Sidebar from '../components/Sidebar';

function HistorialTransacciones() {
    const transactions = [
        { id: 1, type: 'Entrada', amount: '+$500.00', date: '20 Mar 2024', status: 'Completada', icon: 'arrow_downward', color: 'text-green-600' },
        { id: 2, type: 'Salida', amount: '-$150.50', date: '20 Mar 2024', status: 'Completada', icon: 'arrow_upward', color: 'text-red-600' },
        { id: 3, type: 'Intercambio', amount: '-$1,200.00', date: '19 Mar 2024', status: 'Completada', icon: 'swap_horiz', color: 'text-purple-600' },
        { id: 4, type: 'Entrada', amount: '+$2,300.00', date: '19 Mar 2024', status: 'Completada', icon: 'arrow_downward', color: 'text-green-600' },
        { id: 5, type: 'Transferencia', amount: '-$800.00', date: '18 Mar 2024', status: 'Completada', icon: 'send', color: 'text-blue-600' },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 px-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight">Historial de Transacciones</h2>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-all">
                            <span className="material-symbols-outlined text-lg">add</span>
                            Nueva Transferencia
                        </button>
                    </div>
                </header>

                {/* Content */}
                <div className="p-6 lg:p-8 space-y-6 flex-1 overflow-y-auto">
                    {/* Summary Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Saldo Actual</p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-3xl font-bold tracking-tight">$12,450.80</h3>
                                <span className="text-green-600 text-xs font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined !text-sm">trending_up</span> 2.5%
                                </span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Ingresos del Mes</p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-3xl font-bold tracking-tight text-green-600">+$4,200.00</h3>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm text-slate-500 font-medium">Egresos del Mes</p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-3xl font-bold tracking-tight text-red-600">-$2,150.30</h3>
                            </div>
                        </div>
                    </div>

                    {/* Filters Section */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="flex flex-col sm:flex-row gap-3 items-center">
                            <div className="flex-1 relative w-full">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input
                                    className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-700 border-none rounded-lg text-sm focus:ring-2 focus:ring-purple-600"
                                    placeholder="Buscar transacciones..."
                                    type="text"
                                />
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto">
                                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                                    <span className="material-symbols-outlined text-base">calendar_today</span>
                                    Fechas
                                </button>
                                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                                    <span className="material-symbols-outlined text-base">filter_list</span>
                                    Filtro
                                </button>
                                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-600/10 text-purple-600 text-sm font-medium hover:bg-purple-600/20 transition-colors">
                                    <span className="material-symbols-outlined text-base">download</span>
                                    Descargar
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Transactions List */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                    <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400">Tipo</th>
                                    <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400">Monto</th>
                                    <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400">Fecha</th>
                                    <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((tx) => (
                                    <tr key={tx.id} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="px-6 py-4 text-sm">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-700 ${tx.color}`}>
                                                    <span className="material-symbols-outlined text-lg">{tx.icon}</span>
                                                </div>
                                                <span className="font-medium">{tx.type}</span>
                                            </div>
                                        </td>
                                        <td className={`px-6 py-4 text-sm font-bold ${tx.color}`}>{tx.amount}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{tx.date}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                                                {tx.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HistorialTransacciones;
