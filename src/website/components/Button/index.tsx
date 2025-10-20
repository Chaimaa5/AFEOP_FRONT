import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useNavigate } from "react-router-dom";

const shapes = { 
  round: "rounded-[10px]",
  pill: "rounded-full"
} as const;

const variants = {
  primary: "bg-cream text-green2 hover:bg-[#d4c9a5] font-semibold transition-all",
  secondary: "bg-darkgreen text-cream hover:bg-darkgreen/90 font-semibold transition-all",
  outline: "px-0  border-0 text-green2  font-semibold transition-all",
  ghost: "text-green2 hover:bg-darkgreen/10 font-semibold transition-all",
} as const;

const sizes = { 
  xs: "px-0 py-2 text-sm",
  sm: "px-6 py-4 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
} as const;

export type ButtonProps = Omit<HTMLMotionProps<"button">, "onClick"> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    showDot: boolean;
    redirect: string;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  showDot = false,
  shape = "pill",
  size = "md",
  variant = "primary",
  redirect,
  onClick,
  ...restProps
}) => {
  // Determine dot color based on variant
  const dotColor = variant === "primary" || variant === "outline"
    ? "bg-darkgreen" 
    : "bg-cream";

  const navigate = useNavigate();

  const handleClick = () => {
    if (redirect) {
      navigate(redirect);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      className={`inline-flex items-center justify-center gap-2 ${shapes[shape]} ${sizes[size]} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...restProps}
      onClick={handleClick}
    >
      {showDot && <span className={`w-2 h-2 ${dotColor} rounded-full`}></span>}
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </motion.button>
  );
};

export { Button };
