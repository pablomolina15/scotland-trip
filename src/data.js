// Scotland 2026 — Bea y Pablo
// Precios de hoteles ajustados a temporada alta (julio-agosto 2026)
// Valoraciones Google Maps verificadas
// Coche integrado en día 1 (recogida EDI) y día 10 (devolución EDI)
// No hay noche en Glasgow — dos noches en Edimburgo

export const DAYS = [
  {
    day: 1, date: "Dom 26 jul",
    title: "Llegada — Edimburgo · Recogida del coche",
    sub: "Aterrizaje 09:30 · Recoge el coche en EDI · Old Town · Grassmarket",
    driving: "0 km", overnight: "Edimburgo",
    accent: "#1e3d2a",
    carNote: {
      emoji: "🚗",
      text: "Recoge el coche de alquiler nada más aterrizar en el aeropuerto de Edimburgo (EDI). Tienes todo el viaje por delante — devuélvelo el último día antes de embarcar. Recomendamos Enterprise o Arnold Clark. Pide SUV automático. En Escocia se conduce por la izquierda.",
    },
    highlights: [
      { i: "✈", t: "Aterrizaje EDI 09:30 — recoge el coche en el aeropuerto (ver nota)" },
      { i: "🏰", t: "Castillo de Edimburgo (tarde) — reserva online imprescindible" },
      { i: "🥃", t: "Paseo por el Royal Mile hasta el Palacio de Holyrood" },
      { i: "🌆", t: "Barrio Grassmarket para cenar y primer pub escocés" },
    ],
    tickets: [
      { n: "Castillo de Edimburgo", p: "~21 £/p", must: true, url: "https://www.edinburghcastle.scot" },
      { n: "Palacio de Holyrood", p: "~17 £/p", must: false, url: "https://www.rct.uk/visit/palace-of-holyroodhouse" },
    ],
    hotels: [
      { n: "Hotel Indigo Edinburgh – Royal Mile", s: 4, p: "170–220 €", note: "Diseño contemporáneo, ubicación perfecta en el Royal Mile. Reserva con meses de antelación en verano.", top: true, url: "https://www.ihg.com" },
      { n: "ibis Edinburgh Centre South Bridge", s: 3, p: "130–170 €", note: "Buena ubicación junto al Royal Mile, limpio y funcional. La opción más económica bien situada.", url: "https://www.accor.com" },
      { n: "Motel One Edinburgh-Royal", s: 3, p: "120–160 €", note: "Diseño moderno, céntrico y muy bien valorado. Ideal si se reserva pronto.", url: "https://www.motel-one.com" },
    ],
    rests: [
      { n: "Timberyard", ty: "Escocés moderno · km0", p: "€€€", gm: 4.5, note: "Uno de los mejores de la ciudad. Producto local de temporada." },
      { n: "Café Royal", ty: "Mariscos · pub victoriano", p: "€€", gm: 4.3, note: "Interior del siglo XIX impresionante. Ostras y cerveza artesanal." },
      { n: "The Grain Store", ty: "Brasserie escocesa", p: "€€", gm: 4.4, note: "Buena carne y pescado local, precio razonable." },
    ],
    mapCenter: [55.95, -3.19], mapZoom: 13,
    pts: [
      { n: "Aeropuerto EDI (recoge coche)", lat: 55.9508, lng: -3.3615 },
      { n: "Castillo de Edimburgo", lat: 55.9486, lng: -3.1999 },
      { n: "Royal Mile", lat: 55.9503, lng: -3.1883 },
      { n: "Grassmarket", lat: 55.9462, lng: -3.1956 },
    ],
  },
  {
    day: 2, date: "Lun 27 jul",
    title: "Edimburgo · Excursión a Glasgow",
    sub: "Arthur's Seat · Día en Glasgow · Commonwealth Games · Vuelta a Edimburgo",
    driving: "~150 km ida y vuelta", overnight: "Edimburgo",
    accent: "#12243a",
    gamesNote: {
      emoji: "🏅",
      text: "Commonwealth Games Glasgow (27 jul–1 ago) — Athletics en Scotstoun Stadium. Aprovecha el día en Glasgow para coger entradas a una sesión de atletismo por la tarde.",
      url: "https://www.glasgow2026.com",
      urlLabel: "Entradas oficiales ↗",
    },
    highlights: [
      { i: "🏔", t: "Subida a Arthur's Seat antes de salir (45 min, vistas 360° sobre Edimburgo)" },
      { i: "🚗", t: "Conducción a Glasgow por la M8 (~1h) — día de excursión, vuelta por la noche" },
      { i: "🏟", t: "Commonwealth Games — sesión de atletismo en Scotstoun Stadium (tarde)" },
      { i: "🏙", t: "Paseo por el West End de Glasgow — Kelvingrove, Byres Road" },
    ],
    tickets: [
      { n: "Commonwealth Games Atletismo", p: "20–50 £/sesión", must: true, warn: "¡Reserva ya!", url: "https://www.glasgow2026.com" },
      { n: "Arthur's Seat (Holyrood Park)", p: "Gratis", must: false, url: null },
      { n: "Kelvingrove Art Gallery", p: "Gratis", must: false, url: null },
    ],
    hotels: [
      { n: "Hotel Indigo Edinburgh – Royal Mile", s: 4, p: "2ª noche", note: "Misma habitación que la noche anterior — solo el desplazamiento a Glasgow.", top: true, url: "https://www.ihg.com" },
    ],
    rests: [
      { n: "Ox and Finch, Glasgow", ty: "Tapas escocesas · sharing", p: "€€", gm: 4.6, note: "El más de moda en Glasgow. Platos pequeños para compartir. Come aquí antes del partido." },
      { n: "Ubiquitous Chip, Glasgow", ty: "Escocés clásico · West End", p: "€€", gm: 4.4, note: "Institución desde 1971. Ambiente único, jardín interior." },
      { n: "Café Royal, Edimburgo", ty: "Para cenar al volver", p: "€€", gm: 4.3, note: "Al llegar de Glasgow, cena tranquila en el pub victoriano de siempre." },
    ],
    mapCenter: [55.865, -4.26], mapZoom: 10,
    pts: [
      { n: "Arthur's Seat, Edimburgo", lat: 55.9442, lng: -3.1611 },
      { n: "Scotstoun Stadium (Commonwealth)", lat: 55.8783, lng: -4.3589 },
      { n: "West End Glasgow — Kelvingrove", lat: 55.8687, lng: -4.2877 },
      { n: "Vuelta a Edimburgo", lat: 55.9503, lng: -3.1883 },
    ],
  },
  {
    day: 3, date: "Mar 28 jul",
    title: "Edimburgo → Loch Lomond → Glencoe",
    sub: "Salida de Edimburgo · Primeros Highlands · Majestuosidad pura",
    driving: "~230 km · 3h", overnight: "Glencoe / Ballachulish",
    accent: "#2a1505",
    highlights: [
      { i: "🏰", t: "Última mañana en Edimburgo — Victoria Street o Calton Hill antes de salir" },
      { i: "🏞", t: "Luss (Loch Lomond) — el pueblo más bonito del parque nacional, parada corta" },
      { i: "🌫", t: "Rannoch Moor — la llanura más salvaje e infinita de Escocia" },
      { i: "🏔", t: "Valle de Glencoe — Three Sisters. La foto del viaje." },
    ],
    tickets: [
      { n: "Glencoe Visitor Centre (NTS)", p: "~7 £/p", must: true, url: "https://www.nts.org.uk/visit/places/glencoe" },
      { n: "Aparcamiento Luss", p: "~3 £", must: false, url: null },
    ],
    hotels: [
      { n: "Isles of Glencoe Hotel", s: 4, p: "180–240 €", note: "A orillas del Loch Linnhe en Ballachulish. Vistas espectaculares, desayuno incluido. Muy bien valorado.", top: true, url: "https://www.islesofglencoe.com" },
      { n: "Kingshouse Hotel", s: 4, p: "160–220 €", note: "Hotel histórico en mitad del valle de Glencoe. Icónico.", url: "https://www.kingshousehotel.co.uk" },
      { n: "Glencoe Inn (Ballachulish Hotel)", s: 3, p: "130–170 €", note: "Pub-hotel acogedor con buena cocina local.", url: null },
    ],
    rests: [
      { n: "Kingshouse Hotel Restaurant", ty: "Escocés highland", p: "€€", gm: 4.2, note: "Cordero y venado local. Ambiente rústico de montaña. Imprescindible." },
      { n: "Isles of Glencoe Hotel Restaurant", ty: "Escocés · vistas al loch", p: "€€", gm: 4.3, note: "Cocina sólida con vistas al Loch Linnhe. Mariscos frescos." },
      { n: "Glencoe Café", ty: "Café ligero", p: "€", gm: 4.4, note: "Sopas caseras y tartas para reponer fuerzas tras el paseo." },
    ],
    mapCenter: [56.58, -5.0], mapZoom: 9,
    pts: [
      { n: "Luss, Loch Lomond", lat: 56.1026, lng: -4.6365 },
      { n: "Rannoch Moor", lat: 56.6537, lng: -4.7456 },
      { n: "Glencoe — Three Sisters", lat: 56.6818, lng: -5.02 },
      { n: "Isles of Glencoe Hotel", lat: 56.6606, lng: -5.1733 },
    ],
  },
  {
    day: 4, date: "Mié 29 jul",
    title: "Fort William · Ben Nevis · Jacobite Train",
    sub: "El techo de Gran Bretaña · El tren de Harry Potter",
    driving: "~40 km local", overnight: "Fort William",
    accent: "#082018",
    highlights: [
      { i: "⛰", t: "Ben Nevis — senderismo ruta turística (5–7h, 1345m) o vistas desde el valle" },
      { i: "🚂", t: "Jacobite Steam Train — Fort William a Mallaig cruzando el Viaducto de Glenfinnan" },
      { i: "🦞", t: "Mallaig — puerto con las mejores gambas y langostas de Escocia" },
      { i: "🔒", t: "Neptune's Staircase, Banavie — la esclusa en escalera más larga del UK" },
    ],
    tickets: [
      { n: "Jacobite Steam Train", p: "~35–45 £/p", must: true, warn: "Se agota meses antes. Reserva ya.", url: "https://www.westcoastrailways.co.uk/jacobite" },
      { n: "Ben Nevis (libre acceso)", p: "Gratis · botas impermeables imprescindibles", must: false, url: null },
    ],
    hotels: [
      { n: "The Garrison Hotel", s: 3, p: "150–190 €", note: "El mejor valorado de Fort William (8.8/10). Céntrico, desayuno excelente, personal muy atento.", top: true, url: "https://www.thegarrisonfortwilliam.co.uk" },
      { n: "Glenlochy Guest House", s: 3, p: "120–150 €", note: "B&B boutique junto al río Nevis. Muy bien valorado (9.2). Ambiente tranquilo.", url: null },
      { n: "Premier Inn Fort William", s: 3, p: "110–140 €", note: "Fiable y limpio. La opción más económica y predecible.", url: "https://www.premierinn.com" },
    ],
    rests: [
      { n: "The Crannog Seafood Restaurant", ty: "Mariscos · sobre el lago", p: "€€", gm: 4.5, note: "Mejillones y gambas del día. El imprescindible en Fort William." },
      { n: "Garrison West", ty: "Grill · casual", p: "€€", gm: 4.2, note: "Buena carne local, ambiente relajado y animado." },
      { n: "Ben Nevis Inn", ty: "Pub · base de montaña", p: "€", gm: 4.3, note: "Perfecto post-senderismo. En la base del Ben Nevis." },
    ],
    mapCenter: [56.82, -5.11], mapZoom: 11,
    pts: [
      { n: "Ben Nevis", lat: 56.7969, lng: -5.0035 },
      { n: "Estación Fort William (Jacobite)", lat: 56.8191, lng: -5.1073 },
      { n: "Viaducto de Glenfinnan", lat: 56.8726, lng: -5.4308 },
      { n: "Neptune's Staircase, Banavie", lat: 56.8468, lng: -5.1274 },
    ],
  },
  {
    day: 5, date: "Jue 30 jul",
    title: "Fort William → Inverness",
    sub: "Great Glen · Loch Ness · Culloden",
    driving: "~105 km · 1.5h", overnight: "Inverness",
    accent: "#0a1828",
    highlights: [
      { i: "🦕", t: "Castillo de Urquhart a orillas del Loch Ness — busca a Nessie" },
      { i: "⚔", t: "Culloden Battlefield — la última batalla en suelo británico (1746)" },
      { i: "🏙", t: "Inverness — la capital de los Highlands, paseo por el río Ness" },
      { i: "🛍", t: "Victorian Market — mercado cubierto del siglo XIX" },
    ],
    tickets: [
      { n: "Castillo de Urquhart (HES)", p: "~12 £/p", must: true, url: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle" },
      { n: "Culloden Battlefield (NTS)", p: "~14 £/p", must: true, url: "https://www.nts.org.uk/visit/places/culloden" },
    ],
    hotels: [
      { n: "Ness Walk Hotel", s: 5, p: "220–300 €", note: "El mejor de Inverness, frente al río Ness. Boutique con spa. Muy bien valorado.", top: true, url: "https://www.nesswalk.com" },
      { n: "Kingsmills Hotel", s: 4, p: "160–210 €", note: "Casa señorial con spa, a 10 min del centro. Sólido y confiable.", url: "https://www.kingsmillshotel.com" },
      { n: "Columba Hotel", s: 3, p: "130–170 €", note: "Frente al río Ness en pleno centro. Buena relación calidad-precio en verano.", url: null },
    ],
    rests: [
      { n: "Ness Walk Restaurant", ty: "Escocés moderno · hotel boutique", p: "€€€", gm: 4.7, note: "El mejor de Inverness. Mariscos y caza de temporada. Reserva imprescindible." },
      { n: "The Mustard Seed", ty: "Escocés · iglesia convertida", p: "€€", gm: 4.4, note: "En una antigua iglesia con vistas al Ness. Gran relación calidad-precio." },
      { n: "Contrast Brasserie", ty: "Brasserie · frente al río", p: "€€", gm: 4.3, note: "En el Glenmoriston Hotel. Menú variado a buen precio." },
    ],
    mapCenter: [57.38, -4.3], mapZoom: 10,
    pts: [
      { n: "Castillo de Urquhart", lat: 57.3228, lng: -4.4419 },
      { n: "Culloden Battlefield", lat: 57.477, lng: -4.0779 },
      { n: "Inverness Centre", lat: 57.4778, lng: -4.2247 },
    ],
  },
  {
    day: 6, date: "Vie 31 jul",
    title: "Inverness → Speyside · Whisky Trail",
    sub: "La meca del single malt escocés",
    driving: "~80 km · 1.5h", overnight: "Speyside",
    accent: "#201000",
    highlights: [
      { i: "🥃", t: "The Macallan — arquitectura espectacular, visita y cata. Reserva online imprescindible." },
      { i: "🥃", t: "Glenfarclas — una de las pocas destilerías de familia. Ambiente auténtico." },
      { i: "🏞", t: "Speyside Way — paseo junto al río Spey entre destilerías" },
      { i: "🎶", t: "Charlestown of Aberlour — pueblo encantador con pub de whisky de colección" },
    ],
    tickets: [
      { n: "The Macallan Experience", p: "~25–50 £/p", must: true, warn: "Reserva online imprescindible", url: "https://www.themacallan.com/visit" },
      { n: "Glenfarclas Distillery + Cata", p: "~15 £/p", must: true, url: "https://www.glenfarclas.com/visit" },
    ],
    hotels: [
      { n: "Craigellachie Hotel", s: 4, p: "170–230 €", note: "Victoriano icónico en Speyside. El Quaich Bar tiene 1.000+ referencias de whisky. Reserva pronto.", top: true, url: "https://www.craigellachiehotel.co.uk" },
      { n: "Mash Tun B&B, Aberlour", s: 4, p: "150–190 €", note: "B&B temático del whisky junto al río Spey. Muy bien valorado.", url: "https://www.mashtun-aberlour.com" },
      { n: "Grant Arms Hotel, Grantown-on-Spey", s: 3, p: "120–160 €", note: "Hotel histórico con encanto y buen pub. Más asequible.", url: "https://www.grantarmshotel.com" },
    ],
    rests: [
      { n: "The Copper Dog (Craigellachie)", ty: "Pub gourmet · whisky bar", p: "€€", gm: 4.4, note: "La mejor selección de whiskies de la zona. Comida de pub excelente." },
      { n: "The Mash Tun", ty: "Escocés íntimo", p: "€€", gm: 4.5, note: "Cenas caseras con productos locales. Ambiente de casa de campo." },
      { n: "Dowans Hotel Restaurant", ty: "Escocés clásico · junto al Spey", p: "€€", gm: 4.2, note: "Buena relación calidad-precio en un entorno precioso." },
    ],
    mapCenter: [57.42, -3.25], mapZoom: 11,
    pts: [
      { n: "The Macallan Distillery", lat: 57.4769, lng: -3.2069 },
      { n: "Glenfarclas Distillery", lat: 57.3919, lng: -3.3628 },
      { n: "Aberlour (Speyside Way)", lat: 57.4652, lng: -3.226 },
      { n: "Craigellachie Hotel", lat: 57.4682, lng: -3.2075 },
    ],
  },
  {
    day: 7, date: "Sáb 1 ago",
    title: "Speyside → Isle of Skye",
    sub: "Eilean Donan · Skye Bridge · Old Man of Storr",
    driving: "~220 km · 3h", overnight: "Portree, Isle of Skye",
    accent: "#061828",
    gamesNote: {
      emoji: "⚔",
      text: "Newtonmore Highland Games — hoy, a solo 30 min fuera de tu ruta hacia Skye (A9). Lanzamiento de caber, gaitas y danza highland. Puedes parar un par de horas sin alterar mucho el plan.",
      url: "https://newtonmorehighlandgames.co.uk",
      urlLabel: "Ver más ↗",
    },
    highlights: [
      { i: "⚔", t: "Newtonmore Highland Games (opcional, 30 min fuera de ruta) — ver nota" },
      { i: "🏰", t: "Eilean Donan Castle — el castillo más fotografiado de Escocia (en ruta, 1h)" },
      { i: "🌉", t: "Cruzar el Skye Bridge desde Kyle of Lochalsh — momento mágico" },
      { i: "🗿", t: "Old Man of Storr — columna rocosa icónica, ruta ~2h" },
    ],
    tickets: [
      { n: "Eilean Donan Castle", p: "~12 £/p", must: true, url: "https://www.eileandonancastle.com" },
      { n: "Newtonmore Games (si paras)", p: "~10–15 £/p en puerta", must: false, url: "https://newtonmorehighlandgames.co.uk" },
      { n: "Old Man of Storr (aparcamiento)", p: "~3 £", must: false, url: null },
    ],
    hotels: [
      { n: "The Royal Hotel, Portree", s: 3, p: "200–260 €", note: "Vistas al puerto de Portree y al loch. Restaurante propio con mariscos. Bien ubicado.", top: true, url: "https://www.royalhotelportree.com" },
      { n: "Cuillin Hills Hotel", s: 4, p: "220–300 €", note: "Vistas espectaculares a los Cuillins. Más caro pero con encanto propio.", url: "https://www.cuillinhillshotel-skye.co.uk" },
      { n: "Skye Inn, Portree", s: 3, p: "160–210 €", note: "B&B muy bien valorado (4.5★ Google). Habitaciones nuevas y desayuno escocés completo.", url: null },
    ],
    rests: [
      { n: "Sea Breezes, Portree", ty: "Mariscos · sin reservas", p: "€€", gm: 4.6, note: "El mejor marisco de Skye. Langostas del loch. Llega pronto." },
      { n: "Scorrybreac", ty: "Fine dining · 5 mesas", p: "€€€", gm: 4.7, note: "Menú degustación de Skye. Reserva con semanas de antelación." },
      { n: "The Bosville, Portree", ty: "Bistró · casual", p: "€€", gm: 4.3, note: "Buen ambiente, vistas al puerto, buena comida local." },
    ],
    mapCenter: [57.3, -5.8], mapZoom: 9,
    pts: [
      { n: "Newtonmore (Highland Games, opcional)", lat: 57.059, lng: -4.1381 },
      { n: "Eilean Donan Castle", lat: 57.2739, lng: -5.5151 },
      { n: "Skye Bridge", lat: 57.2698, lng: -5.7238 },
      { n: "Old Man of Storr", lat: 57.5027, lng: -6.1822 },
      { n: "Portree Harbour", lat: 57.4127, lng: -6.196 },
    ],
  },
  {
    day: 8, date: "Dom 2 ago",
    title: "Isle of Skye — día completo",
    sub: "Fairy Pools · Neist Point · Dunvegan",
    driving: "~80 km en isla", overnight: "Portree, Isle of Skye",
    accent: "#061828",
    highlights: [
      { i: "💧", t: "Fairy Pools (Glen Brittle) — cascadas de agua turquesa cristalina" },
      { i: "🌊", t: "Neist Point Lighthouse — el punto más occidental de Skye, vistas al océano" },
      { i: "🐚", t: "Coral Beach, Claigan — playa de coral blanco (algas calcáreas). Irreal." },
      { i: "🏰", t: "Dunvegan Castle — el castillo habitado más antiguo del mundo (desde 1237)" },
    ],
    tickets: [
      { n: "Dunvegan Castle", p: "~18 £/p", must: true, url: "https://www.dunvegancastle.com" },
      { n: "Fairy Pools / Neist Point (parking)", p: "~3 £", must: false, url: null },
    ],
    hotels: [
      { n: "The Royal Hotel, Portree (2ª noche)", s: 3, p: "200–260 €", note: "Quédate para disfrutar Skye con calma.", top: true, url: "https://www.royalhotelportree.com" },
      { n: "Skeabost House Hotel", s: 4, p: "240–320 €", note: "Casa señorial familiar con jardines al loch. Más alejado pero con mucho encanto.", url: "https://www.skeabosthotel.com" },
    ],
    rests: [
      { n: "The Three Chimneys", ty: "Escocés · restaurante de culto", p: "€€€€", gm: 4.7, note: "Uno de los mejores de Escocia. Reserva con meses de antelación." },
      { n: "Loch Bay Restaurant, Waternish", ty: "Mariscos · Michelin ★", p: "€€€", gm: 4.6, note: "Estrella Michelin. Pequeño, íntimo, frente al loch." },
      { n: "Edinbane Lodge", ty: "Escocés rural", p: "€€", gm: 4.5, note: "Buena cocina local en ambiente de casa de campo." },
    ],
    mapCenter: [57.35, -6.4], mapZoom: 10,
    pts: [
      { n: "Fairy Pools, Glen Brittle", lat: 57.2494, lng: -6.302 },
      { n: "Neist Point Lighthouse", lat: 57.4234, lng: -6.7869 },
      { n: "Dunvegan Castle", lat: 57.4476, lng: -6.5907 },
      { n: "Coral Beach, Claigan", lat: 57.4827, lng: -6.5972 },
    ],
  },
  {
    day: 9, date: "Lun 3 ago",
    title: "Skye → Stirling",
    sub: "Regreso · Trossachs · Castillo de Stirling",
    driving: "~240 km · 3.5h", overnight: "Stirling",
    accent: "#121e0a",
    gamesNote: {
      emoji: "⚔",
      text: "Bridge of Allan Highland Games — mañana (mar 4 ago) a solo 15 min de Stirling. Si os apetece empezar el día con caber y gaitas antes de poneros en ruta hacia Edimburgo, está en el camino.",
      url: null,
      urlLabel: null,
    },
    highlights: [
      { i: "🏰", t: "Castillo de Stirling — rival del de Edimburgo. Mary Queen of Scots fue coronada aquí." },
      { i: "🗽", t: "Monumento a William Wallace — la torre del Braveheart real, vistas 360°" },
      { i: "🌿", t: "Loch Katrine — corazón del Parque Nacional de los Trossachs" },
      { i: "🏘", t: "Bridge of Allan — pueblo a 15 min de Stirling, Highland Games mañana" },
    ],
    tickets: [
      { n: "Castillo de Stirling (HES)", p: "~18 £/p", must: true, url: "https://www.historicenvironment.scot/visit-a-place/places/stirling-castle" },
      { n: "Wallace Monument", p: "~12 £/p", must: false, url: "https://www.nationalwallacemonument.com" },
    ],
    hotels: [
      { n: "Stirling Highland Hotel", s: 4, p: "160–210 €", note: "En una escuela victoriana junto al castillo. Único y con mucho carácter.", top: true, url: "https://www.stirlinghighlandhotel.co.uk" },
      { n: "Victoria Square Guest House", s: 4, p: "130–170 €", note: "B&B boutique en casa señorial victoriana. Muy bien valorado.", url: "https://www.victoriasquare.co.uk" },
      { n: "Travelodge Stirling", s: 2, p: "90–120 €", note: "Opción económica fiable si el presupuesto aprieta esta noche.", url: "https://www.travelodge.co.uk" },
    ],
    rests: [
      { n: "Portcullis Restaurant", ty: "Escocés · medieval", p: "€€", gm: 4.3, note: "Justo al lado del castillo. Ambiente medieval auténtico." },
      { n: "Artichoke Restaurant", ty: "Moderno escocés", p: "€€", gm: 4.5, note: "El favorito de los locales. Producto de Perthshire." },
      { n: "No. 2 Baker Street", ty: "Bistró encantador", p: "€€", gm: 4.4, note: "Pequeño y acogedor, buenas opciones locales." },
    ],
    mapCenter: [56.13, -3.97], mapZoom: 11,
    pts: [
      { n: "Castillo de Stirling", lat: 56.1232, lng: -3.9467 },
      { n: "Wallace Monument", lat: 56.1427, lng: -3.9183 },
      { n: "Bridge of Allan (Games mañana)", lat: 56.1557, lng: -3.944 },
      { n: "Loch Katrine, Trossachs", lat: 56.2535, lng: -4.544 },
    ],
  },
  {
    day: 10, date: "Mar 4 ago",
    title: "Stirling → Edimburgo · Vuelo 19:00",
    sub: "Bridge of Allan Games · Calton Hill · Devolución coche · ✈",
    driving: "~55 km · M9", overnight: "Vuelo de regreso",
    accent: "#180f05",
    gamesNote: {
      emoji: "⚔",
      text: "Bridge of Allan Highland Games — esta mañana, a 15 min de Stirling. Tiempo de sobra para ver caber y gaitas antes de ponerse en ruta hacia Edimburgo con el vuelo a las 19:00.",
      url: null,
      urlLabel: null,
    },
    carNote: {
      emoji: "🚗",
      text: "Devuelve el coche en el aeropuerto de Edimburgo (EDI) antes de embarcar. Llega con al menos 2–3 horas de antelación respecto al vuelo de las 19:00. Reposta antes de llegar al aeropuerto — es mucho más barato que la recarga de la empresa.",
    },
    highlights: [
      { i: "⚔", t: "Bridge of Allan Highland Games (por la mañana, ~10–15 £ en puerta)" },
      { i: "🌅", t: "Calton Hill, Edimburgo — última vista panorámica antes de despedirse" },
      { i: "🛍", t: "Victoria Street — la calle curva más bonita, compras de último momento" },
      { i: "✈", t: "Devolución coche en EDI · mínimo 2–3h antes · Vuelo 19:00 h" },
    ],
    tickets: [
      { n: "Bridge of Allan Highland Games", p: "~10 £/p en puerta", must: false, url: null },
      { n: "Calton Hill", p: "Gratis", must: false, url: null },
    ],
    hotels: [],
    rests: [
      { n: "The Pantry, Stockbridge", ty: "Brunch escocés", p: "€€", gm: 4.6, note: "El mejor brunch de Edimburgo. Para una última mañana perfecta." },
      { n: "Café St Honoré", ty: "Bistró francés-escocés", p: "€€", gm: 4.5, note: "Elegante y acogedor para comer antes del vuelo." },
    ],
    mapCenter: [55.96, -3.22], mapZoom: 11,
    pts: [
      { n: "Bridge of Allan Games", lat: 56.1557, lng: -3.944 },
      { n: "Calton Hill, Edimburgo", lat: 55.9553, lng: -3.1826 },
      { n: "Victoria Street", lat: 55.9481, lng: -3.193 },
      { n: "Aeropuerto EDI (devuelve coche)", lat: 55.9508, lng: -3.3615 },
    ],
  },
];

export const ROUTE = [
  [55.9508, -3.3615], [55.9503, -3.1883], [55.8642, -4.2518],
  [56.1026, -4.6365], [56.6818, -5.02],   [56.8191, -5.1073],
  [57.3228, -4.4419], [57.4778, -4.2247], [57.4652, -3.226],
  [57.059,  -4.1381], [57.4127, -6.196],  [56.1232, -3.9467],
  [56.1557, -3.944],  [55.9503, -3.1883], [55.9508, -3.3615],
];

// Gastos iniciales ya conocidos
export const INITIAL_EXPENSES = [
  { id: 1, concept: "Vuelos (2 personas)", total: 412.08, perPerson: 206.04, category: "✈ Transporte", date: "Pre-viaje" },
  { id: 2, concept: "ETA (entrada UK, 2 personas)", total: 48.00, perPerson: 24.00, category: "📋 Documentación", date: "Pre-viaje" },
];
