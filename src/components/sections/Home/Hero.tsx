import { motion } from "motion/react";
import { HiArrowRight } from "react-icons/hi2";
import { HiSparkles } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f9ff]">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2"
          >
            <HiSparkles className="text-blue-600" />

            <span className="text-xs font-semibold text-blue-700">
              Transforming Careers through Practical Learning
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl"
          >
            Launch Your Career with
            <span className="block bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Industry-Oriented
            </span>
            Training and Internships
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600"
          >
            Bridge the gap between academia and industry. Master in-demand
            skills through project-based learning and secure your future with
            top-tier corporate internships.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="/"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-700"
            >
              Explore Programs
              <HiArrowRight className="text-lg" />
            </motion.a>

            <motion.a
              href="/register"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="rounded-xl border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm transition hover:border-blue-600"
            >
              Register Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
