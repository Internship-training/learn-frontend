import type { LucideIcon } from 'lucide-react';
import React from 'react';

interface QuickActionButtonProps {
  label: string;
  icon: LucideIcon;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ label, icon: Icon }) => {
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 py-5 text-sm font-medium text-gray-700 transition-colors hover:border-blue-400/40 hover:bg-blue-50/60"
    >
      <Icon className="h-5 w-5 text-gray-500" />
      {label}
    </button>
  );
};

export default QuickActionButton;