import { type ComponentProps, type JSX } from "react";

export function Textarea({
  className,
  ...props
}: ComponentProps<"textarea">): JSX.Element {
  return (
    <textarea
      className={`ui-textarea${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}
