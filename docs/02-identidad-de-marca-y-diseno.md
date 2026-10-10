# 02. Identidad del Negocio Trasladada a la Pagina Web

## 1. Posicionamiento del Negocio

LAVANDA se posiciona en el mercado como un servicio de lavanderia a domicilio de categoria boutique y de alta conveniencia. A diferencia de las lavanderias tradicionales industriales o de autoservicio, la propuesta de valor se apoya en cuatro pilares:

1. **Cero Esfuerzo para el Cliente:** Recogida y entrega puerta a puerta en 24 horas.
2. **Cuidado Superior de Prendas:** Tratamiento profesional adaptado a cada tipo de tejido.
3. **Compromiso Ecologico Real:** Procesos que ahorran un 40% de agua y emplean detergentes 100% biodegradables.
4. **Claridad y Confianza:** Precios transparentes sin costos ocultos y seguimiento directo.

---

## 2. Traduccion de la Marca a Tokens Visuales

Para comunicar esta propuesta de valor de forma visual, se establecio un sistema de tokens de diseno coherente en `src/styles/global.css`:

### A. Paleta Cromatica
* **Lavanda Principal (`#9B8EC4`):** Color de identidad. Transmite calma, limpieza, frescura aromatica y sofisticacion. Utilizado en botones primarios, isotipo, titulares de enfasis y sombras de acento.
* **Lavanda Claro (`#E8E3F3`):** Tono pastel utilizado para fondos de tarjetas, insignias suaves y bordes de delimitacion sutil.
* **Verde Menta (`#7EC8C8`):** Color secundario de frescura y naturaleza. Simboliza los aspectos ecologicos, el cuidado del agua y los indicadores de verificacion o estado en linea.
* **Blanco Roto / Fondo Organico (`#FAFAF8`):** Fondo principal que evita la frialdad del blanco puro (`#FFFFFF`) y aporta una textura visual calida similar a telas de lino natural.
* **Carbon Neutro (`#2D2D3A`):** Tono oscuro para tipografia principal. Ofrece alto contraste y legibilidad sin la agresividad del negro absoluto (`#000000`).
* **Dorado Suave (`#D4AF37`):** Color funcional reservado exclusivamente para la calificacion de estrellas y la insignia del plan mas popular.

---

## 3. Jerarquia Tipografica

El diseno combina tres familias tipograficas complementarias:

1. **Poppins (Sans-Serif Geometrica):** Utilizada en titulares (`h1`, `h2`, `h3`), botones y cifras. Transmite modernidad, accesibilidad y dinamismo.
2. **Inter (Sans-Serif Humanista):** Utilizada para textos de parrafo, descripciones y elementos funcionales. Seleccionada por su excelente legibilidad en pantallas de cualquier resolucion.
3. **Playfair Display (Serif Clasica, estilo italico):** Utilizada como recurso de enfasis en palabras clave de titulares (ejemplo: *"sin mover un dedo"* y *"y el planeta"*). Aporta el toque editorial y artesanal propio de un servicio boutique.

---

## 4. Direccion de Arte e Iconografia

### A. Fotografia Editorial vs. Elementos Abstractos
Inicialmente, la web utilizaba circulos con emojis del sistema operativo. Esto generaba una percepcion plana y de baja resolucion. La direccion de arte se elevo mediante:
* Fotografia editorial en alta definicion con luz natural matutina, toallas de algodon suave dobladas y lavanda natural fresca.
* Retratos autenticos de clientes para humanizar los testimonios en lugar de avatares con iniciales genericas.
* Fotografia de producto en sostenibilidad mostrando envases de vidrio con tapas de bambu para evidenciar el compromiso ecologico.

### B. Iconografia Vectorial Duotono (src/components/ui/Icon.astro)
Se reemplazaron todos los emojis por componentes SVG vectoriales especificos construidos con trazo redondeado (`stroke-width="1.8"` a `2.2"`). Cada icono hereda los colores del sistema (`currentColor`, lavanda o menta), garantizando una escala visual homogenea.

### C. Diseno del Isotipo / Favicon
El favicon de la pestana del navegador utiliza un monograma estilizado con la letra "L" en blanco sobre fondo lavanda redondeado, acompanado por un punto de frescura en color menta. Esto asegura que la identidad de marca sea reconocible incluso a resoluciones extremas de 16x16 pixeles.
