# 📱 Guía Completa de Diseño para Figma
## URL Shortener App - Diseño Editable

---

## 🎨 1. CONFIGURACIÓN INICIAL DE FIGMA

### Frame Principal
- **Nombre:** iPhone 14 Pro
- **Tamaño:** 393 x 852 px
- **Background:** #FFFFFF

### Configuración de la página
1. Crear página: "URL Shortener Design System"
2. Crear página: "Screens"
3. Crear página: "Components"

---

## 🎨 2. SISTEMA DE DISEÑO

### 2.1 Paleta de Colores

Crear estos colores como **Styles** en Figma:

**Colores Primarios:**
- `Primary/Blue-600` → #2563EB
- `Primary/Cyan-600` → #06B6D4
- `Primary/Blue-50` → #EFF6FF
- `Primary/Cyan-50` → #ECFEFF

**Colores de Fondo:**
- `Background/Gray-50` → #F9FAFB
- `Background/White` → #FFFFFF
- `Background/Gray-100` → #F3F4F6

**Colores de Texto:**
- `Text/Slate-900` → #0F172A
- `Text/Slate-700` → #334155
- `Text/Slate-600` → #475569
- `Text/Slate-500` → #64748B
- `Text/Slate-400` → #94A3B8

**Colores de Acción:**
- `Action/Green-500` → #10B981
- `Action/Emerald-500` → #10B981
- `Action/Red-500` → #EF4444

**Colores de Borde:**
- `Border/Gray-200` → #E5E7EB
- `Border/Blue-200` → #BFDBFE
- `Border/White-50` → rgba(255,255,255,0.5)

### 2.2 Gradientes

Crear como **Styles de Fill**:

**Gradiente Primario (Texto):**
- Tipo: Linear
- Ángulo: 90° (izquierda a derecha)
- Stop 1: #2563EB (0%)
- Stop 2: #06B6D4 (100%)

**Gradiente Fondo Azul (Botones):**
- Tipo: Linear
- Ángulo: 90°
- Stop 1: #2563EB (0%)
- Stop 2: #06B6D4 (100%)

**Gradiente Fondo Claro:**
- Tipo: Linear
- Ángulo: 90°
- Stop 1: #EFF6FF (0%)
- Stop 2: #ECFEFF (100%)

**Gradiente Success:**
- Tipo: Linear
- Ángulo: 90°
- Stop 1: #10B981 (0%)
- Stop 2: #059669 (100%)

### 2.3 Tipografía

Crear como **Text Styles**:

**Fuente:** Inter (Sistema) o SF Pro Display

**Estilos de Texto:**

```
Heading/H1
- Font: Inter Bold
- Size: 24px
- Line Height: 36px (150%)
- Letter Spacing: -0.5px
- Color: Text/Slate-900

Heading/H2
- Font: Inter Bold
- Size: 20px
- Line Height: 30px (150%)
- Letter Spacing: -0.3px
- Color: Text/Slate-900

Heading/H3
- Font: Inter Bold
- Size: 18px
- Line Height: 27px (150%)
- Letter Spacing: 0
- Color: Text/Slate-900

Body/Large-Semibold
- Font: Inter Semibold
- Size: 16px
- Line Height: 24px (150%)
- Color: Text/Slate-700

Body/Large-Regular
- Font: Inter Regular
- Size: 16px
- Line Height: 24px (150%)
- Color: Text/Slate-600

Body/Medium-Semibold
- Font: Inter Semibold
- Size: 14px
- Line Height: 21px (150%)
- Color: Text/Slate-700

Body/Small-Medium
- Font: Inter Medium
- Size: 12px
- Line Height: 18px (150%)
- Color: Text/Slate-500

Label/Button
- Font: Inter Bold
- Size: 16px
- Line Height: 24px (150%)
- Color: #FFFFFF
```

### 2.4 Sombras

Crear como **Effect Styles**:

