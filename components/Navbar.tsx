"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/therapists", label: "Find a Therapist" },
  { href: "/stories", label: "Stories" },
  { href: "/our-story", label: "Our Story" },
  { href: "/team", label: "Our Team" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      {/* SITE STATUS NOTICE */}
      <div className="border-b border-[#D9C9A8] bg-[#FFF7E5]">
        <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-center px-4 py-2 text-center text-xs font-medium leading-5 text-[#675A42] md:px-10">
          <p>
            <span className="font-bold text-[#4F4635]">
              We&apos;re giving Therapeace a little glow-up.
            </span>{" "}
            The platform is currently being redesigned, so bookings and
            appointments are on pause for now. We&apos;re working behind the
            scenes to make the next version feel even better. Thanks for being
            here, see you soon.
          </p>
        </div>
      </div>

      {/* NAVBAR */}
      <header className={`sticky top-0 z-50 border-b border-stone-200/70 bg-[#FCFAF7]/90 backdrop-blur-xl transition-shadow ${scrolled ? "shadow-[0_8px_30px_rgba(44,62,80,0.08)]" : ""}`}>
        <nav aria-label="Primary navigation" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF7F7] transition group-hover:scale-105">
              <Heart
                size={18}
                className="fill-[#2CA5AD] text-[#2CA5AD]"
              />
            </div>

            <span className="text-2xl font-black tracking-[-0.04em] text-[#2C3E50]">
              therapeace<span className="text-[#2CA5AD]">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-[#EAF7F7] text-[#2CA5AD]"
                      : "text-[#607481] hover:bg-white hover:text-[#2C3E50]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* AUTH */}
            <div className="ml-4 flex items-center gap-2 border-l border-stone-200 pl-4">
              <Link
                href="/login"
                className="rounded-full px-4 py-2.5 text-sm font-bold text-[#2C3E50] transition hover:bg-white"
              >
                Log in
              </Link>

              <Link
                href="/signup"
                className="rounded-full bg-[#2C3E50] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#213342] hover:shadow-lg"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-white text-[#2C3E50] transition hover:bg-[#EAF7F7] md:hidden"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-stone-200 bg-[#FCFAF7] md:hidden">
            <div className="mx-auto max-w-7xl px-6 py-5">
              <div className="flex flex-col gap-1">
                {links.map((link) => {
                  const active =
                    pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                        active
                          ? "bg-[#EAF7F7] text-[#2CA5AD]"
                          : "text-[#607481] hover:bg-white hover:text-[#2C3E50]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="my-3 h-px bg-stone-200" />

                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-center text-sm font-bold text-[#2C3E50] transition hover:bg-white"
                >
                  Log in
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-[#2C3E50] px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#213342]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
