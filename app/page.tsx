import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Heart,
  Languages,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { therapists } from "@/components/data";
import TherapistCard from "@/components/TherapistCard";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F8F7F3] text-[#243746]">
      {/* HERO */}
      <section className="relative min-h-[720px] overflow-hidden">
        <div className="absolute left-0 top-0 h-px w-24 bg-[#2CA5AD] md:w-40" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.05fr_.95fr] md:px-10 md:py-28">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="motion-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7FB8C9]/30 bg-white/70 px-4 py-2 text-sm font-semibold text-[#54707B] shadow-sm backdrop-blur">
              <Sparkles size={15} className="text-[#2CA5AD]" />
              Mental wellness, with context
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] md:text-7xl">
              Find support that feels{" "}
              <span className="relative inline-block text-[#2CA5AD]">
                familiar
                <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-2 rounded-full bg-[#F4D998]" />
              </span>{" "}
              wherever you are.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#607481] md:text-xl">
              Therapeace connects people living abroad with therapists from
              their own cultural and linguistic background — making mental
              wellness support feel a little closer to home.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/therapists"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2C3E50] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#213342] hover:shadow-xl"
              >
                Find your therapist
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-4 font-bold text-[#344C5B] transition hover:-translate-y-1 hover:bg-stone-50"
              >
                Our story
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#607481]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#2CA5AD]" />
                Cultural understanding
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#2CA5AD]" />
                Language-aware support
              </div>
            </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="motion-scale motion-scale-delay-2 relative mx-auto w-full max-w-xl">
            <div className="motion-rise motion-rise-delay-3 absolute -right-5 top-4 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7F7F6]">
                  <Heart
                    size={18}
                    className="fill-[#2CA5AD] text-[#2CA5AD]"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#84939A]">
                    Your wellbeing
                  </p>
                  <p className="text-sm font-black">Comes first.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[3.5rem] rounded-bl-[9rem] rounded-tr-[9rem] bg-[#D9EFF0] p-3 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=90"
                alt="Friends talking together"
                width={1200}
                height={800}
                className="h-[520px] w-full rounded-[3rem] rounded-bl-[8rem] rounded-tr-[8rem] object-cover"
              />

              <div className="absolute inset-3 rounded-[3rem] rounded-bl-[8rem] rounded-tr-[8rem] bg-gradient-to-t from-[#172B38]/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-7 -left-8 rounded-2xl bg-[#FFF0C8] px-5 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <Languages size={22} className="text-[#54707B]" />

                <div>
                  <p className="text-xs font-semibold text-[#718087]">
                    Speak your language
                  </p>

                  <p className="text-sm font-black text-[#2C3E50]">
                    Feel understood.
                  </p>
                </div>
              </div>
            </div>

            <div className="motion-float absolute -bottom-3 right-8 flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl bg-white shadow-lg">
              <Heart
                size={28}
                className="fill-[#F0B7AD] text-[#E29A90]"
              />
            </div>
          </div>
        </div>

        <a
          href="#how-it-works"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold text-[#819198] md:flex"
        >
          <span>Explore</span>
          <ArrowDown size={16} />
        </a>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-y border-stone-200 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              HOW IT WORKS
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] md:text-5xl">
              Finding the right support shouldn&apos;t feel complicated.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#657883]">
              We keep the process simple so you can focus on finding someone
              who feels right for you.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: Search,
                title: "Choose your therapist",
                text: "Explore therapists by specialty, language, reviews, pricing and availability.",
              },
              {
                number: "02",
                icon: Users,
                title: "Find your fit",
                text: "Search, sort and filter around the things that matter most to you.",
              },
              {
                number: "03",
                icon: CalendarCheck,
                title: "Book simply",
                text: "Choose an available time and continue securely when you're ready.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="motion-rise motion-rise-delay-1 group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-[#FCFAF7] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#9ACDD1] hover:shadow-xl"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#E8F6F6] transition duration-500 group-hover:scale-150" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-[#2CA5AD]">
                        {step.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <Icon size={22} className="text-[#2CA5AD]" />
                      </div>
                    </div>

                    <h3 className="mt-10 text-2xl font-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#657883]">
                      {step.text}
                    </p>

                    <div className="mt-7 h-1 w-10 rounded-full bg-[#2CA5AD] transition-all duration-500 group-hover:w-20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THERAPIST DIRECTORY */}
      <section className="bg-[#FCFAF7] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
                FIND YOUR FIT
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] md:text-5xl">
                Start with someone who gets it.
              </h2>

              <p className="mt-4 max-w-xl text-lg text-[#657883]">
                Browse profiles and discover therapists based on what matters
                to you.
              </p>
            </div>

            <Link
              href="/therapists"
              className="group inline-flex items-center gap-2 font-bold text-[#2CA5AD]"
            >
              View all therapists
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {therapists.slice(0, 3).map((therapist) => (
              <div
                key={therapist.id}
                className="transition duration-500 hover:-translate-y-2"
              >
<TherapistCard t={therapist} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THERAPEACE */}
      <section className="bg-[#EAF7F7] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
                WHY THERAPEACE
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                You shouldn&apos;t have to explain your culture before you can
                talk about your wellbeing.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#607481]">
                Moving abroad can change almost everything around you — your
                language, routines, relationships and environment. Your need
                to feel understood doesn&apos;t have to change with it.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#2C3E50] px-6 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                Learn about Therapeace
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Languages,
                  title: "Your language",
                  text: "Communication that feels natural and familiar.",
                },
                {
                  icon: Heart,
                  title: "Your culture",
                  text: "Context that doesn't need a long explanation.",
                },
                {
                  icon: ShieldCheck,
                  title: "Your privacy",
                  text: "A space designed around your wellbeing.",
                },
                {
                  icon: Sparkles,
                  title: "Your journey",
                  text: "Support that starts where you are.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[2rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7F7] transition group-hover:scale-110">
                      <Icon size={22} className="text-[#2CA5AD]" />
                    </div>

                    <h3 className="mt-6 text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-6 text-[#657883]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY CTA */}
      <section className="relative overflow-hidden bg-[#FFF4EC] py-28">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F6D8CA] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D8EFF0] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-lg">
            <Heart
              size={28}
              className="fill-[#2CA5AD] text-[#2CA5AD]"
            />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
            A LITTLE CLOSER TO HOME
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
            Because sometimes, being understood makes all the difference.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#657883]">
            Therapeace began with five friends asking one simple question.
            Explore the story behind the idea.
          </p>

          <Link
            href="/our-story"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#2CA5AD] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Read our story
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 text-sm text-[#657883] md:flex-row md:items-center md:px-10">
          <div>
            <p className="font-black text-[#2C3E50]">therapeace.</p>

            <p className="mt-1">
              Mental wellness, without the cultural distance.
            </p>
          </div>

          <div className="flex gap-5">
            <Link
              href="/about"
              className="transition hover:text-[#2CA5AD]"
            >
              About
            </Link>

            <Link
              href="/our-story"
              className="transition hover:text-[#2CA5AD]"
            >
              Our Story
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-[#2CA5AD]"
            >
              Contact
            </Link>
          </div>

          <p>© {new Date().getFullYear()} Therapeace</p>
        </div>
      </footer>
    </main>
  );
}
