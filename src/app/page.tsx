import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import DestinoCard from "@/components/DestinoCard";
import GuiaCard from "@/components/GuiaCard";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import { destinos } from "@/content/destinos";
import { guias } from "@/content/guias";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* SOBRE RAPHAEL */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-copper-bright">
              Sobre mí
            </p>
            <h2 className="mt-4 font-display text-3xl italic leading-tight text-ivory md:text-4xl">
              Comparto lo que realmente vale la pena vivir en cada destino.
            </h2>
          </div>
          <div className="space-y-4 text-ivory-dim">
            <p>
              Soy Raphael Liberato. Llevo años documentando hoteles, destinos y experiencias
              de viaje reales — sin filtros de agencia, sin venderte algo que yo mismo no elegiría.
            </p>
            <p>
              Cada recomendación que ves acá nace de contenido real que comparto en Instagram y
              TikTok. Y cuando encuentras algo que te gusta, puedo ayudarte a convertirlo en un
              viaje real, con el respaldo de Sello Viajero.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ivory hover:text-copper-bright"
            >
              <Instagram className="h-4 w-4" /> Sígueme en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* DESTINOS DESTACADOS */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-copper-bright">
              Destinos
            </p>
            <h2 className="mt-4 font-display text-3xl italic text-ivory md:text-4xl">
              Dónde te llevo primero.
            </h2>
          </div>
          <Link
            href="/destinos"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-ivory-dim hover:text-ivory sm:flex"
          >
            Ver todos <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {destinos.map((d) => (
            <DestinoCard key={d.slug} destino={d} />
          ))}
        </div>
      </section>

      {/* GUÍAS */}
      <section className="border-t border-white/5 bg-ink-soft/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest2 text-copper-bright">
            Guías y recomendaciones
          </p>
          <h2 className="mt-4 max-w-lg font-display text-3xl italic text-ivory md:text-4xl">
            Antes de reservar, lee esto.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {guias.map((g) => (
              <GuiaCard key={g.slug} guia={g} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO DE INSTAGRAM */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest2 text-copper-bright">
          En Instagram
        </p>
        <h2 className="mt-4 font-display text-3xl italic text-ivory md:text-4xl">
          Lo último que compartí.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {destinos.slice(0, 4).map((d) => (
            <a
              key={d.slug}
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={d.heroImage}
                alt={`Contenido de ${d.nombre} en Instagram`}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/40">
                <Instagram className="h-6 w-6 text-ivory opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <CTASection contexto="tu página de inicio" />

      {/* CAPTURA DE LEADS */}
      <section className="mx-auto max-w-2xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest2 text-copper-bright">
          Recomendaciones a tu medida
        </p>
        <h2 className="mt-4 font-display text-3xl italic text-ivory md:text-4xl">
          Recibe recomendaciones y ofertas antes que nadie.
        </h2>
        <div className="mt-8">
          <LeadForm />
        </div>
      </section>

      {/* SELLO VIAJERO */}
      <section className="border-t border-white/5 bg-ink-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
          <p className="font-display text-xl italic text-ivory md:text-2xl">
            Viajes gestionados con el respaldo de Sello Viajero.
          </p>
          <a
            href={site.selloViajero}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-ivory-dim hover:text-ivory"
          >
            Conoce Sello Viajero ↗
          </a>
        </div>
      </section>
    </>
  );
}
