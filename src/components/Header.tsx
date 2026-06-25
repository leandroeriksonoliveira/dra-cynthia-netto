"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DOCTOR_NAME_SHORT,
  WHATSAPP_URL,
} from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sinais", label: "Quando procurar" },
  { href: "#consulta", label: "Consulta" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/5 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt={`Logo ${DOCTOR_NAME_SHORT}`}
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-ink">{DOCTOR_NAME_SHORT}</p>
            <p className="text-[10px] font-medium text-ink-soft/70">MÉDICA · CRM/MG 29435</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-base font-medium text-ink-soft transition hover:bg-rose-light/50 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-rose-dark px-5 py-2.5 text-base font-semibold text-white transition hover:bg-rose-dark/90"
          >
            Agendar consulta
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-ink lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition hover:bg-rose-light/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-rose-dark px-5 py-3 text-center text-base font-semibold text-white"
            >
              Agendar consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
