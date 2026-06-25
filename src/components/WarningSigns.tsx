"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { WARNING_SIGNS } from "@/lib/site-config";

export function WarningSigns() {
  return (
    <section id="sinais" className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-rose-dark">
            <AlertCircle className="h-4 w-4" />
            Sinais de alerta
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Quando procurar uma ginecologista
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft/80">
            Muitas mulheres convivem com desconfortos íntimos, alterações hormonais e sintomas
            silenciosos sem saber que existem tratamentos modernos e acolhedores. Fique atenta
            aos sinais abaixo — eles merecem atenção médica especializada.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WARNING_SIGNS.map((sign, i) => (
            <motion.div
              key={sign.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl border border-ink/5 bg-cream p-5 transition hover:border-rose/20 hover:shadow-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-light text-sm font-bold text-rose-dark">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold text-ink">{sign.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/80">{sign.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
