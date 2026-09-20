# Guía de Estilos y Reglas de Diseño (Design System)
## Proyecto: Interfaz CERCAP - CDRO

Este documento detalla todas las reglas de diseño, paleta de colores, tipografía, componentes visuales y lineamientos de maquetación implementados en la plataforma web de **CERCAP - CDRO** (*Centro Regional de Capacitación para la Participación Comunitaria*).

---

## 1. Paleta de Colores (Color Palette)

La plataforma utiliza una combinación cromática institucional basada en el azul corporativo de la organización, acentuada con tonos grafito noche, fondos limpios y una paleta semántica para datos estadísticos.

### 1.1 Colores Principales y Estructurales

| Nombre / Variable | Código HEX | Rol y Aplicación |
| :--- | :--- | :--- |
| **Azul Primario (`primary`)** | `#2C509C` | Color institucional principal. Empleado en el fondo del Hero Header, enlaces activos, botones destacados, marcadores del mapa, acentos y popups. |
| **Marco Profundo (`border-dark`)** | `#1C2236` | Tono azul noche/grafito profundo. Utilizado en los **marcos de todas las imágenes**, bordes delgados de **todos los cuadros de texto**, y en el contenedor del mapa interactivo. |
| **Oscuro Principal (`dark`)** | `#111827` | Color base para textos principales, titulares de alto contraste y botones principales (`bg-dark hover:bg-black`). |
| **Fondo Cobertura / Infografía** | `#EDEDEE` | Fondo exacto de la sección *Participantes de nuestros proyectos* para integración continua sin costuras visuales con las capturas de datos. |
| **Fondo Claro (`light`)** | `#F9FAFB` | Fondo suave para la sección de *Historias relevantes* / productos. |
| **Blanco Puro** | `#FFFFFF` | Fondo base de la página, fondo de cuadros de texto, tarjetas de métricas y pie de página. |
| **Grafito de Siluetas** | `#374151` | Color aplicado a los trazos vectoriales decorativos de fondo (siluetas de montañas y sol minimalista). |

### 1.2 Paleta de Transparencias y Resplandores

- `rgba(44, 80, 156, 0.10)` / `bg-primary/10`: Fondos suaves para insignias (badges) y contenedores de iconos.
- `rgba(44, 80, 156, 0.20)` / `border-primary/20`: Bordes delicados para cápsulas informativas.
- `rgba(44, 80, 156, 0.60)`: Resplandor circular (`box-shadow`) en los marcadores pulsantes del mapa.
- `rgba(255, 255, 255, 0.20)` / `border-white/20`: Divisores y bordes sutiles en la barra de navegación del Hero.

### 1.3 Paleta Semántica para Métricas de Cobertura

Para la visualización de los 7 grupos de impacto en el territorio, se definieron identificadores visuales armonizados:

| Indicador | Color del Icono / Fondo | Aplicación |
| :--- | :--- | :--- |
| **4,000 Mujeres** | Rosa (`bg-pink-100 text-pink-700`) | Mayoría participativa y liderazgo comunitario. |
| **2,000 Niños y Niñas** | Ámbar (`bg-amber-100 text-amber-700`) | Infancia y estimulación temprana. |
| **1,000 Productores** | Esmeralda (`bg-emerald-100 text-emerald-700`) | Cadenas de valor agropecuarias y artesanales. |
| **600 Jóvenes** | Azul CERCAP (`bg-blue-100 text-primary`) | Formación técnica y desarrollo juvenil. |
| **150 Comunidades** | Índigo (`bg-indigo-100 text-indigo-700`) | Cobertura en bases comunitarias. |
| **25 Org. Comunitarias** | Púrpura (`bg-purple-100 text-purple-700`) | Redes y estructuras asociativas de CDRO. |
| **20 Municipios** | Cian (`bg-cyan-100 text-cyan-800`) | Articulación municipal en 5 departamentos. |

---

## 2. Tipografía (Typography System)

