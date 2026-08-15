import { useParams, Link } from "react-router-dom";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineCalendar,
} from "react-icons/hi";

const mentors = [
  {
    name: "Rahul Sharma",
    slug: "rahul-sharma",
    department: "Full Stack Development",
    role: "Senior Full Stack Developer",
    company: "Microsoft",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",

    bio: "Senior Full Stack Developer with 8+ years of experience building scalable web applications, APIs, and cloud-based systems.",

    experience: 8,
    rating: 4.9,
    students: 120,
    sessions: 350,

    expertise: [
      "React.js",
      "Node.js",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "AWS",
    ],

    experienceHistory: [
      {
        role: "Senior Full Stack Developer",
        company: "Microsoft",
        duration: "2021 - Present",
      },
      {
        role: "Full Stack Developer",
        company: "TCS",
        duration: "2018 - 2021",
      },
    ],

    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "Indian Institute of Technology",
        year: 2016,
      },
    ],

    mentorship: {
      available: true,
      sessionDuration: "60 Minutes",
      languages: ["English", "Hindi"],
      mode: ["Online"],
    },

    social: {
      linkedin: "https://linkedin.com/in/rahul-sharma",
      github: "https://github.com/rahul-sharma",
    },

    status: "active",
  },

  {
    name: "Priya Verma",
    slug: "priya-verma",
    department: "UI/UX Design",
    role: "Product Designer",
    company: "Adobe",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",

    bio: "Product Designer with 7+ years of experience designing intuitive digital products, scalable design systems, and user-focused experiences.",

    experience: 7,
    rating: 4.8,
    students: 95,
    sessions: 280,

    expertise: [
      "UI/UX",
      "Figma",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Product Design",
    ],

    experienceHistory: [
      {
        role: "Product Designer",
        company: "Adobe",
        duration: "2021 - Present",
      },
      {
        role: "UI/UX Designer",
        company: "Infosys",
        duration: "2019 - 2021",
      },
    ],

    education: [
      {
        degree: "B.Des in Product Design",
        institution: "National Institute of Design",
        year: 2019,
      },
    ],

    mentorship: {
      available: true,
      sessionDuration: "60 Minutes",
      languages: ["English", "Hindi"],
      mode: ["Online"],
    },

    social: {
      linkedin: "https://linkedin.com/in/priya-verma",
      behance: "https://behance.net/priya-verma",
    },

    status: "active",
  },

  {
    name: "Amit Kumar",
    slug: "amit-kumar",
    department: "Software Development",
    role: "Software Engineer",
    company: "Google",
    location: "Hyderabad, India",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",

    bio: "Software Engineer with 9+ years of experience in JavaScript, TypeScript, scalable application architecture, and system design.",

    experience: 9,
    rating: 5.0,
    students: 150,
    sessions: 420,

    expertise: [
      "JavaScript",
      "TypeScript",
      "System Design",
      "React.js",
      "Node.js",
      "Software Architecture",
    ],

    experienceHistory: [
      {
        role: "Software Engineer",
        company: "Google",
        duration: "2020 - Present",
      },
      {
        role: "Software Developer",
        company: "Wipro",
        duration: "2017 - 2020",
      },
    ],

    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "IIT Hyderabad",
        year: 2017,
      },
    ],

    mentorship: {
      available: true,
      sessionDuration: "60 Minutes",
      languages: ["English", "Hindi"],
      mode: ["Online"],
    },

    social: {
      linkedin: "https://linkedin.com/in/amit-kumar",
      github: "https://github.com/amit-kumar",
    },

    status: "active",
  },

  {
    name: "Sneha Singh",
    slug: "sneha-singh",
    department: "Data Science & AI",
    role: "Data Scientist",
    company: "Amazon",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",

    bio: "Data Scientist specializing in machine learning, data analytics, predictive modeling, and intelligent data-driven solutions.",

    experience: 6,
    rating: 4.9,
    students: 80,
    sessions: 220,

    expertise: [
      "Python",
      "Machine Learning",
      "SQL",
      "Data Science",
      "Pandas",
      "Scikit-learn",
    ],

    experienceHistory: [
      {
        role: "Data Scientist",
        company: "Amazon",
        duration: "2022 - Present",
      },
      {
        role: "Data Analyst",
        company: "Accenture",
        duration: "2020 - 2022",
      },
    ],

    education: [
      {
        degree: "M.Tech in Data Science",
        institution: "IIT Delhi",
        year: 2020,
      },
    ],

    mentorship: {
      available: true,
      sessionDuration: "60 Minutes",
      languages: ["English", "Hindi"],
      mode: ["Online"],
    },

    social: {
      linkedin: "https://linkedin.com/in/sneha-singh",
      github: "https://github.com/sneha-singh",
    },

    status: "active",
  },

  {
    name: "Arjun Mehta",
    slug: "arjun-mehta",
    department: "Backend Development",
    role: "Backend Engineer",
    company: "Flipkart",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",

    bio: "Backend Engineer with 7+ years of experience building secure, scalable APIs, databases, and cloud infrastructure.",

    experience: 7,
    rating: 4.9,
    students: 110,
    sessions: 310,

    expertise: [
      "Node.js",
      "MongoDB",
      "AWS",
      "REST API",
      "PostgreSQL",
      "Docker",
    ],

    experienceHistory: [
      {
        role: "Backend Engineer",
        company: "Flipkart",
        duration: "2021 - Present",
      },
      {
        role: "Node.js Developer",
        company: "Cognizant",
        duration: "2019 - 2021",
      },
    ],

    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "NIT Jaipur",
        year: 2019,
      },
    ],

    mentorship: {
      available: true,
      sessionDuration: "60 Minutes",
      languages: ["English", "Hindi"],
      mode: ["Online"],
    },

    social: {
      linkedin: "https://linkedin.com/in/arjun-mehta",
      github: "https://github.com/arjun-mehta",
    },

    status: "active",
  },

  {
    name: "Neha Kapoor",
    slug: "neha-kapoor",
    department: "Frontend Development",
    role: "Frontend Engineer",
    company: "Meta",
    location: "Gurgaon, India",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",

    bio: "Frontend Engineer with 6+ years of experience creating fast, accessible, and scalable web applications using modern frontend technologies.",

    experience: 6,
    rating: 4.8,
    students: 100,
    sessions: 290,

    expertise: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Frontend Architecture",
    ],

    experienceHistory: [
      {
        role: "Frontend Engineer",
        company: "Meta",
        duration: "2022 - Present",
      },
      {
        role: "Frontend Developer",
        company: "Zomato",
        duration: "2020 - 2022",
      },
    ],

    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "Delhi Technological University",
        year: 2020,
      },
    ],

    mentorship: {
      available: true,
      sessionDuration: "60 Minutes",
      languages: ["English", "Hindi"],
      mode: ["Online"],
    },

    social: {
      linkedin: "https://linkedin.com/in/neha-kapoor",
      github: "https://github.com/neha-kapoor",
    },

    status: "active",
  },
];

const MentorDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const mentor = mentors.find((item) => item.slug === slug);

  if (!mentor) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <HiOutlineUserGroup className="text-3xl" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-950">
            Mentor Not Found
          </h1>

          <p className="mt-3 leading-7 text-slate-500">
            The mentor profile you're looking for doesn't exist or may have been
            removed.
          </p>

          <Link
            to="/mentors"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <HiOutlineArrowLeft />
            Back to Mentors
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Link
        to="/mentors"
        className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
      >
        <HiOutlineArrowLeft className="text-lg transition-transform duration-200 group-hover:-translate-x-1" />
        <span>Back to Mentors</span>
      </Link>
      {/* ================================================================ */}
      {/* HERO */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden bg-slate-950">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.25),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-20 lg:pt-10">
          {/* Back */}
          <Link
            to="/mentors"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <HiOutlineArrowLeft />
            Back to mentors
          </Link>

          {/* Profile */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-center">
            {/* Image */}
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute -inset-2 rounded-4xl bg-blue-500/20 blur-xl" />

              <img
                src={mentor.image}
                alt={mentor.name}
                className="relative h-64 w-64 rounded-4xl object-cover shadow-2xl ring-1 ring-white/10 sm:h-72 sm:w-72"
              />

              {mentor.mentorship.available && (
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/90 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available for mentorship
                </div>
              )}
            </div>

            {/* Information */}
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 ring-1 ring-blue-400/20">
                  {mentor.department}
                </span>

                <span className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 ring-1 ring-white/10">
                  {mentor.role}
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {mentor.name}
              </h1>

              <p className="mt-4 text-lg font-medium text-blue-300 sm:text-xl">
                {mentor.role} at {mentor.company}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400 lg:justify-start">
                <span className="inline-flex items-center gap-2">
                  <HiOutlineBriefcase className="text-blue-400" />
                  {mentor.company}
                </span>

                <span className="inline-flex items-center gap-2">
                  <HiOutlineLocationMarker className="text-blue-400" />
                  {mentor.location}
                </span>
              </div>

              {/* Stats */}
              <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:grid-cols-4 lg:mx-0">
                <div className="border-b border-white/10 p-5 text-center sm:border-b-0 sm:border-r">
                  <div className="flex items-center justify-center gap-1.5 text-xl font-bold text-white">
                    <HiOutlineStar className="text-yellow-400" />
                    {mentor.rating}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">Rating</p>
                </div>

                <div className="border-b border-white/10 p-5 text-center sm:border-b-0 sm:border-r">
                  <p className="text-xl font-bold text-white">
                    {mentor.students}+
                  </p>
                  <p className="mt-1 text-xs text-slate-400">Students</p>
                </div>

                <div className="border-r border-white/10 p-5 text-center">
                  <p className="text-xl font-bold text-white">
                    {mentor.experience}+
                  </p>
                  <p className="mt-1 text-xs text-slate-400">Years</p>
                </div>

                <div className="p-5 text-center">
                  <p className="text-xl font-bold text-white">
                    {mentor.sessions}+
                  </p>
                  <p className="mt-1 text-xs text-slate-400">Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CONTENT */}
      {/* ================================================================ */}

      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          {/* ============================================================ */}
          {/* LEFT CONTENT */}
          {/* ============================================================ */}

          <div className="space-y-8">
            {/* About */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                About mentor
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Learn from real industry experience
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {mentor.bio}
              </p>
            </section>

            {/* Expertise */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Expertise
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    Skills & technologies
                  </h2>
                </div>

                <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 sm:block">
                  {mentor.expertise.length} skills
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {mentor.expertise.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3.5 transition hover:border-blue-100 hover:bg-blue-50/50"
                  >
                    <HiOutlineCheckCircle className="shrink-0 text-lg text-blue-600" />

                    <span className="text-sm font-semibold text-slate-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Career journey
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Professional experience
              </h2>

              <div className="mt-8">
                {mentor.experienceHistory.map((item, index) => (
                  <div
                    key={`${item.company}-${index}`}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {index !== mentor.experienceHistory.length - 1 && (
                      <div className="absolute left-5 top-12 h-[calc(100%-28px)] w-px bg-slate-200" />
                    )}

                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-8 ring-white">
                      <HiOutlineBriefcase className="text-lg" />
                    </div>

                    <div className="flex-1 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <div>
                          <h3 className="font-bold text-slate-950">
                            {item.role}
                          </h3>

                          <p className="mt-1 text-sm font-semibold text-blue-600">
                            {item.company}
                          </p>
                        </div>

                        <span className="h-fit rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Education
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Academic background
              </h2>

              <div className="mt-6 grid gap-4">
                {mentor.education.map((item, index) => (
                  <div
                    key={`${item.institution}-${index}`}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <HiOutlineAcademicCap className="text-xl" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-blue-600">
                        {item.institution}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Graduated {item.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ============================================================ */}
          {/* SIDEBAR */}
          {/* ============================================================ */}

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
              {/* Booking Header */}
              <div className="bg-slate-950 p-7 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
                    1-on-1 mentorship
                  </span>

                  {mentor.mentorship.available && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Available
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                  Book a session with {mentor.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Get personalized guidance based on your goals, skills and
                  career path.
                </p>
              </div>

              {/* Session Details */}
              <div className="p-7">
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3.5">
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <HiOutlineCalendar />
                      Duration
                    </span>

                    <span className="text-sm font-bold text-slate-900">
                      {mentor.mentorship.sessionDuration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3.5">
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <HiOutlineGlobeAlt />
                      Mode
                    </span>

                    <span className="text-sm font-bold text-slate-900">
                      {mentor.mentorship.mode.join(", ")}
                    </span>
                  </div>

                  <div className="flex items-start justify-between rounded-xl bg-slate-50 px-4 py-3.5">
                    <span className="text-sm text-slate-500">Languages</span>

                    <span className="max-w-42.5 text-right text-sm font-bold text-slate-900">
                      {mentor.mentorship.languages.join(", ")}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!mentor.mentorship.available}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                >
                  Book a Session
                  <HiOutlineArrowRight className="text-lg" />
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                  Connect directly with an experienced professional.
                </p>
              </div>
            </div>

            {/* Social */}
            {mentor.social && (
              <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-950">
                  Connect with {mentor.name}
                </h3>

                <div className="mt-4 grid gap-2">
                  {Object.entries(mentor.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm font-semibold capitalize text-slate-600 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {platform}

                      <HiOutlineArrowRight />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Card */}
            <div className="mt-5 rounded-3xl bg-blue-600 p-6 text-white">
              <h3 className="text-lg font-bold">What you can learn</h3>

              <div className="mt-5 space-y-3">
                {mentor.expertise.slice(0, 5).map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-sm text-blue-50"
                  >
                    <HiOutlineCheckCircle className="shrink-0 text-blue-200" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default MentorDetails;
