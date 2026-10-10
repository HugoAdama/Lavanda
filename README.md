# LAVANDA - Frescura que se siente

Plataforma web de aterrizaje para servicio de lavanderia y tintoreria boutique a domicilio en 24 horas, desarrollada con Astro 7, TypeScript y arquitectura modular por separacion de responsabilidades.

## Caracteristicas Principales

* **Framework:** Astro 7 (astro ^7.3.8) con generacion estatica (SSG).
* **Tipado Estricto:** TypeScript para todas las entidades y configuraciones de negocio.
* **Separacion de Responsabilidades:** Contenido, tipos, estilos y componentes completamente desacoplados.
* **Iconografia Vectorial:** Componentes SVG en linea adaptados a la paleta corporativa (sin dependencias de fuentes de iconos ni emojis de sistema).
* **Direccion de Arte:** Fotografia editorial integrada en resolucion adaptativa y optimizada.
* **Microinteracciones Nativas:** Acordeon de preguntas frecuentes (FAQ), boton flotante de WhatsApp con tooltip al hover, menu movil con drawer y animaciones de scroll reveal mediante IntersectionObserver nativo.

## Estructura del Proyecto

```text
/
├── docs/             Documentacion tecnica y de negocio
├── public/           Recursos estaticos publicos (favicon SVG, fotografias)
├── src/
│   ├── components/   Componentes modulares (ui, cards, layout, sections)
│   ├── data/         Contenidos desacoplados (precios, servicios, faq, etc.)
│   ├── layouts/      Plantilla principal HTML con metadatos SEO
│   ├── pages/        Paginas de la aplicacion (index.astro)
│   ├── styles/       Variables CSS y estilos globales
│   └── types/        Interfaces y contratos TypeScript
├── package.json
└── tsconfig.json
```

## Documentacion Detallada

Consulte la carpeta `docs/` para revisar las guias tecnicas y de negocio:

* [01. Arquitectura y Tecnologias Usadas](docs/01-arquitectura-y-tecnologias.md)
* [02. Identidad del Negocio Trasladada a la Pagina Web](docs/02-identidad-de-marca-y-diseno.md)
* [03. Guia de Mantenimiento del Codigo](docs/03-guia-de-mantenimiento.md)
* [04. Aprendizajes y Buenas Practicas](docs/04-aprendizajes-y-buenas-practicas.md)

## Comandos Disponibles

| Comando | Descripcion |
| :--- | :--- |
| `npm install` | Instala las dependencias del proyecto |
| `npm run dev` | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build` | Compila el sitio estatico para produccion en `./dist/` |
| `npm run preview` | Previsualiza la compilacion de produccion en local |

## Creditos

Desarrollado por Hugo Adama.
Todos los derechos reservados.
