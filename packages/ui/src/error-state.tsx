import { type JSX } from "react";

export function ErrorState({
  message,
  className,
}: {
  message: string;
  className?: string;
}): JSX.Element {
  return (
    <p role="alert" className={`ui-error${className ? ` ${className}` : ""}`}>
      {message}
    </p>
  );
}
