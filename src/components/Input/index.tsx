import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ className, label, ...props }: Props) => (
  <div className={clsx("form-control w-full max-w-xs", className)}>
    {label && (
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
    )}
    <input
      className="input input-bordered w-full max-w-xs"
      type="text"
      {...props}
    />
  </div>
);

export default Input;
