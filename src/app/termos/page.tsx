import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import {
  CLINIC_NAME,
  CONTENT_DISCLAIMER,
  DOCTOR_NAME,
  EMAIL,
  PROFESSIONAL_IDENTIFICATION,
  PRIVACY_POLICY_PATH,
  SITE_TITLE,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Termos de Uso | ${SITE_TITLE}`,
  description: "Termos de Uso do site institucional da Dra. Cynthia Netto de Barros.",
};

export default function TermsPage() {
  return (
    <>
      <div className="min-h-screen bg-cream font-sans text-ink antialiased">
        <header className="border-b border-ink/10 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt={`Logo ${CLINIC_NAME}`}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="text-sm font-bold">{DOCTOR_NAME}</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition hover:text-rose-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao site
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14">
          <h1 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl">
            Termos de Uso
          </h1>
          <p className="mt-2 text-sm text-ink-soft/70">Última atualização: junho de 2026</p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-ink-soft/90">
            <section>
              <h2 className="text-xl font-bold text-ink">1. Aceitação</h2>
              <p className="mt-3">
                Ao acessar este site, você concorda com estes Termos de Uso e com a{" "}
                <Link href={PRIVACY_POLICY_PATH} className="font-semibold text-rose-dark">
                  Política de Privacidade
                </Link>
                . Se não concordar, por favor, não utilize o site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">2. Natureza do conteúdo</h2>
              <p className="mt-3">
                Este site é de caráter exclusivamente informativo e educativo, mantido por{" "}
                <strong>{PROFESSIONAL_IDENTIFICATION}</strong>. O conteúdo não substitui consulta,
                avaliação ou atendimento médico individualizado. {CONTENT_DISCLAIMER}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">3. Publicidade médica</h2>
              <p className="mt-3">
                A publicidade deste site observa a Resolução CFM nº 2.336/2023 e o Código de Ética
                Médica. Não há depoimentos de pacientes, promessas de resultado, comparações
                depreciativas, divulgação de preços ou imagens antes/depois.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">4. Propriedade intelectual</h2>
              <p className="mt-3">
                Textos, imagens, logotipos e demais conteúdos deste site são de propriedade de{" "}
                {DOCTOR_NAME} ou utilizados com autorização. É proibida a reprodução sem
                autorização prévia por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">5. Agendamento e contato</h2>
              <p className="mt-3">
                O agendamento de consultas é realizado via WhatsApp ou e-mail ({EMAIL}). A
                confirmação de horário e valores é feita diretamente com a equipe do consultório,
                não por este site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">6. Limitação de responsabilidade</h2>
              <p className="mt-3">
                Empregamos esforços para manter informações atualizadas, porém não garantimos
                ausência de erros ou interrupções. O uso das informações do site é de
                responsabilidade do usuário.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">7. Links externos</h2>
              <p className="mt-3">
                O site pode conter links para sites de terceiros (Instagram, Google Maps, WhatsApp).
                Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">8. Alterações</h2>
              <p className="mt-3">
                Estes termos podem ser atualizados a qualquer momento. A data da última atualização
                será indicada no topo desta página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">9. Foro</h2>
              <p className="mt-3">
                Fica eleito o foro da comarca de Belo Horizonte/MG para dirimir quaisquer
                controvérsias decorrentes destes termos, com renúncia a qualquer outro, por mais
                privilegiado que seja.
              </p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
