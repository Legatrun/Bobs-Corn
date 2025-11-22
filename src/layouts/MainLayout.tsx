import React from 'react';
import { Gamepad2, LayoutDashboard, Wheat, Zap } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavigationHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;

  const isActive = (path: string) =>
    activePath === path || (path === '/minimal' && activePath === '/');

  return (
    <header className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="bg-yellow-500 p-2 rounded-lg">
          <Wheat className="text-black w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-zinc-900">Bob&apos;s Corn</h1>
        </div>
      </div>

      <div className="bg-white p-1 rounded-lg border border-zinc-200 shadow-sm flex gap-1">
        <button
          type="button"
          onClick={() => navigate('/minimal')}
          className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${isActive('/minimal') ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
        >
          <Zap className="w-4 h-4" /> Basic
        </button>
        <button
          type="button"
          onClick={() => navigate('/game')}
          className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${activePath === '/game' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
        >
          <Gamepad2 className="w-4 h-4" /> Game
        </button>
        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${activePath === '/dashboard' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
        >
          <LayoutDashboard className="w-4 h-4" /> Dashboard
        </button>
      </div>
    </header>
  );
};
