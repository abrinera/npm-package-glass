import React from "react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children of the card
   */
  children: React.ReactNode;
  /**
   * Optional dark mode styling flag for the glass effect
   */
  dark?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, dark = false, className = "", ...props }, ref) => {
    const baseClasses = `era-glass era-glass-card ${dark ? 'dark' : ''} ${className}`;
    
    return (
      <div 
        ref={ref}
        className={baseClasses.trim()} 
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
