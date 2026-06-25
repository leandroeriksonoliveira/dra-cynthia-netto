"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Stethoscope,
} from "lucide-react";
import {
  CITY,
  DOCTOR_NAME,
  DOCTOR_TAGLINE,
  PROFESSIONAL_IDENTIFICATION,
  STAT_RQES,
  STAT_SPECIALTIES,
  STAT_YEARS,
  WHATSAPP_URL,
} from "@/lib/site-config";

export function Hero() {
  return (
    <section id="inicio" className="mesh-gradient relative overflow-hidden pt-20 pb-10 lg:pt-24 lg:pb-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-white/60 px-4 py-1.5 text-xs font-semibold text-rose-dark backdrop-blur-sm">
            <Stethoscope className="h-3.5 w-3.5" />
            {CITY} · Ginecologia & Mastologia
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {DOCTOR_NAME}
          </h1>

          <p className="mt-3 text-base font-semibold text-rose-dark sm:text-lg">
            {PROFESSIONAL_IDENTIFICATION}
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft/90">
            {DOCTOR_TAGLINE}. Ginecologista com foco em saúde íntima, cirurgia
            ginecológica e tratamentos modernos para o bem-estar feminino.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-dark/20 transition hover:bg-rose-dark/90 hover:shadow-xl"
            >
              <Calendar className="h-4 w-4" />
              Agendar consulta
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition hover:bg-white"
            >
              Conheça as especialidades
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/5 pt-8">
            {[
              { value: STAT_YEARS, label: "Anos de experiência" },
              { value: STAT_SPECIALTIES, label: "Áreas de atuação" },
              { value: STAT_RQES, label: "Especialidades RQE" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl font-bold text-rose-dark sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-soft/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-rose/10">
            <Image
              src="/images/hero.webp"
              alt={DOCTOR_NAME}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
          </div>

          <div className="absolute -right-4 -bottom-4 hidden max-w-[220px] rounded-2xl border border-white/90 bg-white/95 p-4 shadow-xl backdrop-blur-sm lg:block">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt=""
                width={44}
                height={44}
                className="rounded-full object-cover ring-2 ring-rose-light"
                aria-hidden
              />
              <div>
                <p className="text-xs font-bold text-ink">MÉDICA</p>
                <p className="text-[10px] font-semibold text-rose-dark">CRM/MG 29435</p>
              </div>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-ink-soft/85">
              Ginecologia · Mastologia · Saúde íntima · Cirurgia videolaparoscópica
            </p>
          </div>

          <div className="absolute -left-2 top-8 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-rose-dark" />
              <span className="text-xs font-semibold text-ink">Santa Efigênia, BH</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
