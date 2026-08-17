import type { Metadata } from "next";
import DestinoDetail from "@/components/DestinoDetail";
import { getDestinoBySlug } from "@/content/destinos";

const destino = getDestinoBySlug("mexico")!;

export const metadata: Metadata = {
  title: destino.nombre,
  description: destino.resumen,
};

export default function MexicoPage() {
  return <DestinoDetail slug="mexico" />;
}
