export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  variant?: 'primary' | 'outline' | 'ghost' | 'destructive';
  className?: string;
}