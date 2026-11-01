import { type JSX, type ReactNode } from "react";

export function Card({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <section className={`ui-card${className ? ` ${className}` : ""}`}>
      <h2 className="ui-card-title">{title}</h2>
      <div className="ui-card-body">{children}</div>
    </section>
  );
}