```
Shadow/Card
- Type: Drop Shadow
- X: 0, Y: 4
- Blur: 24
- Spread: 0
- Color: #000000 10%

Shadow/Card-Hover
- Type: Drop Shadow
- X: 0, Y: 8
- Blur: 32
- Spread: 0
- Color: #000000 12%

Shadow/Button
- Type: Drop Shadow
- X: 0, Y: 2
- Blur: 8
- Spread: 0
- Color: #2563EB 15%

Shadow/Bottom-Nav
- Type: Drop Shadow
- X: 0, Y: -4
- Blur: 24
- Spread: 0
- Color: #000000 8%
```

### 2.5 Border Radius

```
Radius/XS: 8px
Radius/SM: 12px
Radius/MD: 16px
Radius/LG: 20px
Radius/XL: 24px
Radius/2XL: 28px
Radius/Full: 9999px
```

### 2.6 Espaciado

```
Spacing/2XS: 4px
Spacing/XS: 8px
Spacing/SM: 12px
Spacing/MD: 16px
Spacing/LG: 20px
Spacing/XL: 24px
Spacing/2XL: 32px
Spacing/3XL: 48px
```

---

## 🧩 3. COMPONENTES REUTILIZABLES

### 3.1 Botón Primario
**Nombre:** Button/Primary

**Estructura:**
```
Frame (Auto Layout Horizontal)
├── Icon (Opcional)
└── Text

Propiedades:
- Padding: 16px horizontal, 14px vertical
- Gap: 8px
- Border Radius: 16px
- Fill: Gradiente Fondo Azul
- Effect: Shadow/Button

Auto Layout:
- Direction: Horizontal
- Align: Center
- Spacing: 8px
- Padding: 16px 14px

Variants:
- Default (con gradiente azul)
- Success (con gradiente verde)
- Disabled (opacity 50%)
- With Icon / Without Icon
```

### 3.2 Tarjeta (Card)
**Nombre:** Card/Container

**Estructura:**
```
Frame (Auto Layout Vertical)
└── Content (Slot)

Propiedades:
- Padding: 24px
- Gap: 16px
- Border Radius: 24px
- Fill: #FFFFFF con opacity 80%
- Border: 1px solid rgba(255,255,255,0.5)
- Effect: Shadow/Card
- Backdrop Filter: Blur 20px (simulado con opacity)

Auto Layout:
- Direction: Vertical
- Align: Top Left
- Spacing: 16px
- Padding: 24px
```

### 3.3 Input de Texto
**Nombre:** Input/Text

**Estructura:**
```
Frame (Auto Layout Vertical)
├── Label
└── Input Container (Auto Layout Horizontal)
    ├── Input Text
    └── Icon Button (Opcional)

Propiedades Input Container:
- Padding: 20px horizontal, 16px vertical
- Border Radius: 16px
- Fill: Gradiente Fondo Claro
- Border: 2px solid rgba(37,99,235,0.3)

States:
- Default
- Focused (border blue-500)
- Disabled

Auto Layout:
- Direction: Horizontal
- Align: Center
- Spacing: 12px
- Padding: 20px 16px
```

### 3.4 Selector de Dominio
**Nombre:** Domain/Selector-Item

**Estructura:**
```
Frame (Auto Layout Horizontal)
├── Domain Text
└── Check Icon

Propiedades:
- Padding: 20px horizontal, 16px vertical
- Border Radius: 16px
- Border: 2px

States:
- Default (border gray-200, fill white)
- Selected (border blue-500, fill gradiente claro)

Auto Layout:
- Direction: Horizontal
- Align: Space Between
- Padding: 20px 16px
```

### 3.5 Item de Historial
**Nombre:** History/Item

