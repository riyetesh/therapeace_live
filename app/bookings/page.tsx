import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Heart,
  ShieldCheck,
} from "lucide-react";

export default function Bookings() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#FCFAF7] text-[#2C3E50]">
      {/* BACKGROUND */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#DDF3F4] opacity-70 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F9E5D8] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-lg">
            <CalendarDays
              size={28}
              className="text-[#2CA5AD]"
            />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
            MY BOOKINGS
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Your sessions,
            <br />
            <span className="text-[#2CA5AD]">all in one place.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#607481]">
            Once booking is live, you&apos;ll be able to view upcoming
            sessions, manage appointments and keep track of your Therapeace
            journey here.
          </p>
        </div>

        {/* COMING SOON CARD */}
        <div className="mx-auto mt-14 max-w-4xl rounded-[2.5rem] border border-stone-200 bg-white p-7 shadow-xl md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0C8] px-4 py-2 text-xs font-bold text-[#806B32]">
                <Clock3 size={14} />
                Coming soon
              </div>

              <h2 className="mt-6 text-2xl font-black md:text-3xl">
                Booking management is currently being developed.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#657883]">
                We&apos;re working on making it simple to book, reschedule and
                manage your therapy sessions. Your bookings will appear here
                once the booking system is live.
              </p>

              <Link
                href="/therapists"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#2C3E50] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#213342] hover:shadow-lg"
              >
                Find a therapist
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="hidden h-28 w-28 items-center justify-center rounded-[2rem] bg-[#EAF7F7] md:flex">
              <CalendarDays
                size={45}
                strokeWidth={1.5}
                className="text-[#2CA5AD]"
              />
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
            <CheckCircle2
              size={22}
              className="text-[#2CA5AD]"
            />

            <h3 className="mt-5 font-black">
              Upcoming sessions
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#718087]">
              See your confirmed appointments and session details.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
            <CalendarDays
              size={22}
              className="text-[#2CA5AD]"
            />

            <h3 className="mt-5 font-black">
              Manage appointments
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#718087]">
              Reschedule or manage your sessions from one place.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
            <ShieldCheck
              size={22}
              className="text-[#2CA5AD]"
            />

            <h3 className="mt-5 font-black">
              Private & secure
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#718087]">
              Your appointment information should remain private and secure.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 text-sm text-[#8A989E]">
            <Heart
              size={15}
              className="fill-[#2CA5AD] text-[#2CA5AD]"
            />
            Therapeace — mental wellness without the cultural distance.
          </div>

          <Link
            href="/"
            className="text-sm font-bold text-[#2CA5AD] transition hover:text-[#238B91]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}