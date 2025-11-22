import React from 'react';
import { Activity, Clock, History, Wheat } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import type { ViewProps } from './view.types';
import { TransactionHistory } from '../components/shared/TransactionHistory';

export const DashboardView: React.FC<ViewProps> = ({
  cornCount,
  handleBuy,
  loading,
  cooldown,
  history,
  error,
}) => (
  <div className="h-full p-6 bg-zinc-50 grid grid-rows-[auto_1fr] gap-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-4 flex items-center gap-4 bg-white">
        <div className="p-3 bg-yellow-100 rounded-lg">
          <Wheat className="w-6 h-6 text-yellow-700" />
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium uppercase">
            Total Acquired
          </p>
          <p className="text-2xl font-bold text-zinc-900">{cornCount}</p>
        </div>
      </Card>

      <Card className="p-4 flex items-center gap-4 bg-white">
        <div
          className={`p-3 rounded-lg ${error ? 'bg-red-100' : 'bg-green-100'}`}
        >
          <Activity
            className={`w-6 h-6 ${error ? 'text-red-700' : 'text-green-700'}`}
          />
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium uppercase">
            API status
          </p>
          <p
            className={`text-sm font-bold ${error ? 'text-red-600' : 'text-green-600'}`}
          >
            {error ? 'Rate Limited (429)' : 'Operational (200)'}
          </p>
        </div>
      </Card>

      <Card className="p-4 flex items-center gap-4 bg-white">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Clock className="w-6 h-6 text-blue-700" />
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium uppercase">
            Next attempt
          </p>
          <p className="text-xl font-mono font-bold text-zinc-900">
            {cooldown > 0
              ? `00:${cooldown.toString().padStart(2, '0')}`
              : 'NOW'}
          </p>
        </div>
      </Card>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-0">
      <Card className="col-span-1 lg:col-span-2 p-0 overflow-hidden flex flex-col h-full">
        <div className="p-4 border-b border-zinc-100 bg-zinc-50/50 flex justify-between items-center">
          <h3 className="font-semibold text-zinc-800 flex items-center gap-2">
            <History className="w-4 h-4" /> Transactions historial
          </h3>
        </div>
        <div className="overflow-y-auto flex-1 p-0">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-zinc-500 bg-zinc-50 uppercase">
              <tr>
                <th className="px-4 py-3">When</th>
                <th className="px-4 py-3">Action</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <TransactionHistory history={history} />
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="col-span-1 lg:col-span-1 p-6 flex flex-col justify-center items-center space-y-6 h-full bg-zinc-900 text-white">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium text-zinc-300">Dashboard</h3>
          <p className="text-sm text-zinc-500">Execute purchase order</p>
        </div>

        <Button
          variant="primary"
          onClick={handleBuy}
          // disabled={loading || cooldown > 0}
          disabled={loading}
          className="w-full h-14 text-lg font-bold shadow-yellow-500/20 shadow-lg"
        >
          {loading ? 'Sending...' : 'BUY'}
        </Button>

        <div className="text-xs text-zinc-500 text-center">
          Business rule: <br /> Only 1 transaction per minute
        </div>
      </Card>
    </div>
  </div>
);
