import Link from "next/link";
import { notFound } from "next/navigation";
import { therapists } from "@/components/data";

export default async function Booking({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = therapists.find(x => x.id === id);
  if (!t) notFound();
  return <main className="mx-auto max-w-3xl px-6 py-16">
    <div className="rounded-3xl border border-stone-200 bg-white p-8 md:p-10">
      <p className="text-sm font-semibold text-[#7FB8C9]">Booking</p>
      <h1 className="mt-2 text-3xl font-bold">Book with {t.name}</h1>
      <p className="mt-3 text-[#5D737E]">Select an available time. You will be asked to sign in before the booking is confirmed.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">{["Tue · 18:00","Tue · 19:00","Wed · 19:30","Thu · 17:00"].map(x=><button key={x} className="rounded-2xl border border-stone-200 p-4 text-left hover:border-[#7FB8C9]">{x}<span className="block text-xs text-[#5D737E]">Available</span></button>)}</div>
      <Link href={`/login?next=/book/${t.id}`} className="mt-8 block rounded-full bg-[#2C3E50] px-6 py-4 text-center font-semibold text-white">Sign in to continue</Link>
    </div>
  </main>;
}