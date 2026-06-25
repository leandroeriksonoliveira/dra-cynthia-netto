"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Award } from "lucide-react";
import { BIO_PARAGRAPHS, CONTENT_DISCLAIMER, DOCTOR_NAME } from "@/lib/site-config";

export function About() {
  return (
    <section id="sobre" className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[6/7] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about.webp"
                alt={`Sobre ${DOCTOR_NAME}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-rose-dark p-5 text-white shadow-lg">
              <Award className="h-8 w-8" />
              <p className="mt-2 text-sm font-bold">UFMG · Milão · EUA</p>
              <p className="text-xs opacity-80">Formação internacional</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-rose-dark">
              <Heart className="h-4 w-4" />
              Sobre a médica
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Saúde feminina com escuta, ciência e acolhimento
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft/90">
              {BIO_PARAGRAPHS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: GraduationCap, title: "UFMG 1995", desc: "Medicina + residências" },
                { icon: Award, title: "Milão, Itália", desc: "Oncoplástica e reconstrução" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-ink/5 bg-cream p-4"
                >
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-rose-dark" />
                  <div>
                    <p className="text-sm font-bold text-ink">{item.title}</p>
                    <p className="text-xs text-ink-soft/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-xl border border-rose/20 bg-rose-light/30 p-4 text-xs leading-relaxed text-ink-soft/80">
              {CONTENT_DISCLAIMER}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
