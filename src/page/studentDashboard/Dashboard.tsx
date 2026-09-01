import React from 'react';
import {
  TrendingUp,
  Clock,
  Award,
  Code2,
  Wand2,
  FileText,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Zap,
  Video,
  Trophy,
} from 'lucide-react';
import ModuleCard from '../../components/common/ModuleCard';
import QuickActionButton from '../../components/common/QuickActionButton';
import ProgressBar from '../../components/common/ProgressBar';

const Dashboard: React.FC = () => {
  return (
    <div className="mx-auto max-w-295">
      {/* Welcome header */}
      <p className="text-sm font-semibold text-blue-600">Welcome back</p>
      <h2 className="mt-1 text-2xl font-bold text-gray-900">
        Ready to accelerate your career, Alex?
      </h2>

      {/* Stat row */}
      <div className="mt-6 flex flex-col gap-5 lg:flex-row">
        {/* Overall progress */}
        <div className="flex flex-1 flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <TrendingUp className="h-5 w-5" />
            </span>
            <span className="text-md font-medium text-emerald-600">+12% this week</span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Overall Progress</p>
            <p className="mt-1 text-3xl font-bold text-gray-900">78.4%</p>
          </div>
          <ProgressBar percent={78.4} colorClass="bg-blue-600" />
        </div>

        {/* Next session */}
        <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-blue-700 p-5 text-white shadow-sm">
          <div className="flex items-center gap-1.5 text-md font-medium text-white/80">
            <Clock className="h-5 w-5" />
            Today, 4:00 PM
          </div>
          <h3 className="mt-3 text-xl font-bold leading-snug">Advanced React Patterns</h3>
          <div className="mt-4 flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/64?img=13"
              alt=""
              className="h-8 w-8 rounded-full border border-white/40 object-cover"
            />
            <span className="text-md text-white/90">with David Chen</span>
          </div>
        </div>

        {/* Certificates */}
        <div className="flex flex-1 flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Award className="h-5 w-5" />
            </span>
            <button type="button" className="text-xs font-semibold text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="mt-4">
            <p className="text-md text-gray-500">Active Certificates</p>
            <p className="mt-1 text-3xl font-bold text-gray-900">04</p>
          </div>
          <div className="mt-4 flex items-center -space-x-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-[10px] font-semibold text-violet-600"
              >
                ✓
              </span>
            ))}
            <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-[10px] font-semibold text-gray-500">
              +1
            </span>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {/* Active Modules */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Active Modules</h2>
              <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                View Curriculum
              </button>
            </div>
            <div className="mt-5 divide-y divide-gray-100">
              <ModuleCard
                title="Full-Stack Development Boot Camp"
                subtitle="Section 4: Advanced Database Management"
                progress={65}
                icon={Code2}
                iconBoxClass="bg-blue-50 text-blue-600"
                progressColorClass="bg-blue-600"
              />
              <ModuleCard
                title="UI/UX Career Path"
                subtitle="Section 2: Component Architecture"
                progress={20}
                icon={Wand2}
                iconBoxClass="bg-violet-50 text-violet-600"
                progressColorClass="bg-violet-500"
              />
            </div>
          </div>

          {/* Upcoming Assignments */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Upcoming Assignments</h2>
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                2 Overdue
              </span>
            </div>

            <div className="mt-5 grid grid-cols-[1.6fr_1fr_1.2fr_0.8fr] gap-4 border-b border-gray-100 pb-3 text-xs font-medium text-gray-500">
              <span>Task Name</span>
              <span>Course</span>
              <span>Deadline</span>
              <span className="text-right">Action</span>
            </div>

            <div className="divide-y divide-gray-100">
              <div className="grid grid-cols-[1.6fr_1fr_1.2fr_0.8fr] items-center gap-4 py-4">
                <div className="flex items-center gap-2.5 text-sm font-medium text-gray-900">
                  <FileText className="h-4 w-4 shrink-0 text-gray-400" />
                  <span className="truncate">Final Portfolio Review</span>
                </div>
                <span className="text-sm text-gray-500">UI/UX Path</span>
                <span className="text-sm font-medium text-red-600">Tomorrow, 11:59 PM</span>
                <button type="button" className="justify-self-end text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Submit Now
                </button>
              </div>
              <div className="grid grid-cols-[1.6fr_1fr_1.2fr_0.8fr] items-center gap-4 py-4">
                <div className="flex items-center gap-2.5 text-sm font-medium text-gray-900">
                  <HelpCircle className="h-4 w-4 shrink-0 text-gray-400" />
                  <span className="truncate">API Integration Quiz</span>
                </div>
                <span className="text-sm text-gray-500">Full-Stack Dev</span>
                <span className="text-sm text-gray-500">Dec 15, 2024</span>
                <button type="button" className="justify-self-end text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Open Quiz
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white">
                3
              </span>
            </div>

            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-gray-900">
                    Mentor David replied to your query
                  </p>
                  <p className="mt-0.5 truncate text-sm text-gray-500">
                    "The architecture you proposed looks solid..."
                  </p>
                  <p className="mt-1 text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-gray-900">Achievement Unlocked!</p>
                  <p className="mt-0.5 truncate text-sm text-gray-500">
                    You completed the "Async Hero" module.
                  </p>
                  <p className="mt-1 text-xs text-gray-400">5 hours ago</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Zap className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-gray-900">
                    New Internship Available
                  </p>
                  <p className="mt-1 text-xs text-gray-400">1 day ago</p>
                </div>
              </div>
            </div>

            <button type="button" className="mt-5 text-sm font-semibold text-blue-600 hover:text-blue-700">
              Mark all as read
            </button>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold tracking-wide text-gray-500">Quick actions</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <QuickActionButton label="Join Call" icon={Video} />
              <QuickActionButton label="Resources" icon={FileText} />
              <QuickActionButton label="Forum" icon={MessageSquare} />
              <QuickActionButton label="Badges" icon={Trophy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;