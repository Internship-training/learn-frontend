import { motion } from "motion/react";
import {
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// =====================================================
// Login Schema
// =====================================================

const loginSchema = z.object({
  role: z.enum(["student", "mentor"], {
    message: "Please select your role",
  }),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),

  remember: z.boolean().optional(),
});

// =====================================================
// Form Type
// =====================================================

type LoginFormData = z.infer<typeof loginSchema>;

// =====================================================
// Component
// =====================================================

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // ===================================================
  // React Hook Form
  // ===================================================

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      role: "student",
      email: "",
      password: "",
      remember: false,
    },

    mode: "onTouched",
  });

  // ===================================================
  // Submit
  // ===================================================

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log("Login Data:", data);

      /*
       * API call example:
       *
       * const response = await loginUser(data);
       *
       * if (response.success) {
       *   navigate(
       *     data.role === "student"
       *       ? "/student/dashboard"
       *       : "/mentor/dashboard"
       *   );
       * }
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      console.log("Login successful");
    } catch (error) {
      console.error("Login failed:", error);
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

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                  <HiOutlineAcademicCap className="text-2xl text-white" />
                </div>

                <span className="text-xl font-bold text-white">
                  Learn<span className="text-blue-400">Hub</span>
                </span>
              </div>
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
                ease: "easeOut",
              }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                <HiOutlineUserGroup className="mr-2 text-lg" />
                Learning Community
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-white xl:text-5xl">
                Learn.
                <br />

                Build.
                <br />

                <span className="text-blue-500">
                  Grow Together.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">
                Connect with experienced mentors, learn
                industry-ready technologies, build real-world
                projects, and take your career to the next
                level.
              </p>

              {/* Features */}

              <div className="mt-8 space-y-4">
                {[
                  "Industry-ready programs",
                  "Expert mentor guidance",
                  "Real-world projects",
                  "Career support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/20">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>

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
            RIGHT LOGIN SECTION
        ================================================== */}

        <section className="flex min-h-screen items-center justify-center px-6 py-12">
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

            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <HiOutlineAcademicCap className="text-2xl text-white" />
              </div>

              <span className="text-xl font-bold text-slate-950">
                Learn<span className="text-blue-600">Hub</span>
              </span>
            </div>

            {/* Heading */}

            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Sign in to continue your learning journey.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
              noValidate
            >
              {/* =================================================
                  ROLE SELECTOR
              ================================================== */}

              <div>
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Continue as
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

                {/* Role Error */}

                {errors.role && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.role.message}
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
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-blue-500"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  PASSWORD
              ================================================== */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

                  <input
                    id="password"
                    type={
                      showPassword ? "text" : "password"
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    {...register("password")}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
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
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 transition hover:text-slate-600"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <HiOutlineEyeOff />
                    ) : (
                      <HiOutlineEye />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  REMEMBER ME
              ================================================== */}

              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  {...register("remember")}
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-slate-600"
                >
                  Remember me
                </label>
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

                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in

                    <HiOutlineArrowRight className="text-lg" />
                  </>
                )}
              </button>
            </form>

            {/* =================================================
                REGISTER
            ================================================== */}

            <p className="mt-7 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <button
                type="button"
                className="font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Create an account
              </button>
            </p>

            {/* Selected Role */}

            <div className="mt-6 rounded-xl bg-slate-50 px-4 py-3 text-center">
              <p className="text-xs text-slate-500">
                Login portal supports{" "}
                <span className="font-semibold text-slate-800">
                  Students & Mentors
                </span>
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Login;