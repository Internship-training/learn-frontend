import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock3,
  GraduationCap,
  ShieldCheck,
  Star,
  Users,
  Video,
} from "lucide-react";

interface CurriculumItem {
  title: string;
  description: string;
  order: number;
  type: "live";
}

interface ProgramItem {
  id: string;
  tag: string;
  slug: string;
  title: string;
  description: string;
  weeks: string;
  rating: string;
  reviews: string;
  price: number;
  originalPrice: number;
  curriculum: CurriculumItem[];
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
    price: 14999,
    originalPrice: 24999,

    curriculum: [
      {
        order: 1,
        title: "Web Development Fundamentals",
        description:
          "Learn HTML5, CSS3, responsive design, Git, GitHub, and modern web development fundamentals.",
        type: "live",
      },
      {
        order: 2,
        title: "JavaScript & TypeScript",
        description:
          "Master modern JavaScript, ES6+, asynchronous programming, TypeScript, and clean coding practices.",
        type: "live",
      },
      {
        order: 3,
        title: "React.js Development",
        description:
          "Build modern user interfaces using React.js, components, hooks, routing, forms, and state management.",
        type: "live",
      },
      {
        order: 4,
        title: "Node.js & Express.js",
        description:
          "Learn backend development, REST APIs, middleware, error handling, and scalable server architecture.",
        type: "live",
      },
      {
        order: 5,
        title: "MongoDB & Mongoose",
        description:
          "Work with MongoDB, database design, schemas, queries, indexes, and Mongoose ODM.",
        type: "live",
      },
      {
        order: 6,
        title: "Authentication & Authorization",
        description:
          "Implement JWT authentication, refresh tokens, role-based access control, and protected routes.",
        type: "live",
      },
      {
        order: 7,
        title: "Full Stack Integration",
        description:
          "Connect React frontend with Node.js backend and MongoDB to build complete full-stack applications.",
        type: "live",
      },
      {
        order: 8,
        title: "Real-World MERN Project",
        description:
          "Build, test, and deploy a complete production-ready MERN stack application.",
        type: "live",
      },
    ],
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
    price: 15999,
    originalPrice: 26999,

    curriculum: [
      {
        order: 1,
        title: "React.js Fundamentals",
        description:
          "Build a strong foundation in React components, props, state, hooks, forms, and application architecture.",
        type: "live",
      },
      {
        order: 2,
        title: "Next.js Fundamentals",
        description:
          "Understand Next.js architecture, routing, layouts, pages, loading states, and error handling.",
        type: "live",
      },
      {
        order: 3,
        title: "App Router & Server Components",
        description:
          "Master App Router, Server Components, Client Components, nested layouts, and modern rendering patterns.",
        type: "live",
      },
      {
        order: 4,
        title: "Server Actions & API Integration",
        description:
          "Build server-side functionality and integrate external and internal APIs with Next.js.",
        type: "live",
      },
      {
        order: 5,
        title: "Authentication & Authorization",
        description:
          "Implement secure authentication, sessions, protected routes, and role-based authorization.",
        type: "live",
      },
      {
        order: 6,
        title: "Database Integration",
        description:
          "Connect Next.js applications with MongoDB and implement scalable database operations.",
        type: "live",
      },
      {
        order: 7,
        title: "SEO & Performance Optimization",
        description:
          "Learn metadata, SEO, caching, image optimization, performance, and production best practices.",
        type: "live",
      },
      {
        order: 8,
        title: "Production Full Stack Project",
        description:
          "Build and deploy a complete production-ready Next.js full-stack application.",
        type: "live",
      },
    ],
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
    price: 14999,
    originalPrice: 24999,

