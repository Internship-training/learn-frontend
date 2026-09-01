import React from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface ModuleCardProps {
  title: string;
  subtitle: string;
  progress: number;
  icon: LucideIcon;
  iconBoxClass: string;
  progressColorClass: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  subtitle,
  progress,
  icon: Icon,
  iconBoxClass,
  progressColorClass,
}) => {
  return (
    <button type="button" className="flex w-full items-center gap-4 py-4 text-left">
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBoxClass}`}>
        <Icon className="h-5 w-5" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>
      </div>

      <div className="w-40 shrink-0">
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="text-gray-500">Progress</span>
          <span className="font-semibold text-gray-900">{progress}%</span>
        </div>
        <ProgressBar percent={progress} colorClass={progressColorClass} />
      </div>

      <ChevronRight className="h-5 w-5 shrink-0 text-gray-400" />
    </button>
  );
};

export default ModuleCard;