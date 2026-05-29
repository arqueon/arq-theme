---
title: "Ingeniería de Software de Alto Nivel"
---

Bienvenido al template independiente de Hugo con Tailwind y DaisyUI. A continuación, demostramos compatibilidad con los shortcodes del sitio principal:

### 1. Shortcode de Alertas (Callouts)

{{< alert "success" >}}
**Este es el shortcode de alerta reconstruido con DaisyUI.** Puedes cambiar el color pasando parámetros como "warning", "error", "info" o "success". Toda la lógica CSS la maneja Tailwind automáticamente.
{{< /alert >}}

### 2. Shortcode de Mermaid

{{< mermaid >}}
graph LR
    A[Hugo Pipes] --> B(TailwindCSS)
    B --> C{DaisyUI}
    C -->|Theme Controller| D[Cambio de paletas]
    C -->|Clases nativas| E[Componentes HTML]
{{< /mermaid >}}

Sigue bajando para ver el efecto de tarjetas apilables.
