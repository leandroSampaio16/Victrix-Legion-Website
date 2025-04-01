import React from 'react';

interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, index }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-16 h-16 rounded-full bg-[#1a4971] text-white flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ProcessStep;
