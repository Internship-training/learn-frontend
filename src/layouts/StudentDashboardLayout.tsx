import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../page/studentDashboard/Sidebar';
import Topbar from './Topbar';

const PAGE_TITLES: Record<string, string> = {
  '/dashboard': 'Student Dashboard',
  '/dashboard/internships': 'My Internships',
  '/dashboard/modules': 'Training Modules',
  '/dashboard/mentorship': 'Mentorship',
  '/dashboard/analytics': 'Analytics',
};

const DashboardLayout: React.FC = () => {
  const { pathname } = useLocation();
  const title = PAGE_TITLES[pathname] ?? 'Student Dashboard';

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={title} />
        <main className="flex-1 overflow-y-auto px-8 py-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;