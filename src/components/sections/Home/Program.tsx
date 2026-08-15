import PopularPrograms from "./PopularPrograms";
import CareerSteps from "./CareerSteps";
import type { StepItem } from "../../../types/Program";

interface ProgramItem {
  id: string;
  tag: string;
  slug: string;
  title: string;
  description: string;
  weeks: string;
  rating: string;
  reviews: string;
}


// ==============================
// Programs Data
// ==============================

const programs: ProgramItem[] = [
  {
    id: "68a1f5c9e123456789abcdef",
    tag: "MERN",
    title: "MERN Stack Development",
    slug: "mern-stack-development",
    description:
      "Learn MongoDB, Express.js, React.js, and Node.js to build modern full-stack web applications from scratch.",
    weeks: "12 Weeks",
    rating: "4.9",
    reviews: "1.8k",
  },
  {
    id: "68a1f5c9e123456789abcde0",
    tag: "Next.js",
    title: "Next.js Full Stack Development",
    slug: "nextjs-full-stack-development",
    description:
      "Master Next.js, React.js, Node.js, and MongoDB to build scalable, SEO-friendly full-stack applications.",
    weeks: "12 Weeks",
    rating: "4.9",
    reviews: "1.5k",
  },
  {
    id: "68a1f5c9e123456789abcde1",
    tag: "PERN",
    title: "PERN Stack Development",
    slug: "pern-stack-development",
    description:
      "Build enterprise-grade applications using PostgreSQL, Express.js, React.js, and Node.js.",
    weeks: "12 Weeks",
    rating: "4.8",
    reviews: "950",
  },
  {
    id: "68a1f5c9e123456789abcde2",
    tag: "PHP",
    title: "PHP Full Stack Development",
    slug: "php-full-stack-development",
    description:
      "Develop secure and scalable web applications using PHP, Laravel, and MySQL.",
    weeks: "12 Weeks",
    rating: "4.8",
    reviews: "1.1k",
  },
  {
    id: "68a1f5c9e123456789abcde3",
    tag: "Frontend",
    title: "Frontend Development with React.js",
    slug: "frontend-development-reactjs",
    description:
      "Learn HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS, and React.js to build responsive, interactive, and modern web applications.",
    weeks: "8 Weeks",
    rating: "4.9",
    reviews: "2.3k",
  },
  {
    id: "68a1f5c9e123456789abcde4",
    tag: "Frontend",
    title: "Advanced Frontend Development",
    slug: "advanced-frontend-development",
    description:
      "Master advanced JavaScript, TypeScript, Tailwind CSS, state management, API integration, performance optimization, and modern frontend architecture.",
    weeks: "8 Weeks",
    rating: "4.9",
    reviews: "1.8k",
  },
  {
    id: "68a1f5c9e123456789abcde5",
    tag: "Frontend",
    title: "Next.js Frontend Development",
    slug: "nextjs-frontend-development",
    description:
      "Build production-ready frontend applications using Next.js, React.js, TypeScript, App Router, Server Components, SEO, and performance optimization.",
    weeks: "8 Weeks",
    rating: "5.0",
    reviews: "1.6k",
  },
  {
    id: "68a1f5c9e123456789abcde6",
    tag: "Backend",
    title: "Backend Development with Node.js",
    slug: "backend-development-nodejs",
    description:
      "Master Node.js, Express.js, REST APIs, JWT Authentication, MongoDB, and scalable backend architecture for modern web applications.",
    weeks: "8 Weeks",
    rating: "4.9",
    reviews: "1.9k",
  },
  {
    id: "68a1f5c9e123456789abcde7",
    tag: "Backend",
    title: "Backend Development with PHP",
    slug: "backend-development-php",
    description:
      "Learn PHP, Laravel, MySQL, REST APIs, authentication, and MVC architecture to build secure and high-performance web applications.",
    weeks: "8 Weeks",
    rating: "4.8",
    reviews: "1.4k",
  },
  {
    id: "68a1f5c9e123456789abcde8",
    tag: "Python",
    title: "Python Full Stack Development",
    slug: "python-full-stack-development",
    description:
      "Master Python, Django/FastAPI, PostgreSQL, and MySQL to build robust full-stack web applications.",
    weeks: "12 Weeks",
    rating: "4.9",
    reviews: "1.4k",
  },
  {
    id: "68a1f5c9e123456789abcde9",
    tag: "Java",
    title: "Java Full Stack Development",
    slug: "java-full-stack-development",
    description:
      "Build enterprise applications using Java, Spring Boot, React.js, and modern development practices.",
    weeks: "12 Weeks",
    rating: "4.8",
    reviews: "980",
  },
  {
    id: "68a1f5c9e123456789abcdea",
    tag: "AI",
    title: "Artificial Intelligence & Generative AI",
    slug: "artificial-intelligence-generative-ai",
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
