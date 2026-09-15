import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, ShieldCheck } from "lucide-react";

export default function Signup() {
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
            WELCOME TO THERAPEACE
          </p>

          <h1 className="mt-4 max-w-xl text-5xl font-black leading-[1.02] tracking-[-0.045em]">
            Mental wellness that feels a little closer to home.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#607481]">
            Create your Therapeace account and start exploring therapists who
            understand your language, culture and experiences.
          </p>

          <div className="mt-9 space-y-4">
            <div className="flex items-center gap-3 text-sm font-semibold text-[#526772]">
              <CheckCircle2 size={19} className="text-[#2CA5AD]" />
              Find therapists who understand your background
            </div>

            <div className="flex items-center gap-3 text-sm font-semibold text-[#526772]">
              <CheckCircle2 size={19} className="text-[#2CA5AD]" />
              Compare specialties, languages and pricing
            </div>

            <div className="flex items-center gap-3 text-sm font-semibold text-[#526772]">
              <CheckCircle2 size={19} className="text-[#2CA5AD]" />
              Manage your future appointments in one place
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-xl md:p-9">
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
                GET STARTED
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#718087]">
                Start your journey with Therapeace.
              </p>
            </div>

            <form className="mt-7 space-y-4">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-[#526772]"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className="h-12 w-full rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 text-sm text-[#2C3E50] outline-none transition placeholder:text-[#9AA6AB] focus:border-[#7FB8C9] focus:bg-white focus:ring-4 focus:ring-[#7FB8C9]/10"
                />
              </div>

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
                  className="h-12 w-full rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 text-sm text-[#2C3E50] outline-none transition placeholder:text-[#9AA6AB] focus:border-[#7FB8C9] focus:bg-white focus:ring-4 focus:ring-[#7FB8C9]/10"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-[#526772]"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  className="h-12 w-full rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 text-sm text-[#2C3E50] outline-none transition placeholder:text-[#9AA6AB] focus:border-[#7FB8C9] focus:bg-white focus:ring-4 focus:ring-[#7FB8C9]/10"
                />

                <p className="mt-2 text-xs text-[#8A989E]">
                  Use at least 8 characters.
                </p>
              </div>

              {/* TERMS */}
              <label className="flex cursor-pointer gap-3 pt-1 text-xs leading-5 text-[#718087]">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 rounded border-stone-300 accent-[#2CA5AD]"
                />

                <span>
                  I agree to the Therapeace{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-[#2CA5AD] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#2CA5AD] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* BUTTON */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#2C3E50] font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#213342] hover:shadow-lg"
              >
                Create account
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* LOGIN */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-stone-200" />
              <span className="text-xs text-[#9AA6AB]">Already a member?</span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>

            <Link
              href="/login"
              className="flex h-12 w-full items-center justify-center rounded-full border border-stone-300 bg-white text-sm font-bold text-[#2C3E50] transition hover:border-[#7FB8C9] hover:bg-[#EAF7F7]"
            >
              Log in
            </Link>

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