import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineSearch,
  HiOutlineStar,
  HiOutlineUserGroup,
} from "react-icons/hi";

const mentors = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Senior Full Stack Developer",
    company: "Microsoft",
    experience: "8+ Years",
    rating: "4.9",
    students: "120+",
    expertise: ["React.js", "Node.js", "Next.js"],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Product Designer",
    company: "Adobe",
    experience: "7+ Years",
    rating: "4.8",
    students: "95+",
    expertise: ["UI/UX", "Figma", "Design Systems"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Software Engineer",
    company: "Google",
    experience: "9+ Years",
    rating: "5.0",
    students: "150+",
    expertise: ["JavaScript", "TypeScript", "System Design"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Sneha Singh",
    role: "Data Scientist",
    company: "Amazon",
    experience: "6+ Years",
    rating: "4.9",
    students: "80+",
    expertise: ["Python", "Machine Learning", "SQL"],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Backend Engineer",
    company: "Flipkart",
    experience: "7+ Years",
    rating: "4.9",
    students: "110+",
    expertise: ["Node.js", "MongoDB", "AWS"],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    role: "Frontend Engineer",
    company: "Meta",
    experience: "6+ Years",
    rating: "4.8",
    students: "100+",
    expertise: ["React", "Next.js", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  },
];

const categories = [
  "All",
  "Development",
  "Design",
  "Data Science",
  "Career",
];

const Mentor = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        mentor.name.toLowerCase().includes(searchValue) ||
        mentor.role.toLowerCase().includes(searchValue) ||
        mentor.company.toLowerCase().includes(searchValue) ||
        mentor.expertise.some((item) =>
          item.toLowerCase().includes(searchValue)
        );

      const matchesCategory =
        category === "All" ||
        (category === "Development" &&
          mentor.expertise.some((item) =>
            ["React.js", "Node.js", "Next.js", "JavaScript", "TypeScript", "System Design", "MongoDB", "AWS"].includes(item)
          )) ||
        (category === "Design" &&
          mentor.expertise.some((item) =>
            ["UI/UX", "Figma", "Design Systems"].includes(item)
          )) ||
        (category === "Data Science" &&
          mentor.expertise.some((item) =>
            ["Python", "Machine Learning", "SQL"].includes(item)
          ));

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-5 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <HiOutlineUserGroup className="mr-2 text-lg" />
              Learn from Industry Experts
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Meet Our{" "}
              <span className="text-blue-600">Expert Mentors</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Learn directly from experienced professionals who have worked
              with some of the world's leading companies and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

              <input
                type="text"
                placeholder="Search mentors, skills or companies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    category === item
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Mentors
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Find the right mentor for you
              </h2>
            </div>

            <p className="hidden text-sm text-slate-500 sm:block">
              {filteredMentors.length} mentors available
            </p>
          </div>

          {filteredMentors.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMentors.map((mentor, index) => (
                <motion.article
                  key={mentor.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                >
                  {/* Profile */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="h-20 w-20 rounded-2xl object-cover ring-4 ring-slate-50"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-lg font-bold text-slate-950">
                          {mentor.name}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-blue-600">
                          {mentor.role}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {mentor.company}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-3 divide-x divide-slate-100 rounded-xl bg-slate-50 py-3">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-sm font-bold text-slate-900">
                          <HiOutlineStar className="text-yellow-500" />
                          {mentor.rating}
                        </div>
                        <p className="mt-1 text-xs text-slate-500">Rating</p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-900">
                          {mentor.students}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Students
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-900">
                          {mentor.experience}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">Experience</p>
                      </div>
                    </div>

                    {/* Expertise */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      type="button"
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    >
                      View Profile
                      <HiOutlineArrowRight className="text-lg transition group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
              <HiOutlineSearch className="mx-auto text-4xl text-slate-300" />

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                No mentors found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try searching with a different name, skill or company.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <HiOutlineBriefcase className="mx-auto text-4xl text-blue-400" />

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Ready to accelerate your career?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Connect with experienced mentors, get personalized guidance and
            take your professional journey to the next level.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Find Your Mentor
            <HiOutlineArrowRight className="text-lg" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Mentor;