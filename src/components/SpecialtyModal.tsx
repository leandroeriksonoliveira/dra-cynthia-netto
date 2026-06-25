"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { X, Calendar } from "lucide-react";
import { CONTENT_DISCLAIMER, WHATSAPP_URL, type Specialty } from "@/lib/site-config";

const SpecialtyScene3D = dynamic(
  () => import("@/components/SpecialtyScene3D").then((m) => m.SpecialtyScene3D),
  { ssr: false },
);

type Props = {
  specialty: Specialty;
  onClose: () => void;
};

export function SpecialtyModal({ specialty, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/50 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="specialty-modal-title"
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-rose-light to-white sm:h-56">
          <SpecialtyScene3D color={specialty.color3d} variant="sphere" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white"
            aria-label="Fechar"
          >
            <X className="h-5 w-5 text-ink" />
          </button>
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <Image
              src={specialty.image}
              alt=""
              width={48}
              height={48}
              className="rounded-full border-2 border-white object-cover shadow-md"
            />
            <h2 id="specialty-modal-title" className="font-serif text-xl font-bold text-ink">
              {specialty.title}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-base leading-relaxed text-ink-soft/90">{specialty.fullDescription}</p>

          <div className="mt-6 rounded-xl border border-rose/15 bg-rose-light/20 p-4">
            <p className="text-xs leading-relaxed text-ink-soft/70">{CONTENT_DISCLAIMER}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-dark/90"
            >
              <Calendar className="h-4 w-4" />
              Agendar avaliação
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-ink/10 px-6 py-3 text-sm font-semibold text-ink-soft transition hover:bg-cream"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
