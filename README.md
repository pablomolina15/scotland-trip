# 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia 2026 — Guía de Viaje

Sitio web estático con el itinerario completo del viaje por Escocia del 26 julio al 5 agosto de 2026.

## Archivos del proyecto

```
scotland-trip/
├── index.html      ← Estructura HTML principal
├── style.css       ← Estilos (dark editorial, tartan accents)
├── data.js         ← Datos del itinerario (11 días)
├── app.js          ← Lógica de renderizado dinámico
├── vercel.json     ← Configuración Vercel
└── README.md       ← Este archivo
```

## Despliegue en Vercel (3 pasos)

### Opción A — Desde GitHub (recomendado)

1. Crea un repositorio en GitHub y sube todos estos archivos
2. Ve a [vercel.com](https://vercel.com) → "Add New Project"
3. Conecta el repositorio → Vercel detecta automáticamente que es un sitio estático → click en **Deploy**

### Opción B — Desde Vercel CLI

```bash
npm i -g vercel
cd scotland-trip
vercel
```

## Contenido incluido

- ✅ Itinerario día a día (11 días)
- ✅ Mapas OpenStreetMap embebidos por etapa
- ✅ Hoteles recomendados (máx. 150€) con enlace directo
- ✅ Restaurantes recomendados por ciudad
- ✅ Entradas necesarias con enlaces de reserva
- ✅ Opciones de coche de alquiler en EDI
- ✅ Highland Games que coinciden con las fechas:
  - Newtonmore Highland Games (Sáb 1 ago)
  - Bridge of Allan Highland Games (Dom 2 ago)
  - Commonwealth Games Glasgow — Atletismo (27 jul–1 ago)
- ✅ Ruta en coche día a día con km estimados
- ✅ Diseño responsive (móvil y escritorio)

## Notas

- Los mapas usan OpenStreetMap (sin coste, sin clave API)
- Para añadir Google Maps con marcadores personalizados, necesitarías una API key de Google Maps
- Las entradas del Commonwealth Games se compran en glasgow2026.com
- El Jacobite Steam Train (Fort William–Mallaig) se agota rápido: reserva en westcoastrailways.co.uk
