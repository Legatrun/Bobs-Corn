import type { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm ${className}`}>{children}</div>
);