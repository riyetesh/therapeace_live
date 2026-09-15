import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Filter,
  Heart,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

import TherapistCard from "@/components/TherapistCard";
import { therapists } from "@/components/data";

export default function Therapists() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FCFAF7] text-[#2C3E50]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#DDF3F4] opacity-70 blur-3xl" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#F9E5D8] opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7FB8C9]/30 bg-white/70 px-4 py-2 text-sm font-semibold text-[#54707B] shadow-sm backdrop-blur">
              <Sparkles size={15} className="text-[#2CA5AD]" />
              Therapist directory
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1] tracking-[-0.045em] md:text-6xl">
              Find someone who{" "}
              <span className="relative inline-block text-[#2CA5AD]">
                gets it.
                <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-2 rounded-full bg-[#F4D998]" />
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#607481] md:text-xl">
              Explore therapists based on the things that matter to you —
              from language and cultural background to specialty, pricing and
              availability.
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-sm text-[#607481]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#2CA5AD]" />
                Compare therapists
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#2CA5AD]" />
                Find your language
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#2CA5AD]" />
                Choose your fit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="-mt-8 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-xl md:p-6">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-[#2CA5AD]" />

            <h2 className="font-bold">Find your match</h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {/* SEARCH */}
            <div className="relative md:col-span-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A989E]"
              />

              <input
                type="text"
                placeholder="Search therapists"
                className="h-12 w-full rounded-xl border border-stone-200 bg-[#FCFAF7] pl-11 pr-4 text-sm outline-none transition focus:border-[#7FB8C9] focus:ring-4 focus:ring-[#7FB8C9]/10"
              />
            </div>

            {/* SPECIALTY */}
            <select className="h-12 rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 text-sm text-[#526772] outline-none transition focus:border-[#7FB8C9] focus:ring-4 focus:ring-[#7FB8C9]/10">
              <option>All specialties</option>
              <option>Anxiety</option>
              <option>Relationships</option>
              <option>Stress</option>
              <option>Depression</option>
              <option>Trauma</option>
            </select>

            {/* LANGUAGE */}
            <select className="h-12 rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 text-sm text-[#526772] outline-none transition focus:border-[#7FB8C9] focus:ring-4 focus:ring-[#7FB8C9]/10">
              <option>All languages</option>
              <option>Nepali</option>
              <option>English</option>
              <option>Hindi</option>
            </select>

            {/* SORT */}
            <select className="h-12 rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 text-sm text-[#526772] outline-none transition focus:border-[#7FB8C9] focus:ring-4 focus:ring-[#7FB8C9]/10">
              <option>Recommended</option>
              <option>Price: Low to high</option>
              <option>Price: High to low</option>
              <option>Highest rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              THERAPISTS
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] md:text-4xl">
              Therapists you might connect with
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#718087]">
            <Filter size={16} />
            <span>{therapists.length} therapists</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="group transition duration-300 hover:-translate-y-2"
            >
              <TherapistCard t={therapist} />
            </div>
          ))}
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="border-y border-stone-200 bg-[#EAF7F7]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Heart
                  size={25}
                  className="fill-[#2CA5AD] text-[#2CA5AD]"
                />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
                MORE THAN A MATCH
              </p>

              <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                The right therapist can make you feel at home.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#607481]">
                When you&apos;re living abroad, finding someone who understands
                your language, culture and experiences can make opening up feel
                more natural.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <p className="text-3xl font-black text-[#2CA5AD]">01</p>
                <h3 className="mt-5 text-xl font-black">
                  Cultural context
                </h3>
                <p className="mt-2 leading-6 text-[#657883]">
                  Less explaining. More understanding.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <p className="text-3xl font-black text-[#2CA5AD]">02</p>
                <h3 className="mt-5 text-xl font-black">
                  Your language
                </h3>
                <p className="mt-2 leading-6 text-[#657883]">
                  Express yourself the way that feels natural.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <p className="text-3xl font-black text-[#2CA5AD]">03</p>
                <h3 className="mt-5 text-xl font-black">
                  Your preferences
                </h3>
                <p className="mt-2 leading-6 text-[#657883]">
                  Choose based on what matters to you.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <p className="text-3xl font-black text-[#2CA5AD]">04</p>
                <h3 className="mt-5 text-xl font-black">
                  Your pace
                </h3>
                <p className="mt-2 leading-6 text-[#657883]">
                  Take your time finding the right fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFF4EC] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Heart
              size={24}
              className="fill-[#2CA5AD] text-[#2CA5AD]"
            />
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Your search for the right support starts here.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#657883]">
            Find someone who understands where you come from — and where you
            are now.
          </p>

          <Link
            href="/our-story"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#2C3E50] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Learn about Therapeace
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}