
# Portfolio Website - Guillermo Cruz

## 🌐 Sitio Web Profesional

Portfolio profesional de Guillermo Eduardo Cruz Garri, Business Analyst y Financial Data Analyst.

**Sitio en producción:** [guillermo-cruz-portf-y14frl.abacusai.app](https://guillermo-cruz-portf-y14frl.abacusai.app)

## 📋 Descripción

Este sitio web presenta mi experiencia profesional, habilidades técnicas, proyectos destacados y artículos de blog sobre análisis de negocios y análisis financiero.

### Características principales:

- ✨ Diseño moderno y responsivo
- 📱 Optimizado para todos los dispositivos
- 🎨 Interfaz intuitiva con animaciones suaves
- 📄 Descarga de CVs en formato PDF (Business Analyst y Financial Data Analyst)
- 💼 Showcase de proyectos con imágenes profesionales
- 📝 Blog con artículos técnicos
- 📧 Formulario de contacto
- 🌙 Preparado para tema oscuro/claro

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 14.2.28 (React 18.2.0)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 3.3.3
- **UI Components:** shadcn/ui (Radix UI)
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Deployment:** Vercel

## 📦 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- Yarn (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/guillermocruzgarri/guillermocruzgarri.github.io.git

# Entrar al directorio
cd guillermocruzgarri.github.io

# Instalar dependencias
yarn install
# o
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
yarn dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
# Crear build optimizado
yarn build
# o
npm run build

# Iniciar servidor de producción
yarn start
# o
npm start
```

## 📁 Estructura del Proyecto

```
.
├── app/                      # App Router de Next.js
│   ├── api/                 # API Routes
│   │   └── analyze-cvs/    # Endpoint para análisis de CVs
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/              # Componentes React
│   ├── ui/                 # Componentes de UI (shadcn)
│   ├── about.tsx           # Sección Acerca de
│   ├── blog.tsx            # Sección Blog
│   ├── contact.tsx         # Sección Contacto
│   ├── experience.tsx      # Sección Experiencia
│   ├── header.tsx          # Navegación principal
│   ├── hero.tsx            # Hero section
│   ├── portfolio.tsx       # Sección Portfolio
│   ├── skills.tsx          # Sección Habilidades
│   └── theme-provider.tsx  # Provider de temas
├── hooks/                   # Custom React Hooks
│   └── use-toast.ts        # Hook para notificaciones
├── lib/                     # Utilidades y helpers
│   ├── types.ts            # Tipos TypeScript
│   └── utils.ts            # Funciones utilitarias
├── public/                  # Archivos estáticos
│   ├── images/             # Imágenes del portfolio
│   ├── BA-CV.pdf           # CV Business Analyst
│   ├── FDA-CV.pdf          # CV Financial Data Analyst
│   ├── favicon.svg         # Favicon
│   └── guillermo-cruz-photo.jpg  # Foto de perfil
├── scripts/                 # Scripts de utilidad
│   └── seed.ts             # Script de seed (si aplica)
├── next.config.js          # Configuración de Next.js
├── tailwind.config.ts      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
├── vercel.json             # Configuración de Vercel
└── package.json            # Dependencias y scripts

```

## 🚀 Deployment en Vercel

Este proyecto está optimizado para deployment en Vercel:

1. **Fork o clona este repositorio**

2. **Importa el proyecto en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración de Next.js

3. **Deploy:**
   - Vercel hará el build y deploy automáticamente
   - Cada push a la rama principal desplegará una nueva versión

### Variables de Entorno

Si necesitas configurar variables de entorno, créalas en el panel de Vercel o en un archivo `.env.local` para desarrollo local.

## ⚠️ Notas Importantes

### Archivos que NO deben subirse a GitHub:

- `.next/` - Carpeta de build de Next.js
- `.build/` - Carpeta de build alternativa
- `node_modules/` - Dependencias (se instalan con yarn/npm)
- `.env` - Variables de entorno sensibles
- `*.log` - Archivos de log
- `*.tsbuildinfo` - Cache de TypeScript

**IMPORTANTE:** Estos archivos ya están incluidos en el `.gitignore` y serán ignorados automáticamente por Git.

### Antes de subir a GitHub por primera vez:

```bash
# Asegúrate de que .gitignore existe
ls -la .gitignore

# Verifica qué archivos se subirán
git status

# Los siguientes NO deben aparecer:
# - .next/
# - .build/
# - node_modules/
```

## 🎨 Personalización

### Colores y Tema

Los colores principales están definidos en `app/globals.css` y pueden personalizarse modificando las variables CSS:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... más variables */
}
```

### Contenido

- **Información personal:** Modificar en `components/hero.tsx` y `components/about.tsx`
- **Experiencia laboral:** Actualizar en `components/experience.tsx`
- **Habilidades:** Editar en `components/skills.tsx`
- **Portfolio:** Modificar proyectos en `components/portfolio.tsx`
- **Blog:** Actualizar artículos en `components/blog.tsx`
- **CVs:** Reemplazar PDFs en carpeta `public/`

## 📧 Contacto

- **Email:** guillermo.cruz.garri@gmail.com
- **LinkedIn:** [linkedin.com/in/guillermo-cruz-garri](https://www.linkedin.com/in/guillermo-cruz-garri/)
- **WhatsApp:** +34 640 22 33 20

## 📄 Licencia

© 2025 Guillermo Eduardo Cruz Garri. Todos los derechos reservados.

Este proyecto es de uso personal. Si deseas utilizarlo como template, por favor contacta al autor.

## 🙏 Agradecimientos

- Diseño y desarrollo: Guillermo Cruz con asistencia de AI
- Imágenes del portfolio: Generadas con AI (copyright-free)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Framework: [Next.js](https://nextjs.org/)

---

**Versión:** 1.0  
**Última actualización:** 21 de octubre de 2025  
**Estado:** ✅ En producción
