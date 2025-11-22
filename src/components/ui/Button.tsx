import React from 'react';
import type { ButtonProps } from './Button.types';
import clsx from 'clsx';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  className,
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2';
  const variants = {
    primary: 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-sm',
    outline: 'border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-900',
    ghost: 'hover:bg-zinc-100 text-zinc-700',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </button>
  );
};
