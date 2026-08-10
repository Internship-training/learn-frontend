import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { name: "Programs", path: "/" },
  { name: "Mentors", path: "/mentors" },
  { name: "Curriculum", path: "/curriculum" },
  { name: "Career Support", path: "/career-support" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50 "
    >
      <div className="mx-auto max-w-[1920px] w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* LOGO */}
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <NavLink to="/" onClick={closeMenu} className="flex items-center">
              <div className="leading-tight">
                <h2 className="bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-base font-semibold tracking-tight text-transparent sm:text-lg md:text-xl">
                  Arinovaa Labs Skills
                </h2>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-[10px] sm:tracking-[0.25em] md:text-xs">
                  Learn • Build • Grow
                </p>
              </div>
            </NavLink>
          </motion.div>

          {/* =========================
              Desktop Navigation
          ========================== */}
          <nav className="hidden items-center gap-7 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                        className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* =========================
              Desktop Auth Buttons
          ========================== */}
          <div className="hidden items-center gap-5 md:flex">
            <NavLink
              to="/login"
              className="font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              Login
            </NavLink>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <NavLink
                to="/register"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
              >
                Register
              </NavLink>
            </motion.div>
          </div>

          {/* =========================
              Mobile Menu Button
          ========================== */}
          <motion.button
            type="button"
            whileTap={{
              scale: 0.9,
              rotate: 90,
            }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center justify-center text-3xl text-gray-700 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </motion.button>
        </div>

        {/* =========================
            Mobile Menu
        ========================== */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
            >
              <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
                {/* Mobile Links */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{
                        x: -20,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                      }}
                      exit={{
                        x: -20,
                        opacity: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.25,
                      }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Auth */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.25,
                  }}
                  className="mt-5 border-t border-gray-100 pt-5"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {/* Login */}
                    <NavLink
                      to="/login"
                      onClick={closeMenu}
                      className="flex items-center justify-center rounded-lg border border-blue-600 px-4 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
                    >
                      Login
                    </NavLink>

                    {/* Register */}
                    <motion.div
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <NavLink
                        to="/register"
                        onClick={closeMenu}
                        className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-md shadow-blue-600/20 transition-colors hover:bg-blue-700"
                      >
                        Register
                      </NavLink>
                    </motion.div>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
