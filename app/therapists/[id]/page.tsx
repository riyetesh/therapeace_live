import Link from "next/link";

export default function TherapistProfile() {
  return (
    <main className="min-h-[75vh] bg-[#FCFAF7] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/therapists"
          className="text-sm font-semibold text-[#607481] transition hover:text-[#2CA5AD]"
        >
          ← Back to therapists
        </Link>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_12px_40px_rgba(44,62,80,0.06)]">
          <div className="px-7 py-12 text-center sm:px-12 sm:py-16">
            {/* ICON */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF7F7]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-9 w-9 text-[#2CA5AD]"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12M6 12h12"
                />
              </svg>
            </div>

            {/* BADGE */}
            <div className="mt-7 inline-flex rounded-full bg-[#FFF4EC] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#A46F4B]">
              Platform maintenance
            </div>

            {/* TITLE */}
            <h1 className="mx-auto mt-6 max-w-xl text-3xl font-black tracking-[-0.04em] text-[#2C3E50] sm:text-4xl">
              Therapist profiles are getting a little glow-up.
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#607481]">
              We’re currently redesigning Therapeace to make finding the right
              culturally aligned therapist simpler, warmer and more personal.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#7A898F]">
              Therapist profiles, bookings and appointments are temporarily
              unavailable while we work behind the scenes.
            </p>

            {/* STATUS */}
            <div className="mx-auto mt-9 max-w-md rounded-2xl bg-[#F7FAFA] p-5 text-left">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E6A93A]" />

                <div>
                  <p className="text-sm font-bold text-[#2C3E50]">
                    Bookings are currently paused
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#607481]">
                    We’ll reopen appointments once the new platform is ready.
                  </p>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/therapists"
                className="rounded-full bg-[#2C3E50] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#213342] hover:shadow-lg"
              >
                Browse therapists
              </Link>

              <Link
                href="/our-story"
                className="rounded-full border border-stone-200 bg-white px-6 py-3.5 text-sm font-bold text-[#2C3E50] transition hover:border-[#B8DDDF] hover:bg-[#EAF7F7]"
              >
                Our story
              </Link>
            </div>

            {/* FOOTNOTE */}
            <p className="mt-8 text-xs text-[#9AA7AC]">
              Thanks for being here while we build what’s next.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}