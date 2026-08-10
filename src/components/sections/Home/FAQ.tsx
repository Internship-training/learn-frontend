import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Are the internships paid?",
    answer:
      "Yes, selected internship programs may offer a stipend depending on the role, duration, and company.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No. Prior coding experience is not mandatory. Our programs are designed for beginners as well as students with some technical knowledge.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Money-back eligibility depends on the specific program and its terms and conditions.",
  },
  {
    question: "How long does the internship program last?",
    answer:
      "The internship duration depends on the selected program. Most programs are designed to provide practical industry experience over several weeks.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, eligible interns receive a certificate after successfully completing the required internship activities.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold tracking-tight text-[#252b38] sm:text-2xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-gray-500 sm:text-sm">
            Find answers to some of the most common questions about our
            internship program.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-lg border bg-white transition-all duration-200 ${
                  isOpen
                    ? "border-[#d7dce5] shadow-sm"
                    : "border-gray-200"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-xs font-semibold text-[#252b38] transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 sm:px-5 sm:py-4 sm:text-sm"
                >
                  <span>{faq.question}</span>

                  {/* Arrow */}
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-gray-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-4 pb-4 pt-3 sm:px-5">
                      <p className="text-xs leading-6 text-[#737c8d] sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;