import React from "react";

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Children of the button (text, icons, etc.)
   */
  children: React.ReactNode;
  /**
   * Optional dark mode styling flag for the glass effect
   */
  dark?: boolean;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ children, dark = false, className = "", ...props }, ref) => {
    const baseClasses = `era-glass era-glass-button ${dark ? 'dark' : ''} ${className}`;
    
    return (
      <button 
        ref={ref}
        className={baseClasses.trim()} 
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";
