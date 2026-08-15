import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlinePaperAirplane,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

interface SupportFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const Support = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SupportFormData>({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // =========================================================
  // SUBMIT SUPPORT REQUEST
  // =========================================================

  const onSubmit = async (data: SupportFormData) => {
    try {
      console.log("Support Request:", data);

      // Backend API
      // await axios.post("/api/v1/support", data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);

      reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Support request failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 mt-10">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-5 pb-12 pt-16 md:px-8 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0E6AFA]">
            Support Center
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-[52px] md:leading-[1.1]">
            How can we help you?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            Have a question about your course, account, payment, or live class?
            Our support team is here to help.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[1.55fr_1fr]">
            {/* =================================================
                SUPPORT FORM
            ================================================= */}

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9 lg:p-10">
              {/* Form Header */}

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0E6AFA]">
                  Get in touch
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Send us a message
                </h2>

                <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
                  Tell us what you need help with and our team will get back to
                  you.
                </p>
              </div>

              {/* =================================================
                  SUCCESS
              ================================================= */}

              {submitted && (
                <div className="mt-7 flex items-start gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                    <HiOutlineCheckCircle className="text-2xl text-emerald-600" />
                  </div>

                  <div>
                    <p className="text-base font-semibold text-emerald-800">
                      Message sent successfully
                    </p>

                    <p className="mt-1 text-sm text-emerald-700">
                      Our support team will get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-9 space-y-6"
              >
                {/* NAME + EMAIL */}

                <div className="grid gap-6 md:grid-cols-2">
                  {/* NAME */}

                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2.5 block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: {
                          value: 2,
                          message: "Enter a valid name",
                        },
                        maxLength: {
                          value: 80,
                          message: "Name cannot exceed 80 characters",
                        },
                      })}
                      className={`h-13 w-full rounded-xl border bg-slate-50 px-4 text-base text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                        errors.fullName
                          ? "border-red-300 focus:border-red-400 focus:ring-red-50"
                          : "border-slate-200 focus:border-[#0E6AFA] focus:ring-blue-50"
                      }`}
                    />

                    {errors.fullName && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className={`h-13 w-full rounded-xl border bg-slate-50 px-4 text-base text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                        errors.email
                          ? "border-red-300 focus:border-red-400 focus:ring-red-50"
                          : "border-slate-200 focus:border-[#0E6AFA] focus:ring-blue-50"
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* SUBJECT */}

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2.5 block text-sm font-semibold text-slate-700"
                  >
                    Support Topic
                  </label>

                  <select
                    id="subject"
                    {...register("subject", {
                      required: "Please select a support topic",
                    })}
                    className={`h-13 w-full rounded-xl border bg-slate-50 px-4 text-base text-slate-600 outline-none transition-all focus:bg-white focus:ring-4 ${
                      errors.subject
                        ? "border-red-300 focus:border-red-400 focus:ring-red-50"
                        : "border-slate-200 focus:border-[#0E6AFA] focus:ring-blue-50"
                    }`}
                  >
                    <option value="">Select a support topic</option>

                    <option value="course-support">Course Support</option>

                    <option value="live-class">Live Class</option>

                    <option value="payment">Payment & Billing</option>

                    <option value="account">Account Support</option>

                    <option value="technical">Technical Issue</option>

                    <option value="certificate">Certificate</option>

                    <option value="other">Other</option>
                  </select>

                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={7}
                    placeholder="Tell us how we can help..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                      maxLength: {
                        value: 1000,
                        message: "Message cannot exceed 1000 characters",
                      },
                    })}
                    className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3.5 text-base leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                      errors.message
                        ? "border-red-300 focus:border-red-400 focus:ring-red-50"
                        : "border-slate-200 focus:border-[#0E6AFA] focus:ring-blue-50"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-[#0E6AFA] px-7 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0059D6] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <HiOutlinePaperAirplane className="text-lg" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* =================================================
                RIGHT COLUMN
            ================================================= */}

            <div className="space-y-6">
              {/* =================================================
                  IMAGE CARD
              ================================================= */}

              <div className="group relative h-82.5 overflow-hidden rounded-3xl">
                <img
                  src="https://www.estudantevirtual.com.br/assets/images/artigos/encontrar-suporte-academico-ensino-virtual.webp"
                  alt="Student Support Team"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-900/30 to-transparent" />

                {/* Content */}

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Student Support
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                    We're here to help.
                  </h2>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
                    Get the support you need to stay on track with your learning
                    journey.
                  </p>
                </div>
              </div>

              {/* =================================================
                  DIRECT SUPPORT
              ================================================= */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0E6AFA]">
                      Contact Us
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-slate-900">
                      Direct Support
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <HiOutlineChatAlt2 className="text-2xl text-[#0E6AFA]" />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {/* EMAIL */}

                  <a
                    href="mailto:support@arinovaa.com"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-[#0E6AFA]">
                      <HiOutlineMail className="text-xl text-[#0E6AFA] transition-colors group-hover:text-white" />
                    </div>

                    <div>
                      <p className="text-base font-semibold text-slate-800">
                        Email Support
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        support@arinovaa.com
                      </p>
                    </div>
                  </a>

                  {/* WHATSAPP */}

                  <a
                    href="#"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-[#0E6AFA]">
                      <HiOutlineChatAlt2 className="text-xl text-[#0E6AFA] transition-colors group-hover:text-white" />
                    </div>

                    <div>
                      <p className="text-base font-semibold text-slate-800">
                        WhatsApp Support
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Chat with our support team
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* =================================================
                  SUPPORT HOURS
              ================================================= */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <HiOutlineClock className="text-2xl text-[#0E6AFA]" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Availability</p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Support Hours
                    </h2>
                  </div>
                </div>

                <div className="mt-6 divide-y divide-slate-100">
                  <div className="flex items-center justify-between py-4">
                    <span className="text-sm text-slate-500">
                      Monday - Friday
                    </span>

                    <span className="text-sm font-semibold text-slate-700">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-sm text-slate-500">Saturday</span>

                    <span className="text-sm font-semibold text-slate-700">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-sm text-slate-500">Sunday</span>

                    <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-500">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              FAQ
          ===================================================== */}

          <section className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                <HiOutlineQuestionMarkCircle className="text-2xl text-[#0E6AFA]" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900 md:text-3xl">
                Common Questions
              </h2>

              <p className="mt-3 text-base text-slate-500">
                Quick answers to some common questions.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {/* FAQ 1 */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md">
                <h3 className="text-base font-semibold leading-6 text-slate-900">
                  When will my account be activated?
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Your account is normally activated within a few minutes after
                  payment confirmation.
                </p>
              </div>

              {/* FAQ 2 */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md">
                <h3 className="text-base font-semibold leading-6 text-slate-900">
                  I didn't receive my payment receipt.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Check your inbox and spam folder. Payment details are also
                  available in your dashboard.
                </p>
              </div>

              {/* FAQ 3 */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md">
                <h3 className="text-base font-semibold leading-6 text-slate-900">
                  Can I change my course mentor?
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Contact our support team and we'll help you with the available
                  options.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Support;
