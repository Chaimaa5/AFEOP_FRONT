import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

const headerVariants = {
  light: "text-cream font-bold",
  dark: "text-green2 font-bold",
};

const descriptionVariants = {
  light: "text-greenlight font-normal",
  dark: "text-navy font-normal",
};

const paragraphVariants = {
  light: "text-cream leading-relaxed text-base",
  dark: "text-gray-600 leading-relaxed text-base",
};

const sizes = {
  xs: "text-base",
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-6xl",
};

export type TextProps = Omit<HTMLMotionProps<"div">, "onClick"> &
  Partial<{
    className: string;
    header: string;
    headerVariant: keyof typeof headerVariants;
    headerSize: keyof typeof sizes;
    description: string;
    descriptionVariant: keyof typeof descriptionVariants;
    descriptionSize: keyof typeof sizes;
    paragraph: string;
    paragraphVariant: keyof typeof paragraphVariants;
    paragraphSize: keyof typeof sizes;
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  }>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  className = "",
  header,
  headerVariant = "dark",
  headerSize = "lg",
  description,
  descriptionVariant = "dark",
  descriptionSize = "md",
  paragraph,
  paragraphVariant = "dark",
  paragraphSize = "sm",
  as = "div",
  children,
  ...restProps
}) => {
  const HeaderTag = as || "div";
  return (
    <motion.div className={className} {...restProps}>
      {header && (
        <HeaderTag
          className={`${headerVariants[headerVariant]} ${sizes[headerSize]} mb-2`}
        >
          {header}
        </HeaderTag>
      )}
      {description && (
        <p
          className={`${descriptionVariants[descriptionVariant]} ${sizes[descriptionSize]} mb-2`}
        >
          {description}
        </p>
      )}
      {paragraph && (
        <p
          className={`${paragraphVariants[paragraphVariant]} ${sizes[paragraphSize]} mb-2`}
        >
          {paragraph}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export { Text };
