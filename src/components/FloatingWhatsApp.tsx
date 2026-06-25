"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl sm:bottom-6"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
}
