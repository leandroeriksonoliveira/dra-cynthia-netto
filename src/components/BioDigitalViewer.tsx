"use client";

import { getBioDigitalViewerUrl } from "@/lib/biodigital";

type Props = {
  viewId: string;
  title: string;
  className?: string;
};

export function BioDigitalViewer({ viewId, title, className = "" }: Props) {
  const src = getBioDigitalViewerUrl(viewId);

  return (
    <div className={`overflow-hidden rounded-xl border border-ink/10 bg-ink/5 ${className}`}>
      <iframe
        title={`Anatomia 3D — ${title}`}
        src={src}
        className="aspect-[4/3] w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="border-t border-ink/5 bg-white px-3 py-2 text-[10px] text-ink-soft/60">
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
    </div>
  );
}
