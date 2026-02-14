# 🚀 Landing Page Synexia - Instrucciones de Deploy

## ✅ Estado del Proyecto

**¡El proyecto está listo para producción!**

- ✅ Build exitoso
- ✅ Todas las secciones implementadas
- ✅ Responsive design
- ✅ Modo oscuro/claro
- ✅ Internacionalización ES/EN
- ✅ Formulario de contacto configurado
- ✅ SEO optimizado
- ✅ Configuración Vercel lista

## 📁 Estructura del Proyecto

```
synexia-landing/
├── dist/                   # Archivos compilados (producción)
├── public/
│   └── favicon.svg        # Favicon del sitio
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Hero, Solutions, Method, Showcase, About, Contact
│   │   └── ui/            # Logo, Button, SectionTitle
│   ├── hooks/             # useTheme, useScrollReveal
│   ├── i18n/              # Configuración idiomas (es.json, en.json)
│   ├── types/             # Tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
├── .env.example           # Template de variables de entorno
├── index.html             # HTML con meta tags SEO
├── vercel.json            # Configuración Vercel
└── README.md              # Documentación completa
```

## 🚀 Pasos para Deploy en Vercel

### 1. **Preparar el Repositorio**

```bash
# Entrar al directorio del proyecto
cd synexia-landing

# Inicializar repositorio Git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit: Landing page Synexia"

# Crear repositorio en GitHub y subir código
# (Sigue las instrucciones de GitHub después de crear el repo)
```

### 2. **Configurar EmailJS (Opcional pero recomendado)**

Para que el formulario de contacto funcione:

1. Ve a https://www.emailjs.com/
2. Crea una cuenta gratuita
3. Crea un **Email Service** (Gmail, Outlook, etc.)
4. Crea un **Email Template** con estas variables:
   ```
   {{name}} - Nombre del contacto
   {{email}} - Email corporativo
   {{company}} - Empresa
   {{phone}} - Teléfono
   {{project_type}} - Tipo de proyecto
   {{message}} - Mensaje
   ```
5. Copia tus credenciales

### 3. **Deploy en Vercel**

#### Opción A: Vercel CLI (Rápido)
```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Deploy
vercel

# Seguir las instrucciones interactivas
```

#### Opción B: Git Integration (Recomendado)
1. Sube el código a GitHub/GitLab/Bitbucket
2. Ve a https://vercel.com
3. Click en "New Project"
4. Importa tu repositorio
5. Configura las variables de entorno (ver siguiente paso)
6. Click en "Deploy"

### 4. **Configurar Variables de Entorno en Vercel**

En el dashboard de Vercel, ve a **Settings > Environment Variables** y añade:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

⚠️ **Nota:** Si no configuras EmailJS, el formulario mostrará un error pero no afectará el resto del sitio.

### 5. **Configurar Dominio Personalizado**

1. En el dashboard de Vercel, ve a **Settings > Domains**
2. Añade tu dominio (ej: synexia.com)
3. Sigue las instrucciones para configurar los registros DNS
4. Vercel proporcionará certificado SSL automáticamente

## 🎨 Personalización

### Colores de Marca
Los colores están definidos en `src/index.css`:
- `--color-synexia-navy: #0A1628` (Azul marino)
- `--color-synexia-cyan: #00D4FF` (Cian)
- `--color-synexia-gray: #6B7280` (Gris)

### Contenido
Todo el contenido está en archivos JSON de traducción:
- Español: `src/i18n/es.json`
- Inglés: `src/i18n/en.json`

### Imágenes Showcase
Cuando tengas las capturas de pantalla reales:
1. Reemplaza los placeholders en `src/components/sections/Showcase.tsx`
2. Añade las imágenes a la carpeta `public/images/`

## 📱 Vista Previa Local

```bash
# Modo desarrollo
npm run dev

# El sitio estará en http://localhost:5173

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 🔧 Troubleshooting

### Error: "Cannot find module"
```bash
npm install
```

### Error al compilar
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Formulario no envía emails
- Verifica que las variables de entorno estén configuradas
- Revisa la consola del navegador (F12) para errores
- Confirma que el template de EmailJS tiene las variables correctas

## 📊 Post-Deploy Checklist

- [ ] Verificar que el sitio carga correctamente
- [ ] Probar modo oscuro/claro
- [ ] Probar cambio de idioma (ES/EN)
- [ ] Probar navegación en móvil
- [ ] Verificar que el formulario envía emails
- [ ] Revisar velocidad en PageSpeed Insights
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar Search Console (opcional)

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Verifica los logs de Vercel en el dashboard
3. Consulta la documentación en README.md

## 🎉 ¡Listo!

Tu landing page está configurada y lista para impresionar a tus clientes corporativos.

**URL de ejemplo después del deploy:** `https://synexia-landing.vercel.app`

¡Éxito con tu startup! 🚀