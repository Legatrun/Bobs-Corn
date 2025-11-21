import { useEffect, useState } from "react";
import { mockApiBuyCorn } from "../api/mockApi";
import type { LogEntry } from "../views/views.types";

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
      if (remaining <= 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [lastBuyTime]);


  const handleBuy = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await mockApiBuyCorn();
      const newLog: LogEntry = { time: new Date().toLocaleTimeString(), action: 'POST /buy-corn', status: response.status };
      setHistory(prev => [newLog, ...prev]);

      if (response.status === 200) {
        setCornCount(prev => prev + 1);
        setLastBuyTime(Date.now());
        setCooldown(60);
      } else if (response.status === 429) {
        setError("¡Demasiado rápido! Bob es un granjero justo (1 maíz/min).");
      }
    } catch (err) {
      setError("Error de conexión con la granja.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { cornCount, handleBuy, loading, cooldown, error, history };
};