**Estructura:**
```
Frame (Auto Layout Vertical)
├── Content Row (Auto Layout Horizontal)
│   ├── URL Info (Auto Layout Vertical)
│   │   ├── Label "Original:"
│   │   ├── Original URL
│   │   ├── Label "Acortada:"
│   │   └── Shortened URL + Icon
│   └── Delete Button
└── Footer Row (Auto Layout Horizontal)
    ├── Date Info
    └── Copy Button

Propiedades:
- Padding: 20px
- Gap: 16px
- Border Radius: 24px
- Fill: #FFFFFF 80%
- Border: 1px white 50%
- Effect: Shadow/Card

Auto Layout Principal:
- Direction: Vertical
- Align: Top Left
- Spacing: 16px
- Padding: 20px
```

### 3.6 Bottom Navigation
**Nombre:** Navigation/Bottom

**Estructura:**
```
Frame (Auto Layout Horizontal)
├── Nav Item 1 (Auto Layout Vertical)
│   ├── Indicator Line (si está activo)
│   ├── Icon
│   └── Label
├── Nav Item 2
└── Nav Item 3

Propiedades Frame Principal:
- Width: 393px (Full Width)
- Height: 64px
- Fill: #FFFFFF
- Border Top: 1px solid #E5E7EB
- Effect: Shadow/Bottom-Nav

Auto Layout:
- Direction: Horizontal
- Align: Center
- Distribute: Space Evenly
- Padding: 0px

Nav Item:
- Direction: Vertical
- Align: Center
- Spacing: 6px

Indicator Line (cuando activo):
- Width: 48px
- Height: 4px
- Border Radius: Full
- Fill: Gradiente Fondo Azul
- Position: Absolute, Top: 0
```

---

## 📱 4. ESTRUCTURA DE PANTALLAS

### PANTALLA 1: BUSCAR (Search)

**Frame:** 393 x 852px

**Jerarquía de Capas:**
```
iPhone 14 Pro - Search
├── Background (Fill: #F9FAFB)
├── Header (Auto Layout Vertical)
│   └── Title "URL Shortener" (Gradiente texto)
├── Content (Auto Layout Vertical)
│   ├── Input Card (Componente Card/Container)
│   │   ├── Label "Ingresa tu URL"
│   │   ├── Input Field (Componente Input/Text)
│   │   └── Button "Acortar URL" (Componente Button/Primary)
│   │
│   ├── Result Card (visible cuando hay resultado)
│   │   ├── URL Info Section
│   │   │   ├── Label + Original URL
│   │   │   ├── Label + Shortened URL + Icon
│   │   │   └── QR Button
│   │   └── Actions Row (Auto Layout Horizontal)
│   │       ├── Copy Button (Componente Button/Primary)
│   │       └── Share Button (Button Secondary)
│   │
│   ├── Domain Selector Card (Componente Card/Container)
│   │   ├── Title "Dominio corto"
│   │   └── Domain List (Auto Layout Vertical)
│   │       ├── Domain Item v.gd (Componente Domain/Selector-Item)
│   │       ├── Domain Item is.gd
│   │       ├── Domain Item goo.gl
│   │       ├── Domain Item bit.ly
│   │       ├── Domain Item owh.li
│   │       ├── Domain Item sh.st
│   │       └── Domain Item dwz.cn
│   │
│   └── Traffic Card (Auto Layout Vertical)
│       ├── Title "¿Quieres más tráfico?"
│       ├── Description
│       └── Button "Más información"
│
└── Bottom Navigation (Componente Navigation/Bottom)
```

**Textos de la Pantalla:**
```
Header:
- "URL Shortener"

Input Card:
- Label: "Ingresa tu URL"
- Placeholder: "https://ejemplo.com/tu-url-larga"
- Button: "Acortar URL" (o "Acortando..." cuando loading)

Result Card (cuando hay resultado):
- Label 1: "Original:"
- URL Original: "http://www.piedrasyartesanias.com"
- Label 2: "Acortada:"
- URL Acortada: "https://v.gd/e0wvzU"
- Button 1: "Copiar" (o "Copiado" cuando copiado)
- Button 2: "Compartir"

Domain Selector:
- Title: "Dominio corto"
- Items: "v.gd", "is.gd", "goo.gl", "bit.ly", "owh.li", "sh.st", "dwz.cn"

Traffic Card:
- Title: "¿Quieres más tráfico?"
- Description: "Optimiza tus enlaces y obtén análisis detallados de tus URLs acortadas"
- Button: "Más información"

Bottom Nav:
- Item 1: "Buscar" (activo)
- Item 2: "Historia"
- Item 3: "Más"
```

