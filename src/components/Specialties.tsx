"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box, ArrowRight, Play } from "lucide-react";
import { CONTENT_DISCLAIMER, SPECIALTIES, type Specialty } from "@/lib/site-config";
import { SpecialtyModal } from "@/components/SpecialtyModal";

function SpecialtyCard({
  specialty,
  index,
  onOpen,
}: {
  specialty: Specialty;
  index: number;
  onOpen: (s: Specialty) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(specialty)}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-lg transition hover:border-rose/25 hover:shadow-xl">
        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-rose-light/30 to-cream p-4 sm:h-48">
          <Image
            src={specialty.image}
            alt={specialty.title}
            width={180}
            height={180}
            className="relative z-10 h-auto max-h-36 w-auto object-contain transition duration-500 group-hover:scale-105 sm:max-h-40"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          />
          <div className="absolute top-3 right-3 flex gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold text-rose-dark shadow-sm backdrop-blur-sm">
              <Box className="h-3 w-3" />
              3D
            </span>
            {specialty.videoId && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold text-slate shadow-sm backdrop-blur-sm">
                <Play className="h-3 w-3" />
                Vídeo
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-serif text-lg font-bold text-ink">{specialty.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft/80">
            {specialty.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-rose-dark">
            Anatomia 3D + detalhes <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Specialties() {
  const [selected, setSelected] = useState<Specialty | null>(null);

  return (
    <section id="especialidades" className="mesh-gradient py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-sm font-semibold text-rose-dark">Áreas de atuação</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Especialidades
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-soft/80">
            Conheça cada área com ilustrações do consultório, modelos 3D interativos (BioDigital
            Human) e vídeos educativos de anatomia — clique para explorar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {SPECIALTIES.map((specialty, i) => (
            <SpecialtyCard
              key={specialty.id}
              specialty={specialty}
              index={i}
              onOpen={setSelected}
            />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-ink/5 bg-white/60 p-4 text-center text-xs leading-relaxed text-ink-soft/70 backdrop-blur-sm">
          {CONTENT_DISCLAIMER}
        </p>
      </div>

      {selected && (
        <SpecialtyModal specialty={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
