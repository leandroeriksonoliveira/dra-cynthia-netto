"use client";

import { ExternalLink } from "lucide-react";
import {
  getAnatomyModelMeta,
  getSketchfabEmbedUrl,
  getSketchfabModelPageUrl,
} from "@/lib/anatomy-3d";

type Props = {
  modelId: string;
  title: string;
  className?: string;
  active?: boolean;
};

const VIEWER_HEIGHT = "h-[min(70vh,520px)] min-h-[400px]";

export function Anatomy3DViewer({ modelId, title, className = "", active = true }: Props) {
  const embedUrl = getSketchfabEmbedUrl(modelId);
  const modelPageUrl = getSketchfabModelPageUrl(modelId);
  const meta = getAnatomyModelMeta(modelId);

  return (
    <div className={`overflow-hidden rounded-xl border border-ink/10 bg-ink/5 ${className}`}>
      {active ? (
        <iframe
          key={modelId}
          title={`Anatomia 3D — ${title}`}
          src={embedUrl}
          className={`${VIEWER_HEIGHT} w-full border-0`}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          referrerPolicy="origin-when-cross-origin"
        />
      ) : (
        <div
          className={`flex ${VIEWER_HEIGHT} items-center justify-center text-sm text-ink-soft/60`}
        >
          Selecione esta aba para carregar o modelo 3D
        </div>
      )}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ink/5 bg-white px-3 py-2">
        <p className="text-[10px] leading-relaxed text-ink-soft/60">
          {meta.title} ·{" "}
          <a
            href={meta.creditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-dark hover:underline"
          >
            {meta.credit}
          </a>{" "}
          · {meta.license} · Conteúdo exclusivamente educativo
        </p>
        <a
          href={modelPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-semibold text-rose-dark hover:underline"
        >
          Abrir no Sketchfab
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
