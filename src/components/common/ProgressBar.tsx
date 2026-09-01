import React from 'react';

interface ProgressBarProps {
  percent: number;
  colorClass?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent, colorClass = 'bg-blue-600' }) => {
  const clamped = Math.min(100, Math.max(0, percent));
  return (
    <div className="h-1.5 w-full rounded-full bg-gray-200" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
      <div className={`h-full rounded-full ${colorClass} transition-all`} style={{ width: `${clamped}%` }} />
    </div>
  );
};

export default ProgressBar;