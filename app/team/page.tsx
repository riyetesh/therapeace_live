import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Linkedin, Sparkles } from "lucide-react";

const team = [
  {
    name: "Ritesh Yadav",
    role: "Co-Founder & CTO",
    image: "/team/ritesh.jpg",
    description:
      "Leads the technology and product direction behind Therapeace.",
  },
  {
    name: "Pooja Pantha",
    role: "Co-Founder & Head of Development",
    image: "/team/pooja.jpg",
    description:
      "Shapes the technical foundations and development of the platform.",
  },
  {
    name: "Manish Sharma",
    role: "Co-Founder & Head of Research & Development",
    image: "/team/manish.jpg",
    description:
      "Drives research, product thinking and the development of new ideas.",
  },
  {
    name: "Raj Kasaudhan",
    role: "Co-Founder & Head of Therapist Relations",
    image: "/team/raj.jpg",
    description:
      "Builds relationships with therapists and helps shape the provider experience.",
  },
  {
    name: "Krishma Kunwar",
    role: "Co-Founder & Head of Marketing",
    image: "/team/krishma.jpg",
    description:
      "Leads the brand, communication and community around Therapeace.",
  },
];

export default function Team() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#2C3E50]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#DDF3F4] opacity-70 blur-3xl" />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#F9E5D8] opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7FB8C9]/30 bg-white/70 px-4 py-2 text-sm font-semibold text-[#54707B] shadow-sm backdrop-blur">
              <Sparkles size={15} className="text-[#2CA5AD]" />
              The people behind Therapeace
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.045em] md:text-7xl">
              Five people.
              <br />
              <span className="text-[#2CA5AD]">One shared belief.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#607481] md:text-xl">
              We believe mental wellness support should understand the person
              behind the problem — including their culture, language and
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              FOUNDING TEAM
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] md:text-5xl">
              Meet the team
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#657883]">
              A multidisciplinary team bringing together technology, research,
              therapist relationships and storytelling.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* PHOTO */}
              <div className="relative h-64 overflow-hidden bg-[#EAF7F7]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#172B38]/50 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#2C3E50] opacity-0 shadow-sm transition duration-300 group-hover:opacity-100">
                  <Linkedin size={16} />
                </div>
              </div>

              {/* DETAILS */}
              <div className="p-6">
                <h3 className="text-lg font-black tracking-tight">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-bold leading-5 text-[#2CA5AD]">
                  {member.role}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#718087]">
                  {member.description}
                </p>

                <div className="mt-5 h-1 w-8 rounded-full bg-[#2CA5AD] transition-all duration-300 group-hover:w-14" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TEAM PHILOSOPHY */}
      <section className="bg-[#EAF7F7] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Heart
                  size={25}
                  className="fill-[#2CA5AD] text-[#2CA5AD]"
                />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
                WHAT BRINGS US TOGETHER
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                We&apos;re building something we wish existed.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#607481]">
                Therapeace started with a shared observation: finding mental
                wellness support can be difficult when you are far from the
                culture and community you know.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#607481]">
                Our goal is to make that journey more human, more informed and
                more culturally aware.
              </p>
            </div>

            <div className="rounded-[3rem] bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
                OUR BELIEF
              </p>

              <blockquote className="mt-6 text-3xl font-black leading-tight tracking-[-0.035em] md:text-4xl">
                “You shouldn&apos;t have to explain where you come from before
                you can explain how you feel.”
              </blockquote>

              <div className="mt-8 h-1 w-16 rounded-full bg-[#F4D998]" />
            </div>
          </div>
        </div>
      </section>

      {/* STORY CTA */}
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
            Curious about how it all started?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#657883]">
            Meet the people behind the idea and discover the story that brought
            Therapeace together.
          </p>

          <Link
            href="/our-story"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#2C3E50] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#213342] hover:shadow-xl"
          >
            Read our story

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
