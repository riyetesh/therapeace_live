import Link from "next/link";

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FCFAF7] px-6 py-16 text-[#2C3E50] md:px-10 md:py-24">
      <article className="mx-auto max-w-3xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2CA5AD]">Therapeace</p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-[#718087]">Last updated September 2026</p>
        <div className="mt-10 flex flex-col gap-8 leading-8 text-[#607481]">
          <section><h2 className="text-xl font-black text-[#2C3E50]">A thoughtful starting point</h2><p className="mt-2">Therapeace helps you discover mental wellness resources and independent therapists. The platform is currently being redesigned, so booking features may be unavailable.</p></section>
          <section><h2 className="text-xl font-black text-[#2C3E50]">Not emergency care</h2><p className="mt-2">Therapeace is not a crisis service and does not replace emergency, medical, or psychiatric care. If you are in immediate danger, contact local emergency services or a crisis line in your country.</p></section>
          <section><h2 className="text-xl font-black text-[#2C3E50]">Using the site</h2><p className="mt-2">Please use the site respectfully and provide accurate information when features are available. Therapist profiles are informational and should be reviewed before making care decisions.</p></section>
        </div>
        <Link href="/signup" className="mt-10 inline-flex rounded-full bg-[#2C3E50] px-5 py-3 text-sm font-bold text-white">Back to sign up</Link>
      </article>
    </main>
  );
}
