"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PRIVACY_POLICY_PATH, TERMS_PATH } from "@/lib/site-config";

const STORAGE_KEY = "cynthia-netto-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const save = (value: string) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
    setShowPrefs(false);
  };

  const acceptAll = () => save("all");
  const essentialOnly = () => save("essential-only");
  const savePreferences = () =>
    save(analytics ? "analytics-accepted" : "essential-only");

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl rounded-2xl border border-ink/10 bg-white p-5 shadow-2xl sm:bottom-6"
    >
      <p className="text-sm font-semibold text-ink">Cookies e privacidade</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft/85">
        Utilizamos cookies essenciais para o funcionamento do site. Cookies de análise
        só são ativados com seu consentimento. Consulte nossa{" "}
        <Link
          href={PRIVACY_POLICY_PATH}
          className="font-medium text-rose-dark underline-offset-2 hover:underline"
        >
          Política de Privacidade
        </Link>{" "}
        e{" "}
        <Link
          href={TERMS_PATH}
          className="font-medium text-rose-dark underline-offset-2 hover:underline"
        >
          Termos de Uso
        </Link>
        .
      </p>

      {showPrefs && (
        <div className="mt-4 space-y-3 rounded-xl bg-cream p-4">
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" checked disabled className="rounded" />
            <span>
              <strong>Essenciais</strong> — necessários para o funcionamento (sempre
              ativos)
            </span>
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="rounded accent-rose-dark"
            />
            <span>
              <strong>Análise</strong> — estatísticas anônimas de navegação
            </span>
          </label>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={acceptAll}
          className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:bg-ink/90"
        >
          Aceitar todos
        </button>
        <button
          type="button"
          onClick={essentialOnly}
          className="rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink-soft transition hover:bg-cream"
        >
          Apenas essenciais
        </button>
        <button
          type="button"
          onClick={() => (showPrefs ? savePreferences() : setShowPrefs(true))}
          className="rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink-soft transition hover:bg-cream"
        >
          {showPrefs ? "Salvar preferências" : "Gerenciar cookies"}
        </button>
      </div>
    </div>
  );
}
