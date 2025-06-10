import * as React from "react";
import clsx from "clsx";          // si aún no lo tienes:  npm i clsx

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Botón corporativo redondeado.
 * - Color principal: #725CAD
 * - Hover: oscurece un poco
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium shadow-lg",
        "bg-[#725CAD] hover:bg-[#5e46b7] text-white transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
