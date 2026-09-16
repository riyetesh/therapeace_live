import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FCFAF7] px-6 py-16 text-[#2C3E50] md:px-10 md:py-24">
      <article className="mx-auto max-w-3xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2CA5AD]">Therapeace</p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[#718087]">Last updated September 2026</p>
        <div className="mt-10 flex flex-col gap-8 leading-8 text-[#607481]">
          <section><h2 className="text-xl font-black text-[#2C3E50]">Our approach</h2><p className="mt-2">We believe mental wellness products should be clear, respectful, and privacy-conscious. This prototype does not claim to provide account, booking, or payment persistence while those systems are paused.</p></section>
          <section><h2 className="text-xl font-black text-[#2C3E50]">Information you share</h2><p className="mt-2">Only share information you are comfortable providing through the site. Do not submit sensitive health information through contact forms or other demo surfaces unless the relevant feature explicitly says it is protected.</p></section>
          <section><h2 className="text-xl font-black text-[#2C3E50]">Questions</h2><p className="mt-2">For privacy questions, visit our contact page. We will communicate clearly about any future data collection before account or booking features return.</p></section>
        </div>
        <Link href="/signup" className="mt-10 inline-flex rounded-full bg-[#2C3E50] px-5 py-3 text-sm font-bold text-white">Back to sign up</Link>
      </article>
    </main>
  );
}
