import { type JSX } from "react";

export function LoadingState({
  message,
  className,
}: {
  message: string;
  className?: string;
}): JSX.Element {
  return (
    <p
      role="status"
      className={`ui-loading${className ? ` ${className}` : ""}`}
    >
      {message}
    </p>
  );
}
