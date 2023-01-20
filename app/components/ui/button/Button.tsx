import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import { button } from "./Button.cva";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    onClick?: () => void;
    children: ReactNode;
  };

const Button: FC<ButtonProps> = ({
  size,
  intent,
  onClick,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={button({ intent, size, className })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
