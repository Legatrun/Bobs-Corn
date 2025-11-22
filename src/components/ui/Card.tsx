import React from 'react';
import type { CardProps } from './Card.types';
import clsx from 'clsx';

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div
    className={clsx(
      'rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm',
      className,
    )}
  >
    {children}
  </div>
);
