import type { MetadataRoute } from "next";
import { destinos } from "@/content/destinos";
import { guias } from "@/content/guias";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/destinos",
    "/cruceros",
    "/guias",
    "/sobre-mi",
    "/contacto",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const destinoRoutes = destinos.map((d) => ({
    url: `${site.url}/destinos/${d.slug}`,
    lastModified: new Date(),
  }));

  const guiaRoutes = guias.map((g) => ({
    url: `${site.url}/guias/${g.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...destinoRoutes, ...guiaRoutes];
}
