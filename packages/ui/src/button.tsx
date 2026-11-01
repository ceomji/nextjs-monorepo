import { type ComponentProps, type JSX } from "react";

type ButtonProps = Omit<ComponentProps<"button">, "type"> & {
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
};

export function Button({
  variant = "primary",
  type = "button",
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={`ui-button ui-button-${variant}${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}
