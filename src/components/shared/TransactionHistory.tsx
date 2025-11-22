import React from 'react';
import { Badge } from '../ui/Badge';
import type { TransactionHistoryProps } from './TransactionHistory.types';

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  history,
}) => {
  if (history.length === 0) {
    return (
      <tr>
        <td colSpan={3} className="px-4 py-8 text-center text-zinc-400">
          Sin actividad reciente
        </td>
      </tr>
    );
  }

  return (
    <>
      {history.map((log, i) => (
        <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50">
          <td className="px-4 py-3 font-mono text-xs text-zinc-500">
            {log.time}
          </td>
          <td className="px-4 py-3 font-medium">{log.action}</td>
          <td className="px-4 py-3">
            <Badge variant={log.status === 200 ? 'success' : 'destructive'}>
              {log.status} {log.status === 200 ? 'OK' : 'Too Many Requests'}
            </Badge>
          </td>
        </tr>
      ))}
    </>
  );
};
