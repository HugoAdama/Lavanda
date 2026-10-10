# 03. Guia de Mantenimiento del Codigo

Este documento describe como realizar modificaciones frecuentes, agregar nuevo contenido y extender la plataforma sin comprometer la estabilidad del sistema ni duplicar codigo.

---

## 1. Comandos de Desarrollo y Despliegue

Desde la raiz del proyecto (`e:/LAVANDA`):

* **Iniciar servidor de desarrollo:**
  ```bash
  npm run dev
  ```
  O segun las reglas del proyecto en segundo plano:
  ```bash
  npx astro dev --background
  ```
  Gestione el servidor en segundo plano con:
  ```bash
  npx astro dev status
  npx astro dev logs
  npx astro dev stop
  ```

* **Validar y compilar para produccion:**
  ```bash
  npm run build
  ```
  El resultado estatico se genera en el directorio `dist/`.

* **Previsualizar la compilacion de produccion localmente:**
  ```bash
  npm run preview
  ```

---

## 2. Modificacion de Contenidos Centralizados

Toda la informacion del negocio esta desacoplada del marcado HTML y reside en la carpeta `src/data/`.

### A. Modificar Datos de Contacto o WhatsApp
Edite el archivo `src/data/siteConfig.ts`:
* Para cambiar telefonos, correo electronico o ubicacion, modifique el objeto `contact`.
* Para cambiar los horarios de atencion, actualice el objeto `hours`.
* Para cambiar el numero o mensaje por defecto de WhatsApp, edite el bloque `whatsapp`:
  ```typescript
  whatsapp: {
    number: '51999999999',
    message: 'Mensaje predeterminado aqui...',
  }
  ```

### B. Agregar o Modificar Servicios
Edite el archivo `src/data/services.ts`. Cada servicio requiere:
* `id`: Cadena unica para identificar el elemento.
* `icon`: Nombre del icono soportado en `src/components/ui/Icon.astro` (ejemplo: `wash`, `dry-clean`, `iron`, `subscription`, `bedding`, `sneakers`).
* `title`: Nombre visible del servicio.
* `description`: Texto descriptivo breve.

*Recomendacion:* Mantenga una cantidad par de servicios (6 es el numero optimo) para conservar la simetria de la cuadricula de 3x2 en escritorio.

### C. Actualizar Tarifas y Planes de Precios
Edite el archivo `src/data/pricing.ts`. Cada plan define:
* `name`, `subtitle`, `price` y `period`.
* `isPopular`: Valor booleano (`true` o `false`). Solo un plan debe tener `isPopular: true` para aplicar el estilo destacado y la insignia.
* `badge`: Texto de la etiqueta superior (ejemplo: `MÁS POPULAR`).
* `features`: Arreglo de cadenas de texto con los beneficios del plan.

### D. Gestionar Preguntas Frecuentes (FAQ)
Edite el archivo `src/data/faq.ts`. Agregue o modifique elementos con:
* `id`: Identificador unico (ejemplo: `faq-7`).
* `question`: Pregunta que aparecera en la cabecera del acordeon.
* `answer`: Respuesta detallada explicativa.

### E. Actualizar Testimonios
Edite el archivo `src/data/testimonials.ts`:
* Asegurese de colocar las fotografias de los nuevos testimonios en `public/images/`.
* Declare `avatarUrl` apuntando a la ruta publica (ejemplo: `/images/avatar-nombre.jpg`).

---

## 3. Incorporacion de Nuevos Iconos SVG

Los iconos estan centralizados en `src/components/ui/Icon.astro` para evitar dependencias de librerias de fuentes o paquetes externos:

1. Abra `src/types/landing.ts` o el bloque de tipos en `src/components/ui/Icon.astro`.
2. Agregue el nuevo nombre al tipo `IconName`:
   ```typescript
   export type IconName = ... | 'nuevo-icono';
   ```
3. Agregue la condicion con el SVG vectorial:
   ```astro
   {name === 'nuevo-icono' && (
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width={size}
       height={size}
       viewBox="0 0 24 24"
       fill="none"
       stroke={color}
       stroke-width="1.8"
       stroke-linecap="round"
       stroke-linejoin="round"
       class={className}
     >
       <!-- Trazos del SVG -->
     </svg>
   )}
   ```

---

## 4. Buenas Practicas de Estilo y Rendimiento

1. **Uso de Variables de Color:** Siempre utilice las variables CSS declaradas en `src/styles/global.css` (`var(--lavanda)`, `var(--menta)`, `var(--carbon)`, etc.) en lugar de codigos hexadecimales fijos.
2. **Animaciones de Scroll:** Para hacer que un nuevo elemento entre con animacion suave al hacer scroll, agregue el atributo `data-reveal` a su contenedor HTML. Opcionalmente agregue `data-delay="200"` para escalonar su entrada.
3. **Control de Peso de Imagenes:** Mantenga las imagenes en `public/images/` optimizadas en formato JPG o WebP con un peso inferior a 300 KB por fotografia.

---

## 5. Publicacion y Despliegue Continuo en GitHub Pages

El proyecto cuenta con despliegue automatico mediante GitHub Actions configurado en `.github/workflows/deploy.yml`.

### A. Procedimiento para Publicar Cambios
Para desplegar cualquier cambio realizado en la web:
1. Realice los cambios necesarios en los archivos de datos, componentes o estilos.
2. Verifique la compilacion localmente:
   ```bash
   npm run build
   ```
3. Registre y envie los cambios a la rama principal:
   ```bash
   git add .
   git commit -m "feat: descripcion clara de los cambios"
   git push origin main
   ```
4. El flujo de GitHub Actions se activara de forma automatica, compilara el proyecto e implementara la nueva version en:
   **https://hugoadama.github.io/Lavanda/**

### B. Monitoreo de Despliegues
* Ingrese a la pestana **Actions** en el repositorio `https://github.com/HugoAdama/Lavanda/actions`.
* Alli vera el historial de ejecuciones de "Deploy to GitHub Pages" con los registros de construccion y publicacion.

### C. Migracion a Dominio Personalizado (Opcional Futuro)
Si en el futuro se adquiere un dominio propio (por ejemplo `lavanda.pe` o `lavanda.com`):
1. En GitHub, dirijase a **Settings > Pages > Custom domain** e ingrese el dominio.
2. En `astro.config.mjs`, actualice `site` con su dominio y cambie `base: '/'`:
   ```javascript
   export default defineConfig({
     site: 'https://lavanda.pe',
     base: '/',
   });
   ```

