import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutGrid,
  Briefcase,
  GraduationCap,
  Users,
  BarChart3,
  BadgeCheck,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, path: '/student/dashboard' },
  { id: 'internships', label: 'My Internships', icon: Briefcase, path: '/student/internships' },
  { id: 'modules', label: 'Training Modules', icon: GraduationCap, path: '/student/modules' },
  { id: 'mentorship', label: 'Mentorship', icon: Users, path: '/student/mentorship' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/student/analytics' },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 224 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="relative bg-white border-r border-gray-200 h-screen top-0 shrink-0"
    >
      {/* Toggle */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        className="absolute -right-3 top-14 z-30 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-gray-800 hover:cursor-pointer"
      >
        {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
      </button>

      {/* Content wrapper */}
      <div className="flex h-full flex-col overflow-hidden p-3">
        {/* Logo */}
        {/* <div className={`flex items-center gap-2 mb-6 min-h-8 ${collapsed ? 'justify-center' : ''}`}>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <AnimatePresence mode="wait">
              {collapsed ? (
                <motion.div
                  key="mark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] text-xs font-bold text-white"
                >
                  A
                </motion.div>
              ) : (
                <motion.div
                  key="full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="leading-tight whitespace-nowrap"
                >
                  <h2 className="bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-sm font-semibold tracking-tight text-transparent">
                    Arinovaa Labs Skills
                  </h2>
                  <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.18em] text-gray-500">
                    Learn • Build • Grow
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div> */}

        <div
          className={`flex items-center mb-6 min-h-8 ${collapsed ? 'justify-center' : 'justify-center'
            }`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {collapsed ? (
                <motion.div
                  key="mark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] text-xs font-bold text-white"
                >
                  A
                </motion.div>
              ) : (
                <motion.div
                  key="full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="leading-tight whitespace-nowrap text-center"
                >
                  <h2 className="bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
                    Arinovaa Labs Skills
                  </h2>

                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
                    Learn • Build • Grow
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.id === 'dashboard'}
                title={collapsed ? item.label : undefined}
                className={({ isActive }) =>
                  `w-full flex items-center gap-2.5 py-2.5 rounded-xl text-[13px] font-semibold transition-colors ${collapsed ? 'justify-center px-0' : 'px-3.5'
                  } ${isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <Icon className="h-4 w-4 shrink-0" strokeWidth={2.25} />
                {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-3 mt-3 space-y-3">
          <div className={`flex items-center gap-2.5 ${collapsed ? 'justify-center' : ''}`}>
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Alex Johnson"
              className="h-8 w-8 rounded-full object-cover shrink-0"
            />
            {!collapsed && (
              <div className="leading-tight whitespace-nowrap">
                <p className="text-xs font-bold text-gray-900">Alex Johnson</p>
                <p className="text-xs text-gray-500">Student Intern</p>
              </div>
            )}
          </div>

          {/* <button
            title={collapsed ? 'View Certificate' : undefined}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <BadgeCheck className="h-4 w-4 shrink-0" strokeWidth={2.25} />
            {!collapsed && 'View Certificate'}
          </button> */}

          <button
            title={collapsed ? 'View Certificate' : undefined}
            className={`
    w-full h-10 flex items-center rounded-xl
    border border-blue-100
    bg-blue-600
    px-3.5
    text-xs font-semibold text-white
    transition-all duration-200
    active:scale-[0.98]
    overflow-hidden
    hover:bg-blue-700
    hover:cursor-pointer
    ${collapsed ? 'justify-center' : 'justify-center gap-2'}
  `}
          >
            <BadgeCheck
              className="h-4 w-4 shrink-0 text-white"
              strokeWidth={2.25}
            />

            <span
              className={`
      whitespace-nowrap overflow-hidden
      transition-all duration-200 ease-in-out
      ${collapsed
                  ? 'max-w-0 opacity-0'
                  : 'max-w-30 opacity-100'
                }
    `}
            >
              View Certificate
            </span>
          </button>

          <div className="space-y-2 pt-0.5">
            <button
              title={collapsed ? 'Settings' : undefined}
              className={`w-full flex items-center gap-2.5 text-left text-[13px] font-medium text-gray-700 hover:text-gray-900 ${collapsed ? 'justify-center' : ''
                }`}
            >
              <Settings className="h-4 w-4 text-gray-500 shrink-0" strokeWidth={2.25} />
              {!collapsed && 'Settings'}
            </button>
            <button
              title={collapsed ? 'Help Center' : undefined}
              className={`w-full flex items-center gap-2.5 text-left text-[13px] font-medium text-gray-700 hover:text-gray-900 ${collapsed ? 'justify-center' : ''
                }`}
            >
              <HelpCircle className="h-4 w-4 text-gray-500 shrink-0" strokeWidth={2.25} />
              {!collapsed && 'Help Center'}
            </button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;