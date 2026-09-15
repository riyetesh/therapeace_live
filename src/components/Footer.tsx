import Link from "next/link";
export function Footer() {
  return <footer className="border-t border-black/[.06] bg-white">
    <div className="container-shell flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
      <div><Link href="/" className="text-xl font-bold tracking-[-.04em]">therapeace</Link><p className="mt-2 max-w-sm text-sm leading-6 text-[#718084]">Mental health support designed with cultural context in mind.</p></div>
      <div className="flex gap-6 text-sm text-[#607176]"><Link href="/therapists">Find support</Link><Link href="/team">Team</Link><Link href="/login">Log in</Link></div>
    </div>
    <div className="container-shell border-t border-black/[.05] py-5 text-xs text-[#899497]">© 2026 Therapeace · Product prototype / portfolio case study</div>
  </footer>;
}