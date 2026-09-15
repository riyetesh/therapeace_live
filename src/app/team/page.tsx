import Image from "next/image";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { team } from "@/lib/data";

export default function TeamPage() {
  return <main>
    <section className="container-shell py-20 md:py-28"><p className="text-sm font-bold text-[#6b9698]">THE PEOPLE BEHIND THERAPEACE</p><h1 className="mt-5 max-w-4xl text-6xl font-semibold leading-[.92] tracking-[-.07em]">A small team, building a more human internet for mental health.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[#68787c]">Therapeace started as a product idea around cultural distance, diaspora and the difficulty of finding support that feels familiar.</p></section>
    <section className="container-shell pb-24"><div className="grid gap-6 md:grid-cols-2">{team.map((x,i)=><article key={x.name} className={`group overflow-hidden rounded-[34px] bg-white card-shadow ${i===0?"md:col-span-2 md:grid md:grid-cols-[.7fr_1.3fr]":""}`}><div className="relative min-h-[320px] bg-[#e1ebe7]"><Image src={x.image} alt={x.name} fill className="object-cover grayscale transition duration-500 group-hover:grayscale-0"/></div><div className="flex flex-col justify-between p-7 md:p-9"><div><p className="text-xs font-bold uppercase tracking-widest text-[#789497]">{x.role}</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">{x.name}</h2><p className="mt-5 max-w-md leading-7 text-[#6c7c80]">{x.bio}</p></div><a href={x.linkedin} target="_blank" rel="noreferrer" className="mt-8 flex w-fit items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold">LinkedIn <Linkedin size={15}/><ArrowUpRight size={14}/></a></div></article>)}</div></section>
  </main>;
}