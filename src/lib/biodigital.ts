/**
 * URLs do BioDigital Human para embed e visualização externa.
 * Embed: parâmetro `m=` com sufixo `.json`
 * Referência: https://human.biodigital.com/view?id=production/...&lang=pt
 */
function normalizeModelPath(viewId: string): string {
  return viewId.endsWith(".json") ? viewId : `${viewId}.json`;
}

function normalizeViewId(viewId: string): string {
  return viewId.replace(/\.json$/, "");
}

/** URL do viewer para iframe embed */
export function getBioDigitalViewerUrl(viewId: string, lang = "pt"): string {
  const params = new URLSearchParams({
    m: normalizeModelPath(viewId),
    lang,
    "ui-anatomy-labels": "true",
    "ui-anatomy-descriptions": "true",
    "ui-fullscreen": "true",
    "ui-help": "true",
    "ui-info": "true",
    "ui-nav": "true",
    "ui-tools": "true",
    "ui-loader": "circle",
    "disable-scroll": "false",
  });
  return `https://human.biodigital.com/viewer/?${params.toString()}`;
}

/** URL da página completa (fallback / abrir em nova aba) */
export function getBioDigitalViewPageUrl(viewId: string, lang = "pt"): string {
  const id = normalizeViewId(viewId);
  const params = new URLSearchParams({ id, lang });
  return `https://human.biodigital.com/view?${params.toString()}`;
}
