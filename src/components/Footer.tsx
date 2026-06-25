import Link from "next/link";
import Image from "next/image";
import {
  CLINIC_NAME,
  DOCTOR_NAME,
  LEGAL_FOOTER_NOTICE,
  PRIVACY_POLICY_PATH,
  PROFESSIONAL_IDENTIFICATION,
  TERMS_PATH,
  VELTRO_DIGITAL_NAME,
  VELTRO_DIGITAL_URL,
  WHATSAPP_URL,
} from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt={`Logo ${DOCTOR_NAME}`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-serif text-lg font-bold">{DOCTOR_NAME}</p>
                <p className="text-xs text-white/60">{PROFESSIONAL_IDENTIFICATION}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {CLINIC_NAME}. Saúde íntima feminina, ginecologia, mastologia e cirurgia
              videolaparoscópica em Belo Horizonte.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Navegação
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre" },
                { href: "#especialidades", label: "Especialidades" },
                { href: "#faq", label: "FAQ" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-rose"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Legal
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              <Link
                href={PRIVACY_POLICY_PATH}
                className="text-sm text-white/70 transition hover:text-rose"
              >
                Política de Privacidade
              </Link>
              <Link
                href={TERMS_PATH}
                className="text-sm text-white/70 transition hover:text-rose"
              >
                Termos de Uso
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition hover:text-rose"
              >
                Agendar consulta
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/50">{LEGAL_FOOTER_NOTICE}</p>
          <p className="mt-4 text-xs text-white/40">
            © {new Date().getFullYear()} {DOCTOR_NAME}. Desenvolvido por{" "}
            <a
              href={VELTRO_DIGITAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose/80 transition hover:text-rose"
            >
              {VELTRO_DIGITAL_NAME}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
