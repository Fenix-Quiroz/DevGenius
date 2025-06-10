# DevGenius

**DevGenius** es una herramienta pensada para programadores que buscan optimizar su flujo de trabajo. Con esta página podrás:

- Obtener **nombres creativos y apropiados** para variables o funciones, sin romperte la cabeza.
- **Entender fragmentos de código** que no te resultan familiares.
- Acceder a **múltiples formatos de color** (hex, RGB, HSL, etc.) según tu preferencia.
- Generar paletas con **armonía de colores** a partir de un color base.

![Vista previa del proyecto](/public/screen-page.png)

---

## 🚀 Cómo iniciar el proyecto

1. Clona el repositorio:

   ```bash
   https://github.com/Fenix-Quiroz/DevGenius.git
   ```

2. En la terminal ejecuta :

```bash
  npm install
```

y después

```bash
npm run dev
```

## 🧰 Tecnologías utilizadas

1. **Gemini API** – Utilizada para integrar inteligencia artificial en la aplicación.
2. **React** – Librería para construir interfaces de usuario.
3. **TypeScript** – Superset de JavaScript que añade tipado estático.
4. **Vite** – Herramienta de desarrollo y empaquetado rápida para proyectos modernos.
5. **Chroma.js** – Librería para manipulación, conversión y validación de colores.
6. **highlight.js** – Librería para resaltar la sintaxis de fragmentos de código.

### 🔑 Configuración de la API de Gemini

Para usar la inteligencia artificial de Gemini, asegúrate de tener una API Key válida. Puedes obtenerla desde [Google AI Studio](https://aistudio.google.com/app/apikey).

Una vez obtenida, crea un archivo `.env` en la raíz del proyecto y añade:

```env
VITE_GEMINI_API_KEY=tu_clave_aquí
```