**Auto Layout Recomendado:**
```
Content (Principal):
- Direction: Vertical
- Align: Top Center
- Spacing: 24px
- Padding: 16px horizontal, 24px vertical

Input Card:
- Direction: Vertical
- Spacing: 12px
- Padding: 24px

Domain Selector List:
- Direction: Vertical
- Spacing: 10px
- Padding: 0px

Actions Row:
- Direction: Horizontal
- Spacing: 12px
- Padding: 0px
```

---

### PANTALLA 2: HISTORIA (History)

**Frame:** 393 x 852px

**Jerarquía de Capas:**
```
iPhone 14 Pro - History
├── Background (Fill: #F9FAFB)
├── Header Sticky (Auto Layout Vertical)
│   ├── Title Row (Auto Layout Horizontal)
│   │   ├── Title "Historial" (Gradiente)
│   │   └── Button "Limpiar"
│   └── Search Bar (Auto Layout Horizontal)
│       ├── Search Icon
│       └── Input "Buscar"
│
├── Content (Auto Layout Vertical)
│   ├── History Item 1 (Componente History/Item)
│   ├── History Item 2
│   └── History Item 3
│
└── Bottom Navigation (Componente Navigation/Bottom)
```

**Textos de la Pantalla:**
```
Header:
- Title: "Historial"
- Button: "Limpiar"
- Search Placeholder: "Buscar"

History Items (ejemplo):
Item 1:
- Label: "Original:"
- URL: "http://www.piedrasyartesanias.com"
- Label: "Acortada:"
- URL: "https://v.gd/e0wvzU"
- Date: "Hace unos minutos"
- Button: "Copiar"

Estado Vacío:
- Icon: Search Icon (grande)
- Title: "No hay historial"
- Description: "Las URLs que acortes aparecerán aquí"

Bottom Nav:
- Item 1: "Buscar"
- Item 2: "Historia" (activo)
- Item 3: "Más"
```

**Auto Layout Recomendado:**
```
Header:
- Direction: Vertical
- Spacing: 16px
- Padding: 16px horizontal, 20px vertical

Title Row:
- Direction: Horizontal
- Align: Space Between
- Padding: 0px

Content:
- Direction: Vertical
- Spacing: 16px
- Padding: 16px horizontal, 20px vertical
```

---

### PANTALLA 3: MÁS (More)

**Frame:** 393 x 852px

**Jerarquía de Capas:**
```
iPhone 14 Pro - More
├── Background (Fill: #F9FAFB)
├── Header (Auto Layout Vertical)
│   └── Title "Más" (Gradiente)
│
├── Content (Auto Layout Vertical)
│   ├── Menu Card 1 (Auto Layout Vertical)
│   │   ├── Menu Item "Recomienda esta app"
│   │   ├── Menu Item "Valoración y comentarios"
│   │   └── Menu Item "Otras apps que he creado"
│   │
│   ├── Menu Card 2 (Auto Layout Vertical)
│   │   ├── Menu Item "Eliminar publicidad - $14900.00"
│   │   ├── Menu Item "Restaurar compra..."
│   │   └── Menu Item "Invítame un café - $9900.00"
│   │
│   ├── Menu Card 3 (Auto Layout Vertical)
│   │   ├── Menu Item "Idioma - Español"
│   │   ├── Menu Item "Contactar al autor"
│   │   └── Menu Item "Acerca de - 1.9.13"
│   │
│   └── Footer Text
│       ├── "URL Shortener v1.9.13"
│       └── "© 2026 Todos los derechos reservados"
│
└── Bottom Navigation (Componente Navigation/Bottom)
```

