import React from 'react';
// import ModuleCard from './shared/ModuleCard';

const TrainingModules: React.FC = () => {


  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Training Modules</h1>
        <p className="text-gray-500">Track your progress across all courses.</p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((mod, idx) => (
          <ModuleCard key={idx} {...mod} />
        ))}
      </div> */}
    </div>
  );
};

export default TrainingModules;