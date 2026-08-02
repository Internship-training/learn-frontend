import type { FC } from "react";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineCheckBadge,
  HiOutlineUserGroup,
  HiOutlineSparkles,
} from "react-icons/hi2";

interface Feature {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

const companies: string[] = [
  "TECHFLOW",
  "DATASTREAM",
  "NEXUS AI",
  "CORE LOGISTICS",
  "BRIGHTPATH",
];

const features: Feature[] = [
  {
    title: "Expert Mentors",
    description:
      "Weekly 1-on-1 sessions with senior professionals from top tech companies.",
    icon: HiOutlineUserGroup,
    color: "text-blue-600",
  },
  {
    title: "Verified Certificates",
    description:
      "Global recognition for your skills with blockchain-verified credentials.",
    icon: HiOutlineCheckBadge,
    color: "text-violet-600",
  },
  {
    title: "Career Coaching",
    description:
      "Resume building, interview preparation, and salary negotiation workshops.",
    icon: HiOutlineLightBulb,
    color: "text-amber-600",
  },
];

const WhyChoose: FC = () => {
  return (
    <section className="bg-[#f8f9ff] py-12 sm:py-16 lg:py-20">
      {/* ========================= */}
      {/* Hiring Partners */}
      {/* ========================= */}

      <div className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            Our Graduates Are Hired By Global Leaders
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:mt-8 sm:gap-10 md:gap-16">
            {companies.map((company) => (
              <motion.h3
                key={company}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                className="cursor-pointer text-base font-bold tracking-wide text-gray-400 transition hover:text-blue-600 sm:text-lg"
              >
                {company}
              </motion.h3>
            ))}
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* Heading */}
      {/* ========================= */}

      <div className="mx-auto mt-12 max-w-3xl px-4 text-center sm:mt-16 sm:px-6 lg:mt-20">
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
            Arinovaa?
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
          }}
          className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 leading-6 sm:mt-5 sm:text-base sm:leading-7"
        >
          We provide the perfect ecosystem to accelerate your professional
          growth through mentorship, practical tools, project-based learning,
          and direct industry connections.
        </motion.p>
      </div>

      {/* ========================= */}
      {/* Cards Grid */}
      {/* ========================= */}

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 px-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:mt-16 lg:grid-cols-5">
        {/* ========================= */}
        {/* Left Large Card */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          whileHover={{
            y: -6,
          }}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-xl sm:col-span-2 sm:p-8 lg:col-span-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <HiOutlineAcademicCap className="text-2xl" />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-gray-900 sm:mt-6 sm:text-3xl">
            Real-World Case Studies
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
            Learn by doing. Our curriculum is built around actual industry
            projects from our corporate partners, ensuring you're job-ready from
            day one.
          </p>

          {/* Mini Cards */}

          <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
            {[
              {
                title: "Projects",
                icon: "💻",
                bg: "bg-blue-50",
              },
              {
                title: "Analytics",
                icon: "📊",
                bg: "bg-violet-50",
              },
              {
                title: "Tools",
                icon: "🛠️",
                bg: "bg-orange-50",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -6,
                  scale: 1.04,
                }}
                className={`${item.bg} flex aspect-square items-center justify-center rounded-2xl border border-gray-100`}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-3xl">{item.icon}</div>

                  <p className="mt-1.5 text-xs font-semibold text-gray-700 sm:mt-3 sm:text-sm">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ========================= */}
        {/* Internship Card */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          whileHover={{
            y: -6,
          }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 p-6 text-white shadow-xl sm:col-span-2 sm:p-8 lg:col-span-2"
        >
          {/* Glow */}

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <HiOutlineSparkles className="text-2xl" />
            </div>

            <h3 className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl">
              Guaranteed Internships
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/85 sm:mt-4 sm:text-base sm:leading-7">
              Successful graduates are fast-tracked into exclusive internship
              programs directly provided by Arinovaa's industry partners.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-6 w-full rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-violet-700 transition hover:bg-gray-100 sm:mt-10 sm:w-auto sm:py-3 sm:text-base"
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* Bottom Feature Cards */}
        {/* ========================= */}

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.2,
                },
              }}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-100 hover:shadow-xl sm:p-6 lg:col-span-1"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-50 sm:h-12 sm:w-12 ${feature.color}`}
              >
                <Icon className="text-xl sm:text-2xl" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:mt-6 sm:text-xl">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChoose;
