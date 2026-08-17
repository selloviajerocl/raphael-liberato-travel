import type { Metadata } from "next";
import DestinoDetail from "@/components/DestinoDetail";
import { getDestinoBySlug } from "@/content/destinos";

const destino = getDestinoBySlug("caribe")!;

export const metadata: Metadata = {
  title: destino.nombre,
  description: destino.resumen,
};

export default function CaribePage() {
  return <DestinoDetail slug="caribe" />;
}