    curriculum: [
      {
        order: 1,
        title: "Web Development Fundamentals",
        description:
          "Learn modern HTML, CSS, JavaScript, Git, GitHub, and professional development workflows.",
        type: "live",
      },
      {
        order: 2,
        title: "Advanced JavaScript & TypeScript",
        description:
          "Master modern JavaScript, asynchronous programming, TypeScript, and scalable code patterns.",
        type: "live",
      },
      {
        order: 3,
        title: "React.js Development",
        description:
          "Build interactive frontend applications using React.js, hooks, routing, and state management.",
        type: "live",
      },
      {
        order: 4,
        title: "Node.js & Express.js",
        description:
          "Build scalable backend applications and REST APIs using Node.js and Express.js.",
        type: "live",
      },
      {
        order: 5,
        title: "PostgreSQL Database",
        description:
          "Learn relational database design, SQL, joins, indexes, constraints, and PostgreSQL.",
        type: "live",
      },
      {
        order: 6,
        title: "Authentication & Security",
        description:
          "Implement authentication, authorization, JWT, security practices, and protected resources.",
        type: "live",
      },
      {
        order: 7,
        title: "Full Stack Application",
        description:
          "Integrate React, Express, Node.js, and PostgreSQL into a complete full-stack application.",
        type: "live",
      },
      {
        order: 8,
        title: "Enterprise Project",
        description:
          "Build and deploy an enterprise-grade PERN stack application.",
        type: "live",
      },
    ],
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
    price: 12999,
    originalPrice: 21999,

    curriculum: [
      {
        order: 1,
        title: "PHP Fundamentals",
        description:
          "Learn PHP syntax, variables, functions, arrays, forms, sessions, and file handling.",
        type: "live",
      },
      {
        order: 2,
        title: "Object-Oriented PHP",
        description:
          "Master classes, objects, inheritance, interfaces, traits, and modern PHP architecture.",
        type: "live",
      },
      {
        order: 3,
        title: "MySQL Database",
        description:
          "Learn relational database design, SQL queries, relationships, indexes, and optimization.",
        type: "live",
      },
      {
        order: 4,
        title: "Laravel Fundamentals",
        description:
          "Learn Laravel routing, controllers, models, migrations, validation, and application structure.",
        type: "live",
      },
      {
        order: 5,
        title: "Laravel REST APIs",
        description: "Build secure and scalable REST APIs using Laravel.",
        type: "live",
      },
      {
        order: 6,
        title: "Authentication & Authorization",
        description:
          "Implement secure authentication, authorization, roles, permissions, and protected resources.",
        type: "live",
      },
      {
        order: 7,
        title: "Frontend Integration",
        description: "Connect Laravel APIs with modern frontend applications.",
        type: "live",
      },
      {
        order: 8,
        title: "Real-World Laravel Project",
        description:
          "Build and deploy a complete secure PHP Laravel application.",
        type: "live",
      },
    ],
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
    price: 9999,
    originalPrice: 17999,

    curriculum: [
      {
        order: 1,
        title: "HTML5 & Web Fundamentals",
        description:
          "Learn semantic HTML, accessibility, forms, tables, and modern web standards.",
        type: "live",
      },
      {
        order: 2,
        title: "CSS3 & Responsive Design",
        description:
          "Master Flexbox, Grid, responsive layouts, animations, and modern CSS.",
        type: "live",
      },
      {
        order: 3,
        title: "JavaScript Essentials",
        description:
          "Learn modern JavaScript, DOM, events, arrays, objects, promises, and async programming.",
        type: "live",
      },
      {
        order: 4,
        title: "TypeScript",
        description:
          "Build type-safe applications using TypeScript interfaces, types, generics, and advanced patterns.",
        type: "live",
      },
      {
        order: 5,
        title: "Tailwind CSS",
        description:
          "Create modern responsive interfaces using Tailwind CSS and utility-first design.",
        type: "live",
      },
      {
        order: 6,
        title: "React.js",
        description:
          "Build reusable React applications using components, hooks, routing, and state management.",
        type: "live",
      },
      {
        order: 7,
        title: "API Integration",
        description:
          "Connect React applications with REST APIs and handle real-world application data.",
        type: "live",
      },
      {
        order: 8,
        title: "Frontend Project",
        description:
          "Build and deploy a complete responsive production-ready frontend application.",
        type: "live",
      },
    ],
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
    price: 10999,
    originalPrice: 18999,

