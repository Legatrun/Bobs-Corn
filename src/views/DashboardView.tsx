import { Activity, Clock, History, Wheat } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import type { ViewProps } from "./views.types";

export const DashboardView: React.FC<ViewProps> = ({ cornCount, handleBuy, loading, cooldown, history, error }) => (
  <div className="h-full p-6 bg-zinc-50 grid grid-rows-[auto_1fr] gap-6">
    {/* Header Stats */}
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 flex items-center gap-4 bg-white">
        <div className="p-3 bg-yellow-100 rounded-lg">
          <Wheat className="w-6 h-6 text-yellow-700" />
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium uppercase">Total Adquirido</p>
          <p className="text-2xl font-bold text-zinc-900">{cornCount}</p>
        </div>
      </Card>
      
      <Card className="p-4 flex items-center gap-4 bg-white">
        <div className={`p-3 rounded-lg ${error ? 'bg-red-100' : 'bg-green-100'}`}>
          <Activity className={`w-6 h-6 ${error ? 'text-red-700' : 'text-green-700'}`} />
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium uppercase">Estado API</p>
          <p className={`text-sm font-bold ${error ? 'text-red-600' : 'text-green-600'}`}>
            {error ? 'Rate Limited (429)' : 'Operativo (200)'}
          </p>
        </div>
      </Card>

      <Card className="p-4 flex items-center gap-4 bg-white">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Clock className="w-6 h-6 text-blue-700" />
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium uppercase">Próximo Intento</p>
          <p className="text-xl font-mono font-bold text-zinc-900">
            {cooldown > 0 ? `00:${cooldown.toString().padStart(2, '0')}` : 'AHORA'}
          </p>
        </div>
      </Card>
    </div>

    {/* Main Content: Chart/Log & Action */}
    <div className="grid grid-cols-3 gap-6 h-full min-h-0">
      <Card className="col-span-2 p-0 overflow-hidden flex flex-col h-full">
        <div className="p-4 border-b border-zinc-100 bg-zinc-50/50 flex justify-between items-center">
          <h3 className="font-semibold text-zinc-800 flex items-center gap-2">
            <History className="w-4 h-4" /> Historial de Transacciones
          </h3>
        </div>
        <div className="overflow-y-auto flex-1 p-0">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-zinc-500 bg-zinc-50 uppercase">
              <tr>
                <th className="px-4 py-3">Timestamp</th>
                <th className="px-4 py-3">Acción</th>
                <th className="px-4 py-3">Estado</th>
              </tr>
            </thead>
            <tbody>
              {history.length === 0 ? (
                <tr><td colSpan={3} className="px-4 py-8 text-center text-zinc-400">Sin actividad reciente</td></tr>
              ) : (
                history.map((log, i) => (
                  <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50">
                    <td className="px-4 py-3 font-mono text-xs text-zinc-500">{log.time}</td>
                    <td className="px-4 py-3 font-medium">{log.action}</td>
                    <td className="px-4 py-3">
                      <Badge variant={log.status === 200 ? 'success' : 'destructive'}>
                        {log.status} {log.status === 200 ? 'OK' : 'Too Many Requests'}
                      </Badge>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="col-span-1 p-6 flex flex-col justify-center items-center space-y-6 h-full bg-zinc-900 text-white">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium text-zinc-300">Panel de Control</h3>
          <p className="text-sm text-zinc-500">Ejecutar orden de compra</p>
        </div>
        
        <Button
          variant="primary" 
          onClick={handleBuy} 
          disabled={loading || cooldown > 0} 
          className="w-full h-14 text-lg font-bold shadow-yellow-500/20 shadow-lg"
        >
          {loading ? 'Enviando...' : 'COMPRAR'}
        </Button>

        <div className="text-xs text-zinc-500 text-center">
          Regla de negocio: <br/> Máx. 1 transacción / minuto
        </div>
      </Card>
    </div>
  </div>
);