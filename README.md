# Synexia Landing Page

Landing page profesional para Synexia Soluciones Tecnológicas, desarrollada con React, TypeScript, TailwindCSS y Vite.

## 🚀 Tecnologías

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Animaciones:** Framer Motion
- **Internacionalización:** i18next + react-i18next
- **Formulario:** EmailJS
- **Iconos:** Lucide React

## 📦 Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/synexia-landing.git
cd synexia-landing
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
```bash
cp .env.example .env
```
Edita el archivo `.env` con tus credenciales de EmailJS.

4. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

## 🔧 Configuración EmailJS

Para habilitar el formulario de contacto:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email (Gmail, Outlook, etc.)
3. Crea un template con las siguientes variables:
   - `{{name}}`
   - `{{email}}`
   - `{{company}}`
   - `{{phone}}`
   - `{{project_type}}`
   - `{{message}}`
4. Copia los IDs al archivo `.env`

## 🎨 Paleta de Colores

- **Azul Marino:** `#0A1628` - Color corporativo principal
- **Cian:** `#00D4FF` - Acentos y nodos
- **Gris Metálico:** `#6B7280` - Textos secundarios

## 📁 Estructura del Proyecto

```
synexia-landing/
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer
│   │   ├── sections/   # Hero, Solutions, etc.
│   │   └── ui/         # Componentes reutilizables
│   ├── hooks/          # Custom hooks
│   ├── i18n/           # Configuración de idiomas
│   ├── types/          # Tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .env.example
├── index.html
└── vercel.json
```

## 🚀 Deploy en Vercel

### Opción 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opción 2: Git Integration
1. Sube el código a GitHub/GitLab/Bitbucket
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Configura las variables de entorno en el dashboard
4. Deploy automático en cada push

### Variables de Entorno en Vercel
Ve a Settings > Environment Variables y añade:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## 🌐 Internacionalización

El sitio soporta español e inglés:
- ES: `/src/i18n/es.json`
- EN: `/src/i18n/en.json`

El selector de idioma está en el header.

## 🎯 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Modo oscuro/claro
- ✅ Animaciones suaves con Framer Motion
- ✅ Scroll reveal en secciones
- ✅ Formulario de contacto funcional
- ✅ SEO optimizado
- ✅ Accesibilidad (ARIA labels, contraste)
- ✅ Performance optimizada

## 📝 Licencia

Este software es propiedad exclusiva de **Synexia Soluciones Tecnológicas**.

**Copyright (c) 2026 SYNEXIA. Todos los derechos reservados.**

Este código fuente, los activos visuales —incluyendo el logotipo de la red hexagonal— y la lógica de negocio son propiedad intelectual fundamental de nuestra organización. Queda estrictamente prohibida la reproducción, distribución, modificación o uso no autorizado.

Para consultar los términos completos, revisa el archivo [LICENSE.md](./LICENSE.md).

> *"Integrando visiones, fortaleciendo vínculos"*

## 📧 Contacto

- Email: contacto@synexia.com
- Teléfono: +52 (55) 1234-5678
- Ubicación: Ciudad de México, México