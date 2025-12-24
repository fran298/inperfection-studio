import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm tracking-wide";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 shadow-md hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    text: "text-dark underline hover:text-primary p-0"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};