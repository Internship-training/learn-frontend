import React from 'react';
import { Search, Bell, MessageCircle } from 'lucide-react';

interface TopbarProps {
  title: string;
}

const Topbar: React.FC<TopbarProps> = ({ title }) => {
  return (
    <header className="flex h-19 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-8">
      <h1 className="text-xl font-bold text-gray-900">{title}</h1>

      <div className="flex items-center gap-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses, mentors..."
            className="w-72 rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
          />
        </div>

        <button type="button" aria-label="Notifications" className="relative text-gray-500 hover:text-gray-700">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button type="button" aria-label="Messages" className="text-gray-500 hover:text-gray-700">
          <MessageCircle className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;