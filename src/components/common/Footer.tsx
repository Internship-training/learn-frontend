import { motion } from "motion/react";
import { Globe2, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const programLinks: FooterLink[] = [
  {
    label: "Web Development",
    href: "/programs/web-development",
  },
  {
    label: "UI/UX Design",
    href: "/programs/ui-ux-design",
  },
  {
    label: "Data Science",
    href: "/programs/data-science",
  },
  {
    label: "Digital Marketing",
    href: "/programs/digital-marketing",
  },
];

const companyLinks: FooterLink[] = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Partner with Us",
    href: "/partner",
  },
  {
    label: "Success Stories",
    href: "/success-stories",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

const supportLinks: FooterLink[] = [
  {
    label: "Help Center",
    href: "/help",
  },
  {
    label: "Contact Support",
    href: "/contact",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
];

/* =========================================
   Animation Variants
========================================= */

const footerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const footerItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <motion.div variants={footerItemVariants}>
      <h3 className="text-sm font-semibold tracking-wide text-gray-900 sm:text-base">
        {title}
      </h3>

      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
            >
              <span>{link.label}</span>

              <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-gray-200 bg-white">
      {/* =========================================
          Decorative Background
      ========================================== */}

      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl" />

      {/* =========================================
          Main Footer
      ========================================== */}

      <motion.div
        variants={footerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative mx-auto max-w-7xl px-5 pt-10"
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">
          <motion.div variants={footerItemVariants} className="max-w-sm">
            {/* Logo */}
            <a href="/" className="group inline-flex items-center">
              <span className="bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-opacity duration-200 group-hover:opacity-80 sm:text-3xl">
                Arinovaa Labs
              </span>
            </a>

            {/* Tagline */}

            <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
              Learn • Build • Grow
            </p>

            {/* Description */}

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500 sm:text-[15px]">
              Empowering the next generation of industry leaders through
              immersive, hands-on training and direct career pathways.
            </p>

            {/* Social Icons */}

            <div className="mt-7 flex items-center gap-3">
              {/* Website */}

              <motion.a
                href="#"
                aria-label="Website"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 shadow-sm transition-colors duration-200 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
              >
                <Globe2 className="h-4 w-4" />
              </motion.a>

              {/* LinkedIn */}

              <motion.a
                href="#"
                aria-label="LinkedIn"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 shadow-sm transition-colors duration-200 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </motion.a>

              {/* Instagram */}

              <motion.a
                href="#"
                aria-label="Instagram"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 shadow-sm transition-colors duration-200 hover:border-purple-200 hover:bg-purple-600 hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* =====================================
              Programs
          ====================================== */}

          <FooterColumn title="Programs" links={programLinks} />

          {/* =====================================
              Company
          ====================================== */}

          <FooterColumn title="Company" links={companyLinks} />

          {/* =====================================
              Support
          ====================================== */}

          <FooterColumn title="Support" links={supportLinks} />
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        variants={footerItemVariants}
        className="mt-12 border-t border-gray-200 pt-6 sm:mt-14 sm:pt-7"
      >
        <div className="flex flex-col items-center gap-5 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left mx-auto max-w-7xl pb-10">
          {/* Copyright */}
          <p className="leading-5">
            © {currentYear} Arinovaa Labs. All rights reserved.
          </p>

          {/* Legal Links */}
          <nav
            aria-label="Legal links"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end sm:gap-x-6"
          >
            <a
              href="/privacy-policy"
              className="whitespace-nowrap underline-offset-4 transition-colors duration-200 hover:text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="whitespace-nowrap underline-offset-4 transition-colors duration-200 hover:text-blue-600 hover:underline"
            >
              Terms of Service
            </a>

            <button
              type="button"
              className="whitespace-nowrap underline-offset-4 transition-colors duration-200 hover:text-blue-600 hover:underline"
            >
              Cookie Settings
            </button>
          </nav>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
