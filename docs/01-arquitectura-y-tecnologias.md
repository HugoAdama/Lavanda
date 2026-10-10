# 01. Arquitectura y Tecnologias Usadas

## 1. Pila Tecnologica

El proyecto esta construido sobre las siguientes tecnologias fundamentales:

* **Astro 7 (astro ^7.3.8):** Framework web orientado al rendimiento que implementa la arquitectura de islas y generacion de sitios estaticos (SSG). Produce cero JavaScript por defecto en el cliente para componentes puramente presentacionales.
* **TypeScript 5.x:** Tipado estatico estricto para los contratos de datos, configuracion de negocio y componentes.
* **Vite:** Motor de empaquetado y servidor de desarrollo ultrarrapido con recarga en caliente (HMR).
* **CSS Nativo Modular:** Variables CSS (Custom Properties) para tokens de diseno, selectores semanticos y utilidades responsive sin dependencias de frameworks CSS pesados.
* **APIs Web Nativas:** IntersectionObserver para animaciones al hacer scroll y calculo de contadores numericos sin librerias externas.

---

## 2. Arquitectura por Separacion de Responsabilidades

La estructura de carpetas implementa una separacion rigurosa entre datos, logica, presentacion y estructura global:

```text
src/
├── types/        Capa de Modelos y Contratos (TypeScript)
├── data/         Capa de Contenidos Centralizados (Archivos de configuracion y datos)
├── styles/       Capa de Tokens y Estilos Globales (Variables CSS, tipografia y reset)
├── components/   Capa de Componentes Modulares
│   ├── ui/       Atomos reutilizables (Botones, insignias, encabezados, acordeon, iconos)
│   ├── cards/    Tarjetas de presentacion (Servicios, pasos, precios, testimonios)
│   ├── layout/   Componentes estructurales (Header, Footer)
│   └── sections/ Secciones completas de la pagina de aterrizaje
├── layouts/      Plantilla principal HTML (Metadatos SEO, Open Graph, fuentes)
└── pages/        Rutas y orquestacion de pagina (index.astro)
```

---

## 3. Descripcion de las Capas

### A. Capa de Modelos (src/types/landing.ts)
Declara las interfaces de TypeScript que definen la forma de cada entidad del negocio:
* `ServiceItem`: Identificador, icono vectorial, titulo y descripcion.
* `StepItem`: Numero de paso, titulo y explicacion del proceso.
* `PricingPlan`: Nombre, precio, periodicidad, estado popular, lista de beneficios y enlace.
* `TestimonialItem`: Calificacion, testimonio, autor, cargo, iniciales y URL de fotografia.
* `EcoFeature` y `EcoMetric`: Atributos y cifras de sostenibilidad.
* `FaqItem`: Pregunta, identificador y respuesta.
* `SiteConfig`: Datos de contacto corporativo, horarios, titulos y configuracion de WhatsApp.

### B. Capa de Contenidos (src/data/)
Aisla los textos, numeros y listas de la logica de marcado:
* `siteConfig.ts`: Telefono, correo, horarios, nombre de marca y mensaje predeterminado.
* `navigation.ts`: Enlaces de la barra de navegacion.
* `services.ts`: Lista de los 6 servicios prestados.
* `howItWorks.ts`: Los 4 pasos del proceso de atencion.
* `pricing.ts`: Tarifas mensuales y por servicio.
* `testimonials.ts`: Resenas de clientes con referencias a fotografias reales.
* `sustainability.ts`: Metricas y compromisos medioambientales.
* `faq.ts`: Preguntas y respuestas frecuentes.
* `trustBadges.ts`: Sellos de garantia y metodos de pago aceptados.

### C. Capa de Presentacion (src/components/)
Los componentes se organizan de menor a mayor jerarquia:
1. **ui/**: Componentes pequenos y reutilizables (`Button`, `Badge`, `SectionHeader`, `Icon`, `FaqAccordion`, `WhatsAppButton`).
2. **cards/**: Tarjetas con estado visual propio (`ServiceCard`, `StepCard`, `PricingCard`, `TestimonialCard`).
3. **sections/**: Ensamblaje de tarjetas y encabezados para formar secciones completas (`Hero`, `Services`, `HowItWorks`, `Pricing`, `Testimonials`, `Sustainability`, `Faq`, `CtaBanner`).
4. **layout/**: Elementos persistentes de navegacion superior e inferior (`Header`, `Footer`).

### D. Capa de Orquestacion (src/pages/index.astro)
La pagina principal no contiene logica de negocio ni marcado complejo inline; se limita a importar el `Layout` global y disponer las secciones en el orden ergonomico de lectura.

---

## 4. Estrategia de Rendimiento y Renderizado

* **Generacion Estatica (SSG):** Todo el HTML se compila en tiempo de construccion (`astro build`), produciendo archivos listos para servir en CDN o cualquier servidor web sin costo de renderizado por peticion.
* **Cero JavaScript innecesario:** Los componentes estaticos no inyectan JavaScript en el navegador del usuario. Solo los elementos que requieren interactividad (menu movil, acordeon FAQ, boton de WhatsApp y observador de scroll) contienen scripts minimos y optimizados.
* **Optimizacion de Fuentes:** Preconexion a Google Fonts (`preconnect`) para reducir el tiempo de bloqueo de renderizado de `Poppins`, `Inter` y `Playfair Display`.
* **Carga de Imagenes:** Carga prioritaria (`loading="eager"`) en la imagen principal del Hero y carga diferida (`loading="lazy"`) en fotografias secundarias de sostenibilidad y avatares.
