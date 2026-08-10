import { motion } from "motion/react";
import {
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";

// ========================================
// Types
// ========================================

interface ValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

// ========================================
// Values
// ========================================

const values: ValueItem[] = [
  {
    icon: HiOutlineAcademicCap,
    title: "Practical Learning",
    description:
      "We focus on practical skills, real-world projects, and hands-on development instead of only theoretical learning.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Expert Mentorship",
    description:
      "Learn from experienced professionals who provide guidance, feedback, and insights from the real industry.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Continuous Growth",
    description:
      "Technology keeps evolving, so our learning approach encourages continuous improvement and lifelong learning.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Career Focused",
    description:
      "Our programs are designed to help learners build confidence, strong portfolios, and industry-ready skills.",
  },
];

// ========================================
// Stats
// ========================================

const stats: StatItem[] = [
  {
    value: "500+",
    label: "Learners",
  },
  {
    value: "12+",
    label: "Career Programs",
  },
  {
    value: "25+",
    label: "Expert Mentors",
  },
  {
    value: "4.9/5",
    label: "Average Rating",
  },
];

// ========================================
// Component
// ========================================

const About = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ========================================
          HERO SECTION
      ========================================= */}

      <section className="relative overflow-hidden bg-slate-50">
        {/* Background Decorations */}

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
                <HiOutlineSparkles className="mr-2 text-lg" />

                About Us
              </span>

              {/* Heading */}

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Learn Today.
                <br />

                <span className="text-blue-600">
                  Build Tomorrow.
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                We are building a learning ecosystem where aspiring
                developers and technology professionals can learn modern
                skills, work on real-world projects, connect with experienced
                mentors, and prepare for successful careers.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore Programs

                  <HiOutlineArrowRight className="text-lg" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  Meet Our Mentors
                </button>
              </div>
            </motion.div>

            {/* Right Visual */}

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
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/40 sm:p-8">
                {/* Top Card */}

                <div className="rounded-2xl bg-slate-950 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-400">
                        Learning Ecosystem
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        Learn. Build. Grow.
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                      <HiOutlineAcademicCap className="text-2xl text-white" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    Everything you need to develop modern technical skills and
                    prepare for your professional journey.
                  </p>
                </div>

                {/* Learning Cards */}

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Learn",
                      text: "Modern Skills",
                    },
                    {
                      title: "Build",
                      text: "Real Projects",
                    },
                    {
                      title: "Mentor",
                      text: "Expert Guidance",
                    },
                    {
                      title: "Grow",
                      text: "Career Support",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.5 + index * 0.08,
                      }}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <p className="text-sm font-bold text-slate-950">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {item.text}
                      </p>
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
          OUR STORY
      ========================================= */}

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}

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
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Education should prepare you for the real world.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-500">
                The technology industry changes quickly. New frameworks,
                tools, and development practices appear constantly. We believe
                learning should evolve with the industry.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-500">
                That's why our approach combines structured curriculum,
                hands-on projects, expert mentorship, and career support. The
                goal is not simply to complete a course, but to develop the
                confidence and skills needed to build real products.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Industry-relevant curriculum",
                  "Hands-on project experience",
                  "Experienced mentors",
                  "Career-focused learning",
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

            {/* Visual */}

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
              className="rounded-3xl bg-slate-50 p-6 sm:p-8"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold text-blue-600">
                  Our Approach
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  More than just courses.
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  We focus on creating an environment where learners can
                  continuously learn, experiment, build, receive feedback, and
                  improve.
                </p>

                <div className="mt-7 space-y-5">
                  {[
                    {
                      number: "01",
                      title: "Learn",
                      text: "Understand the fundamentals.",
                    },
                    {
                      number: "02",
                      title: "Practice",
                      text: "Apply concepts through projects.",
                    },
                    {
                      number: "03",
                      title: "Get Feedback",
                      text: "Learn from mentors and peers.",
                    },
                    {
                      number: "04",
                      title: "Grow",
                      text: "Build confidence and career skills.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="flex gap-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                        {item.number}
                      </span>

                      <div>
                        <h4 className="text-sm font-bold text-slate-950">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          MISSION & VISION
      ========================================= */}

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission */}

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
                duration: 0.45,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <HiOutlineLightBulb className="text-2xl text-blue-600" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Mission
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Make quality technical learning accessible and practical.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Our mission is to help learners develop practical technology
                skills through structured education, real-world projects,
                experienced mentorship, and continuous career support.
              </p>
            </motion.div>

            {/* Vision */}

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
                duration: 0.45,
                delay: 0.1,
              }}
              className="rounded-3xl bg-slate-950 p-8 shadow-sm sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                <HiOutlineSparkles className="text-2xl text-white" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-400">
                Our Vision
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Create confident technology professionals.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                We envision a future where learners have the knowledge,
                practical experience, mentorship, and confidence to create
                meaningful products and build successful technology careers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          VALUES
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
              What We Believe
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built around the learner
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Everything we do is focused on helping learners develop
              meaningful skills and move confidently toward their goals.
            </p>
          </motion.div>

          {/* Value Cards */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
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
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-600">
                    <Icon className="text-2xl text-blue-600 transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Start building your future today.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Learn modern technologies, build real projects, connect with
              mentors, and take the next step toward your career goals.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Explore Programs

                <HiOutlineArrowRight className="text-lg" />
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-blue-400 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Meet Our Mentors
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;