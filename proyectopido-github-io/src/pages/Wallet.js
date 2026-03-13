import Sidebar from '../components/Sidebar';

function Wallet() {
    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
            <Sidebar />

            <main className="flex-1 p-8">
                {/* Header Section */}
                <header className="flex flex-wrap justify-between items-end gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight">Mis Billeteras</h2>
                        <p className="text-slate-500 dark:text-slate-400">
                            Gestiona tus activos digitales y divisas
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-purple-600/20 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 transition-colors">
                            <span className="material-symbols-outlined text-lg">add_circle</span>
                            Añadir Nueva Billetera
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20">
                            <span className="material-symbols-outlined text-lg">payments</span>
                            Depositar Fondos
                        </button>
                    </div>
                </header>

                {/* Wallet Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* USD Wallet */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-600/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="size-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                                $
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+2.5%</span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                            Billetera USD
                        </p>
                        <h3 className="text-2xl font-black mb-4">$12,450.00</h3>
                        <div className="h-12 w-full bg-gradient-to-r from-purple-600/5 to-purple-600/20 rounded-lg flex items-end overflow-hidden"></div>
                    </div>

                    {/* EUR Wallet */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-600/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="size-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl">
                                €
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">-0.8%</span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                            Billetera EUR
                        </p>
                        <h3 className="text-2xl font-black mb-4">€8,200.50</h3>
                        <div className="h-12 w-full bg-gradient-to-r from-purple-600/5 to-purple-600/20 rounded-lg flex items-end overflow-hidden"></div>
                    </div>

                    {/* GBP Wallet */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-600/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="size-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xl">
                                £
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+1.2%</span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                            Billetera GBP
                        </p>
                        <h3 className="text-2xl font-black mb-4">£5,100.25</h3>
                        <div className="h-12 w-full bg-gradient-to-r from-purple-600/5 to-purple-600/20 rounded-lg flex items-end overflow-hidden"></div>
                    </div>
                </section>

                {/* Bottom Section: Cards & Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Manage Cards Section */}
                    <section className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold">Gestionar Tarjetas</h3>
                            <button className="text-purple-600 text-sm font-bold hover:underline">
                                Ver Todo
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Physical Card */}
                            <div
                                className="relative h-48 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-xl"
                                style={{
                                    background: 'linear-gradient(135deg, #891fe5 0%, #4c1d95 100%)',
                                }}
                            >
                                <div className="relative z-10 flex justify-between items-start">
                                    <span className="material-symbols-outlined text-white/80 text-4xl">contactless</span>
                                    <span className="text-white/80 font-bold italic text-xl">PIDO</span>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-white/60 text-xs tracking-widest uppercase mb-1">
                                        Número de Tarjeta
                                    </p>
                                    <p className="text-white text-lg font-mono tracking-widest">
                                        **** **** **** 4289
                                    </p>
                                </div>
                                <div className="relative z-10 flex justify-between items-end">
                                    <div>
                                        <p className="text-white/60 text-[10px] uppercase tracking-widest">
                                            Titular
                                        </p>
                                        <p className="text-white font-medium">Alex Thompson</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="bg-white/20 backdrop-blur-md p-1.5 rounded-lg hover:bg-white/30 transition-colors">
                                            <span className="material-symbols-outlined text-white text-sm">ac_unit</span>
                                        </button>
                                        <button className="bg-white/20 backdrop-blur-md p-1.5 rounded-lg hover:bg-white/30 transition-colors">
                                            <span className="material-symbols-outlined text-white text-sm">visibility</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute -right-10 -bottom-10 size-40 bg-white/5 rounded-full"></div>
                            </div>

                            {/* Virtual Card */}
                            <div className="relative h-48 rounded-2xl p-6 flex flex-col justify-between overflow-hidden border-2 border-dashed border-purple-600/20 bg-white dark:bg-slate-800">
                                <div className="flex justify-between items-start">
                                    <span className="material-symbols-outlined text-purple-600/40 text-4xl">nest_remote_comfort_sensor</span>
                                    <span className="text-purple-600/40 font-bold italic text-xl">VIRTUAL</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-slate-400 text-xs font-bold mb-2">
                                        Tarjeta de Asistente de Compras
                                    </p>
                                    <p className="text-slate-800 dark:text-slate-100 text-lg font-mono tracking-widest">
                                        **** **** **** 8821
                                    </p>
                                </div>
                                <div className="flex justify-center gap-4">
                                    <button className="flex items-center gap-1 text-xs font-bold text-purple-600 px-3 py-1.5 rounded-full bg-purple-600/10">
                                        <span className="material-symbols-outlined text-xs">lock</span>
                                        Congelar
                                    </button>
                                    <button className="flex items-center gap-1 text-xs font-bold text-slate-500 px-3 py-1.5 rounded-full bg-slate-100">
                                        <span className="material-symbols-outlined text-xs">info</span>
                                        Detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Analytics Widget */}
                    <section>
                        <h3 className="text-xl font-bold mb-6">Desglose de Gastos</h3>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-purple-600/5">
                            <div className="relative size-40 mx-auto mb-6">
                                <svg className="size-full" viewBox="0 0 36 36">
                                    <path
                                        className="text-slate-100 dark:text-slate-700"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    ></path>
                                    <path
                                        className="text-purple-600"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeDasharray="75, 100"
                                        strokeLinecap="round"
                                        strokeWidth="3"
                                    ></path>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <p className="text-xs text-slate-500">Límite Mensual</p>
                                    <p className="text-xl font-black">75%</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="size-2 rounded-full bg-purple-600"></span>
                                        <span className="text-slate-600 dark:text-slate-300">Suscripciones</span>
                                    </div>
                                    <span className="font-bold">$450.00</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Wallet;
