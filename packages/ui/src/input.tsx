import { type ComponentProps, type JSX } from "react";

export function Input({
  className,
  ...props
}: ComponentProps<"input">): JSX.Element {
  return (
    <input
      className={`ui-input${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}