**Estructura Menu Item:**
```
Menu Item (Auto Layout Horizontal)
├── Left Group (Auto Layout Horizontal)
│   ├── Icon
│   └── Label
└── Right Group
    ├── Value (opcional)
    └── Chevron (opcional)

Auto Layout:
- Direction: Horizontal
- Align: Space Between
- Padding: 20px horizontal, 16px vertical
```

**Textos de la Pantalla:**
```
Header:
- "Más"

Menu Card 1:
- "Recomienda esta app" (con chevron)
- "Valoración y comentarios"
- "Otras apps que he creado" (con chevron)

Menu Card 2:
- "Eliminar publicidad" - "$14900.00"
- "Restaurar compra (Eliminar publicidad)"
- "Invítame un café" - "$9900.00"

Menu Card 3:
- "Idioma" - "Español" (con chevron)
- "Contactar al autor"
- "Acerca de" - "1.9.13" (con chevron)

Footer:
- "URL Shortener v1.9.13"
- "© 2026 Todos los derechos reservados"

Bottom Nav:
- Item 1: "Buscar"
- Item 2: "Historia"
- Item 3: "Más" (activo)
```

---

### PANTALLA 4: RECOMIENDA ESTA APP (Recommend)

**Frame:** 393 x 852px

**Jerarquía de Capas:**
```
iPhone 14 Pro - Recommend
├── Background (Fill: #F9FAFB)
├── Header (Auto Layout Horizontal)
│   ├── Back Button
│   └── Title "Recomienda esta app"
│
├── Content (Auto Layout Vertical)
│   ├── Hero Card (Auto Layout Vertical)
│   │   ├── Icon Circle (gradiente azul)
│   │   ├── Title "Ayuda a otros a descubrir..."
│   │   └── Description
│   │
│   ├── Share Options Card (Auto Layout Vertical)
│   │   ├── Title "Compartir"
│   │   └── Grid (Auto Layout)
│   │       ├── Share Icon 1 (Mensajes)
│   │       ├── Share Icon 2 (Mail)
│   │       ├── Share Icon 3 (WhatsApp)
│   │       ├── Share Icon 4 (Telegram)
│   │       ├── Share Icon 5 (Facebook)
│   │       ├── Share Icon 6 (Twitter)
│   │       └── Share Icon 7 (Instagram)
│   │
│   ├── Copy Link Card (Auto Layout Vertical)
│   │   ├── Title "Copiar enlace"
│   │   └── Copy Row (Auto Layout Horizontal)
│   │       ├── URL Display
│   │       └── Copy Button
│   │
│   └── Message Preview Card
│       ├── Label "Mensaje de compartir:"
│       └── Message Text
│
└── (Sin Bottom Navigation)
```

**Grid de Share Icons:**
```
Grid (Auto Layout)
- Columns: 3
- Direction: Horizontal + Wrap
- Spacing: 16px horizontal, 16px vertical
- Padding: 0px

Cada Share Icon Item:
- Direction: Vertical
- Spacing: 12px
- Align: Center
```

**Share Icon Item:**
```
Frame (Auto Layout Vertical)
├── Icon Circle (64x64)
│   └── Icon
└── Label

Icon Circle:
- Size: 64x64
- Border Radius: 16px
- Fill: Gradiente específico por red social
- Shadow: Shadow/Card
```

**Textos de la Pantalla:**
```
Header:
- Title: "Recomienda esta app"

Hero Card:
- Title: "Ayuda a otros a descubrir URL Shortener"
- Description: "Si te gusta esta app, compártela con tus amigos y familiares. ¡Cada recomendación nos ayuda a crecer!"

Share Options:
- Title: "Compartir"
- Icons: "Mensajes", "Mail", "WhatsApp", "Telegram", "Facebook", "Twitter", "Instagram"

Copy Link:
- Title: "Copiar enlace"
- URL: "https://apps.apple.com/app/url-shortener"
- Button: Copy Icon

Message Preview:
- Label: "Mensaje de compartir:"
- Message: "¡Prueba URL Shortener! La mejor app para acortar enlaces. Descárgala aquí: https://apps.apple.com/app/url-shortener"
```

