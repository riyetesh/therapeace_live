"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Heart, Sparkles, Users } from "lucide-react";

const team = [
  {
    name: "Pooja Pantha",
    role: "Technical & Development",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85",
    description:
      "Turned the idea into something we could actually build, coordinating the technical and development work behind the platform.",
  },
  {
    name: "Manish Sharma",
    role: "Research & Development",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
    description:
      "Helped us understand the problem more deeply through research and shaped our thinking around what culturally relevant support could look like.",
  },
  {
    name: "Ritesh Yadav",
    role: "Co-Founder & CTO",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
    description:
      "Worked across analysis, web development, research and deployment, helping move the idea from conversations into a working product.",
  },
  {
    name: "Srijit Bashyal",
    role: "Therapist Relations",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=85",
    description:
      "Focused on the people at the heart of the platform, reaching out to therapists and exploring how a trusted therapist network could be built.",
  },
  {
    name: "Krishma Kunwar",
    role: "Marketing",
    number: "05",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=85",
    description:
      "Focused on how the idea could reach Nepali communities abroad and helped us think about the people we were ultimately building for.",
  },
];

export default function OurStory() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#20364A]">
      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#DDF3F4] blur-3xl" />
        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#FBE7D8] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E8F6F6] px-4 py-2 text-sm font-semibold tracking-wide text-[#238C98]">
              <Sparkles size={15} />
              OUR STORY
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.04em] md:text-7xl">
              Five friends.
              <br />
              One conversation.
              <br />
              <span className="text-[#2CA5AD]">One idea.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#607481] md:text-xl">
              Therapeace started with five friends from the same school
              talking about something we had seen around us: what happens to
              mental wellbeing when home suddenly feels very far away?
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#why"
                className="inline-flex items-center gap-2 rounded-full bg-[#2CA5AD] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                Our mission
                <ArrowRight size={17} />
              </a>

              <a
                href="#team"
                className="inline-flex items-center gap-2 rounded-full border border-[#B8CDD2] bg-white/70 px-6 py-3 font-semibold text-[#385564] transition hover:bg-white"
              >
                Meet the team
                <ArrowDown size={17} />
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="absolute -right-5 top-0 z-20 rotate-6 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-sm font-bold text-[#2CA5AD]">
                Same roots.
              </p>
              <p className="text-sm font-bold text-[#2C3E50]">
                Brighter tomorrows.
              </p>
              <Heart
                className="absolute -bottom-4 -right-4 fill-[#F5C8C0] text-[#E49A91]"
                size={25}
              />
            </div>

            <div className="relative overflow-hidden rounded-[3rem] rounded-bl-[8rem] rounded-tr-[8rem] bg-[#D9EFF0] p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=90"
                alt="Friends spending time together"
                className="h-[500px] w-full rounded-[2.5rem] rounded-bl-[7rem] rounded-tr-[7rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 rotate-[-7deg] rounded-2xl bg-[#FFF1C9] px-6 py-5 shadow-lg">
              <p className="text-sm font-bold text-[#50616A]">
                Ideas over chai ☕
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="relative bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
                THE WHY
              </p>

              <h2 className="text-5xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
                A shared
                <br />
                <span className="relative inline-block">
                  reality.
                  <span className="absolute bottom-0 left-0 h-2 w-full -rotate-2 rounded-full bg-[#F5D89A]" />
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-lg leading-8 text-[#657883]">
                Going abroad has become part of everyday life for many Nepali
                families. Friends leave for university. Siblings leave for
                work. Parents watch their children build lives thousands of
                kilometres away.
              </p>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#657883]">
                The opportunities are exciting. But the transition can also be
                difficult.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] bg-[#EFF8F7] p-8 md:p-12">
                <div className="mb-10 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#2CA5AD]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#607481]">
                    The question
                  </span>
                </div>

                <p className="text-3xl font-bold leading-tight text-[#243B4C] md:text-4xl">
                  “What if someone living abroad could speak to a therapist
                  who already understood where they came from?”
                </p>

                <div className="mt-10 h-px bg-[#C8DEDF]" />

                <p className="mt-8 text-lg leading-8 text-[#657883]">
                  That question stayed with us. We kept talking, researching
                  and eventually started building around it.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Culture", "Language", "Family", "Identity"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#47717B] shadow-sm"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="absolute -bottom-10 -right-5 hidden w-52 rotate-3 overflow-hidden rounded-3xl border-8 border-white shadow-xl md:block">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=85"
                  alt="Mountain landscape"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-3 text-center text-sm font-bold text-white">
                  Different places.
                  <br />
                  Same people.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-[#FCFAF7] py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              THE JOURNEY
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] md:text-5xl">
              From “what if?” to “let&apos;s build it.”
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#657883]">
              It was never one big moment. It was a series of small
              conversations, late-night ideas, research, experiments and
              decisions.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute bottom-0 left-[27px] top-0 w-px bg-[#C9DDDF] md:left-1/2" />

            {[
              {
                title: "The conversation",
                text: "Five friends from the same school started discussing the challenges faced by Nepalis living abroad.",
              },
              {
                title: "The research",
                text: "We began exploring the cultural and emotional gaps that can exist between people seeking support and the support available to them.",
              },
              {
                title: "The idea",
                text: "The concept became clearer: connect people abroad with therapists who understand their language and cultural background.",
              },
              {
                title: "The build",
                text: "We divided the work across development, research, therapist relations, analysis and marketing and started turning the idea into a product.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`relative mb-12 flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                <div className="w-full pl-16 md:w-[46%] md:pl-0">
                  <div className="rounded-3xl border border-[#E3E8E7] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-4 text-sm font-black text-[#2CA5AD]">
                      0{index + 1}
                    </div>

                    <h3 className="text-2xl font-bold">{item.title}</h3>

                    <p className="mt-3 leading-7 text-[#657883]">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className="absolute left-[16px] top-7 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#FCFAF7] bg-[#2CA5AD] md:left-1/2 md:-translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      {/* TEAM */}
<section id="team" className="bg-[#EAF7F7] py-28">
  <div className="mx-auto max-w-7xl px-6 md:px-10">
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
          THE PEOPLE
        </p>

        <h2 className="mt-4 max-w-3xl text-5xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
          Different skills.
          <br />
          <span className="text-[#2CA5AD]">Same purpose.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#607481]">
          Therapeace is built by five friends who came together around one
          shared belief: mental wellness support should feel closer to home.
        </p>
      </div>

      <a
        href="/team"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2C3E50] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#213342] hover:shadow-lg"
      >
        Meet our team
        <ArrowRight size={17} />
      </a>
    </div>

    <div className="mt-12 rounded-[2rem] border border-[#C8DEDF] bg-white p-8 shadow-sm md:p-10">
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm font-bold text-[#2CA5AD]">
            Behind the idea
          </p>

          <h3 className="mt-2 text-2xl font-black tracking-[-0.02em] text-[#243B4C]">
            Five friends. One shared mission.
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#657883]">
            From development and research to therapist relations and marketing,
            everyone brings something different to the table.
          </p>
        </div>

        <a
          href="/team"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#B8CDD2] bg-[#FCFAF7] px-5 py-3 text-sm font-bold text-[#385564] transition hover:border-[#2CA5AD] hover:bg-[#EAF7F7]"
        >
          See who we are
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </div>
</section>
      {/* BELIEF */}
      <section className="relative overflow-hidden bg-[#FFF5EE] py-32">
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#F8DCD0] blur-3xl" />
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#D7EFF0] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              WHAT WE BELIEVE
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Sometimes feeling understood is the first step toward feeling
              better.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#657883]">
              Therapeace was built around that belief. What started as a
              conversation between five friends became an idea we wanted to
              explore seriously: making mental wellness support feel a little
              closer to home.
            </p>

            <Link
              href="/therapists"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#2CA5AD] px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Therapeace
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[3rem] rounded-bl-[8rem] rounded-tr-[8rem] border-[10px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=90"
                alt="Person looking toward a mountain landscape"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white px-6 py-4 shadow-xl">
              <p className="text-sm font-bold text-[#2CA5AD]">
                For a kinder,
              </p>
              <p className="text-sm font-bold text-[#243B4C]">
                brighter tomorrow.
              </p>
            </div>

            <div className="absolute -right-4 -top-5 rotate-6 rounded-2xl bg-[#FFF0BD] px-5 py-4 shadow-lg">
              <Heart
                size={22}
                className="mx-auto mb-1 fill-[#E99B91] text-[#E99B91]"
              />
              <p className="text-xs font-black text-[#53636B]">
                You&apos;re not alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER STORY */}
      <section className="bg-[#20364A] px-6 py-20 text-center text-white">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8FD8DA]">
          OUR STORY IS STILL BEING WRITTEN
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.03em] md:text-5xl">
          Five friends. One shared belief.
          <br />
          <span className="text-[#8FD8DA]">Mental wellness should feel closer to home.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-[#B7C9D0]">
          Therapeace began with a conversation. The next chapter is about the
          people we hope to help.
        </p>
      </section>
    </main>
  );
}
