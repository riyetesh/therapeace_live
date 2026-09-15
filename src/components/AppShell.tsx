"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HeartHandshake, Menu, UserCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    setUser(localStorage.getItem("therapeace:user"));
    const onStorage = () => setUser(localStorage.getItem("therapeace:user"));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem("therapeace:user");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#243640]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FAF8F5]/92 backdrop-blur-xl">
        <div className="container-shell flex h-18 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-xl">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#86B9C5] text-white">
              <HeartHandshake size={18} />
            </span>
            Therapeace
          </Link>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <Link href="/therapists" className="hover:text-[#5D8F9E]">Find a therapist</Link>
            <Link href="/#how-it-works" className="hover:text-[#5D8F9E]">How it works</Link>
            <Link href="/#reviews" className="hover:text-[#5D8F9E]">Reviews</Link>
            <Link href="/#team" className="hover:text-[#5D8F9E]">Team</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {user ? (
              <>
                <Link href="/dashboard" className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium">
                  <UserCircle size={18} /> Dashboard
                </Link>
                <button onClick={logout} className="rounded-full px-4 py-2 text-sm text-black/60 hover:bg-black/5">Log out</button>
              </>
            ) : (
              <>
                <Link href="/login" className="rounded-full px-4 py-2 text-sm font-medium hover:bg-black/5">Log in</Link>
                <Link href="/signup" className="rounded-full bg-[#243640] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#16252d]">Get started</Link>
              </>
            )}
          </div>

          <button aria-label="Open menu" className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-black/5 bg-[#FAF8F5] px-5 py-5 md:hidden">
            <div className="container-shell flex flex-col gap-4 text-sm">
              <Link href="/therapists" onClick={() => setOpen(false)}>Find a therapist</Link>
              <Link href="/#how-it-works" onClick={() => setOpen(false)}>How it works</Link>
              <Link href="/#reviews" onClick={() => setOpen(false)}>Reviews</Link>
              <Link href="/#team" onClick={() => setOpen(false)}>Team</Link>
              <div className="flex gap-2 pt-2">
                {user ? <Link href="/dashboard" className="rounded-full bg-[#243640] px-4 py-2 text-white">Dashboard</Link> : <Link href="/login" className="rounded-full border px-4 py-2">Log in</Link>}
                {!user && <Link href="/signup" className="rounded-full bg-[#86B9C5] px-4 py-2 text-white">Get started</Link>}
              </div>
            </div>
          </div>
        )}
      </header>

      {children}

      <footer className="border-t border-black/5 bg-white">
        <div className="container-shell flex flex-col gap-5 py-8 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Therapeace. Product prototype and case study.</p>
          <div className="flex gap-5">
            <Link href="/therapists">Therapists</Link>
            <Link href="/login">Log in</Link>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
