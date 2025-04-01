import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = ''
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
    <span className="block h-1 w-16 bg-gradient-to-tr from-[#5A90DF] to-[#0E2F60] mx-auto mt-3 mb-4"></span>
    {subtitle && <p className="text-lg text-gray-600 mb-2">{subtitle}</p>}
    <h2 className="text-3xl md:text-4xl font-bold relative text-[#1A202C]">
      {title}
    </h2>
  </div>  
  );
};

export default SectionHeading;
