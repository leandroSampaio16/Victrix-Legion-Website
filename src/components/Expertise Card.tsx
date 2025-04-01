import React from 'react';
import Image from 'next/image';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-[#e8f4e8] flex items-center justify-center mb-4">
          <div className="relative w-8 h-8">
            <Image 
              src={icon} 
              alt={title} 
              fill 
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
