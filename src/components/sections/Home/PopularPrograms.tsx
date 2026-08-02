import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Clock, Star } from "lucide-react";
import type { ProgramItem } from "../../../types/Program";

interface PopularProgramsProps {
  programs: ProgramItem[];
}

const ITEMS_PER_PAGE = 3;

const PopularPrograms: React.FC<PopularProgramsProps> = ({ programs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + ITEMS_PER_PAGE < programs.length) {
      setCurrentIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  const visiblePrograms = programs.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-indigo-50/60 px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              Featured Programs
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Popular Programs
            </h2>

            <p className="mt-3 max-w-lg text-slate-500">
              Our most sought-after career tracks designed for high-impact
              professional transformation.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
            className="flex items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={currentIndex + ITEMS_PER_PAGE >= programs.length}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {visiblePrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-teal-900 to-slate-900 p-6 shadow-xl"
              >
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                  {program.tag}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  {program.description}
                </p>

                <div className="mt-8 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span className="text-sm">{program.weeks}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{program.rating}</span>
                    <span className="text-sm text-white/70">
                      ({program.reviews})
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-slate-900"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({
            length: Math.ceil(programs.length / ITEMS_PER_PAGE),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * ITEMS_PER_PAGE)}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex / ITEMS_PER_PAGE === index
                  ? "w-8 bg-slate-900"
                  : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPrograms;