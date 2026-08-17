# Raphael Liberato — Travel

Landing personal de viajes de Raphael Liberato. Funciona como puente entre su
contenido en Instagram/TikTok y **Sello Viajero**: contenido y recomendaciones
→ captación de leads → cotización por WhatsApp.

## Stack

- **Next.js 15** (App Router, estable — sin bundlers experimentales)
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** para íconos

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para producción:

```bash
npm run build
npm run start
```

## Estructura

```
src/
├── app/                  # Rutas (App Router)
│   ├── page.tsx          # Home
│   ├── destinos/         # Índice + página por destino
│   ├── cruceros/
│   ├── guias/            # Índice + [slug] dinámico
│   ├── sobre-mi/
│   ├── contacto/
│   ├── api/lead/         # Endpoint del formulario de leads
│   ├── sitemap.ts
│   └── robots.ts
├── components/           # Componentes reutilizables
├── content/              # Datos editables (destinos, guías, config del sitio)
└── lib/
```

## Cómo agregar un destino nuevo

1. Agrega una entrada al array `destinos` en `src/content/destinos.ts`.
2. Crea `src/app/destinos/<slug>/page.tsx` con este contenido (copia y cambia el slug):

```tsx
import type { Metadata } from "next";
import DestinoDetail from "@/components/DestinoDetail";
import { getDestinoBySlug } from "@/content/destinos";

const destino = getDestinoBySlug("tu-slug")!;

export const metadata: Metadata = {
  title: destino.nombre,
  description: destino.resumen,
};

export default function Page() {
  return <DestinoDetail slug="tu-slug" />;
}
```

3. Listo — la tarjeta aparece automáticamente en la home y en `/destinos`.

## Cómo agregar una guía nueva

Solo agrega una entrada al array `guias` en `src/content/guias.ts`. La página
`/guias/<slug>` se genera automáticamente (ruta dinámica).

## Pendiente para producción

- [ ] Conectar `src/app/api/lead/route.ts` a un CRM/automatización real (hoy solo loggea)
- [ ] Configurar Google Analytics 4 y Meta Pixel (dejar los IDs como variables de entorno)
- [ ] Reemplazar imágenes de Unsplash por fotografía propia
- [ ] Configurar dominio propio y variable `site.url` en `src/content/site.ts`
- [ ] Deploy recomendado: [Vercel](https://vercel.com) (integración nativa con Next.js)

## Nota importante

Este proyecto es **independiente** del sitio de Sello Viajero (`selloviajero.cl`).
No comparte código, repositorio ni build con él.
