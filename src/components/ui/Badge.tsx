import React from 'react';
import type { BadgeProps } from './Badge.types';
import clsx from 'clsx';

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
}) => {
  const styles = {
    default: 'bg-zinc-100 text-zinc-800',
    success: 'bg-green-100 text-green-800',
    destructive: 'bg-red-100 text-red-800',
  };
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        styles[variant],
      )}
    >
      {children}
    </span>
  );
};
