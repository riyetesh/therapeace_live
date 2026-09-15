"use client";

import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FCFAF7] text-[#2C3E50]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#DDF3F4] opacity-70 blur-3xl" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#F9E5D8] opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7FB8C9]/30 bg-white/70 px-4 py-2 text-sm font-semibold text-[#54707B] shadow-sm backdrop-blur">
              <MessageCircle size={16} className="text-[#2CA5AD]" />
              Get in touch
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1] tracking-[-0.045em] md:text-7xl">
              Let&apos;s talk.
              <br />
              <span className="text-[#2CA5AD]">We&apos;re listening.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#607481] md:text-xl">
              Whether you have a question, an idea, or simply want to learn
              more about Therapeace, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2CA5AD]">
              CONTACT
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] md:text-5xl">
              Have something to say?
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-[#657883]">
              We&apos;re building Therapeace with people, not just for people.
              Your questions and feedback help us make the experience better.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF7F7]">
                  <Mail size={20} className="text-[#2CA5AD]" />
                </div>

                <div>
                  <p className="font-bold">Email us</p>
                  <p className="mt-1 text-sm text-[#657883]">
                    riteshydv30@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EC]">
                  <MapPin size={20} className="text-[#D58D7E]" />
                </div>

                <div>
                  <p className="font-bold">Based in</p>
                  <p className="mt-1 text-sm text-[#657883]">
                    Nepal · Built for people everywhere
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm md:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7F7]">
                  <Send size={26} className="text-[#2CA5AD]" />
                </div>

                <h2 className="mt-6 text-3xl font-black">
                  Message received.
                </h2>

                <p className="mt-3 max-w-md leading-7 text-[#657883]">
                  Thanks for reaching out. The contact backend is currently
                  being developed, but your message has been captured in this
                  demo.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-stone-300 px-6 py-3 text-sm font-bold text-[#2C3E50] transition hover:bg-stone-50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2CA5AD]">
                    SEND A MESSAGE
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">
                    How can we help?
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#2C3E50]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#9AA7AC] focus:border-[#7FB8C9] focus:ring-4 focus:ring-[#EAF7F7]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[#2C3E50]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#9AA7AC] focus:border-[#7FB8C9] focus:ring-4 focus:ring-[#EAF7F7]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-[#2C3E50]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us what&apos;s on your mind..."
                      className="w-full resize-none rounded-xl border border-stone-200 bg-[#FCFAF7] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#9AA7AC] focus:border-[#7FB8C9] focus:ring-4 focus:ring-[#EAF7F7]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2C3E50] px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#213342] hover:shadow-xl"
                  >
                    Send message
                    <Send
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>

                <p className="mt-5 text-center text-xs leading-5 text-[#8A989D]">
                  We respect your privacy. Your information will only be used
                  to respond to your enquiry.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}