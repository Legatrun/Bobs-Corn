import React from 'react';
import { Wheat } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import type { ViewProps } from './view.types';

export const GamifiedView: React.FC<ViewProps> = ({
  cornCount,
  handleBuy,
  loading,
  cooldown,
}) => {
  const progress = Math.min(100, ((60 - cooldown) / 60) * 100);

  return (
    <div className="h-full p-6 flex flex-col items-center bg-linear-to-b from-blue-50 to-green-50 rounded-xl overflow-hidden relative">
      <div className="absolute top-4 right-4">
        <div className="w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
      </div>

      <div className="z-10 text-center mt-8 mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-2">
          Bob&apos;s Corn Farm
        </h2>
        <Badge variant="success">Level {Math.floor(cornCount / 5) + 1}</Badge>
      </div>

      <div className="flex-1 flex flex-wrap justify-center content-start gap-2 max-w-md overflow-y-auto p-4">
        {Array.from({ length: cornCount }).map((_, i) => (
          <div key={i} className="animate-in zoom-in duration-300">
            <Wheat
              className="w-8 h-8 text-yellow-500 drop-shadow-sm"
              fill="currentColor"
            />
          </div>
        ))}
        {cornCount === 0 && (
          <span className="text-zinc-400 italic">Your barn is empty...</span>
        )}
      </div>

      {/* Controles de Juego */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 mt-auto z-10">
        <div className="flex justify-between text-sm font-medium text-zinc-600 mb-2">
          <span>Harvested energy</span>
          <span>{cooldown > 0 ? 'Reloading...' : '¡Ready!'}</span>
        </div>

        <div className="h-4 w-full bg-zinc-200 rounded-full overflow-hidden mb-4 border border-zinc-300">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${cooldown > 0 ? 'bg-blue-400' : 'bg-green-500'}`}
            style={{ width: `${cooldown > 0 ? progress : 100}%` }}
          />
        </div>

        <Button
          onClick={handleBuy}
          disabled={loading || cooldown > 0}
          className={`w-full h-12 font-bold text-lg rounded-xl border-b-4 active:border-b-0 active:translate-y-1 transition-all
            ${
              cooldown > 0
                ? 'bg-zinc-300 border-zinc-400 text-zinc-500 cursor-not-allowed'
                : 'bg-green-500 border-green-700 text-white hover:bg-green-400'
            }`}
        >
          {loading ? 'Harvesting...' : 'HARVEST (1)'}
        </Button>
      </div>
    </div>
  );
};