Se combinan dos familias tipográficas de Google Fonts para equilibrar carácter institucional, modernidad y alta legibilidad:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap" rel="stylesheet">
```

### 2.1 Familias Tipográficas

1. **`Montserrat` (`font-title`)**:
   - **Pesos:** 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black).
   - **Uso:** Título institucional principal ("Cercap-CDRO"), contadores numéricos y cifras clave.
   - **Configuración Tailwind:** `title: ['Montserrat', 'Inter', 'sans-serif']`.

2. **`Inter` (`font-sans`)**:
   - **Pesos:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).
   - **Uso:** Cuerpo de texto, párrafos, subtítulos, navegación, botones, tablas y etiquetas del mapa.
   - **Configuración Tailwind:** `sans: ['Inter', 'sans-serif']` (predeterminada en el `body`).

### 2.2 Jerarquía y Escalas Tipográficas

| Nivel / Elemento | Familia | Peso | Tamaño Tailwind | Propiedades Adicionales |
| :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero Principal)** | `Montserrat` | ExtraBold (800) | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` | `tracking-tight drop-shadow-sm mb-4` |
| **Subtítulo Hero** | `Inter` | Regular (400) | `text-sm sm:text-base` | `leading-relaxed opacity-90 mb-8 max-w-2xl` |
| **H2 (Títulos de Sección)** | `Inter` / `Montserrat` | Bold / ExtraBold | `text-3xl md:text-4xl` | `text-dark tracking-tight mb-4` a `mb-10` |
| **H3 (Títulos de Tarjeta)** | `Inter` | Bold (700) | `text-lg` a `text-xl` | `text-dark mb-1` a `mb-2` |
| **Cifras de Métricas** | `Montserrat` | Black (900) | `text-2xl lg:text-xl xl:text-2xl` | `text-dark font-title` |
| **Texto de Párrafo** | `Inter` | Regular (400) | `text-base` / `text-sm` | `text-gray-600 leading-relaxed` |
| **Botones Principales** | `Inter` | Medium (500) | `text-sm` | `font-medium uppercase-none tracking-normal` |
| **Badges / Microetiquetas** | `Inter` | Bold (700) | `text-xs` (12px) a `text-[10px]` | `uppercase tracking-wider` |

---

## 3. Reglas para Cuadros de Texto y Tarjetas (Cards)

Para mantener una interfaz limpia, legible y libre de interferencias con el fondo decorativo, todos los cuadros de texto se rigen por estas especificaciones:

- **Fondo:** Siempre opaco con `bg-white` (evita transparencias totales que permitan que las líneas de fondo corten la lectura).
- **Borde Delgado:** Obligatorio de 1px en color `#1C2236`:
  ```html
  border border-[#1C2236]
  ```
- **Radio de Esquinas:**
  - `rounded-2xl` (16px) para contenedores y tarjetas de sección principal.
  - `rounded-xl` (12px) para tarjetas compactas de métricas y controles.
- **Relleno Interior (Padding):**
  - Secciones principales: `p-6 sm:p-8`.
  - Tarjetas secundarias y métricas: `p-4` a `p-5`.
- **Sombra:** `shadow-sm` para separación sutil del fondo sin sobrecargar.
- **Capa (Z-Index):** Siempre en capa frontal con `relative z-10`.

---

## 4. Reglas para Imágenes y Medios Visuales

### 4.1 Marcos y Bordes en Imágenes

Todas las fotografías y capturas de pantalla deben contener un marco perimetral sólido:

- **Imágenes Principales (Proyectos y Mapas):**
  ```html
  border-[3px] border-[#1C2236] rounded-xl shadow-lg object-cover
  ```
- **Imágenes Secundarias (Productos / Historias):**
  ```html
  border-2 border-[#1C2236] rounded-xl shadow-sm object-cover
  ```
- **Infografía de Cobertura / Mapa:**
  ```html
  border-[3px] border-[#1C2236] rounded-xl shadow-md object-contain
  ```

### 4.2 Logotipo Institucional (`isologo-cercap`)

- **Ruta de Archivo:** `ImagenesCercap/isologo-cercap.png`.
- **Transparencia:** Debe emplearse la versión **sin fondo** (fondo transparente).
- **Prohibición de Contenedor:** **No** debe aplicarse ningún fondo blanco artificial (`bg-white`) ni contenedor redondeado al logo. Debe descansar naturalmente sobre el fondo del Navbar:
  ```html
  <img src="ImagenesCercap/isologo-cercap.png" alt="isologo-cercap" class="h-12 w-auto object-contain">
  ```

---

## 5. Elementos Decorativos de Fondo: Siluetas de Montañas y Sol

