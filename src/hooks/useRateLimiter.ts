import { useEffect, useState } from 'react';
import { apiBuyCorn } from '../api/Api';
import type { LogEntry } from '../views/view.types';

export const useRateLimiter = () => {
  const [cornCount, setCornCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<LogEntry[]>([]);
  const [lastBuyTime, setLastBuyTime] = useState<number>(0);
  const [cooldown, setCooldown] = useState<number>(0);

  useEffect(() => {
    if (lastBuyTime === 0) return;
    const interval = setInterval(() => {
      const remaining = Math.max(0, 60000 - (Date.now() - lastBuyTime));
      setCooldown(Math.ceil(remaining / 1000));
      if (remaining <= 0) {
        setError(null);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastBuyTime]);

  const handleBuy = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiBuyCorn();
      const newLog: LogEntry = {
        time: new Date().toLocaleTimeString(),
        action: 'POST /buy-corn',
        status: response.status,
      };
      setHistory((prev) => [newLog, ...prev]);

      if (response.status === 200) {
        setCornCount((prev) => prev + 1);
        setLastBuyTime(Date.now());
        setCooldown(60);
      } else if (response.status === 429) {
        setError('Too fast! Bob is a fair farmer (1 corn per minute)');
      }
    } catch (err) {
      setError('Farm connection error.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { cornCount, handleBuy, loading, cooldown, error, history };
};
