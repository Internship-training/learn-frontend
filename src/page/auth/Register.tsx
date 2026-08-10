import { useState } from "react";
import { motion } from "motion/react";
import {
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// =====================================================
// Register Schema
// =====================================================

const registerSchema = z
  .object({
    role: z.enum(["student", "mentor"], {
      message: "Please select your role",
    }),

    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),

    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number cannot exceed 15 digits")
      .regex(/^[0-9]+$/, "Phone number must contain only digits"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password cannot exceed 100 characters"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),

    terms: z
      .boolean()
      .refine(
        (value) => value === true,
        "You must accept the Terms & Conditions"
      ),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

// =====================================================
// Form Type
// =====================================================

type RegisterFormData = z.infer<typeof registerSchema>;

// =====================================================
// Register Component
// =====================================================

const Register = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // ===================================================
  // React Hook Form
  // ===================================================

  const {
    register,
    control,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      role: "student",
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

    mode: "onTouched",
  });

  // ===================================================
  // Submit
  // ===================================================

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    try {
      console.log("Register Data:", data);

      /*
       * API Example:
       *
       * const response = await registerUser(data);
       *
       * if (response.success) {
       *   navigate("/login");
       * }
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      console.log("Registration successful");
    } catch (error) {
      console.error(
        "Registration failed:",
        error
      );
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 mt-20">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* =================================================
            LEFT SECTION
        ================================================== */}

        <section className="relative hidden overflow-hidden bg-slate-950 lg:flex">
          {/* Background */}

          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative flex w-full flex-col justify-between p-10 xl:p-14">
            {/* Logo */}

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <HiOutlineAcademicCap className="text-2xl text-white" />
              </div>

              <span className="text-xl font-bold text-white">
                Learn<span className="text-blue-400">
                  Hub
                </span>
              </span>
            </div>

            {/* Main Content */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                <HiOutlineUserGroup className="mr-2 text-lg" />

                Join Our Community
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-white xl:text-5xl">
                Start Your
                <br />

                <span className="text-blue-500">
                  Learning Journey.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">
                Create your account and become part of a
                growing community of learners and industry
                experts.
              </p>

              {/* Features */}

              <div className="mt-8 space-y-4">
                {[
                  "Industry-ready programs",
                  "Learn from expert mentors",
                  "Build real-world projects",
                  "Get career support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <HiOutlineCheckCircle className="text-xl text-blue-500" />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Footer */}

            <p className="text-sm text-slate-500">
              © 2026 LearnHub. All rights reserved.
            </p>
          </div>
        </section>

        {/* =================================================
            RIGHT REGISTER SECTION
        ================================================== */}

        <section className="flex min-h-screen items-center justify-center px-6 py-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full max-w-md"
          >
            {/* Mobile Logo */}

            <div className="mb-7 flex items-center justify-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <HiOutlineAcademicCap className="text-2xl text-white" />
              </div>

              <span className="text-xl font-bold text-slate-950">
                Learn<span className="text-blue-600">
                  Hub
                </span>
              </span>
            </div>

            {/* Heading */}

            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Join us and start your learning journey.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-7 space-y-4"
            >
              {/* =================================================
                  ROLE
              ================================================== */}

              <div>
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Register as
                </p>

                <Controller
                  name="role"
                  control={control}
                  render={({ field }) => (
                    <div className="grid grid-cols-2 gap-3">
                      {/* Student */}

                      <button
                        type="button"
                        onClick={() =>
                          field.onChange("student")
                        }
                        className={`rounded-xl border p-4 text-left transition ${
                          field.value === "student"
                            ? "border-blue-600 bg-blue-50 ring-2 ring-blue-600/10"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                            field.value === "student"
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <HiOutlineAcademicCap className="text-xl" />
                        </div>

                        <p className="mt-3 text-sm font-bold text-slate-900">
                          Student
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Learn & grow
                        </p>
                      </button>

                      {/* Mentor */}

                      <button
                        type="button"
                        onClick={() =>
                          field.onChange("mentor")
                        }
                        className={`rounded-xl border p-4 text-left transition ${
                          field.value === "mentor"
                            ? "border-blue-600 bg-blue-50 ring-2 ring-blue-600/10"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                            field.value === "mentor"
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <HiOutlineBriefcase className="text-xl" />
                        </div>

                        <p className="mt-3 text-sm font-bold text-slate-900">
                          Mentor
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Guide & teach
                        </p>
                      </button>
                    </div>
                  )}
                />

                {errors.role && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  NAME
              ================================================== */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>

                <div className="relative">
                  <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    {...register("name")}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
                      errors.name
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-blue-500"
                    }`}
                  />
                </div>

                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  EMAIL
              ================================================== */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    {...register("email")}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-blue-500"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  PHONE
              ================================================== */}

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <HiOutlinePhone className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    inputMode="numeric"
                    {...register("phone")}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
                      errors.phone
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-blue-500"
                    }`}
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  PASSWORD
              ================================================== */}

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Create a password"
                    autoComplete="new-password"
                    {...register("password")}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
                      errors.password
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-blue-500"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (previous) => !previous
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                      <HiOutlineEyeOff />
                    ) : (
                      <HiOutlineEye />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  CONFIRM PASSWORD
              ================================================== */}

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    {...register("confirmPassword")}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
                      errors.confirmPassword
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-blue-500"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (previous) => !previous
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? (
                      <HiOutlineEyeOff />
                    ) : (
                      <HiOutlineEye />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  TERMS
              ================================================== */}

              <div>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    {...register("terms")}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />

                  <span className="text-xs leading-5 text-slate-500">
                    I agree to the{" "}
                    <button
                      type="button"
                      className="font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Terms & Conditions
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Privacy Policy
                    </button>
                    .
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  SUBMIT
              ================================================== */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account

                    <HiOutlineArrowRight className="text-lg" />
                  </>
                )}
              </button>
            </form>

            {/* =================================================
                LOGIN
            ================================================== */}

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <button
                type="button"
                className="font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Sign in
              </button>
            </p>

            {/* Role Information */}

            <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-center">
              <p className="text-xs text-slate-500">
                You can register as a{" "}
                <span className="font-semibold text-slate-800">
                  Student or Mentor
                </span>
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Register;