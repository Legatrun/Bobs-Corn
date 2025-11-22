export interface LogEntry {
  time: string;
  action: string;
  status: number;
}

export interface ViewProps {
  cornCount: number;
  handleBuy: () => Promise<void>;
  loading: boolean;
  cooldown: number;
  error: string | null;
  history: LogEntry[];
}
