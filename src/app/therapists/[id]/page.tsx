"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, LockKeyhole, Star } from "lucide-react";
import { therapists } from "@/lib/data";
import { getUser, BOOKING_KEY } from "@/lib/auth";

export default function Profile() {
  const {id}=useParams(); const router=useRouter(); const t=therapists.find(x=>x.id===id); const [date,setDate]=useState(""); const [time,setTime]=useState("");
  if(!t) return <main className="container-shell py-24 text-center"><h1 className="text-3xl font-bold">Therapist not found.</h1><Link href="/therapists" className="mt-5 inline-block underline">Back to directory</Link></main>;
  const therapist = t;
  function book(){ if(!date||!time){alert("Choose a date and time.");return} if(!getUser()){router.push(`/login?next=/therapists/${therapist.id}`);return} localStorage.setItem(BOOKING_KEY,JSON.stringify({therapist:therapist.name,date,time,price:therapist.price})); router.push("/dashboard"); }
  return <main className="container-shell py-12 md:py-20"><Link href="/therapists" className="mb-8 flex items-center gap-2 text-sm font-semibold text-[#64767a]"><ArrowLeft size={16}/> Back to therapists</Link>
    <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]"><section className="rounded-[34px] bg-white p-5 card-shadow"><div className="relative aspect-square overflow-hidden rounded-[27px]" style={{background:t.accent}}><Image src={t.image} alt={t.name} fill className="object-cover"/></div><div className="p-3 pt-6"><p className="text-sm font-bold text-[#729a9d]">{t.specialty}</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">{t.name}</h1><p className="mt-3 flex items-center gap-1 text-sm text-[#6f7e82]"><Star size={14} fill="currentColor"/> {t.rating} · {t.reviews} reviews</p><div className="mt-6 flex flex-wrap gap-2">{t.languages.map(l=><span key={l} className="rounded-full bg-[#f2f5f2] px-3 py-1.5 text-xs font-semibold">{l}</span>)}</div><p className="mt-6 text-sm leading-6 text-[#65767b]">{t.bio}</p></div></section>
      <section><div className="max-w-2xl"><p className="text-sm font-bold text-[#6b9698]">THERAPIST PROFILE</p><h2 className="mt-3 text-5xl font-semibold tracking-[-.06em]">A supportive space<br/>to talk.</h2><p className="mt-6 text-lg leading-8 text-[#66777b]">Choose a time that works for you. This prototype keeps the booking flow intentionally lightweight.</p></div>
      <div className="mt-9 rounded-[32px] bg-white p-7 card-shadow"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-[#e4eee9]"><CalendarDays size={18}/></div><div><h3 className="font-bold">Book a session</h3><p className="text-xs text-[#819094]">€{t.price} · 50 minutes</p></div></div><label className="mt-7 block text-sm font-semibold">Choose a date<input type="date" value={date} onChange={e=>setDate(e.target.value)} className="mt-2 w-full rounded-2xl bg-[#f4f6f3] p-3.5 outline-none focus:ring-2 focus:ring-[#a6cfcd]"/></label><div className="mt-6"><p className="text-sm font-semibold">Available times</p><div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">{t.availability.map(x=><button type="button" key={x} onClick={()=>setTime(x)} className={`flex items-center justify-center gap-1.5 rounded-xl border px-3 py-3 text-sm font-semibold ${time===x?"border-[#20373b] bg-[#20373b] text-white":"border-black/10 bg-white hover:bg-[#f4f6f3]"}`}><Clock3 size={14}/>{x}</button>)}</div></div><button onClick={book} className="mt-7 w-full rounded-2xl bg-[#9fcfd0] py-3.5 font-bold text-[#20373b] hover:brightness-95">Confirm booking · €{t.price}</button><p className="mt-4 flex justify-center gap-1.5 text-center text-xs text-[#8a9699]"><LockKeyhole size={13}/> You’ll need an account to complete booking.</p></div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">{["Culturally aware","Online sessions","Clear pricing"].map(x=><div key={x} className="rounded-2xl bg-[#e9f0ec] p-4 text-sm font-semibold"><CheckCircle2 size={16} className="mb-3"/>{x}</div>)}</div></section>
    </div>
  </main>;
}