---

## 🎯 5. MODALES Y OVERLAYS

### 5.1 Modal de Idioma
**Nombre:** Modal/Language-Picker

**Estructura:**
```
Overlay (Fill: #000000 50%, Blur)
└── Modal Container (Auto Layout Vertical)
    ├── Header
    │   └── Title "Idioma"
    ├── Options (Auto Layout Vertical)
    │   ├── Language Item - Español
    │   │   ├── Flag "🇪🇸"
    │   │   ├── Name "Español"
    │   │   └── Check Icon
    │   └── Language Item - English
    │       ├── Flag "🇺🇸"
    │       ├── Name "English"
    │       └── Check Icon
    └── Footer
        └── Button "Cancelar"

Propiedades Modal Container:
- Width: 343px (fijo)
- Border Radius: 24px
- Fill: #FFFFFF 95%
- Backdrop Blur: 20px
- Shadow: Shadow/Card-Hover
- Position: Center

Auto Layout:
- Direction: Vertical
- Spacing: 0px
- Padding: 0px
```

### 5.2 Sheet de Compartir
**Nombre:** Sheet/Share

**Estructura:**
```
Overlay (Fill: #000000 50%, Blur)
└── Sheet Container (Auto Layout Vertical)
    ├── Header (Auto Layout Horizontal)
    │   ├── Info
    │   │   ├── Title "Compartir"
    │   │   └── Subtitle "v.gd"
    │   └── Close Button
    ├── Share Grid (Auto Layout)
    │   ├── Share Icon 1 (Mensajes - 💬 verde)
    │   ├── Share Icon 2 (Mail - ✉️ azul)
    │   ├── Share Icon 3 (Recordatorios - 📝 naranja)
    │   └── Share Icon 4 (Notas - 📒 amarillo)
    └── Actions (Auto Layout Vertical)
        ├── Action Item "Copiar"
        └── Action Item "Código QR"

Propiedades Sheet Container:
- Width: 393px (full width)
- Border Radius: 32px 32px 0 0
- Fill: #FFFFFF 95%
- Position: Bottom
- Shadow: Shadow/Card-Hover

Auto Layout:
- Direction: Vertical
- Spacing: 20px
- Padding: 24px
```

### 5.3 Modal de Éxito
**Nombre:** Modal/Success

**Estructura:**
```
Overlay (Fill: #000000 50%, Blur)
└── Modal Container (Auto Layout Vertical)
    ├── Success Icon (Auto Layout)
    │   └── Check Icon
    ├── Title "¡Compra exitosa!"
    ├── Message "Gracias por tu apoyo"
    └── Button "OK"

Success Icon:
- Size: 80x80
- Border Radius: Full
- Fill: Gradiente Success
- Shadow: Shadow/Button (verde)

Propiedades Modal Container:
- Width: 343px
- Border Radius: 24px
- Fill: #FFFFFF 95%
- Padding: 32px
- Position: Center

Auto Layout:
- Direction: Vertical
- Spacing: 16px
- Align: Center
```

---

## 📐 6. ICONOS Y SÍMBOLOS

### Iconos a usar de Lucide (o similares):

