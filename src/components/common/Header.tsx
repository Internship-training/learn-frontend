import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { name: "Programs", path: "/" },
  { name: "Mentors", path: "/mentors" },
  { name: "Curriculum", path: "/curriculum" },
  { name: "Career Support", path: "/career-support" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b shadow border-gray-200 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
           

            <div className=" leading-tight">
              <h2 className="bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text md:text-xl text-md font-medium tracking-tight text-transparent">
                Arinovaa Labs Skills
              </h2>

              <p className="mt-1 text-xs font-medium capitalize tracking-[0.25em] text-gray-500">
                Learn • Build • Grow
              </p>
            </div>
          </NavLink>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
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
                      className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-5 md:flex">
          <NavLink
            to="/login"
            className="font-medium text-blue-600 transition hover:text-blue-700"
          >
            Login
          </NavLink>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <NavLink
              to="/register"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Register
            </NavLink>
          </motion.div>
        </div>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.9, rotate: 90 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-gray-700 md:hidden"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-gray-200 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 p-5">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 font-medium transition ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-5 border-t pt-5"
              >
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className="block rounded-lg border border-blue-600 py-3 text-center font-medium text-blue-600"
                >
                  Login
                </NavLink>

                <motion.div
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <NavLink
                    to="/register"
                    onClick={closeMenu}
                    className="mt-3 block rounded-lg bg-blue-600 py-3 text-center font-medium text-white"
                  >
                    Register
                  </NavLink>
                </motion.div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
