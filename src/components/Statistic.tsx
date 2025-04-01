import React from 'react';

interface StatisticProps {
  value: string;
  label: string;
  className?: string;
}

const Statistic: React.FC<StatisticProps> = ({ value, label, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-4xl text-black md:text-5xl font-bold mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default Statistic;