```
Search: lupa 🔍
- Tamaño: 20-24px
- Stroke: 2px
- Color: Blue-600

Clock: reloj 🕐
- Tamaño: 24px
- Stroke: 2px
- Color: Gray-400 (inactivo), Blue-600 (activo)

MoreHorizontal: tres puntos ⋯
- Tamaño: 24px
- Stroke: 2px

Copy: copiar 📋
- Tamaño: 20px
- Stroke: 2px
- Color: White (en botones)

Share2: compartir ↗
- Tamaño: 20px
- Stroke: 2px

Trash2: papelera 🗑
- Tamaño: 18-20px
- Stroke: 2px
- Color: Gray-400

Check: check ✓
- Tamaño: 20-24px
- Stroke: 2.5px
- Color: Blue-600

ExternalLink: link externo ↗
- Tamaño: 14-16px
- Stroke: 2px

QrCode: QR
- Tamaño: 20-22px
- Stroke: 2px

Calendar: calendario 📅
- Tamaño: 14-16px
- Stroke: 2px

ChevronRight: flecha derecha >
- Tamaño: 20-22px
- Stroke: 2px

ArrowLeft: flecha izquierda <
- Tamaño: 24px
- Stroke: 2px

Languages: globo 🌐
- Tamaño: 22px
- Stroke: 2px
```

---

## 💡 7. RECOMENDACIONES PARA MODO DISEÑO

### 7.1 Usar Auto Layout en TODO
- Todos los contenedores deben tener Auto Layout
- Permite redimensionar fácilmente
- Facilita cambios de contenido

### 7.2 Crear Componentes con Variants
Ejemplos:
```
Button Component
- Variant 1: Primary (azul)
- Variant 2: Success (verde)
- Variant 3: Secondary (gris)
- Property: State (default, hover, pressed, disabled)
- Property: With Icon (true/false)
```

### 7.3 Usar Text Styles consistentemente
- Nunca hardcodear colores de texto
- Siempre usar los Text Styles creados
- Facilita cambios globales

### 7.4 Usar Color Styles para fills
- No usar hex codes directamente
- Siempre referenciar los Color Styles
- Permite cambiar tema fácilmente

### 7.5 Organizar con Frames y Secciones
```
📱 URL Shortener App
  ├── 🎨 Design System
  │   ├── Colors
  │   ├── Typography
  │   ├── Shadows
  │   └── Spacing
  ├── 🧩 Components
  │   ├── Buttons
  │   ├── Cards
  │   ├── Inputs
  │   └── Navigation
  └── 📱 Screens
      ├── 1. Search
      ├── 2. History
      ├── 3. More
      └── 4. Recommend
```

### 7.6 Nombrar capas descriptivamente
```
✅ BIEN:
- Button/Primary/Default
- Card/History-Item
- Input/Search-Bar

❌ MAL:
- Frame 123
- Rectangle 456
- Group 789
```

### 7.7 Usar Constraints apropiados
```
Header:
- Top: 0, Fixed
- Left & Right: 0, Fixed

Bottom Navigation:
- Bottom: 0, Fixed
- Left & Right: 0, Fixed

Content:
- Top: After Header
- Bottom: Before Nav
- Left & Right: 0
- Center Horizontally
```

### 7.8 Efectos de Glassmorphism
Para simular glassmorphism en Figma:
```
Card Container:
1. Fill: #FFFFFF con 80% opacity
2. Border: 1px solid #FFFFFF con 50% opacity
3. Shadow: Shadow/Card
4. (El blur se logra con el fondo, no en Figma)
```

### 7.9 Estados Interactivos
Crear componentes con variants para:
```
Button:
- Default
- Hover (ligeramente más brillante)
- Pressed (scale 95%)
- Disabled (opacity 50%)

Input:
- Default
- Focused (border azul)
- Filled
- Error

Domain Item:
- Default
- Selected (border azul + fondo)
```

### 7.10 Prototyping
Para que sea interactivo:
```
1. Conectar Bottom Nav items a sus pantallas
2. Usar "Smart Animate" para transiciones
3. Añadir hover states en botones
4. Overlay para modales con:
   - Background: Blur
   - Position: Center o Bottom
   - Animation: Slide in
```

---

## 📱 8. ESPECIFICACIONES TÉCNICAS ADICIONALES

