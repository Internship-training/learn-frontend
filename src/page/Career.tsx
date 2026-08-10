import { motion } from "motion/react";
import {
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineLightningBolt,
  HiOutlineSearch,
  HiOutlineUserGroup,
  HiOutlineVideoCamera,
} from "react-icons/hi";

// ========================================
// Types
// ========================================

interface SupportItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CareerStep {
  number: string;
  title: string;
  description: string;
}

// ========================================
// Career Support Data
// ========================================

const supportItems: SupportItem[] = [
  {
    icon: HiOutlineDocumentText,
    title: "Resume & Portfolio",
    description:
      "Build a professional, recruiter-friendly resume and a strong portfolio that highlights your skills and real-world projects.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Personalized Mentorship",
    description:
      "Get one-on-one career guidance from experienced mentors who can help you make better career decisions.",
  },
  {
    icon: HiOutlineVideoCamera,
    title: "Mock Interviews",
    description:
      "Practice technical and HR interviews with realistic mock interview sessions and detailed feedback.",
  },
  {
    icon: HiOutlineSearch,
    title: "Job Search Support",
    description:
      "Learn how to find relevant opportunities, optimize your applications, and approach the right companies.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Interview Preparation",
    description:
      "Prepare for coding rounds, technical discussions, system design, HR rounds, and behavioral interviews.",
  },
  {
    icon: HiOutlineBriefcase,
    title: "Placement Assistance",
    description:
      "Get guidance throughout your job search journey, from applications and interviews to offer evaluation.",
  },
];

const careerSteps: CareerStep[] = [
  {
    number: "01",
    title: "Build Your Profile",
    description:
      "Create a strong resume, portfolio, GitHub profile, and LinkedIn presence that showcases your capabilities.",
  },
  {
    number: "02",
    title: "Prepare for Interviews",
    description:
      "Practice technical concepts, coding problems, projects, system design, and common HR questions.",
  },
  {
    number: "03",
    title: "Apply Strategically",
    description:
      "Discover suitable opportunities and learn how to tailor your applications for different roles.",
  },
  {
    number: "04",
    title: "Crack the Interview",
    description:
      "Use mock interviews, mentor feedback, and structured preparation to confidently handle interviews.",
  },
];

// ========================================
// Stats
// ========================================

const stats = [
  {
    value: "500+",
    label: "Students Supported",
  },
  {
    value: "90%",
    label: "Interview Readiness",
  },
  {
    value: "100+",
    label: "Hiring Partners",
  },
  {
    value: "4.9/5",
    label: "Student Rating",
  },
];

// ========================================
// Component
// ========================================

const Career = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ========================================
          HERO SECTION
      ========================================= */}

      <section className="relative overflow-hidden bg-slate-50">
        {/* Background Decoration */}

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left Content */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {/* Badge */}

              <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                <HiOutlineBriefcase className="mr-2 text-lg" />

                Career Support
              </span>

              {/* Heading */}

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Don't Just Learn.
                <br />

                <span className="text-blue-600">
                  Build Your Career.
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Learning technology is only the beginning. Our career support
                helps you turn your skills into real opportunities through
                mentorship, interview preparation, resume building, and job
                search guidance.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Get Career Support

                  <HiOutlineArrowRight className="text-lg" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  Explore Programs
                </button>
              </div>
            </motion.div>

            {/* Right Career Card */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/40 sm:p-8">
                {/* Card Header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">
                      Your Career Journey
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-950">
                      From Skills to Success
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <HiOutlineBriefcase className="text-2xl text-blue-600" />
                  </div>
                </div>

                {/* Progress */}

                <div className="mt-7">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-600">
                      Career Readiness
                    </span>

                    <span className="font-bold text-blue-600">
                      85%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                      }}
                      className="h-full rounded-full bg-blue-600"
                    />
                  </div>
                </div>

                {/* Checklist */}

                <div className="mt-7 space-y-4">
                  {[
                    "Resume optimized",
                    "Portfolio completed",
                    "Interview preparation",
                    "Mock interview completed",
                    "Job search strategy",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + index * 0.1,
                      }}
                      className="flex items-center gap-3"
                    >
                      <HiOutlineCheckCircle className="shrink-0 text-xl text-blue-600" />

                      <span className="text-sm text-slate-600">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          STATS
      ========================================= */}

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-100 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="px-4 py-8 text-center sm:py-10"
            >
              <p className="text-2xl font-bold text-slate-950 sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================
          SUPPORT SERVICES
      ========================================= */}

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How We Help
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need to move forward
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Get practical career support at every stage of your journey,
              from building your profile to preparing for your next interview.
            </p>
          </motion.div>

          {/* Cards */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                >
                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-600">
                    <Icon className="text-2xl text-blue-600 transition group-hover:text-white" />
                  </div>

                  {/* Content */}

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  {/* Link */}

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                  >
                    Learn More

                    <HiOutlineArrowRight className="transition group-hover:translate-x-1" />
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          CAREER JOURNEY
      ========================================= */}

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Career Roadmap
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Your path from learner to professional
            </h2>

            <p className="mt-4 text-slate-500">
              Follow a structured career journey designed to help you become
              confident, prepared, and ready for real opportunities.
            </p>
          </div>

          {/* Steps */}

          <div className="relative mt-14">
            {/* Connecting Line */}

            <div className="absolute left-6 top-6 hidden h-[calc(100%-48px)] w-px bg-blue-100 md:block" />

            <div className="space-y-8">
              {careerSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="relative flex gap-5 md:gap-8"
                >
                  {/* Number */}

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 text-sm font-bold text-white">
                    {step.number}
                  </div>

                  {/* Content */}

                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          WHY CAREER SUPPORT
      ========================================= */}

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Why Career Support?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Your skills deserve the right opportunity.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-500">
                Knowing how to code is important, but building a successful
                career requires more than technical knowledge. We help you
                present your skills, communicate your experience, and approach
                the job market with confidence.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Industry-focused career guidance",
                  "Practical interview preparation",
                  "Resume and portfolio improvement",
                  "Personalized mentor feedback",
                  "Structured job search strategy",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <HiOutlineCheckCircle className="shrink-0 text-xl text-blue-600" />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="rounded-3xl bg-slate-950 p-8 sm:p-10"
            >
              <p className="text-sm font-semibold text-blue-400">
                Career Advantage
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Turn your learning into a professional profile.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Work on projects, improve your communication, prepare for
                interviews, and develop the confidence required to take your
                next career step.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Real Projects",
                  "Expert Mentors",
                  "Mock Interviews",
                  "Career Guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                  >
                    <HiOutlineCheckCircle className="text-xl text-blue-400" />

                    <p className="mt-2 text-sm font-semibold text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ========================================= */}

      <section className="bg-blue-600 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <HiOutlineBriefcase className="mx-auto text-4xl text-blue-200" />

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Ready to take the next step?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Start building the skills, confidence, and professional profile
              you need to move closer to your career goals.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
            >
              Start Your Career Journey

              <HiOutlineArrowRight className="text-lg" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Career;