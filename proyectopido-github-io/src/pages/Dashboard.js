import Sidebar from '../components/Sidebar';

function Dashboard() {
    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative w-full max-w-md hidden sm:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                            <input
                                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-purple-600/50 transition-all text-sm"
                                placeholder="Buscar mercados, activos..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 dark:border-slate-800 mx-2"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-semibold leading-none">Alex Thompson</p>
                                <p className="text-xs text-slate-500 mt-1">Miembro Premium</p>
                            </div>
                            <img
                                className="w-10 h-10 rounded-full border-2 border-purple-600/20 object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Xy8Q0W0nj1yyMF-OV6Z2rAlxhqDjU0oT1TtozMnGK3xzb5Fi9Qm5QhZIWP8zsUgNkFXGMagcKK0RQXLNg2tW-KCNkcdGAm9LO7-C96FTVvz7LDsXrp34MHACSKjV7fZCF0CgPAGLbN07lstz9-MpogO--rb2i5WyveAkFhu5chAd8xyjtB0imLxmIHjMw47ZLVH3HEudkNNC--aeH1iEZNmqRuHFNrZpTpjU6srMjQcBhyd1uhWKR9XmQgM9TfAUw0RzHlbsmkZq"
                                alt="User"
                            />
                            <button className="p-2 text-slate-500 hover:text-red-500 transition-colors">
                                <span className="material-symbols-outlined">logout</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
                    {/* Welcome Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Resumen del Tablero</h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Bienvenido de nuevo, Alex. Tus activos aumentaron un 4.2% esta semana.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined text-lg">download</span>
                                Estado de Cuenta
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 shadow-lg shadow-purple-600/20 transition-all">
                                <span className="material-symbols-outlined text-lg">bolt</span>
                                Acción Rápida
                            </button>
                        </div>
                    </div>

                    {/* Wallet Overview */}
                    <section>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-purple-600">account_balance_wallet</span>
                            Saldos de Billetera
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* USD Card */}
                            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-9xl">attach_money</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-sm font-medium opacity-80 uppercase tracking-wider">Saldo en Dólares US</span>
                                        <div className="bg-white/20 p-1.5 rounded-lg">
                                            <span className="material-symbols-outlined text-sm">show_chart</span>
                                        </div>
                                    </div>
                                    <h4 className="text-3xl font-bold mb-1">$12,450.00</h4>
                                    <p className="text-xs opacity-80 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">trending_up</span>
                                        +2.4% vs mes anterior
                                    </p>
                                </div>
                            </div>

                            {/* EUR Card */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                        <span className="material-symbols-outlined">euro_symbol</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cuenta Principal</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-1">Saldo en Euros</p>
                                <h4 className="text-2xl font-bold">€8,200.00</h4>
                                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs">
                                    <span className="text-slate-400">Cuenta Principal</span>
                                    <span className="text-emerald-500 font-medium">Verificada</span>
                                </div>
                            </div>

                            {/* GBP Card */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg text-emerald-600">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secundaria</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-1">Saldo en Pesos Colombianos</p>
                                <h4 className="text-2xl font-bold">$245,600.00</h4>
                                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs">
                                    <span className="text-slate-400">Activa</span>
                                    <span className="text-emerald-500 font-medium">Verificada</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-4">
                        <button className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-600/50 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-purple-600/10 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">send</span>
                            </div>
                            <span className="text-sm font-semibold">Enviar</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-600/50 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-purple-600/10 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">swap_calls</span>
                            </div>
                            <span className="text-sm font-semibold">Intercambiar</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-600/50 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-purple-600/10 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">add_circle</span>
                            </div>
                            <span className="text-sm font-semibold">Recargar</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
