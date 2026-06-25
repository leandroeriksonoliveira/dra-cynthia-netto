/**
 * Gera URL do BioDigital Human Viewer para embed educativo.
 * Referência: https://human.biodigital.com/view?id=production/...&lang=pt
 */
export function getBioDigitalViewerUrl(viewId: string, lang = "pt"): string {
  const params = new URLSearchParams({
    id: viewId,
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
