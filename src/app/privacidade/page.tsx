import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import {
  CLINIC_NAME,
  CONTENT_DISCLAIMER,
  DOCTOR_NAME,
  DPO_EMAIL,
  PRIVACY_EMAIL,
  PROFESSIONAL_IDENTIFICATION,
  SITE_TITLE,
  WHATSAPP_DISPLAY,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${SITE_TITLE}`,
  description:
    "Política de Privacidade e tratamento de dados pessoais conforme a LGPD (Lei 13.709/2018), incluindo dados sensíveis de saúde.",
};

export default function PrivacyPage() {
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
            Política de Privacidade
          </h1>
          <p className="mt-2 text-sm text-ink-soft/70">
            Última atualização: junho de 2026 · Lei nº 13.709/2018 (LGPD)
          </p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-ink-soft/90">
            <section>
              <h2 className="text-xl font-bold text-ink">1. Controladora dos dados</h2>
              <p className="mt-3">
                A controladora dos dados pessoais tratados neste site é{" "}
                <strong>{PROFESSIONAL_IDENTIFICATION}</strong>, responsável pelo{" "}
                <strong>{CLINIC_NAME}</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">2. Encarregado de Dados (DPO)</h2>
              <p className="mt-3">
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em
                contato com o Encarregado de Dados pelo e-mail{" "}
                <a href={`mailto:${DPO_EMAIL}`} className="font-semibold text-rose-dark">
                  {DPO_EMAIL}
                </a>
                . Prazo de resposta: até 15 dias úteis, conforme Art. 18 da LGPD.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">3. Dados coletados</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Nome, e-mail e telefone — quando você entra em contato pelo WhatsApp ou e-mail</li>
                <li>Dados de navegação — cookies essenciais e, se aceitos, cookies de análise</li>
                <li>Preferências de consentimento — registro da sua escolha sobre cookies</li>
              </ul>
              <p className="mt-3">
                Este site <strong>não</strong> coleta dados de saúde por formulários online.
                Informações clínicas e prontuários são tratados exclusivamente no contexto do
                atendimento médico presencial, com sigilo profissional conforme o Código de Ética
                Médica e a LGPD (Art. 11 — dados sensíveis de saúde).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">4. Finalidade do tratamento</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Responder solicitações de contato e agendamento</li>
                <li>Prestar informações sobre os serviços médicos oferecidos</li>
                <li>Cumprir obrigações legais e regulatórias do exercício profissional (CFM)</li>
                <li>Manter prontuários médicos conforme exigência legal (mínimo 20 anos)</li>
                <li>Garantir a segurança e o funcionamento do site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">5. Base legal (LGPD)</h2>
              <p className="mt-3">O tratamento de dados pessoais baseia-se em:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Consentimento (Art. 7º, I) — para cookies de análise e comunicações</li>
                <li>Execução de contrato ou procedimentos preliminares (Art. 7º, V) — agendamento</li>
                <li>
                  Tutela da saúde (Art. 11, II, &quot;f&quot;) — para dados sensíveis de saúde no
                  atendimento médico
                </li>
                <li>Cumprimento de obrigação legal (Art. 7º, II) — prontuários e registros CFM</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">6. WhatsApp e Meta</h2>
              <p className="mt-3">
                Ao entrar em contato pelo WhatsApp ({WHATSAPP_DISPLAY}), seus dados (nome, telefone
                e mensagens) são processados pela Meta Platforms, Inc., operadora do WhatsApp. Recomendamos
                não enviar informações clínicas sensíveis por este canal. Para assuntos médicos
                detalhados, agende uma consulta presencial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">7. Compartilhamento</h2>
              <p className="mt-3">
                Seus dados não são vendidos nem compartilhados com terceiros para fins comerciais.
                Podem ser compartilhados apenas quando necessário para cumprimento de obrigação legal,
                ordem judicial, ou com prestadores de serviço essenciais (hospedagem do site), sob
                contrato de confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">8. Retenção de dados</h2>
              <p className="mt-3">
                Dados de contato via site: até 2 anos após o último contato, salvo solicitação de
                exclusão. Prontuários médicos: mínimo de 20 anos, conforme Resolução CFM nº
                1.638/2002. Cookies: conforme preferências registradas no navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">9. Seus direitos (Art. 18 LGPD)</h2>
              <p className="mt-3">Você pode solicitar:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Confirmação e acesso aos seus dados</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade e informação sobre compartilhamento</li>
                <li>Revogação do consentimento</li>
              </ul>
              <p className="mt-3">
                Solicitações:{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="font-semibold text-rose-dark">
                  {PRIVACY_EMAIL}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">10. Cookies</h2>
              <p className="mt-3">
                Utilizamos cookies essenciais para funcionamento do site. Cookies de análise só são
                ativados com seu consentimento explícito, gerenciável pelo banner de cookies ou
                entrando em contato conosco.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">11. Segurança</h2>
              <p className="mt-3">
                Adotamos medidas técnicas e administrativas para proteger seus dados, incluindo
                conexão HTTPS, controle de acesso e sigilo profissional médico.
              </p>
            </section>

            <section className="rounded-xl border border-rose/20 bg-rose-light/30 p-4">
              <p className="text-sm">{CONTENT_DISCLAIMER}</p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
