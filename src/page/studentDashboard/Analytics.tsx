import React from 'react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
        <p className="text-gray-500">Track your learning performance and growth.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Courses Completed" value="6" change="+2 this month" />
        <StatCard label="Hours Learned" value="128" change="+12 this week" />
        <StatCard label="Average Score" value="87%" change="+5% from last month" />
        <StatCard label="Mentorship Sessions" value="14" change="Scheduled: 3" />
      </div>

      {/* Placeholder for charts – you can integrate with Chart.js or Recharts */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">Progress Over Time</h3>
        <div className="h-48 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
          📊 Chart placeholder – integrate with your charting library
        </div>
      </div>
    </div>
  );
};

// helper stat card
const StatCard: React.FC<{ label: string; value: string; change: string }> = ({ label, value, change }) => (
  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
    <p className="text-xs text-green-600">{change}</p>
  </div>
);

export default Analytics;