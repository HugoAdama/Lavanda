# 04. Aprendizajes y Buenas Practicas

Durante el proceso de construccion, migracion y refinamiento visual de la plataforma web de LAVANDA, se identificaron aprendizajes clave de ingenieria de software y diseno de interfaces:

---

## 1. De Plantilla Monolitica a Arquitectura Modular

### Situacion Inicial:
La plantilla original consistia en un unico archivo HTML con mas de 200 lineas de marcado y estilos CSS mezclados en un bloque `<style>`.

### Aprendizaje:
* Modificar un texto o un precio en un archivo monolitico incrementa el riesgo de romper etiquetas o desalinear clases CSS.
* Al dividir el proyecto en capas de responsabilidad (`types`, `data`, `components`, `sections`, `layouts`), cualquier persona del equipo puede actualizar precios, telefonos o testimonios editando exclusivamente archivos de datos TypeScript sin interactuar con el codigo HTML.
* El archivo `src/pages/index.astro` paso de ser un documento extenso a un archivo declarativo de menos de 25 lineas que funciona como indice visual de la experiencia.

---

## 2. El Impacto de los Emojis del Sistema en la Percepcion de Marca

### Situacion Inicial:
Los servicios, pasos, garantias y datos de contacto utilizaban emojis Unicode estandar (como jabon, saco, fuego, ropa, telefono).

### Aprendizaje:
* Los emojis del sistema operativo son inconsistentes: se ven diferentes en Windows, macOS, Android e iOS.
* En sistemas de escritorio como Windows, los emojis se representan con bordes negros pesados y colores primarios muy saturados que chocan directamente con una paleta pastel y sofisticada.
* **Solucion adoptada:** La creacion de un componente unificado `Icon.astro` con trazados SVG vectoriales estilizados. Esto permitio:
  1. Control absoluto de grosor de trazo (`stroke-width`) y esquinas redondeadas.
  2. Uso de colores de la marca mediante variables CSS (`var(--lavanda)` y `var(--menta)`).
  3. Escalabilidad perfecta y nitidez cristalina en pantallas de alta densidad de pixeles (Retina / 4K).

---

## 3. La Fotografia Editorial como Diferenciador de Valor

### Situacion Inicial:
La web empleaba fondos vectoriales planos y esferas con degradados. Aunque el diseno era limpio, carecia de textura y sensacion de servicio real.

### Aprendizaje:
* En servicios fisicos como lavanderias, tintorerias o cuidado del hogar, los clientes compran confianza y textura: desean ver prendas limpias, telas suaves y espacios luminosos.
* Incorporar fotografia editorial real en el Hero (cesto artesanal con ropa doblada y lavanda fresca), en Sostenibilidad (detergente biodegradable y toallas de algodon) y en los testimonios (personas reales sonrientes en sus entornos cotidianos) transformo radicalmente la credibilidad de la marca.
* Para mantener el rendimiento, las imagenes se sirvieron con dimensiones explicitas (`width` y `height`) y tecnicas de carga selectiva (`loading="eager"` para la primera vista y `loading="lazy"` para el resto).

---

## 4. Microinteracciones sin Dependencias Externas

### Situacion Inicial:
Para animar elementos al hacer scroll o desplegar acordeones, frecuentemente se instalan librerias pesadas como AOS, Framer Motion o Bootstrap JS.

### Aprendizaje:
* Las APIs modernas del navegador permiten resolver todas las necesidades de interaccion con cero sobrecarga:
  1. **Acordeon FAQ:** Se resolvio con etiquetas nativas semanticas `<details>` y `<summary>` con animaciones CSS fluidas, manteniendo accesibilidad para lectores de pantalla.
  2. **Scroll Reveal:** Se implemento un observador con `IntersectionObserver` de apenas 15 lineas de JavaScript que activa la clase `.is-revealed`, reduciendo el paquete final a practicamente cero kilobytes.
  3. **Contadores de Sostenibilidad:** Animados mediante `requestAnimationFrame` con curva cubica `ease-out`, ofreciendo una experiencia dinamica sin librerias de animacion.
  4. **Boton Flotante de WhatsApp:** Se diseno con estado inicial no invasivo. El tooltip permanece oculto por defecto y solo se despliega cuando el usuario interactua deliberadamente mediante hover o foco, evitando bloquear informacion critica del pie de pagina.

---

## 5. Optimizacion de Favicons para Pestañas del Navegador

### Situacion Inicial:
El favicon inicial conservaba el icono por defecto de Astro y elementos con poca visibilidad a tamano de 16x16 pixeles.

### Aprendizaje:
* Los favicons deben disenarse teniendo en cuenta el tamano real de visualizacion en la barra de pestanas de los navegadores (16x16 a 32x32 pixeles).
* Las ilustraciones complejas se convierten en manchas borrosas a esa escala. La mejor practica es utilizar monogramas legibles de alto contraste con un color de fondo corporativo solido o degradado sutil.
* El uso de SVG con `type="image/svg+xml"` proporciona la mejor fidelidad en todos los navegadores modernos.
