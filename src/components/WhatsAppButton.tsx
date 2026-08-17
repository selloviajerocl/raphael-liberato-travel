import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-copper px-5 py-3.5 text-sm font-semibold text-ivory shadow-lg shadow-black/40 transition-transform hover:scale-105 hover:bg-copper-bright md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} />
      <span className="hidden sm:inline">Hablar por WhatsApp</span>
    </a>
  );
}
