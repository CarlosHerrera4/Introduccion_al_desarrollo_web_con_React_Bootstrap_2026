# Introducción al desarrollo web con React y Bootstrap

Ejercicios y ejemplos realizados durante la sesión del Experto en desarrollo GIS de Esri.

---

## Índice de contenidos

- [1 · HTML](#1--html)
- [2 · CSS](#2--css)
- [3 · JavaScript](#3--javascript)
- [4 · React](#4--react)

---

## 1 · HTML

Archivos de ejemplo ubicados en la carpeta `1-html/`.

| Archivo | Descripción |
|---|---|
| `estructura_minima.html` | Plantilla con la estructura mínima de un documento HTML (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`). |
| `ejemplo1.html` | Etiquetas básicas: encabezados (`h1`–`h6`), párrafos, negritas, enlaces (`<a>`), imágenes, listas ordenadas y desordenadas, y un campo de formulario. |
| `ejemplo2.html` | Formularios: inputs de tipo texto, email y contraseña, elemento `<select>` con opciones, y botón. |

---

## 2 · CSS

Ejemplo ubicado en `2-css/ejemplo-1/`.

Muestra las tres formas de aplicar estilos en HTML:

- **Estilos en línea** — atributo `style` directamente en la etiqueta.
- **Etiqueta `<style>`** — bloque CSS embebido en el propio HTML.
- **Hoja de estilos externa** — archivo `css/main.css` enlazado con `<link>`.

También se muestran los distintos tipos de selectores CSS: por **elemento**, por **ID** (`#`) y por **clase** (`.`).

---

## 3 · JavaScript

Ejemplos ubicados en `3-javascript/`.

### `ejemplo-1/`

Fundamentos del lenguaje JavaScript (ejecutado desde la consola del navegador):

- Declaración de variables (`const`, `let`) y tipos de datos.
- Arrays y objetos literales.
- Template literals.
- Definición e invocación de funciones.
- Bucle `for` y condicional `if/else`.

### `calculaLetraDNI/`

Aplicación interactiva que calcula la letra de un DNI español:

- Manipulación del DOM: `getElementById`, `addEventListener`, `innerText`.
- Cálculo del resto del número entre 23 para obtener la letra correspondiente.

---

## 4 · React

Proyectos ubicados en `4-react/`. Todos utilizan **Vite** como herramienta de desarrollo y empaquetado (salvo el primer ejemplo de React sin dependencias).

### Instrucciones generales para las apps con Vite

Todos los proyectos basados en Vite siguen el mismo flujo:

```bash
# 1. Entrar en la carpeta del proyecto
cd 4-react/<nombre-del-proyecto>

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo (con Hot Module Replacement)
npm run dev
```

Otros comandos disponibles:

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:5173` |
| `npm run build` | Genera la build de producción en la carpeta `dist/` |
| `npm run preview` | Sirve la build de producción localmente para previsualizar |
| `npm run lint` | Ejecuta ESLint sobre el código fuente |

---

### `1-react-sin-dependencias/`

React **sin herramientas de build ni npm**. Las librerías se cargan directamente desde CDN usando ES Modules (`esm.sh`).

Conceptos que ilustra:

- Cómo usar React en el navegador sin instalación.
- `React.createElement` para crear elementos de forma programática.
- `ReactDOM.createRoot` y `root.render` para montar la aplicación.

> Abre `index.html` directamente en el navegador (o con un servidor estático sencillo como Live Server).

---

### `2-primera-app-vite/`

Primera app generada con la plantilla oficial de **Vite + React 19**.

Conceptos que ilustra:

- Estructura de un proyecto Vite + React (carpetas `src/`, `public/`, `index.html`).
- Componentes funcionales JSX.
- Hook `useState` con un contador de clics.
- Hot Module Replacement (HMR) en acción.

**Uso:**

```bash
cd 4-react/2-primera-app-vite
npm install
npm run dev
```

---

### `3-joke-example/`

App que consume la **API pública JokeAPI v2** para mostrar chistes en español.

Conceptos que ilustra:

- Peticiones HTTP con `fetch` dentro de un componente React.
- Gestión del estado con `useState`.
- Renderizado condicional según la respuesta de la API.

**Uso:**

```bash
cd 4-react/3-joke-example
npm install
npm run dev
```

---

### `4-example-arcgis-sdk-js/`

Integración de **ArcGIS Maps SDK for JavaScript** (`@arcgis/map-components`) en una app React + Vite.

Muestra un mapa web publicado en ArcGIS Online con los siguientes componentes web de Esri:

- `<arcgis-map>` — visor de mapa web (cargado por `item-id`).
- `<arcgis-search>` — barra de búsqueda.
- `<arcgis-layer-list>` — lista de capas.
- `<arcgis-legend>` — leyenda.
- `<arcgis-basemap-layer-list>` — selector de mapa base.

**Dependencias principales:** `@arcgis/core`, `@arcgis/map-components`, `@esri/calcite-components`.

**Uso:**

```bash
cd 4-react/4-example-arcgis-sdk-js
npm install
npm run dev
```

> La primera instalación puede tardar varios minutos ya que `@arcgis/core` es una librería de gran tamaño.

---

### `5-calcula-letra-dni-react/`

Migración del ejercicio de JavaScript puro a **React con estado**.

Conceptos que ilustra:

- Formulario controlado con `useState` (input enlazado al estado).
- Gestión de eventos `onChange` y `onClick`.
- Algoritmo de cálculo de letra del DNI (módulo 23).
- Renderizado condicional del resultado.

**Uso:**

```bash
cd 4-react/5-calcula-letra-dni-react
npm install
npm run dev
```

---

### `6-calcula-letra-dni-react-bootstrap/`

La misma calculadora de letra del DNI, rediseñada con **React Bootstrap**.

Conceptos que ilustra:

- Instalación y uso de `react-bootstrap` y `bootstrap`.
- Componentes Bootstrap en JSX: `Container`, `Form`, `Form.Group`, `Form.Label`, `Form.Control`, `Button` y `Alert`.
- Estilado con variantes Bootstrap (`variant="success"`).

**Uso:**

```bash
cd 4-react/6-calcula-letra-dni-react-bootstrap
npm install
npm run dev
```
