import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
} from "lucide-react";
import type { ProgramItem } from "../../../types/Program";
import { Link } from "react-router-dom";

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
    currentIndex + ITEMS_PER_PAGE,
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
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {visiblePrograms.map((program, index) => (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative flex min-h-117.5 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)]"
              >
                {/* Top Section */}
                <div className="relative overflow-hidden bg-linear-to-br from-slate-950 via-[#0B3157] to-[#0E6AFA] px-6 pb-8 pt-6">
                  {/* Decorative Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

                  {/* Tag */}
                  <span className="relative inline-flex rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                    {program.tag}
                  </span>

                  {/* Title */}
                  <h3 className="relative mt-5 min-h-16 text-2xl font-bold leading-tight tracking-tight text-white">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 line-clamp-3 min-h-18 text-sm leading-6 text-white/75">
                    {program.description}
                  </p>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 py-6">
                  {/* Course Meta */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Duration */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/50">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock
                          size={17}
                          className="transition-colors duration-300 group-hover:text-[#0E6AFA]"
                        />

                        <span className="text-xs font-medium">Duration</span>
                      </div>

                      <p className="mt-1.5 text-sm font-bold text-slate-800">
                        {program.weeks}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors duration-300 group-hover:border-amber-100 group-hover:bg-amber-50/50">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Star
                          size={17}
                          fill="currentColor"
                          className="text-amber-500"
                        />

                        <span className="text-xs font-medium">Rating</span>
                      </div>

                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="text-sm font-bold text-slate-800">
                          {program.rating}
                        </span>

                        <span className="text-xs text-slate-400">
                          ({program.reviews})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Highlight */}
                  <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1">
                        <div className="h-7 w-7 rounded-full border-2 border-white bg-slate-300" />
                        <div className="h-7 w-7 rounded-full border-2 border-white bg-slate-400" />
                        <div className="h-7 w-7 rounded-full border-2 border-white bg-slate-500" />
                      </div>

                      <span className="text-xs font-medium text-slate-500">
                        Trusted by learners
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                      <Star
                        size={13}
                        fill="currentColor"
                        className="text-amber-500"
                      />

                      {program.rating}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-slate-100" />

                  {/* CTA */}
                  <Link
                    to={`/curriculum/${program.slug}`}
                    aria-label={`Explore ${program.title} curriculum`}
                    className="group/button mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E6AFA] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0059D6] hover:shadow-[0_10px_25px_rgba(14,106,250,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6AFA]/40 focus-visible:ring-offset-2 active:translate-y-0"
                  >
                    <span>Explore Curriculum</span>

                    <ArrowRight
                      size={18}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
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
