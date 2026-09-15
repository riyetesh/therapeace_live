import Link from "next/link";
import {
  ArrowRight,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const stories = [
  {
    quote:
      "Moving abroad made me realise how much I missed being able to talk to someone who understood where I was coming from.",
    name: "Community member",
    detail: "Living abroad",
    location: "Europe",
  },
  {
    quote:
      "Sometimes you don't need someone to have the exact same experience. You just need them to understand why it matters to you.",
    name: "Community member",
    detail: "International student",
    location: "Finland",
  },
  {
    quote:
      "Being able to express yourself in the language you grew up with can make a difficult conversation feel a little easier.",
    name: "Community member",
    detail: "Living abroad",
    location: "Northern Europe",
  },
];

export default function Stories() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#2C3E50]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#DDF3F4] opacity-70 blur-3xl" />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#F9E5D8] opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7FB8C9]/30 bg-white/70 px-4 py-2 text-sm font-semibold text-[#54707B] shadow-sm backdrop-blur">
              <Sparkles size={15} className="text-[#2CA5AD]" />
              Community stories
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.045em] md:text-7xl">
              Every journey
              <br />
              <span className="text-[#2CA5AD]">is different.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#607481] md:text-xl">
              Stories from people navigating life, identity and mental
              wellbeing while living away from home.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center md:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              WHY STORIES MATTER
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
              You are not the only one figuring it out.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#607481]">
              Moving to another country can change the way you communicate,
              connect and understand yourself. Community stories can remind us
              that those experiences are shared by more people than we realise.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[3rem] bg-[#EAF7F7] p-3">
              <div className="rounded-[2.5rem] bg-white p-8 shadow-sm md:p-10">
                <MessageCircle
                  size={30}
                  className="text-[#2CA5AD]"
                />

                <blockquote className="mt-6 text-2xl font-black leading-tight tracking-[-0.025em] md:text-3xl">
                  “Sometimes being understood starts with knowing that someone
                  else has felt it too.”
                </blockquote>

                <div className="mt-7 h-1 w-14 rounded-full bg-[#F4D998]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="bg-[#FCFAF7] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
                FROM THE COMMUNITY
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] md:text-5xl">
                Stories worth sharing
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-[#657883]">
                Real experiences around belonging, moving abroad and finding
                support.
              </p>
            </div>

            <span className="rounded-full bg-[#EAF7F7] px-4 py-2 text-sm font-semibold text-[#54707B]">
              Coming soon
            </span>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stories.map((story, index) => (
              <article
                key={index}
                className="group rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF7F7]">
                  <Heart
                    size={20}
                    className="fill-[#2CA5AD] text-[#2CA5AD]"
                  />
                </div>

                <blockquote className="mt-7 text-lg font-semibold leading-8 text-[#3B505D]">
                  “{story.quote}”
                </blockquote>

                <div className="mt-8 border-t border-stone-100 pt-5">
                  <p className="font-black text-[#2C3E50]">
                    {story.name}
                  </p>

                  <p className="mt-1 text-sm text-[#718087]">
                    {story.detail}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#8A989E]">
                    <MapPin size={13} />
                    {story.location}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMIT STORY */}
      <section className="bg-[#EAF7F7] py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-sm">
            <MessageCircle
              size={27}
              className="text-[#2CA5AD]"
            />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
            YOUR STORY MATTERS
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Want to share your experience?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#657883]">
            We&apos;re building a space where people living abroad can share
            their experiences and help others feel a little less alone.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#2C3E50] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#213342] hover:shadow-xl"
          >
            Get in touch
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
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
            Looking for support of your own?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#657883]">
            Explore therapists who understand that your cultural background is
            part of your story.
          </p>

          <Link
            href="/therapists"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#2CA5AD] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Find a therapist
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