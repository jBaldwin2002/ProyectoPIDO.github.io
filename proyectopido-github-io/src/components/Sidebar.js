import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col sticky top-0 h-screen">
            <div className="p-6 flex items-center gap-3">
                <div className="bg-purple-600 rounded-lg p-2 text-white">
                    <span className="material-symbols-outlined block">currency_exchange</span>
                </div>
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-purple-600">PIDO</h1>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Fintech Platform</p>
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                <Link
                    to="/"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/')
                        ? 'bg-purple-600/10 text-purple-600'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                >
                    <span className="material-symbols-outlined">home</span>
                    <span>Inicio</span>
                </Link>

                <Link
                    to="/wallet"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/wallet')
                        ? 'bg-purple-600/10 text-purple-600'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                >
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                    <span>Billetera</span>
                </Link>

                <Link
                    to="/intercambio"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/intercambio')
                        ? 'bg-purple-600/10 text-purple-600'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                >
                    <span className="material-symbols-outlined">swap_horiz</span>
                    <span>Intercambio</span>
                </Link>

                <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                    <span className="material-symbols-outlined">history</span>
                    <span>Historial</span>
                </a>

                <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                    <span className="material-symbols-outlined">person</span>
                    <span>Perfil</span>
                </a>
            </nav>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <button className="w-full bg-purple-600 text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors">
                    <span className="material-symbols-outlined text-sm">add</span>
                    Nueva Transacción
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
