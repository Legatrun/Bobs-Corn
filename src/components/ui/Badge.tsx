import type { BadgeProps } from "./Badge.types";


export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
}) => {
  const styles =
    variant === "success"
      ? "bg-green-100 text-green-800"
      : "bg-zinc-100 text-zinc-800";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${styles}`}
    >
      {children}
    </span>
  );
};
