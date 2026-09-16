import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart, Mail, ShieldCheck } from "lucide-react";

export default function ForgotPassword() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#FCFAF7]">
      {/* BACKGROUND */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#DDF3F4] opacity-70 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#F9E5D8] opacity-70 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-16 md:px-10 md:py-24">
        <div className="w-full max-w-md">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-xl md:p-9">

            {/* ICON */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7F7]">
              <Mail
                size={25}
                className="text-[#2CA5AD]"
              />
            </div>

            {/* HEADING */}
            <div className="mt-7">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2CA5AD]">
                ACCOUNT RECOVERY
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-[-0.035em]">
                Reset your password
              </h1>

              <p className="mt-3 text-sm leading-6 text-[#718087]">
                Enter the email address associated with your Therapeace account
                and we&apos;ll send you instructions to reset your password.
              </p>
            </div>

            {/* FORM */}
            <form className="mt-7">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-[#526772]"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9AA6AB]"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-xl border border-stone-200 bg-[#FCFAF7] pl-11 pr-4 text-sm text-[#2C3E50] outline-none transition placeholder:text-[#9AA6AB] focus:border-[#7FB8C9] focus:bg-white focus:ring-4 focus:ring-[#7FB8C9]/10"
                />
              </div>

              <button
                type="submit"
                className="group mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#2C3E50] font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#213342] hover:shadow-lg"
              >
                Send reset link

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* BACK TO LOGIN */}
            <Link
              href="/login"
              className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#607481] transition hover:text-[#2CA5AD]"
            >
              <ArrowLeft size={16} />
              Back to log in
            </Link>

            {/* PRIVACY */}
            <div className="mt-7 flex items-center justify-center gap-2 border-t border-stone-100 pt-6 text-xs text-[#8A989E]">
              <ShieldCheck size={15} className="text-[#2CA5AD]" />
              Your account information stays private.
            </div>
          </div>

          {/* BRAND */}
          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-[#8A989E]">
            <Heart
              size={15}
              className="fill-[#2CA5AD] text-[#2CA5AD]"
            />
            <span>
              Therapeace, mental wellness without the cultural distance.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
