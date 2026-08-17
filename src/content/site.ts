export const site = {
  nombre: "Raphael Liberato",
  tagline: "Viajes, experiencias y lugares que realmente valen la pena.",
  descripcion:
    "Contenido, recomendaciones y experiencias de viaje para ayudarte a descubrir tu próximo destino.",
  instagram: "https://www.instagram.com/raphael.selloviajero/",
  tiktok: "https://www.tiktok.com/@raphaelliberato",
  whatsapp: "https://wa.me/56966957801",
  whatsappTexto: (contexto: string) =>
    `https://wa.me/56966957801?text=${encodeURIComponent(
      `Hola Raphael, vi ${contexto} y quiero que me ayudes a cotizarlo`
    )}`,
  selloViajero: "https://selloviajero.cl",
  email: "contacto@selloviajero.cl",
  url: "https://raphaelliberato.travel",
};
