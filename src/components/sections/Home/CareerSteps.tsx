import { motion } from "motion/react";
import type { StepItem } from "../../../types/Program";

interface CareerStepsProps {
  steps: StepItem[];
}

const CareerSteps = ({ steps }: CareerStepsProps) => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            Career Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Your Path to Career Success
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Follow a structured learning journey designed to transform your
            skills into a successful technology career.
          </p>
        </motion.div>

        <div className="relative grid gap-10 md:grid-cols-4">
       

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="relative z-10 flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition hover:shadow-xl"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${step.color} text-lg font-bold text-white shadow-lg ring-4 ring-white`}
              >
                {step.number}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSteps;