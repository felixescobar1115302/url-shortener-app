# URL Shortener App 🔗

Aplicación moderna de acortador de URLs con diseño glassmorphism y gradientes vibrantes.

## 🚀 Deploy en Vercel

### Opción 1: Deploy desde el Dashboard (Más fácil)

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta (puedes usar GitHub)
2. Haz clic en **"Add New Project"**
3. Importa este repositorio desde GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz clic en **"Deploy"**

¡Listo! Obtendrás una URL como `https://url-shortener-xxx.vercel.app`

### Opción 2: Deploy desde línea de comandos

```bash
# Instalar Vercel CLI
npm install -g vercel

# Hacer deploy
vercel

# Para deploy en producción
vercel --prod
```

## 📱 Actualizar la aplicación

### Si usaste el Dashboard:
Cada vez que hagas `git push` a tu repositorio, Vercel actualizará automáticamente la aplicación.

### Si usaste CLI:
```bash
# Hacer commit de tus cambios
git add .
git commit -m "feat: nueva funcionalidad"

# Actualizar en Vercel
vercel --prod
```

## ✨ Características

- 🎨 Diseño moderno con glassmorphism
- 🌈 Gradientes vibrantes (violet/purple/pink)
- 📱 Responsive y optimizado para móvil
- 🌐 Multilenguaje (Español/Inglés)
- 🔗 Acortador de URLs con múltiples dominios
- 📊 Historial de URLs acortadas
- 💾 Persistencia en localStorage
- 🎭 Animaciones fluidas

## 🛠️ Desarrollo local

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm run dev

# Build para producción
pnpm run build
```

## 📂 Estructura del proyecto

```
src/
├── app/
│   ├── components/     # Componentes reutilizables
│   ├── context/        # Context API (idiomas)
│   ├── pages/          # Páginas de la app
│   └── routes.tsx      # Configuración de rutas
├── styles/             # Estilos globales y tema
└── imports/            # Assets e imágenes
```

## 🎯 Páginas

- **Buscar** - Acortar URLs con diferentes dominios
- **Historia** - Historial de URLs acortadas con búsqueda
- **Más** - Configuraciones y opciones
- **Recomienda** - Compartir la app en redes sociales

## 🌐 Idiomas soportados

- 🇪🇸 Español
- 🇺🇸 English

---

Desarrollado con ❤️ usando React + Vite + Tailwind CSS
