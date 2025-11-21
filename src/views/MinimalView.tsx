import { AlertCircle, Wheat } from "lucide-react";
import { Button } from "../components/ui/Button";
import type { ViewProps } from "./views.types";

export const MinimalView: React.FC<ViewProps> = ({ cornCount, handleBuy, loading, cooldown, error }) => (
  <div className="flex flex-col items-center justify-center h-full space-y-8 p-6 animate-in fade-in duration-500">
    <div className="text-center space-y-2">
      <h2 className="text-zinc-500 font-medium uppercase tracking-widest text-sm">Tu Inventario</h2>
      <div className="text-8xl font-black text-zinc-900 tracking-tighter flex items-center gap-4">
        <span>{cornCount}</span>
        <Wheat className="w-20 h-20 text-yellow-500" />
      </div>
    </div>

    <div className="w-full max-w-xs">
      <Button 
        onClick={handleBuy} 
        disabled={loading || cooldown > 0} 
        className="w-full h-16 text-xl rounded-full shadow-lg active:scale-95 transition-transform"
      >
        {loading ? 'Procesando...' : cooldown > 0 ? `Espera ${cooldown}s` : 'COMPRAR MAÍZ'}
      </Button>
    </div>

    {error && (
      <div className="text-red-500 flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full text-sm font-medium">
        <AlertCircle className="w-4 h-4" />
        {error}
      </div>
    )}
  </div>
);