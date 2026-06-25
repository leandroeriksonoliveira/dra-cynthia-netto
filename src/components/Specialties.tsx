"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { CONTENT_DISCLAIMER, SPECIALTIES, type Specialty } from "@/lib/site-config";
import { SpecialtyModal } from "@/components/SpecialtyModal";
import { cn } from "@/lib/utils";

const SpecialtyScene3D = dynamic(
  () => import("@/components/SpecialtyScene3D").then((m) => m.SpecialtyScene3D),
  { ssr: false, loading: () => <div className="h-full w-full animate-pulse bg-rose-light/20" /> },
);

function SpecialtyCard({
  specialty,
  index,
  onOpen,
}: {
  specialty: Specialty;
  index: number;
  onOpen: (s: Specialty) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const variant = index % 2 === 0 ? "sphere" : "torus";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="perspective-1000 group h-[320px] cursor-pointer sm:h-[340px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => onOpen(specialty)}
    >
      <div
        className={cn(
          "preserve-3d relative h-full w-full transition-transform duration-700",
          flipped && "rotate-y-180",
        )}
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div
          className="backface-hidden absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-lg transition group-hover:shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-36 overflow-hidden bg-gradient-to-br from-rose-light/50 to-white">
            <div className="absolute inset-0 opacity-60">
              <SpecialtyScene3D color={specialty.color3d} variant={variant as "sphere" | "torus"} />
            </div>
            <div className="absolute bottom-2 right-2 rounded-full bg-white/80 p-1.5 shadow-sm backdrop-blur-sm">
              <Image
                src={specialty.image}
                alt=""
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-serif text-lg font-bold text-ink">{specialty.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft/80">
              {specialty.shortDescription}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-rose-dark">
              Saiba mais <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-rose/20 bg-gradient-to-br from-rose-light/40 to-white p-5 shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex h-20 items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
              <Play className="h-6 w-6 text-rose-dark" />
            </div>
          </div>
          <h3 className="text-center font-serif text-lg font-bold text-ink">{specialty.title}</h3>
          <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-ink-soft/80">
            Passe o mouse ou toque para ver detalhes, vídeo informativo e orientações.
          </p>
          <button
            type="button"
            className="mt-3 w-full rounded-full bg-rose-dark py-2.5 text-xs font-semibold text-white"
          >
            Ver detalhes
          </button>
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
            Explore as áreas de atuação da Dra. Cynthia. Passe o mouse sobre os cards para
            visualização 3D interativa e clique para mais informações.
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