    curriculum: [
      {
        order: 1,
        title: "Advanced JavaScript",
        description:
          "Deep dive into closures, prototypes, async programming, modules, and advanced JavaScript patterns.",
        type: "live",
      },
      {
        order: 2,
        title: "Advanced TypeScript",
        description:
          "Master generics, utility types, conditional types, interfaces, and scalable type architecture.",
        type: "live",
      },
      {
        order: 3,
        title: "Advanced React.js",
        description:
          "Learn advanced React patterns, reusable architecture, hooks, and component optimization.",
        type: "live",
      },
      {
        order: 4,
        title: "State Management",
        description:
          "Learn scalable state management patterns and application-wide data handling.",
        type: "live",
      },
      {
        order: 5,
        title: "API Integration",
        description:
          "Build reliable frontend API integrations with loading, caching, errors, and authentication.",
        type: "live",
      },
      {
        order: 6,
        title: "Performance Optimization",
        description:
          "Optimize rendering, bundle size, network requests, and application performance.",
        type: "live",
      },
      {
        order: 7,
        title: "Frontend Architecture",
        description:
          "Design scalable, maintainable, and production-ready frontend architectures.",
        type: "live",
      },
      {
        order: 8,
        title: "Advanced Frontend Project",
        description:
          "Build a production-grade frontend application using modern architecture and best practices.",
        type: "live",
      },
    ],
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
    price: 11999,
    originalPrice: 19999,

    curriculum: [
      {
        order: 1,
        title: "React.js Foundations",
        description:
          "Build a strong foundation in React components, hooks, props, state, and application structure.",
        type: "live",
      },
      {
        order: 2,
        title: "Next.js App Router",
        description:
          "Learn layouts, nested routes, dynamic routes, loading states, and error handling.",
        type: "live",
      },
      {
        order: 3,
        title: "Server & Client Components",
        description:
          "Understand Server Components, Client Components, rendering boundaries, and data fetching.",
        type: "live",
      },
      {
        order: 4,
        title: "TypeScript with Next.js",
        description: "Build type-safe Next.js applications using TypeScript.",
        type: "live",
      },
      {
        order: 5,
        title: "SEO & Metadata",
        description:
          "Implement metadata, SEO-friendly pages, structured content, and search optimization.",
        type: "live",
      },
      {
        order: 6,
        title: "Performance Optimization",
        description:
          "Learn caching, image optimization, rendering strategies, and performance best practices.",
        type: "live",
      },
      {
        order: 7,
        title: "API & Backend Integration",
        description:
          "Integrate Next.js frontend applications with REST APIs and backend services.",
        type: "live",
      },
      {
        order: 8,
        title: "Production Next.js Project",
        description:
          "Build and deploy a production-ready Next.js frontend application.",
        type: "live",
      },
    ],
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
    price: 10999,
    originalPrice: 18999,

    curriculum: [
      {
        order: 1,
        title: "Node.js Fundamentals",
        description:
          "Understand Node.js runtime, modules, npm, asynchronous programming, and backend fundamentals.",
        type: "live",
      },
      {
        order: 2,
        title: "Express.js",
        description:
          "Build backend applications using Express.js, routing, middleware, controllers, and services.",
        type: "live",
      },
      {
        order: 3,
        title: "REST API Development",
        description:
          "Design and build scalable REST APIs using industry-standard backend architecture.",
        type: "live",
      },
      {
        order: 4,
        title: "MongoDB & Mongoose",
        description:
          "Learn MongoDB schemas, queries, indexes, relationships, and Mongoose.",
        type: "live",
      },
      {
        order: 5,
        title: "JWT Authentication",
        description:
          "Implement access tokens, refresh tokens, protected routes, and authentication workflows.",
        type: "live",
      },
      {
        order: 6,
        title: "RBAC & API Security",
        description:
          "Implement role-based access control, validation, security, and protected resources.",
        type: "live",
      },
      {
        order: 7,
        title: "Scalable Backend Architecture",
        description:
          "Learn controllers, services, repositories, middleware, error handling, and clean architecture.",
        type: "live",
      },
      {
        order: 8,
        title: "Production Backend Project",
        description:
          "Build, test, secure, and deploy a complete production-ready Node.js backend.",
        type: "live",
      },
    ],
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
    price: 9999,
    originalPrice: 16999,

