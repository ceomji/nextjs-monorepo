import { cloneElement, type JSX, type ReactElement } from "react";
import { Label } from "./label";

type ControlProps = {
  id?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

export function FormField({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactElement<ControlProps>;
  className?: string;
}): JSX.Element {
  const errorId = `${id}-error`;
  const control = cloneElement(children, {
    id,
    ...(error
      ? { "aria-invalid": true, "aria-describedby": errorId }
      : {}),
  });

  return (
    <div className={`ui-form-field${className ? ` ${className}` : ""}`}>
      <Label htmlFor={id}>{label}</Label>
      {control}
      {error ? (
        <p id={errorId} className="ui-form-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
