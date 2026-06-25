"use client";

import { ExternalLink } from "lucide-react";
import { getBioDigitalViewerUrl, getBioDigitalViewPageUrl } from "@/lib/biodigital";

type Props = {
  viewId: string;
  title: string;
  className?: string;
  /** Monta o iframe apenas quando a aba está visível (melhor performance e carregamento) */
  active?: boolean;
};

export function BioDigitalViewer({ viewId, title, className = "", active = true }: Props) {
  const src = getBioDigitalViewerUrl(viewId);
  const viewPageUrl = getBioDigitalViewPageUrl(viewId);

  return (
    <div className={`overflow-hidden rounded-xl border border-ink/10 bg-ink/5 ${className}`}>
      {active ? (
        <iframe
          key={viewId}
          title={`Anatomia 3D — ${title}`}
          src={src}
          className="h-[min(70vh,520px)] min-h-[400px] w-full border-0"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="flex h-[min(70vh,520px)] min-h-[400px] items-center justify-center text-sm text-ink-soft/60">
          Selecione esta aba para carregar o modelo 3D
        </div>
      )}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ink/5 bg-white px-3 py-2">
        <p className="text-[10px] text-ink-soft/60">
          Modelo 3D interativo ·{" "}
          <a
            href="https://human.biodigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-dark hover:underline"
          >
            BioDigital Human
          </a>{" "}
          · Conteúdo exclusivamente educativo
        </p>
        <a
          href={viewPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-semibold text-rose-dark hover:underline"
        >
          Abrir em tela cheia
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