    curriculum: [
      {
        order: 1,
        title: "PHP Fundamentals",
        description:
          "Learn PHP syntax, functions, arrays, forms, sessions, cookies, and file handling.",
        type: "live",
      },
      {
        order: 2,
        title: "Object-Oriented PHP",
        description:
          "Master classes, objects, inheritance, interfaces, traits, and reusable PHP architecture.",
        type: "live",
      },
      {
        order: 3,
        title: "MySQL",
        description:
          "Learn database design, SQL queries, relationships, joins, indexes, and optimization.",
        type: "live",
      },
      {
        order: 4,
        title: "Laravel MVC",
        description:
          "Learn Laravel routing, controllers, models, views, migrations, and MVC architecture.",
        type: "live",
      },
      {
        order: 5,
        title: "Laravel REST APIs",
        description:
          "Build structured REST APIs using Laravel resources, validation, and API architecture.",
        type: "live",
      },
      {
        order: 6,
        title: "Authentication & Authorization",
        description:
          "Implement secure authentication, authorization, roles, and permissions.",
        type: "live",
      },
      {
        order: 7,
        title: "API Security & Optimization",
        description:
          "Learn validation, security practices, caching, database optimization, and performance.",
        type: "live",
      },
      {
        order: 8,
        title: "Production Laravel Project",
        description:
          "Build and deploy a complete high-performance Laravel application.",
        type: "live",
      },
    ],
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
    price: 14999,
    originalPrice: 24999,

    curriculum: [
      {
        order: 1,
        title: "Python Fundamentals",
        description:
          "Learn Python syntax, data structures, functions, modules, exceptions, and object-oriented programming.",
        type: "live",
      },
      {
        order: 2,
        title: "Advanced Python",
        description:
          "Master advanced Python concepts, decorators, generators, modules, and clean coding practices.",
        type: "live",
      },
      {
        order: 3,
        title: "Django Development",
        description:
          "Build web applications using Django, models, views, URLs, templates, forms, and ORM.",
        type: "live",
      },
      {
        order: 4,
        title: "FastAPI",
        description:
          "Build modern high-performance APIs using FastAPI, validation, dependency injection, and documentation.",
        type: "live",
      },
      {
        order: 5,
        title: "PostgreSQL & MySQL",
        description:
          "Learn relational database design, queries, relationships, indexes, and database integration.",
        type: "live",
      },
      {
        order: 6,
        title: "Authentication & Security",
        description:
          "Implement authentication, authorization, sessions, tokens, and secure APIs.",
        type: "live",
      },
      {
        order: 7,
        title: "Frontend Integration",
        description:
          "Connect Python backend APIs with modern frontend applications.",
        type: "live",
      },
      {
        order: 8,
        title: "Python Full Stack Project",
        description:
          "Build and deploy a complete production-ready Python full-stack application.",
        type: "live",
      },
    ],
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
    price: 15999,
    originalPrice: 26999,

