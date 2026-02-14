# Synexia Landing Page

Landing page profesional desarrollada para Synexia Soluciones Tecnológicas, utilizando tecnologias modernas de desarrollo web.

## Tecnologias

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Animaciones:** Framer Motion
- **Internacionalizacion:** i18next + react-i18next
- **Formulario:** EmailJS
- **Iconos:** Lucide React

## Instalacion

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/synexia-landing.git
cd synexia-landing
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```
Editar el archivo `.env` con las credenciales de EmailJS.

4. Iniciar servidor de desarrollo:
```bash
npm run dev
```

## Configuracion EmailJS

Para habilitar el formulario de contacto:

1. Crear una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar un servicio de email (Gmail, Outlook, etc.)
3. Crear un template con las siguientes variables:
   - `{{name}}`
   - `{{email}}`
   - `{{company}}`
   - `{{phone}}`
   - `{{project_type}}`
   - `{{message}}`
4. Copiar los IDs al archivo `.env`

## Paleta de Colores

- **Azul Marino:** `#0A1628` - Color corporativo principal
- **Cian:** `#00D4FF` - Acentos y nodos
- **Gris Metalico:** `#6B7280` - Textos secundarios

## Estructura del Proyecto

```
synexia-landing/
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer
│   │   ├── sections/   # Hero, Solutions, etc.
│   │   └── ui/         # Componentes reutilizables
│   ├── hooks/          # Custom hooks
│   ├── i18n/           # Configuracion de idiomas
│   ├── types/          # Tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .env.example
├── index.html
└── vercel.json
```

## Deployment en Vercel

### Opcion 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opcion 2: Git Integration
1. Subir el codigo a GitHub/GitLab/Bitbucket
2. Conectar el repositorio en [Vercel](https://vercel.com)
3. Configurar las variables de entorno en el dashboard
4. Deployment automatico en cada push

### Variables de Entorno en Vercel
Acceder a Settings > Environment Variables y anadir:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Internacionalizacion

El sitio soporta los siguientes idiomas:
- Espanol: `/src/i18n/es.json`
- Ingles: `/src/i18n/en.json`

El selector de idioma se encuentra en el header.

## Caracteristicas

- Diseno responsive (mobile-first)
- Modo oscuro/claro
- Animaciones con Framer Motion
- Scroll reveal en secciones
- Formulario de contacto funcional
- SEO optimizado
- Accesibilidad (ARIA labels, contraste)
- Performance optimizada

## Licencia

Este software es propiedad exclusiva de **Synexia Soluciones Tecnologicas**.

**Copyright (c) 2026 SYNEXIA. Todos los derechos reservados.**

Este codigo fuente, los activos visuales (incluyendo el logotipo de la red hexagonal) y la logica de negocio son propiedad intelectual fundamental de nuestra organizacion. Queda estrictamente prohibida la reproduccion, distribucion, modificacion o uso no autorizado.

Para consultar los terminos completos, revisar el archivo [LICENSE.md](./LICENSE.md).

> *"Integrando visiones, fortaleciendo vinculos"*

## Contacto

- Email: contacto@synexia.com
- Telefono: +54 (11) XXXX-XXXX
- Ubicacion: Buenos Aires, Argentina