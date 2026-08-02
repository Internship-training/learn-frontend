import PopularPrograms from "./PopularPrograms";
import CareerSteps from "./CareerSteps";
import type { ProgramItem, StepItem } from "../../../types/Program";

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

const steps: StepItem[] = [
  {
    number: "01",
    title: "Enroll",
    description:
      "Register for your preferred course and complete the enrollment process.",
    color: "bg-blue-700",
  },
  {
    number: "02",
    title: "Train",
    description:
      "Learn through live sessions, hands-on projects, coding assignments, and mentor guidance.",
    color: "bg-violet-600",
  },
  {
    number: "03",
    title: "Intern",
    description:
      "Gain real-world experience by working on live projects during the internship.",
    color: "bg-amber-600",
  },
  {
    number: "04",
    title: "Certification",
    description:
      "Receive your Training Cum Internship Completion Certificate after successfully finishing the program.",
    color: "bg-emerald-600",
  },
];

const Program = () => {
  return (
    <div className="bg-white">
      <PopularPrograms programs={programs} />
      <CareerSteps steps={steps} />
    </div>
  );
};

export default Program;
