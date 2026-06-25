"use client";

import { motion } from "framer-motion";
import { ClipboardList, HeartHandshake, Cpu, MessageCircleQuestion } from "lucide-react";
import { CONSULTATION_STEPS, WHATSAPP_URL } from "@/lib/site-config";

const ICONS = [ClipboardList, HeartHandshake, Cpu, MessageCircleQuestion];

export function Consultation() {
  return (
    <section id="consulta" className="mesh-gradient py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-sm font-semibold text-rose-dark">Atendimento</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Como funciona a consulta
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONSULTATION_STEPS.map((step, i) => {
            const Icon = ICONS[i] ?? ClipboardList;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-ink/5 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-light">
                  <Icon className="h-5 w-5 text-rose-dark" />
                </div>
                <span className="absolute top-4 right-4 font-serif text-3xl font-bold text-rose/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft/80">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rose-dark px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-dark/20 transition hover:bg-rose-dark/90"
          >
            Agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  );
}
