import React from 'react';

const Mentorship: React.FC = () => {
  const mentors = [
    { name: 'David Chen', expertise: 'React & Frontend', availability: 'Available', nextSession: 'Today, 4:00 PM' },
    { name: 'Sarah Johnson', expertise: 'UI/UX Design', availability: 'Busy', nextSession: 'Tomorrow, 10:00 AM' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Mentorship</h1>
        <p className="text-gray-500">Connect with your mentors and schedule sessions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mentors.map((mentor, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg">
                {mentor.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{mentor.name}</h3>
                <p className="text-sm text-gray-500">{mentor.expertise}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between text-sm">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                mentor.availability === 'Available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {mentor.availability}
              </span>
              <span className="text-gray-400">Next: {mentor.nextSession}</span>
              <button className="text-indigo-600 font-medium hover:underline text-xs">Request Session</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentorship;