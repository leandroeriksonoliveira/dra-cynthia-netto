/**
 * Modelos 3D educativos via Sketchfab — embed gratuito, sem API key.
 * Fonte principal: Catherine Vallance / AnatomyTOOL.org (CC BY) · Leiden University Medical Center
 * Alternativas open source: Z-Anatomy (CC BY-SA), OpenAnatomy / 3D Slicer
 */

export type AnatomyModelMeta = {
  title: string;
  credit: string;
  creditUrl: string;
  license: string;
};

/** Metadados e licença dos modelos utilizados no site */
export const SKETCHFAB_ANATOMY: Record<string, AnatomyModelMeta> = {
  "0ba41334eb384f5b999d7469f906d3ae": {
    title: "Female Reproductive and Urinary Systems",
    credit: "Catherine Vallance · AnatomyTOOL.org",
    creditUrl:
      "https://anatomytool.org/content/vallance-3d-model-female-reproductive-organs",
    license: "CC BY",
  },
  "6c89dc45574c40b3981e8de6310d28d4": {
    title: "Female Reproductive Organs — Cross Section",
    credit: "Catherine Vallance · AnatomyTOOL.org",
    creditUrl:
      "https://anatomytool.org/content/vallance-3d-model-cross-section-female-reproductive-organs",
    license: "CC BY",
  },
  "a7638a209026490fa3c8a3f9eecafcf9": {
    title: "Female Reproductive Organs — Whole",
    credit: "Catherine Vallance · AnatomyTOOL.org",
    creditUrl:
      "https://anatomytool.org/content/vallance-3d-model-female-reproductive-organs",
    license: "CC BY",
  },
};

export function getSketchfabEmbedUrl(modelId: string): string {
  const params = new URLSearchParams({
    autostart: "0",
    ui_controls: "1",
    ui_infos: "0",
    ui_stop: "0",
    ui_watermark: "0",
    ui_theme: "light",
  });
  return `https://sketchfab.com/models/${modelId}/embed?${params.toString()}`;
}

export function getSketchfabModelPageUrl(modelId: string): string {
  return `https://sketchfab.com/3d-models/${modelId}`;
}

export function getAnatomyModelMeta(modelId: string): AnatomyModelMeta {
  return (
    SKETCHFAB_ANATOMY[modelId] ?? {
      title: "Anatomia 3D",
      credit: "Sketchfab",
      creditUrl: getSketchfabModelPageUrl(modelId),
      license: "Ver licença no Sketchfab",
    }
  );
}

/** IDs reutilizáveis */
export const SKETCHFAB_MODELS = {
  reproductiveUrinary: "0ba41334eb384f5b999d7469f906d3ae",
  reproductiveCrossSection: "6c89dc45574c40b3981e8de6310d28d4",
  reproductiveWhole: "a7638a209026490fa3c8a3f9eecafcf9",
} as const;
