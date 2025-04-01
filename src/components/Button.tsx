import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  href, 
  variant = 'primary', 
  className = '',
  onClick
}) => {
  const baseStyles = "px-6 py-3 rounded font-medium transition-colors";
  
  const variantStyles = {
    primary: "bg-[#1a4971] text-white hover:bg-[#15395a]",
    secondary: "bg-transparent border border-[#1a4971] text-[#1a4971] hover:bg-[#f0f5f9]"
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {text}
      </Link>
    );
  }
  
  return (
    <button className={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
