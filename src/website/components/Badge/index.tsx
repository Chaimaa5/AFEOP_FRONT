import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

const variants = {
  light: "border-darkgreen/30 text-green2",
  dark: "border-white/30 text-white",
} as const;

export type BadgeProps = Omit<HTMLMotionProps<"span">, "children"> &
  Partial<{
    className: string;
    variant: keyof typeof variants;
    children: React.ReactNode;
  }>;

const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "light",
  ...restProps
}) => {
  return (
    <motion.span
      className={`px-6 py-2 mb-6 border-2 rounded-full text-sm font-semibold tracking-wider uppercase inline-block ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...restProps}
    >
      {children}
    </motion.span>
  );
};

export { Badge };
