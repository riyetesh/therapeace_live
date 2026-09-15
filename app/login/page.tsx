import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, ShieldCheck } from "lucide-react";

export default function Login() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#FCFAF7]">
      {/* BACKGROUND */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#DDF3F4] opacity-70 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#F9E5D8] opacity-70 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-10 md:py-20">
        {/* LEFT */}
        <div className="hidden md:block">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7F7]">
            <Heart
              size={26}
              className="fill-[#2CA5AD] text-[#2CA5AD]"
            />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
            WELCOME BACK
          </p>

          <h1 className="mt-4 max-w-xl text-5xl font-black leading-[1.02] tracking-[-0.045em]">
            Your wellbeing journey continues here.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#607481]">
            Sign in to access your Therapeace account, manage your sessions
            and continue your journey with the right support.
          </p>

          <div className="mt-9 space-y-4">
            <div className="flex items-center gap-3 text-sm font-semibold text-[#526772]">
              <CheckCircle2 size={19} className="text-[#2CA5AD]" />
              Manage your appointments
            </div>

            <div className="flex items-center gap-3 text-sm font-semibold text-[#526772]">
              <CheckCircle2 size={19} className="text-[#2CA5AD]" />
              Keep your therapist preferences in one place
            </div>

            <div className="flex items-center gap-3 text-sm font-semibold text-[#526772]">
              <CheckCircle2 size={19} className="text-[#2CA5AD]" />
              Continue from wherever you left off
            </div>
          </div>
        </div>

        {/* LOGIN FORM */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-xl md:p-9">
            {/* MOBILE LOGO */}
            <div className="md:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7F7]">
                <Heart
                  size={23}
                  className="fill-[#2CA5AD] text-[#2CA5AD]"
                />
              </div>
            </div>

            <div className="mt-5 md:mt-0">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2CA5AD]">
                THERAPEACE ACCOUNT
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#718087]">
                Sign in to manage your Therapeace account and sessions.
              </p>
            </div>

            <form className="mt-7 space-y-4">
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#526772]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 text-sm text-[#2C3E50] outline-none transition placeholder:text-[#9AA6AB] focus:border-[#7FB8C9] focus:bg-white focus:ring-4 focus:ring-[#7FB8C9]/10"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-bold text-[#526772]"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-[#2CA5AD] transition hover:text-[#238B91]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="h-12 w-full rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 text-sm text-[#2C3E50] outline-none transition placeholder:text-[#9AA6AB] focus:border-[#7FB8C9] focus:bg-white focus:ring-4 focus:ring-[#7FB8C9]/10"
                />
              </div>

              {/* REMEMBER */}
              <label className="flex cursor-pointer items-center gap-3 pt-1 text-sm text-[#718087]">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-stone-300 accent-[#2CA5AD]"
                />

                <span>Keep me signed in</span>
              </label>

              {/* BUTTON */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#2C3E50] font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#213342] hover:shadow-lg"
              >
                Sign in

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* SIGN UP */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-stone-200" />

              <span className="text-xs text-[#9AA6AB]">
                New to Therapeace?
              </span>

              <div className="h-px flex-1 bg-stone-200" />
            </div>

            <Link
              href="/signup"
              className="flex h-12 w-full items-center justify-center rounded-full border border-stone-300 bg-white text-sm font-bold text-[#2C3E50] transition hover:border-[#7FB8C9] hover:bg-[#EAF7F7]"
            >
              Create an account
            </Link>

            {/* PRIVACY */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#8A989E]">
              <ShieldCheck size={15} className="text-[#2CA5AD]" />
              Your privacy matters to us.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}