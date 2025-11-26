import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md flex items-center justify-center gap-2 font-fun tracking-wide";
  
  const variants = {
    // Red Button (Primary Call to Action)
    primary: "bg-brand-secondary text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-200",
    // Purple Button
    secondary: "bg-brand-primary text-white hover:bg-brand-dark hover:shadow-lg hover:shadow-blue-200",
    // Outline Purple
    outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
    // White Button (for dark backgrounds)
    white: "bg-white text-brand-secondary hover:bg-gray-100"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};