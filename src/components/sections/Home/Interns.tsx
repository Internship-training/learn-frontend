import { motion } from "motion/react";

interface Mentor {
  name: string;
  role: string;
  initials: string;
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
}

const mentors: Mentor[] = [
  {
    name: "Sarah Chen",
    role: "Lead UI/UX Designer",
    initials: "SC",
  },
  {
    name: "David Miller",
    role: "Product Design Director",
    initials: "DM",
  },
  {
    name: "Marcus Thorne",
    role: "Senior Engineer",
    initials: "MT",
  },
  {
    name: "Aisha Kapoor",
    role: "Product Designer",
    initials: "AK",
  },
];

const testimonials: Testimonial[] = [
  {
    text: "The program was a game-changer. I went from having theoretical knowledge to shipping real products in less than 3 months. The mentorship was the icing on the cake.",
    name: "Emily Watson",
    role: "Product Designer",
    initials: "EW",
  },
  {
    text: "Coming from a non-tech background, I was nervous. But the mentors made it feel like I was already part of the team. Today I'm a Junior UX Designer at Meta.",
    name: "Jason Rivera",
    role: "Junior UX Designer",
    initials: "JR",
  },
  {
    text: "The curriculum is taught by people who actually work in the industry. I got the confidence to apply what I learned and secure my first job while graduating.",
    name: "Liam Parker",
    role: "Product Designer",
    initials: "LP",
  },
];

/* ========================================
   Animation Variants
======================================== */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

const Interns = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* =====================================================
          MENTORS SECTION
      ===================================================== */}

      <div className="bg-[#111827] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {/* Small Badge */}

            <motion.div
              variants={fadeUpVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-xs font-medium tracking-wide text-blue-300 sm:text-sm">
                Industry Expert Mentorship
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h2
              variants={fadeUpVariants}
              className="max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Learn from the{" "}
              <span className="text-blue-500">Best in the Industry</span>
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 lg:text-lg"
            >
              Our mentors don't just teach—they lead departments at some of
              the world's most innovative companies. Get practical insights,
              personalized guidance, and real-world knowledge that can
              accelerate your career.
            </motion.p>

            {/* Features */}

            <div className="mt-9 flex flex-col gap-6">
              {/* Feature 1 */}

              <motion.div
                variants={fadeUpVariants}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                    ✓
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white sm:text-lg">
                    Direct Industry Exposure
                  </h4>

                  <p className="mt-1.5 max-w-lg text-sm leading-6 text-gray-400">
                    Gain insights into real-world projects, workflows, and
                    industry practices from experienced professionals.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}

              <motion.div
                variants={fadeUpVariants}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 ring-1 ring-purple-500/20">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                    ✓
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white sm:text-lg">
                    Personalized Roadmaps
                  </h4>

                  <p className="mt-1.5 max-w-lg text-sm leading-6 text-gray-400">
                    Receive personalized feedback and actionable guidance
                    based on your career goals and skill gaps.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              MENTOR CARDS
          ================================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                variants={cardVariants}
                whileHover={{
                  y: index % 2 === 1 ? 2 : -6,
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4.5 p-5 shadow-xl shadow-black/10 backdrop-blur-sm ${
                  index === 1 || index === 3
                    ? "sm:translate-y-6"
                    : ""
                }`}
              >
                {/* Background Glow */}

                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20" />

                <div className="relative flex items-center gap-4">
                  {/* Avatar */}

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-400 via-indigo-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-blue-500/20 ring-2 ring-white/10">
                    {mentor.initials}
                  </div>

                  {/* Details */}

                  <div className="min-w-0">
                    <h4 className="truncate text-base font-semibold text-white sm:text-lg">
                      {mentor.name}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                      {mentor.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Line */}

                <div className="relative mt-5 h-px w-full bg-white/5">
                  <div className="h-px w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          TESTIMONIALS SECTION
      ===================================================== */}

      <div className="bg-[#f6f7fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
              Student Success Stories
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-[#242a37] sm:text-4xl">
              What Our Graduates Say
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
              Real experiences from students who transformed their skills and
              started building successful careers.
            </p>
          </motion.div>

          {/* Testimonials */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-7"
              >
                {/* Quote */}

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-2xl font-serif text-blue-500">
                  “
                </div>

                {/* Review */}

                <p className="flex-1 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                  {testimonial.text}
                </p>

                {/* Divider */}

                <div className="my-6 h-px w-full bg-gray-100" />

                {/* User */}

                <div className="flex items-center gap-4">
                  {/* Avatar */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white shadow-md">
                    {testimonial.initials}
                  </div>

                  {/* User Info */}

                  <div>
                    <h4 className="text-sm font-semibold text-[#263043] sm:text-base">
                      {testimonial.name}
                    </h4>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative Quote */}

                <span className="pointer-events-none absolute right-6 top-4 font-serif text-6xl leading-none text-gray-100 transition-colors duration-300 group-hover:text-blue-50">
                  ”
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interns;