    curriculum: [
      {
        order: 1,
        title: "Java Fundamentals",
        description:
          "Learn Java syntax, OOP, collections, exception handling, and core programming concepts.",
        type: "live",
      },
      {
        order: 2,
        title: "Advanced Java",
        description:
          "Master advanced object-oriented programming, streams, generics, concurrency, and modern Java.",
        type: "live",
      },
      {
        order: 3,
        title: "Spring Framework",
        description:
          "Understand dependency injection, beans, configuration, and Spring application architecture.",
        type: "live",
      },
      {
        order: 4,
        title: "Spring Boot",
        description:
          "Build production-ready backend applications using Spring Boot.",
        type: "live",
      },
      {
        order: 5,
        title: "REST API Development",
        description:
          "Build scalable REST APIs with Spring Boot and industry-standard practices.",
        type: "live",
      },
      {
        order: 6,
        title: "Database & JPA",
        description:
          "Work with relational databases, JPA, Hibernate, entities, relationships, and queries.",
        type: "live",
      },
      {
        order: 7,
        title: "React.js Integration",
        description:
          "Connect Spring Boot backend services with modern React.js frontend applications.",
        type: "live",
      },
      {
        order: 8,
        title: "Enterprise Full Stack Project",
        description:
          "Build and deploy a complete enterprise-style Java full-stack application.",
        type: "live",
      },
    ],
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
    price: 16999,
    originalPrice: 29999,

    curriculum: [
      {
        order: 1,
        title: "Python for AI",
        description:
          "Learn Python fundamentals and programming techniques required for AI development.",
        type: "live",
      },
      {
        order: 2,
        title: "AI & Machine Learning Fundamentals",
        description:
          "Understand AI concepts, machine learning fundamentals, models, datasets, and workflows.",
        type: "live",
      },
      {
        order: 3,
        title: "Generative AI Fundamentals",
        description:
          "Understand generative AI, LLMs, tokens, context, embeddings, and AI application architecture.",
        type: "live",
      },
      {
        order: 4,
        title: "Prompt Engineering",
        description:
          "Learn effective prompting techniques for building reliable AI-powered applications.",
        type: "live",
      },
      {
        order: 5,
        title: "OpenAI API",
        description:
          "Build AI-powered applications using OpenAI APIs and modern integration patterns.",
        type: "live",
      },
      {
        order: 6,
        title: "Google Gemini",
        description:
          "Integrate Gemini models and build practical generative AI applications.",
        type: "live",
      },
      {
        order: 7,
        title: "AI Application Development",
        description:
          "Build real-world AI applications with APIs, databases, authentication, and modern web technologies.",
        type: "live",
      },
      {
        order: 8,
        title: "Generative AI Project",
        description:
          "Build and deploy a complete AI-powered application using real-world development practices.",
        type: "live",
      },
    ],
  },
];

// ==============================
// Course Details
// ==============================

const CourseDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const course = programs.find((program) => program.slug === slug);

  // ==============================
  // Course Not Found
  // ==============================

  if (!course) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
            <GraduationCap size={30} className="text-[#0E6AFA]" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Course Not Found
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            The course you're looking for doesn't exist or may have been
            removed.
          </p>

          <Link
            to="/curriculum"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0E6AFA] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0059D6] hover:shadow-lg"
          >
            <ArrowLeft size={18} />
            Back to Curriculum
          </Link>
        </div>
      </main>
    );
  }

  const discountPercentage = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100,
  );

  return (
    <main className="mt-10 bg-white">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-[#0B3157] to-[#0E6AFA]">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          {/* Back */}
          <Link
            to="/curriculum"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Curriculum
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
            {/* Course Info */}
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                {course.tag}
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                {course.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
                {course.description}
              </p>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                {/* Duration */}
                <div className="flex items-center gap-2 text-white">
                  <Clock3 size={19} className="text-blue-300" />

                  <span className="text-sm font-medium">{course.weeks}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 text-white">
                  <Star
                    size={19}
                    fill="currentColor"
                    className="text-amber-400"
                  />

                  <span className="text-sm font-semibold">{course.rating}</span>

                  <span className="text-sm text-white/60">
                    ({course.reviews} reviews)
                  </span>
                </div>

                {/* Live */}
                <div className="flex items-center gap-2 text-white">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>

                  <span className="text-sm font-semibold">Live Classes</span>
                </div>
              </div>

              {/* Live Training Badge */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                  <Video size={18} className="text-blue-200" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Instructor-Led Live Training
                  </p>

                  <p className="mt-0.5 text-xs text-white/60">
                    Learn directly with mentors in real-time
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                PURCHASE CARD
            ================================================= */}

            <div className="rounded-3xl border border-white/15 bg-white p-6 shadow-2xl">
              {/* Offer */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                  {discountPercentage}% OFF
                </span>

                <span className="text-xs font-medium text-slate-400">
                  Limited Offer
                </span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <p className="text-sm font-medium text-slate-500">Course Fee</p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    ₹{course.price.toLocaleString("en-IN")}
                  </span>

                  <span className="mb-1 text-base text-slate-400 line-through">
                    ₹{course.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="mt-2 text-xs text-green-600">
                  Save ₹
                  {(course.originalPrice - course.price).toLocaleString(
                    "en-IN",
                  )}
                </p>
              </div>

              {/* Buy Button */}
              <button
                type="button"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E6AFA] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0059D6] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0E6AFA]/40 focus:ring-offset-2"
              >
                Buy Course
                <ArrowRight size={18} />
              </button>

              <p className="mt-3 text-center text-xs text-slate-400">
                Secure checkout • Instant enrollment
              </p>

              {/* Includes */}
              <div className="mt-7 border-t border-slate-100 pt-6">
                <p className="text-sm font-bold text-slate-900">
                  Your Enrollment Includes
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    "Instructor-led live classes",
                    "Live mentor interaction",
                    "Doubt clearing sessions",
                    "Practical real-world projects",
                    "Certificate of completion",
                    "Career & interview support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-green-500"
                      />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE OVERVIEW
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          {/* Main Content */}
          <div>
            {/* Overview */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0E6AFA]">
                Course Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Build skills that matter in the real world
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
                This {course.title} program is designed to help you develop
                practical skills through instructor-led live classes, hands-on
                development, mentor guidance, and real-world projects.
              </p>
            </div>

            {/* =================================================
                WHAT YOU WILL LEARN
            ================================================= */}

            <div className="mt-14">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0E6AFA]">
                Learning Outcomes
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                What You'll Learn
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Build modern production-ready applications",
                  "Work with real-world development workflows",
                  "Design scalable application architecture",
                  "Build and consume REST APIs",
                  "Work with databases and authentication",
                  "Deploy applications for production",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:border-blue-100 hover:bg-blue-50/40"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#0E6AFA]"
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                LIVE CURRICULUM
            ================================================= */}

            <div className="mt-16">
              <div className="mt-16">
                {/* Section Header */}
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0E6AFA]" />

                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E6AFA]">
                        Live Training
                      </p>
                    </div>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                      Course Curriculum
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                      Follow a structured, instructor-led curriculum designed to
                      help you build practical skills through live classes and
                      real-world projects.
                    </p>
                  </div>
                </div>

                {/* Curriculum Modules */}
                <div className="mt-8 space-y-4">
                  {course?.curriculum
                    .slice()
                    .sort((a, b) => a.order - b.order)
                    .map((module) => (
                      <div
                        key={`${module.order}-${module.title}`}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(14,106,250,0.08)] md:p-6"
                      >
                        {/* Hover Accent */}
                        <div className="absolute inset-y-0 left-0 w-1 bg-[#0E6AFA] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="flex items-start gap-4 md:gap-5">
                          {/* Module Number */}
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#0E6AFA] transition-all duration-300 group-hover:bg-[#0E6AFA] group-hover:text-white md:h-12 md:w-12">
                            {String(module.order).padStart(2, "0")}
                          </div>

                          {/* Module Content */}
                          <div className="min-w-0 flex-1">
                            {/* Title */}
                            <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#0E6AFA] md:text-lg">
                              {module.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                              {module.description}
                            </p>

                            {/* Meta */}
                            <div className="mt-4 flex flex-wrap items-center gap-3">
                              {/* Live Session */}
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                                </span>
                                Live Session
                              </span>

                              {/* Instructor */}
                              <span className="hidden h-3 w-px bg-slate-200 sm:block" />

                              <span className="text-xs font-medium text-slate-400">
                                Instructor Led
                              </span>
                            </div>
                          </div>

                          {/* Right Side */}
                          <div className="hidden shrink-0 items-center gap-3 sm:flex">
                            {/* LIVE */}
                            <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 transition-colors duration-300 group-hover:bg-blue-50">
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                              </span>

                              <span className="text-[11px] font-bold tracking-wide text-slate-600 group-hover:text-[#0E6AFA]">
                                LIVE
                              </span>
                            </div>

                            {/* Arrow */}
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-100 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-[#0E6AFA]">
                              <ArrowRight size={17} />
                            </div>
                          </div>
                        </div>

                        {/* Mobile Bottom Meta */}
                        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 sm:hidden">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            Live Session
                          </span>

                          <ArrowRight
                            size={17}
                            className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0E6AFA]"
                          />
                        </div>
                      </div>
                    ))}
                </div>

                {/* Curriculum Bottom Info */}
                <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                      <Video size={18} className="text-[#0E6AFA]" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        100% Instructor-Led Learning
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Attend live sessions, ask questions, clear doubts, and
                        learn directly from mentors.
                      </p>
                    </div>
                  </div>

                  <span className="w-fit rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#0E6AFA] shadow-sm">
                    {course?.curriculum?.length || 0} Modules
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                LIVE LEARNING EXPERIENCE
            ================================================= */}

            <div className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0E6AFA]">
                Learning Experience
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                Learn with real-time guidance
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Video,
                    title: "Live Instructor Sessions",
                    description:
                      "Attend structured live classes with an instructor and learn concepts in real time.",
                  },
                  {
                    icon: Users,
                    title: "Live Mentor Interaction",
                    description:
                      "Ask questions, discuss problems, and get guidance while building projects.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Practical Learning",
                    description:
                      "Apply concepts through hands-on development and real-world project work.",
                  },
                  {
                    icon: Award,
                    title: "Career Preparation",
                    description:
                      "Prepare for technical interviews, projects, and professional development.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                        <Icon size={20} className="text-[#0E6AFA]" />
                      </div>

                      <h3 className="mt-4 text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ===================================================
              SIDEBAR
          =================================================== */}

          <aside>
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Why Learn With Us?
              </h3>

              <div className="mt-6 space-y-5">
                {/* Mentor */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Users size={19} className="text-[#0E6AFA]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Mentor Support
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Get guidance while working on projects.
                    </p>
                  </div>
                </div>

                {/* Live */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                    <Video size={19} className="text-green-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Live Classes
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Instructor-led sessions with real-time interaction.
                    </p>
                  </div>
                </div>

                {/* Certificate */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                    <Award size={19} className="text-purple-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Certificate
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Receive a certificate after successful completion.
                    </p>
                  </div>
                </div>

                {/* Secure Payment */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <ShieldCheck size={19} className="text-slate-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Secure Payment
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Safe and secure online checkout.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar CTA */}
              <button
                type="button"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E6AFA] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0059D6] hover:shadow-lg"
              >
                Enroll Now
                <ArrowRight size={17} />
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-[#071A35] via-[#0B3157] to-[#0E6AFA] px-6 py-12 text-center md:px-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Live Instructor-Led Training
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to start your {course.title} journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
            Join live classes, learn from mentors, build practical projects, and
            develop skills that you can use in the real world.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0E6AFA] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
          >
            Buy Course for ₹{course.price.toLocaleString("en-IN")}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default CourseDetails;
