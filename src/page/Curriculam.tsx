import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineSearch,
  HiOutlineStar,
} from "react-icons/hi";

// ==============================
// Types
// ==============================

interface ProgramItem {
  tag: string;
  title: string;
  description: string;
  weeks: string;
  rating: string;
  reviews: string;
}

type Category =
  | "All"
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "Python"
  | "Java"
  | "AI";

// ==============================
// Programs Data
// ==============================

const programs: ProgramItem[] = [
  {
    tag: "MERN",
    title: "MERN Stack Development",
    description:
      "Learn MongoDB, Express.js, React.js, and Node.js to build modern full-stack web applications from scratch.",
    weeks: "12 Weeks",
    rating: "4.9",
    reviews: "1.8k",
  },
  {
    tag: "Next.js",
    title: "Next.js Full Stack Development",
    description:
      "Master Next.js, React.js, Node.js, and MongoDB to build scalable, SEO-friendly full-stack applications.",
    weeks: "12 Weeks",
    rating: "4.9",
    reviews: "1.5k",
  },
  {
    tag: "PERN",
    title: "PERN Stack Development",
    description:
      "Build enterprise-grade applications using PostgreSQL, Express.js, React.js, and Node.js.",
    weeks: "12 Weeks",
    rating: "4.8",
    reviews: "950",
  },
  {
    tag: "PHP",
    title: "PHP Full Stack Development",
    description:
      "Develop secure and scalable web applications using PHP, Laravel, and MySQL.",
    weeks: "12 Weeks",
    rating: "4.8",
    reviews: "1.1k",
  },
  {
    tag: "Frontend",
    title: "Frontend Development with React.js",
    description:
      "Learn HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS, and React.js to build responsive, interactive, and modern web applications.",
    weeks: "8 Weeks",
    rating: "4.9",
    reviews: "2.3k",
  },
  {
    tag: "Frontend",
    title: "Advanced Frontend Development",
    description:
      "Master advanced JavaScript, TypeScript, Tailwind CSS, state management, API integration, performance optimization, and modern frontend architecture.",
    weeks: "8 Weeks",
    rating: "4.9",
    reviews: "1.8k",
  },
  {
    tag: "Frontend",
    title: "Next.js Frontend Development",
    description:
      "Build production-ready frontend applications using Next.js, React.js, TypeScript, App Router, Server Components, SEO, and performance optimization.",
    weeks: "8 Weeks",
    rating: "5.0",
    reviews: "1.6k",
  },
  {
    tag: "Backend",
    title: "Backend Development with Node.js",
    description:
      "Master Node.js, Express.js, REST APIs, JWT Authentication, MongoDB, and scalable backend architecture for modern web applications.",
    weeks: "8 Weeks",
    rating: "4.9",
    reviews: "1.9k",
  },
  {
    tag: "Backend",
    title: "Backend Development with PHP",
    description:
      "Learn PHP, Laravel, MySQL, REST APIs, authentication, and MVC architecture to build secure and high-performance web applications.",
    weeks: "8 Weeks",
    rating: "4.8",
    reviews: "1.4k",
  },
  {
    tag: "Python",
    title: "Python Full Stack Development",
    description:
      "Master Python, Django/FastAPI, PostgreSQL, and MySQL to build robust full-stack web applications.",
    weeks: "12 Weeks",
    rating: "4.9",
    reviews: "1.4k",
  },
  {
    tag: "Java",
    title: "Java Full Stack Development",
    description:
      "Build enterprise applications using Java, Spring Boot, React.js, and modern development practices.",
    weeks: "12 Weeks",
    rating: "4.8",
    reviews: "980",
  },
  {
    tag: "AI",
    title: "Artificial Intelligence & Generative AI",
    description:
      "Learn Python, OpenAI, Gemini, prompt engineering, and AI-powered application development with real-world projects.",
    weeks: "12 Weeks",
    rating: "5.0",
    reviews: "760",
  },
];

// ==============================
// Categories
// ==============================

const categories: Category[] = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Python",
  "Java",
  "AI",
];

// ==============================
// Helper
// ==============================

const getCategory = (tag: string): Category => {
  if (["MERN", "Next.js", "PERN", "PHP"].includes(tag)) {
    return "Full Stack";
  }

  if (tag === "Frontend") {
    return "Frontend";
  }

  if (tag === "Backend") {
    return "Backend";
  }

  if (tag === "Python") {
    return "Python";
  }

  if (tag === "Java") {
    return "Java";
  }

  if (tag === "AI") {
    return "AI";
  }

  return "All";
};