### 8.1 Safe Area (Notch)
```
Top Safe Area:
- Height: 47px (incluye status bar + notch)
- Header debe empezar después de esto

Bottom Safe Area:
- Height: 34px (área del home indicator)
- Bottom Nav debe considerar esto
```

### 8.2 Status Bar
```
Height: 47px
Incluye:
- Hora: 7:29 p.m. (centrada)
- Señal y batería (esquinas)
- Color: Texto negro sobre fondo blanco
```

### 8.3 Responsive Behaviors
```
Content Area:
- Min Width: 343px (393 - 50px padding)
- Max Width: 393px (full width en mobile)

Cards:
- Padding lateral: 16px del borde de pantalla
- Width: Fill Container

Buttons:
- Min Width: respeta el texto + padding
- Puede ser Full Width o Hug Contents
```

---

## ✅ 9. CHECKLIST DE IMPLEMENTACIÓN

### Fase 1: Setup
- [ ] Crear archivo nuevo en Figma
- [ ] Configurar frames 393x852px
- [ ] Crear páginas: Design System, Components, Screens

### Fase 2: Design System
- [ ] Crear todos los Color Styles
- [ ] Crear todos los Gradientes
- [ ] Crear todos los Text Styles
- [ ] Crear todos los Effect Styles (sombras)

### Fase 3: Componentes Base
- [ ] Button/Primary con variants
- [ ] Card/Container
- [ ] Input/Text
- [ ] Domain/Selector-Item
- [ ] History/Item
- [ ] Navigation/Bottom

### Fase 4: Pantallas
- [ ] Search Screen completa
- [ ] History Screen completa
- [ ] More Screen completa
- [ ] Recommend Screen completa

### Fase 5: Modales
- [ ] Modal/Language-Picker
- [ ] Sheet/Share
- [ ] Modal/Success

### Fase 6: Prototyping
- [ ] Conectar navegación entre pantallas
- [ ] Añadir interactions en botones
- [ ] Configurar overlays para modales
- [ ] Añadir Smart Animate

### Fase 7: Documentación
- [ ] Añadir notas en componentes
- [ ] Documentar variants
- [ ] Crear cover page
- [ ] Exportar como archivo compartible

---

## 🎯 10. TIPS FINALES

1. **Duplica antes de modificar**: Siempre duplica componentes antes de editarlos

2. **Usa Constraints**: Configura constraints en todos los elementos para responsive

3. **Agrupa lógicamente**: Usa frames y grupos para organizar elementos relacionados

4. **Nombres descriptivos**: Usa nombres claros tipo "Card/History-Item/Delete-Button"

5. **Componentes anidados**: Los componentes pueden contener otros componentes

6. **Boolean properties**: Usa properties para mostrar/ocultar elementos (ej: "Show Icon")

7. **Testing responsive**: Cambia el ancho del frame para probar responsive

8. **Export assets**: Exporta iconos como SVG, screenshots como PNG 2x

9. **Share con equipo**: Usa Figma shared libraries para compartir componentes

10. **Versioning**: Usa "Save to Version History" antes de cambios grandes

---

## 📚 RECURSOS ADICIONALES

### Plugins Útiles de Figma:
- **Iconify**: Para importar iconos de Lucide
- **Content Reel**: Para generar texto de ejemplo
- **Auto Layout**: Herramienta nativa, aprende atajos
- **Stark**: Para verificar contraste de colores (accesibilidad)

### Atajos de Teclado:
```
Shift + A = Auto Layout
Cmd/Ctrl + D = Duplicar
Cmd/Ctrl + G = Agrupar
Cmd/Ctrl + Option + G = Frame Selection
Cmd/Ctrl + K = Crear Componente
```

---

¡Listo! Con esta guía puedes recrear completamente la aplicación en Figma de forma 100% editable. Cada elemento será una capa modificable que puedes ajustar, cambiar colores, textos, tamaños, etc.
