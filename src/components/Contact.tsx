"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Clock,
  ExternalLink,
} from "lucide-react";
import {
  ADDRESS_FULL,
  EMAIL,
  INSTAGRAM,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contato" className="mesh-gradient py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-rose-dark">Contato</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Entre em contato ou faça uma visita
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft/80">
              Agende sua consulta pelo WhatsApp ou envie uma mensagem por e-mail. Estamos
              prontos para acolher você.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: WHATSAPP_DISPLAY,
                  href: WHATSAPP_URL,
                },
                {
                  icon: Mail,
                  label: "E-mail",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  value: INSTAGRAM,
                  href: INSTAGRAM_URL,
                },
                {
                  icon: MapPin,
                  label: "Endereço",
                  value: ADDRESS_FULL,
                  href: MAPS_URL,
                },
                {
                  icon: Clock,
                  label: "Atendimento",
                  value: "Mediante agendamento prévio",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                    <item.icon className="h-5 w-5 text-rose-dark" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/60">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-ink transition hover:text-rose-dark"
                      >
                        {item.value}
                        {item.href.startsWith("http") && (
                          <ExternalLink className="h-3 w-3 opacity-50" />
                        )}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-ink">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-lg"
          >
            <iframe
              title="Localização do consultório"
              src="https://maps.google.com/maps?q=Rua+Ceará+195+Santa+Efigênia+Belo+Horizonte+MG&output=embed"
              className="h-80 w-full border-0 lg:h-full lg:min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
