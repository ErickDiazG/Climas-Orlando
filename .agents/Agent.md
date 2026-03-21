# Guía de Mejores Prácticas — Climas Orlando (Multiservicios Diaz)

Este documento define las directrices y estándares para el desarrollo del proyecto **Climas Orlando**, una landing page profesional para un negocio de climatización y línea blanca, construida con **Astro** y **Tailwind CSS v3**, diseñada para generar conversiones vía WhatsApp, posicionar en SEO local y ofrecer una experiencia premium al usuario.

## 1. Filosofía de Desarrollo (Seniority & Clean Code)

Como asistente **Senior**, el Agente debe seguir y promover los siguientes principios en cada intervención:

- **Clean Code (Código Limpio):** El código debe ser autodescriptivo. Nombres de variables que revelen intención, funciones pequeñas y lógica declarativa.
- **DRY (Don't Repeat Yourself):** Centraliza la lógica repetitiva. Usa `src/config/site.ts` para datos y crea utilidades en `src/utils/` si es necesario.
- **Single Responsibility (SRP):** Un componente Astro debe tener una única razón para cambiar. Si un componente gestiona demasiada UI, se debe refactorizar en sub-componentes.
- **Separación de Concernimientos:** Mantén la lógica del servidor (JS en Frontmatter) separada de la estructura (HTML) y el diseño (Tailwind).
- **Atomic Design Thinking:** Divide la UI en átomos (botones), moléculas (cards de servicio) y organismos (secciones completas).

## 2. General

- Prioriza **rendimiento** (Core Web Vitals) y **accesibilidad** (a11y) en cada componente.
- Sigue el enfoque **Mobile-First**: diseña primero para móviles y escala hacia pantallas grandes.
- Usa etiquetas **HTML5 semánticas** (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`).
- El idioma del contenido es **español** (es-MX). Todos los textos deben ser claros, concisos y orientados a la conversión.
- El objetivo principal de la página es **generar contacto por WhatsApp**. Cada sección debe guiar al usuario hacia una acción de contacto.

## 2. Arquitectura (Astro)

Se sigue un patrón basado en **Componentes + Configuración centralizada**:

- **Componentes (`src/components/`):** Reutilizables, modulares y de una sola responsabilidad. Cada sección de la landing es un componente independiente (Hero, Services, FAQ, Testimonios, etc.).
- **Lógica (Frontmatter `---`):** Importaciones, datos y props se definen en el bloque de código Astro en la parte superior del archivo.
- **Layout (`src/layouts/`):** `Layout.astro` define la estructura global de la página (meta tags, Open Graph, Header, Footer, fuentes, scripts globales).
- **Configuración (`src/config/`):** `site.ts` es la **fuente única de verdad** para datos del negocio (nombre, teléfono, links de WhatsApp, redes sociales, estadísticas). Nunca hardcodees datos de contacto directamente en componentes; siempre importa desde `site.ts`.
- **Páginas (`src/pages/`):** Archivos mínimos que componen la página importando el Layout y los componentes.

## 3. Gestión de UI y Estilos (Tailwind CSS v3)

- **Clases utilitarias:** Utiliza exclusivamente las clases de Tailwind CSS para estilizar. Evita CSS personalizado salvo para animaciones complejas o variables globales definidas en `src/styles/global.css`.
- **Paleta de colores personalizada:** Usa los tokens definidos en `tailwind.config.mjs`:
  - `primary-*` (azules): Color principal de marca.
  - `accent-*` (naranjas/ámbar): Acentos y CTAs.
  - `success-*` (verdes): Indicadores positivos y confianza.
- **Tipografía:** La fuente principal es **Manrope** (importada vía Google Fonts). Usa `font-manrope` en los componentes.
- **Animaciones:** Usa las animaciones personalizadas definidas en el config (`fade-in-up`, `slide-in-left`, `slide-in-right`, `float`, `pulse-slow`, etc.) para micro-interacciones. No agregues animaciones excesivas que distraigan del contenido.
- **Diseño Responsivo:** Usa los breakpoints estándar de Tailwind (`sm:`, `md:`, `lg:`, `xl:`) para adaptar cada sección. No dejes vistas rotas en ningún dispositivo.

## 4. Estado y Reactividad (JavaScript)

- Astro genera HTML estático, ideal para SEO local y velocidad de carga.
- Para interactividad en el cliente (menú móvil, acordeones FAQ, animaciones con Intersection Observer), usa etiquetas `<script>` con **JavaScript Vanilla** dentro de los componentes.
- Si un script crece demasiado, extrae la lógica a `src/scripts/`.
- Evita librerías de JS pesadas. La landing debe cargar rápido en conexiones móviles.

## 5. Recursos y Assets

- **Imágenes optimizadas:** Las imágenes que requieran procesamiento deben ir en `src/assets/` y usarse con el componente `<Image />` o `<Picture />` de Astro.
- **Archivos públicos:** Imágenes estáticas (favicon, logos, fotos de servicios) van en `public/images/`. Se acceden con ruta absoluta desde `/images/`.
- **Formatos:** Prioriza **WebP** para fotografías. Usa **SVG** para iconos y logos.

## 6. Navegación (File-Based Routing)

- La navegación usa el enrutamiento basado en archivos de Astro.
- Actualmente es una **Single Page** (`src/pages/index.astro` → `/`).
- Si se añaden páginas adicionales, cada archivo en `src/pages/` se convierte en una ruta.
- La lógica visual completa **no va en las páginas**; se importa desde Layouts y Components.

## 7. Conversión y CTA (WhatsApp)

- Todos los enlaces de WhatsApp se generan desde `src/config/site.ts` usando el objeto `WHATSAPP`.
- Cada servicio tiene su propio mensaje pre-redactado. Usa la key correspondiente (`WHATSAPP.mantenimientoPreventivo`, `WHATSAPP.cargaDeGas`, etc.).
- Los botones CTA deben ser visibles, con colores de acento (`accent-*`) y con `target="_blank"` y `rel="noopener noreferrer"`.
- El **número de teléfono** se muestra con formato legible (`CONTACT.phoneDisplay`) y el link se genera con `CONTACT.phone`.

## 8. SEO Local

- Cada página debe incluir `<title>`, `<meta name="description">` y Open Graph tags relevantes.
- Usa un solo `<h1>` por página con la keyword principal del negocio.
- Estructura los headings jerárquicamente (`h1` > `h2` > `h3`).
- Incluye la ubicación geográfica (**Reynosa, Tamaulipas**) en títulos, descripciones y contenido de manera natural.
- Asigna `id` únicos y descriptivos a cada sección para navegación interna con scroll suave.

## 9. Convenciones de Código

- **Variables/Funciones:** `camelCase` descriptivo (ej. `isMenuOpen`, `getWhatsAppLink`). Prohibido usar `get_data` o `var1`.
- **Componentes:** `PascalCase` (ej. `ContactForm.astro`). El nombre debe reflejar su función exacta.
- **Booleanos:** Deben empezar con un prefijo interrogativo como `is`, `has`, `should`.
- **CSS/Tailwind:** `kebab-case` para clases personalizadas (aunque se priorizan utilidades).
- **Consistencia:** Si el proyecto usa un patrón, síguelo. No mezcles estilos de programación.

## 10. Gestión de Dependencias

- Las dependencias se instalan vía **NPM** y se reflejan en `package.json`.
- Dependencias actuales: `astro`, `@astrojs/tailwind`, `tailwindcss`.
- Evita agregar dependencias innecesarias. Mantén el bundle ligero.
- No pegues scripts de CDNs directamente si existe un paquete NPM equivalente.

## 11. Workflow de Desarrollo

- **Desarrollo:** `npm run dev` para el servidor local con hot-reload.
- **Build:** `npm run build` para compilar la versión de producción.
- **Preview:** `npm run preview` para probar el build final localmente.
- Haz commits descriptivos por funcionalidad completada.

## 12. Organización de Directorios

```
src/
├── assets/          # Imágenes/fuentes que Astro procesará
├── components/      # Componentes de UI (Hero, Services, FAQ, Footer, etc.)
├── config/          # Configuración centralizada (site.ts)
├── layouts/         # Layout base (Layout.astro)
├── pages/           # Rutas de la web (index.astro)
└── styles/          # CSS global (global.css, directivas Tailwind)
public/
├── images/          # Imágenes estáticas (fotos, logos)
├── favicon.ico
└── favicon.svg
```

## 14. Comunicación del Agente (Modo Senior)

- **Concisión técnica:** No expliques qué es un "componente" a menos que se te pida. Habla de ingeniero a ingeniero.
- **Justificación de decisiones:** Al proponer un cambio, explica BREVEMENTE el "por qué" desde una perspectiva de performance, SEO o mantenibilidad.
- **Cero Placeholders:** Nunca dejes un `TODO` o `console.log` en el código final. El código entregado debe estar listo para producción.
- **Validación Silenciosa:** Antes de entregar, verifica mentalmente que el cambio no rompa el diseño responsivo o la accesibilidad.