// ==============================
// Component
// ==============================

const Curriculum = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [search, setSearch] = useState<string>("");

  // ==============================
  // Filter Programs
  // ==============================

  const filteredPrograms = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return programs.filter((program) => {
      const matchesCategory =
        activeCategory === "All" ||
        getCategory(program.tag) === activeCategory;

      const matchesSearch =
        searchText === "" ||
        program.title.toLowerCase().includes(searchText) ||
        program.description.toLowerCase().includes(searchText) ||
        program.tag.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  // ==============================
  // Reset Filters
  // ==============================

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =========================================
          HERO SECTION
      ========================================== */}

      <section className="relative overflow-hidden bg-slate-50">
        {/* Background Decoration */}

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Badge */}

            <span className="mb-5 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <HiOutlineBookOpen className="mr-2 text-lg" />

              Industry-Ready Curriculum
            </span>

            {/* Heading */}

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Learn Skills That{" "}
              <span className="text-blue-600">
                Build Careers
              </span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore our carefully designed curriculum and
              learn modern technologies through practical
              projects, expert mentorship, and real-world
              development practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SEARCH & FILTER
      ========================================== */}

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}

            <div className="relative w-full lg:max-w-md">
              <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search programs or technologies..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Categories */}

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PROGRAMS SECTION
      ========================================== */}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}

          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Programs
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Choose your learning path
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                From frontend development to AI, choose a
                curriculum designed to take you from
                fundamentals to production-ready skills.
              </p>
            </div>

            {/* Program Count */}

            <p className="text-sm text-slate-500">
              {filteredPrograms.length} programs available
            </p>
          </div>

          {/* =====================================
              PROGRAM CARDS
          ====================================== */}

          {filteredPrograms.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredPrograms.map(
                (program, index) => (
                  <motion.article
                    key={program.title}
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
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                  >
                    {/* Top */}

                    <div className="flex items-center justify-between">
                      {/* Tag */}

                      <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                        {program.tag}
                      </span>

                      {/* Rating */}

                      <div className="flex items-center gap-1 text-sm font-semibold text-slate-700">
                        <HiOutlineStar className="text-yellow-500" />

                        {program.rating}
                      </div>
                    </div>

                    {/* Content */}

                    <div className="mt-5 flex-1">
                      <h3 className="text-xl font-bold leading-7 text-slate-950 transition group-hover:text-blue-600">
                        {program.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {program.description}
                      </p>
                    </div>

                    {/* Course Info */}

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <HiOutlineClock className="text-lg text-blue-600" />

                        <span>{program.weeks}</span>
                      </div>

                      <span className="text-xs text-slate-400">
                        {program.reviews} reviews
                      </span>
                    </div>

                    {/* CTA */}

                    <button
                      type="button"
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    >
                      Explore Curriculum

                      <HiOutlineArrowRight className="text-lg transition group-hover:translate-x-1" />
                    </button>
                  </motion.article>
                )
              )}
            </div>
          ) : (
            /* =====================================
               EMPTY STATE
            ====================================== */

            <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
              <HiOutlineSearch className="mx-auto text-4xl text-slate-300" />

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                No programs found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for another technology or
                program.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View All Programs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          LEARNING JOURNEY
      ========================================== */}

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}

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
              Learning Journey
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
              From learning to building
            </h2>

            <p className="mt-4 text-slate-500">
              Our curriculum is designed around practical
              learning and real-world development.
            </p>
          </motion.div>

          {/* Steps */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Learn",
                text: "Understand the fundamentals and master modern technologies with structured lessons.",
              },
              {
                number: "02",
                title: "Build",
                text: "Apply your knowledge by building practical projects based on real-world requirements.",
              },
              {
                number: "03",
                title: "Launch",
                text: "Prepare for real development jobs with mentorship, portfolio projects, and career guidance.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
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
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="text-4xl font-bold text-blue-100">
                  {item.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA SECTION
      ========================================== */}

      <section className="bg-slate-950 py-16 lg:py-20">
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
              Ready to start your learning journey?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Choose a program, learn from industry experts,
              build real-world projects, and become
              job-ready.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Programs

              <HiOutlineArrowRight className="text-lg" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Curriculum;