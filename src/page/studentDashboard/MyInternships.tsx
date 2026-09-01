import React, { useState } from 'react';
import {
  BarChart3,
  Clock,
  Laptop,
  Brain,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface CurriculumModule {
  number: string;
  title: string;
  meta: string;
  bullets?: string[];
}

const curriculum: CurriculumModule[] = [
  {
    number: '01',
    title: 'Foundations of Product Engineering',
    meta: '2 Weeks • Environment Setup & Advanced JS',
    bullets: [
      'Deep dive into Event Loops and Callbacks',
      'Architecting scalable folder structures',
      'Advanced Git workflows for product teams',
    ],
  },
  {
    number: '02',
    title: 'Modern Frontend Mastery',
    meta: '4 Weeks • Next.js & Server Components',
  },
];

const skills = [
  'React.js & Next.js 14',
  'Node.js & Express',
  'PostgreSQL & Prisma',
  'TypeScript Architecture',
  'Docker & CI/CD',
  'System Design',
  'GraphQL',
  'Redis Caching',
];

const overview = [
  { icon: Clock, title: 'Duration', body: '12 Weeks • 15h/week' },
  { icon: Laptop, title: 'Format', body: 'Hybrid Remote + Live Sessions' },
  { icon: Brain, title: 'Experience Level', body: 'Intermediate (Basic JS required)' },
  { icon: ShieldCheck, title: 'Outcome', body: 'Accredited Career Certification' },
];

const perks = [
  'Lifetime curriculum access',
  '3 months internship certificate',
  'Resume review session',
  'Job referral network access',
];

const MyInternships: React.FC = () => {
  const [openModule, setOpenModule] = useState<string | null>('01');

  return (
    <div className="mx-auto max-w-295">
      {/* Hero */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
              Professional Track
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold">
              Best Seller
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">
            Advanced Full-Stack Product Engineering
          </h1>
          <p className="text-base text-gray-500">
            A comprehensive 12-week internship and training program designed to transform aspiring
            developers into high-performance product engineers ready for tier-1 tech companies.
          </p>
        </div>

        <div className="hidden lg:block pb-1">
          <div className="flex -space-x-3 mb-3">
            {[13, 32, 51].map((id) => (
              <img
                key={id}
                alt="Mentor"
                src={`https://i.pravatar.cc/96?img=${id}`}
                className="w-11 h-11 rounded-full border-4 border-gray-50 object-cover"
              />
            ))}
            <div className="w-11 h-11 rounded-full border-4 border-gray-50 bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
              +12
            </div>
          </div>
          <p className="text-xs text-gray-500">Mentors from Google, Meta, and Netflix</p>
        </div>
      </div>

      {/* Bento grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left column */}
        <div className="md:col-span-8 space-y-6">
          {/* Program Overview */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Program Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {overview.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Skills You'll Master</h2>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 border border-gray-100 hover:border-blue-400/40 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 px-1">Program Curriculum</h2>
            {curriculum.map((mod) => {
              const isOpen = openModule === mod.number;
              return (
                <div key={mod.number} className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenModule(isOpen ? null : mod.number)}
                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-xl font-bold text-gray-300 group-hover:text-blue-600 transition-colors">
                        {mod.number}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">{mod.title}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{mod.meta}</p>
                      </div>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  {isOpen && mod.bullets && (
                    <div className="px-16 py-5 border-t border-gray-100 bg-gray-50/60">
                      <ul className="space-y-2.5 list-disc text-sm text-gray-600 pl-4">
                        {mod.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-4 space-y-6">
          {/* Pricing */}
          <div className="bg-blue-600 p-1 rounded-2xl">
            <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-5">
                ENROLLMENT OPEN
              </span>
              <div className="mb-5">
                <span className="text-sm text-gray-400 line-through mr-2">$1,299</span>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-gray-900">$899</span>
                  <span className="text-sm text-gray-500 ml-1">/total</span>
                </div>
              </div>
              <ul className="w-full space-y-3 mb-6 text-left">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-blue-600" />
                    <span className="text-sm text-gray-600">{perk}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all active:scale-95 mb-3">
                Enroll Now
              </button>
              <p className="text-xs text-gray-400">Money-back guarantee within 7 days</p>
            </div>
          </div>

          {/* Certificate preview */}
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden relative group">
            <img
              alt="Certificate preview"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&q=80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-5">
              <div className="text-white">
                <h4 className="text-sm font-semibold">Industry Recognized</h4>
                <p className="text-xs text-white/80">Verified Digital Badge included</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-3">Our graduates are currently working at:</p>
              <div className="flex gap-4 opacity-40 grayscale text-xs">
                <span className="font-bold">GOOGLE</span>
                <span className="font-bold">META</span>
                <span className="font-bold">AIRBNB</span>
              </div>
            </div>
          </div>

          {/* Mentor spotlight */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-900 mb-5">Mentor for this program</h4>
            <div className="flex items-center gap-3 mb-4">
              <img
                alt="Mentor Sarah"
                className="w-12 h-12 rounded-full object-cover"
                src="https://i.pravatar.cc/112?img=47"
              />
              <div>
                <h5 className="text-sm font-semibold text-gray-900">Sarah Mitchell</h5>
                <p className="text-xs text-gray-500">Staff Engineer @ Stripe</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic mb-5">
              "This curriculum focuses on the 20% of skills that deliver 80% of the value in a
              professional engineering environment."
            </p>
            <button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              View All Mentors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInternships;