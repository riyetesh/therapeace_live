"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { USER_KEY } from "@/lib/auth";

export function Nav() {
  const [user, setUser] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const sync = () => setUser(localStorage.getItem(USER_KEY));
    sync();
    window.addEventListener("therapeace-auth", sync);
    return () => window.removeEventListener("therapeace-auth", sync);
  }, [pathname]);

  function logout() {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem("therapeace_name");
    window.dispatchEvent(new Event("therapeace-auth"));
    router.push("/");
  }

  const links = [
    ["/therapists", "Find support"],
    ["/#how-it-works", "How it works"],
    ["/#stories", "Stories"],
    ["/team", "Our team"]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[.06] bg-[#f7f8f5]/85 backdrop-blur-2xl">
      <div className="container-shell flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-[-.04em] text-[21px]">
          <span className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#20373b] text-white shadow-sm"><Heart size={17} fill="currentColor"/></span>
          therapeace
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] font-semibold text-[#52656a] lg:flex">
          {links.map(([href,label]) => <Link key={href} href={href} className="hover:text-[#18272d]">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Link href="/dashboard" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold">Dashboard</Link>
              <button onClick={logout} className="px-3 py-2 text-sm text-[#66777b]">Log out</button>
            </>
          ) : (
            <>
              <Link href="/login" className="px-3 py-2 text-sm font-semibold text-[#52656a]">Log in</Link>
              <Link href="/signup" className="group flex items-center gap-1.5 rounded-full bg-[#20373b] px-4 py-2.5 text-sm font-semibold text-white">Get started <ArrowUpRight size={15}/></Link>
            </>
          )}
        </div>
        <button className="lg:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-black/[.06] bg-[#f7f8f5] px-5 py-5 lg:hidden">
        <div className="container-shell flex flex-col gap-4 text-sm font-semibold">
          {links.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <div className="flex gap-2 pt-2">
            {user ? <Link href="/dashboard" className="rounded-full bg-[#20373b] px-4 py-2 text-white">Dashboard</Link> : <Link href="/login" className="rounded-full border px-4 py-2">Log in</Link>}
            {!user && <Link href="/signup" className="rounded-full bg-[#9fcfd0] px-4 py-2">Get started</Link>}
          </div>
        </div>
      </div>}
    </header>
  );
}