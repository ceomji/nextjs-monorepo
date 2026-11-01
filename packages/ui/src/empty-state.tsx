import { type JSX } from "react";

export function EmptyState({
  title,
  message,
  className,
}: {
  title: string;
  message: string;
  className?: string;
}): JSX.Element {
  return (
    <div className={`ui-empty${className ? ` ${className}` : ""}`}>
      <p className="ui-empty-title">{title}</p>
      <p className="ui-empty-message">{message}</p>
    </div>
  );
}