Inspirados en la cordillera del Altiplano Occidental de Guatemala (área de cobertura de CDRO: Totonicapán, Quetzaltenango, Huehuetenango, San Marcos, Sololá, Quiché).

### 5.1 Especificaciones del Trazado Vectorial

- **Contenedor:** `.threads-container` posicionado en `z-index: 0` con `pointer-events: none` y `position: absolute`.
- **Propiedades de las Rutas (`.mountain-path`):**
  - `fill: none;`
  - `stroke: #374151;` (Grafito elegante)
  - `stroke-linecap: round;`
  - `stroke-linejoin: round;`
  - `vector-effect: non-scaling-stroke;` (Mantiene el grosor uniforme sin distorsión al reescalar la ventana).

### 5.2 Capas de Profundidad de las Montañas

1. **Cordillera Lejana (`.mountain-back`):**
   - `stroke-width: 1.2px;`
   - `opacity: 0.35;`
2. **Cordillera Media (`.mountain-mid`):**
   - `stroke-width: 1.5px;`
   - `opacity: 0.50;`
3. **Colinas en Primer Plano (`.mountain-front`):**
   - `stroke-width: 1.8px;`
   - `opacity: 0.65;`
4. **Aristas y Crestas Discontinuas (`.mountain-contour`):**
   - `stroke-width: 1.0px;`
   - `stroke-dasharray: 4 6;`
   - `opacity: 0.30;`

### 5.3 Sol Minimalista

- **Regla Estricta:** Dibujado **únicamente por sus bordes** (sin ningún tipo de relleno).
- **Ubicación:** Flotando en la esquina superior derecha (`top-[630px] right-8 sm:right-16 md:right-28`) inmediatamente sobre las cumbres montañosas.
- **Composición:**
  - Disco solar central en línea (`circle r=18` con clase `mountain-front`).
  - Aro orbital exterior sutil (`circle r=26` con clase `mountain-contour`).
  - 8 rayos lineales simétricos (`line` con clase `mountain-mid`).

### 5.4 Regla de Oro: Protección de Textos

> **Las líneas decorativas del fondo NUNCA deben cruzar ni superponerse con el texto.**
> Se asegura mediante el uso de `relative z-10` y fondos sólidos (`bg-white`, `bg-[#EDEDEE]`, `bg-light`) en todas las cajas de contenido, tarjetas y encabezados.

---

## 6. Componentes de Interfaz (UI Components)

### 6.1 Botones de Acción (Call to Action)

- **Botón Oscuro Estándar ("Leer más"):**
  ```html
  <button class="bg-dark text-white px-6 py-2 rounded hover:bg-black transition text-sm font-medium">
      Leer más
  </button>
  ```
- **Botón Hero / Navbar (Contorno Blanco):**
  ```html
  <a href="#" class="border border-white px-5 py-2 hover:bg-white hover:text-primary transition text-sm font-medium">
      Botón
  </a>
  ```

### 6.2 Píldoras de Filtro Territorial (Map Controls)

- **Estado Inactivo:**
  ```html
  class="dept-pill px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-primary/5 hover:border-primary"
  ```
- **Estado Activo:**
  ```html
  class="dept-pill active px-3.5 py-1.5 rounded-full text-xs font-bold border border-primary bg-primary text-white shadow-sm"
  ```

### 6.3 Tarjetas de Métricas con Microinteracción

- **Clase base:** `.metric-card`
- **Efecto Hover:**
  ```css
  transform: translateY(-3px);
  box-shadow: 0 10px 20px -5px rgba(44, 80, 156, 0.18);
  border-color: #2C509C;
  ```

---

## 7. Lineamientos de Maquetación y Espaciado

- **Ancho Máximo del Contenido:** `max-w-7xl` (1280px), centrado con `mx-auto px-6`.
- **Relleno Vertical de Secciones:**
  - Secciones estándar: `py-24` (96px superior e inferior).
  - Secciones densas de datos: `py-20` (80px superior e inferior).
- **Separación entre Columnas:**
  - Secciones de 2 columnas: `gap-16 items-center`.
  - Rejilla de historias: `gap-8`.
  - Rejilla de características: `gap-x-12 gap-y-16`.

---
*Documento generado y sincronizado con el código de `Index.html`.*
