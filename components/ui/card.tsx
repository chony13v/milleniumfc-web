// components/ui/card.tsx
import * as React from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        "rounded-2xl bg-[#0B1D51]/80 shadow-xl backdrop-blur-md",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

/** Contenedor interno ― mismo padding en todas las tarjetas */
export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("p-6", className)} {...props} />;
}
