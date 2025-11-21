import { Gamepad2, LayoutDashboard, Wheat, Zap } from "lucide-react";

interface NavigationHeaderProps {
  activeView: string;
  setActiveView: React.Dispatch<React.SetStateAction<string>>;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ activeView, setActiveView }) => (
  <header className="flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="flex items-center gap-2">
      <div className="bg-yellow-500 p-2 rounded-lg">
        <Wheat className="text-black w-6 h-6" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-zinc-900">Bob's Corn</h1>
        <p className="text-xs text-zinc-500">Cliente Frontend v1.0</p>
      </div>
    </div>

    {/* Navegación (Simulación de Router) */}
    <div className="bg-white p-1 rounded-lg border border-zinc-200 shadow-sm flex gap-1">
      <button
        onClick={() => setActiveView('minimal')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${activeView === 'minimal' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
      >
        <Zap className="w-4 h-4" /> Minimal
      </button>
      <button
        onClick={() => setActiveView('game')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${activeView === 'game' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
      >
        <Gamepad2 className="w-4 h-4" /> Gamificado
      </button>
      <button
        onClick={() => setActiveView('dashboard')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${activeView === 'dashboard' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
      >
        <LayoutDashboard className="w-4 h-4" /> Dashboard
      </button>
    </div>
  </header>
);