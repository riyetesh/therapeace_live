"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Languages, MapPin, Star } from "lucide-react";
import { formatPrice, type Currency } from "@/components/currency";

export type Therapist = {
  id: string; name: string; title: string; location: string; country: string;
  specialties: string[]; languages: string[]; rating: number; reviews: number;
  price: number; availability: string; image: string;
};

export default function TherapistCard({ t, currency = "EUR" }: { t: Therapist; currency?: Currency }) {
  const [saved, setSaved] = useState(false);
  return (
    <article className="motion-rise group overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white shadow-[0_8px_30px_rgba(44,62,80,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#B8DDDF] hover:shadow-[0_20px_50px_rgba(44,62,80,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative h-[280px] overflow-hidden bg-[#EAF7F7]">
        <Image src={t.image} alt={`${t.name}, ${t.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172B38]/50 via-transparent to-[#172B38]/5" />
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-[#2C3E50] shadow-sm backdrop-blur-md"><span className="size-2 rounded-full bg-[#4CB7A5]" />{t.availability}</div>
        <button type="button" aria-label={`${saved ? "Remove" : "Save"} ${t.name} ${saved ? "from favourites" : "to favourites"}`} aria-pressed={saved} onClick={() => setSaved((value) => !value)} className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-white/95 text-[#607481] shadow-sm backdrop-blur-md transition hover:scale-105 hover:text-[#2CA5AD] motion-reduce:transition-none"><Heart size={19} strokeWidth={2} className={saved ? "fill-[#2CA5AD] text-[#2CA5AD]" : ""} /></button>
        <div className="absolute bottom-5 left-5 flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-sm font-bold text-[#2C3E50] shadow-sm"><Star size={14} className="fill-[#E6A93A] text-[#E6A93A]" />{t.rating}<span className="font-medium text-[#7A898F]">({t.reviews})</span></div>
      </div>
      <div className="p-6">
        <h3 className="text-[22px] font-black tracking-[-0.035em] text-[#2C3E50]">{t.name}</h3>
        <p className="mt-1 text-sm font-semibold text-[#2CA5AD]">{t.title}</p>
        <div className="mt-3 flex items-center gap-1.5 text-sm text-[#7A898F]"><MapPin size={15} className="text-[#2CA5AD]" />{t.location}</div>
        <div className="mt-5 flex flex-wrap gap-2">{t.specialties.slice(0, 3).map((specialty) => <span key={specialty} className="rounded-full bg-[#EAF7F7] px-3 py-1.5 text-xs font-semibold text-[#54707B]">{specialty}</span>)}</div>
        <div className="mt-5 flex items-start gap-2.5 border-t border-stone-100 pt-5"><Languages size={17} className="mt-0.5 shrink-0 text-[#2CA5AD]" /><div><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9AA7AC]">Languages</p><p className="mt-1 text-sm font-medium text-[#607481]">{t.languages.join(" · ")}</p></div></div>
        <div className="mt-6 flex items-center justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9AA7AC]">Session</p><p className="mt-1 text-lg font-black text-[#2C3E50]">{formatPrice(t.price, currency)}<span className="ml-1 text-xs font-medium text-[#7A898F]">/ session</span></p></div><Link href={`/therapists/${t.id}`} className="group/button inline-flex items-center gap-2 rounded-full bg-[#2C3E50] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#213342] hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">View profile <span className="transition-transform duration-300 group-hover/button:translate-x-0.5 motion-reduce:transition-none">→</span></Link></div>
      </div>
    </article>
  );
}
