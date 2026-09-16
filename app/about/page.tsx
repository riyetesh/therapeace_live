import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Languages,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#2C3E50]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#DDF3F4] opacity-70 blur-3xl" />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#F9E5D8] opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7FB8C9]/30 bg-white/70 px-4 py-2 text-sm font-semibold text-[#54707B] shadow-sm backdrop-blur">
              <Sparkles size={15} className="text-[#2CA5AD]" />
              About Therapeace
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.045em] md:text-7xl">
              Mental wellness with{" "}
              <span className="relative inline-block text-[#2CA5AD]">
                understanding
                <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-2 rounded-full bg-[#F4D998]" />
              </span>{" "}
              at the centre.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#607481] md:text-xl">
              Therapeace is built around a simple idea: getting mental wellness
              support should not mean leaving your culture, language or
              identity at the door.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center md:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              OUR PURPOSE
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
              Support should feel human, familiar and accessible.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#607481]">
              Living abroad can be exciting, but it can also bring unfamiliar
              routines, languages, social environments and expectations.
              Finding mental wellness support that understands those
              experiences can make reaching out feel easier.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#607481]">
              Therapeace is designed to help people discover therapists based
              on the things that matter to them, including language, cultural
              background, specialty, reviews, pricing and availability.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[3rem] bg-[#EAF7F7] p-3 shadow-xl">
              <div className="rounded-[2.5rem] bg-white p-8 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7F7]">
                  <Heart
                    size={25}
                    className="fill-[#2CA5AD] text-[#2CA5AD]"
                  />
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  A little closer to home.
                </h3>

                <p className="mt-4 leading-7 text-[#657883]">
                  Because sometimes the difference between feeling heard and
                  feeling truly understood is context.
                </p>

                <div className="mt-7 h-1 w-16 rounded-full bg-[#2CA5AD]" />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-[#FFF0C8] px-5 py-4 shadow-lg sm:block">
              <p className="text-xs font-semibold text-[#718087]">
                Your identity
              </p>
              <p className="mt-1 text-sm font-black">
                Belongs in the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM + PRODUCT */}
      <section className="bg-[#FCFAF7] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              WHY WE EXIST
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] md:text-5xl">
              We are building around a gap worth closing.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* PROBLEM */}
            <div className="group rounded-[2rem] border border-stone-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0EC]">
                <Users size={24} className="text-[#D98778]" />
              </div>

              <h3 className="mt-7 text-2xl font-black">
                The problem
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#657883]">
                People living abroad can face language, cultural and social
                barriers when looking for mental wellness support. Finding
                someone who understands those complexities can make the first
                step easier.
              </p>
            </div>

            {/* PRODUCT */}
            <div className="group rounded-[2rem] border border-stone-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7F7]">
                <Sparkles size={24} className="text-[#2CA5AD]" />
              </div>

              <h3 className="mt-7 text-2xl font-black">
                The product
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#657883]">
                Therapeace is designed around informed choice: discover
                therapists, compare what matters to you, find the right fit
                and book simply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className="bg-[#EAF7F7] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
                WHAT MATTERS
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                Culture isn&apos;t an extra filter. It&apos;s part of the
                experience.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#607481]">
                The way we communicate, understand relationships and make
                sense of our experiences can be shaped by where we come from.
                Therapeace puts that context closer to the centre of finding
                support.
              </p>

              <Link
                href="/therapists"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#2C3E50] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#213342] hover:shadow-xl"
              >
                Find your therapist
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <Languages size={23} className="text-[#2CA5AD]" />

                <h3 className="mt-6 text-xl font-black">
                  Language
                </h3>

                <p className="mt-2 leading-6 text-[#657883]">
                  Communicate in a language that feels natural to you.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <Heart size={23} className="text-[#2CA5AD]" />

                <h3 className="mt-6 text-xl font-black">
                  Culture
                </h3>

                <p className="mt-2 leading-6 text-[#657883]">
                  Find support where cultural context is understood.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <ShieldCheck size={23} className="text-[#2CA5AD]" />

                <h3 className="mt-6 text-xl font-black">
                  Privacy
                </h3>

                <p className="mt-2 leading-6 text-[#657883]">
                  A thoughtful experience designed around your wellbeing.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <CheckCircle2 size={23} className="text-[#2CA5AD]" />

                <h3 className="mt-6 text-xl font-black">
                  Choice
                </h3>

                <p className="mt-2 leading-6 text-[#657883]">
                  Make an informed decision about who feels right for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              OUR APPROACH
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] md:text-5xl">
              Simple by design. Thoughtful by default.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#657883]">
              We believe finding mental wellness support should feel less like
              navigating a system and more like making a meaningful choice.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-stone-200 bg-[#FCFAF7] p-8">
              <span className="text-sm font-black text-[#2CA5AD]">01</span>

              <h3 className="mt-8 text-2xl font-black">
                Discover
              </h3>

              <p className="mt-3 leading-7 text-[#657883]">
                Explore therapists and the qualities that make each one
                different.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-[#FCFAF7] p-8">
              <span className="text-sm font-black text-[#2CA5AD]">02</span>

              <h3 className="mt-8 text-2xl font-black">
                Compare
              </h3>

              <p className="mt-3 leading-7 text-[#657883]">
                Consider language, specialty, reviews, pricing and
                availability.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-[#FCFAF7] p-8">
              <span className="text-sm font-black text-[#2CA5AD]">03</span>

              <h3 className="mt-8 text-2xl font-black">
                Connect
              </h3>

              <p className="mt-3 leading-7 text-[#657883]">
                Take the next step when you find someone who feels right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FFF4EC] py-24">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F6D8CA] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D8EFF0] blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-lg">
            <Heart
              size={28}
              className="fill-[#2CA5AD] text-[#2CA5AD]"
            />
          </div>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
            Your background is part of your story.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#657883]">
            Find mental wellness support that understands there&apos;s more to
            you than a diagnosis.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/therapists"
              className="group inline-flex items-center gap-2 rounded-full bg-[#2C3E50] px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#213342] hover:shadow-xl"
            >
              Find a therapist
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/our-story"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-7 py-4 font-bold text-[#2C3E50] transition hover:-translate-y-1 hover:shadow-md"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
