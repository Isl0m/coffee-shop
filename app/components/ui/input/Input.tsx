import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type InputProps<T extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    label: Path<T>;
    register: UseFormRegister<T>;
    options?: RegisterOptions;
    error?: FieldError;
  };

const Input = <T extends FieldValues>({
  label,
  register,
  options,
  error,
  placeholder,
  ...rest
}: InputProps<T>) => {
  return (
    <label className="block">
      <span className="text-gray-700 capitalize">{label}</span>
      <input
        {...register(label, options)}
        {...rest}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md shadow-sm 
      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      invalid:border-pink-500 invalid:text-pink-600 invalid:ring-pink-200"
      />
      {error && <div className="text-sm text-pink-700">{error.message}</div>}
    </label>
  );
};

export default Input;
