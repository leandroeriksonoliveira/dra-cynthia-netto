"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Calendar, Box, Play, FileText } from "lucide-react";
import { CONTENT_DISCLAIMER, WHATSAPP_URL, type Specialty } from "@/lib/site-config";
import { Anatomy3DViewer } from "@/components/Anatomy3DViewer";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { cn } from "@/lib/utils";

type Tab = "info" | "anatomy" | "video";

type Props = {
  specialty: Specialty;
  onClose: () => void;
};

export function SpecialtyModal({ specialty, onClose }: Props) {
  const [tab, setTab] = useState<Tab>("info");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
    { id: "info", label: "Informações", icon: FileText },
    { id: "anatomy", label: "Anatomia 3D", icon: Box },
    ...(specialty.videoId
      ? [{ id: "video" as Tab, label: "Vídeo educativo", icon: Play }]
      : []),
  ];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/50 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="specialty-modal-title"
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-rose-light to-white sm:h-52">
          <Image
            src={specialty.image}
            alt={specialty.title}
            fill
            className="object-contain p-6"
            sizes="768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white"
            aria-label="Fechar"
          >
            <X className="h-5 w-5 text-ink" />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <h2 id="specialty-modal-title" className="font-serif text-xl font-bold text-ink sm:text-2xl">
              {specialty.title}
            </h2>
          </div>
        </div>

        <div className="flex gap-1 border-b border-ink/5 px-4 pt-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-t-lg px-3 py-2.5 text-xs font-semibold transition sm:text-sm",
                tab === t.id
                  ? "border-b-2 border-rose-dark text-rose-dark"
                  : "text-ink-soft/70 hover:text-ink",
              )}
            >
              <t.icon className="h-3.5 w-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8">
          {tab === "info" && (
            <>
              <p className="text-base leading-relaxed text-ink-soft/90">{specialty.fullDescription}</p>
              <div className="mt-6 rounded-xl border border-rose/15 bg-rose-light/20 p-4">
                <p className="text-xs leading-relaxed text-ink-soft/70">{CONTENT_DISCLAIMER}</p>
              </div>
            </>
          )}

          {tab === "anatomy" && (
            <>
              <p className="mb-4 text-sm text-ink-soft/80">
                Explore a anatomia relacionada em 3D — gire, amplie e identifique estruturas.
                Modelo interativo educativo (Sketchfab · CC BY).
              </p>
              <Anatomy3DViewer
                modelId={specialty.sketchfabModelId}
                title={specialty.title}
                active={tab === "anatomy"}
              />
              <p className="mt-3 text-xs text-ink-soft/60">
                Visualização educativa. Não substitui exame clínico ou diagnóstico médico.
              </p>
            </>
          )}

          {tab === "video" && specialty.videoId && (
            <>
              <p className="mb-4 text-sm text-ink-soft/80">
                Vídeo educativo sobre anatomia e condições relacionadas — conteúdo informativo de
                referência.
              </p>
              <YouTubeEmbed
                videoId={specialty.videoId}
                title={`Vídeo educativo — ${specialty.title}`}
              />
              <p className="mt-3 text-xs text-ink-soft/60">
                Conteúdo de terceiros com finalidade educativa. Não constitui recomendação de
                tratamento.
              </p>
            </>
          )}

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
