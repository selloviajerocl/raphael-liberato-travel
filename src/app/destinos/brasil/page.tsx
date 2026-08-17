import type { Metadata } from "next";
import DestinoDetail from "@/components/DestinoDetail";
import { getDestinoBySlug } from "@/content/destinos";

const destino = getDestinoBySlug("brasil")!;

export const metadata: Metadata = {
  title: destino.nombre,
  description: destino.resumen,
};

export default function BrasilPage() {
  return <DestinoDetail slug="brasil" />;
}
