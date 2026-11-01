import { type ComponentProps, type JSX } from "react";

export function Label({
  className,
  ...props
}: ComponentProps<"label">): JSX.Element {
  return (
    <label
      className={`ui-label${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}
