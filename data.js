// Scotland 2026 - Full Itinerary Data

const itinerary = [
  {
    day: 1,
    date: "Dom 26 julio",
    title: "Llegada a Edimburgo",
    subtitle: "Aterrizaje · Old Town · Whisky",
    driving: "0 km (llegada en avión)",
    overnight: "Edimburgo",
    color: "#1a3a2a",
    mapCenter: { lat: 55.9533, lng: -3.1883 },
    highlights: [
      { icon: "✈", text: "Aterrizaje EDI 09:30 — recoge el coche de alquiler en el aeropuerto" },
      { icon: "🏰", text: "Castillo de Edimburgo (tarde)" },
      { icon: "🥃", text: "Paseo por el Royal Mile" },
      { icon: "🌆", text: "Barrio Grassmarket para cenar" }
    ],
    tickets: [
      { name: "Castillo de Edimburgo", price: "~21 £/persona", link: "https://www.edinburghcastle.scot", must: true },
      { name: "Real Palacio de Holyrood", price: "~17 £/persona", link: "https://www.rct.uk/visit/palace-of-holyroodhouse", must: false }
    ],
    hotels: [
      { name: "The Witchery by the Castle", stars: 5, price: "140–180 €", note: "Icónico, justo al lado del castillo. Solo 9 suites, reserva pronto.", link: "https://www.thewitchery.com" },
      { name: "Hotel Indigo Edinburgh – Royal Mile", stars: 4, price: "90–130 €", note: "Buena ubicación, diseño moderno, gran relación calidad-precio.", link: "https://www.ihg.com" },
      { name: "Grassmarket Hotel", stars: 3, price: "70–100 €", note: "Ambiente animado, en el corazón del Old Town.", link: "https://www.grassmarkethotel.co.uk" }
    ],
    restaurants: [
      { name: "The Witchery by the Castle", type: "Escocés gourmet", price: "€€€", note: "Ambiente gótico espectacular. Reserva imprescindible." },
      { name: "Cafe Royal", type: "Mariscos · clásico", price: "€€", note: "Pub victoriano con oysters y cerveza local. Impresionante interior." },
      { name: "Timberyard", type: "Escocés moderno", price: "€€€", note: "Uno de los mejores de la ciudad. Menú degustación local." },
      { name: "The Grain Store", type: "Escocés · brasserie", price: "€€", note: "Buena carne y pescado local, buen precio." }
    ],
    mapPoints: [
      { name: "Aeropuerto EDI", lat: 55.9508, lng: -3.3615 },
      { name: "Castillo de Edimburgo", lat: 55.9486, lng: -3.1999 },
      { name: "Royal Mile", lat: 55.9503, lng: -3.1883 },
      { name: "Grassmarket", lat: 55.9462, lng: -3.1956 }
    ]
  },
  {
    day: 2,
    date: "Lun 27 julio",
    title: "Edimburgo → Glasgow · Commonwealth Games",
    subtitle: "Arthur's Seat · Glasgow · Atletismo",
    driving: "~75 km",
    overnight: "Glasgow",
    color: "#1a2a3a",
    mapCenter: { lat: 55.8642, lng: -4.2518 },
    highlights: [
      { icon: "🏔", text: "Subida a Arthur's Seat por la mañana (45 min, vistas increíbles)" },
      { icon: "🚗", text: "Conducción a Glasgow por la A8/M8 (~1h)" },
      { icon: "🏅", text: "Commonwealth Games — Atletismo en Scotstoun Stadium (tarde/noche)" },
      { icon: "🍺", text: "West End de Glasgow para cenar" }
    ],
    tickets: [
      { name: "Commonwealth Games Atletismo", price: "20–50 £/sesión", link: "https://www.glasgow2026.com/tickets", must: true },
      { name: "Arthur's Seat (Holyrood Park)", price: "Gratis", link: null, must: false }
    ],
    hotels: [
      { name: "Kimpton Blythswood Square", stars: 5, price: "120–160 €", note: "El mejor hotel de Glasgow, en un palacete georgiano. Excelente spa.", link: "https://www.kimptonblythswoodsquare.com" },
      { name: "Hotel Indigo Glasgow", stars: 4, price: "80–120 €", note: "Buen diseño, zona céntrica, bien conectado.", link: "https://www.ihg.com" },
      { name: "Grasshoppers Hotel Glasgow", stars: 3, price: "60–90 €", note: "Boutique, muy bien valorado, relación calidad-precio excelente.", link: "https://www.grasshoppersglasgow.com" }
    ],
    restaurants: [
      { name: "Ox and Finch", type: "Tapas escocesas", price: "€€", note: "El más de moda en Glasgow. Platos pequeños para compartir, todo local." },
      { name: "Cail Bruich", type: "Escocés fine dining", price: "€€€", note: "Estrella Michelin. Reserva con antelación." },
      { name: "Ubiquitous Chip", type: "Escocés clásico", price: "€€", note: "Institución del West End desde 1971. Ambiente único." }
    ],
    mapPoints: [
      { name: "Arthur's Seat", lat: 55.9442, lng: -3.1611 },
      { name: "Scotstoun Stadium (Commonwealth)", lat: 55.8783, lng: -4.3589 },
      { name: "West End Glasgow", lat: 55.8759, lng: -4.2886 }
    ]
  },
  {
    day: 3,
    date: "Mar 28 julio",
    title: "Glasgow → Loch Lomond → Glencoe",
    subtitle: "El primer Highland · Majestuosidad pura",
    driving: "~150 km",
    overnight: "Glencoe / Fort William",
    color: "#2a1a1a",
    mapCenter: { lat: 56.6818, lng: -5.1046 },
    highlights: [
      { icon: "🏞", text: "Loch Lomond — paseo por Luss (pueblo más bonito de los Trossachs)" },
      { icon: "⛰", text: "Rannoch Moor — la llanura más salvaje de Escocia" },
      { icon: "🏔", text: "Valle de Glencoe — parada obligada con vistas al Three Sisters" },
      { icon: "🦌", text: "Signal Rock y posible avistamiento de ciervos" }
    ],
    tickets: [
      { name: "Loch Lomond & Trossachs Park (Luss)", price: "Aparcamiento ~3£", link: null, must: false },
      { name: "Glencoe Visitor Centre (NTS)", price: "~7 £/persona", link: "https://www.nts.org.uk/visit/places/glencoe", must: true }
    ],
    hotels: [
      { name: "Kingshouse Hotel", stars: 4, price: "110–150 €", note: "Hotel histórico en mitad de Glencoe, vistas espectaculares. Icónico.", link: "https://www.kingshousehotel.co.uk" },
      { name: "Glencoe Inn", stars: 3, price: "70–100 €", note: "Pub-hotel acogedor en el pueblo de Glencoe.", link: "https://www.glencoeinn.com" },
      { name: "Alexandra Hotel Fort William", stars: 3, price: "80–110 €", note: "Si prefieres Fort William (~30 min). Buenas vistas al Ben Nevis.", link: "https://www.strathmorehotels.com" }
    ],
    restaurants: [
      { name: "Kingshouse Hotel Restaurant", type: "Escocés highland", price: "€€", note: "Cordero local, venado, ambiente rústico de montaña." },
      { name: "Glencoe Café", type: "Café · ligero", price: "€", note: "Sándwiches, sopas y tartas caseras para reponer fuerzas." },
      { name: "Lime Tree Fort William", type: "Escocés moderno", price: "€€€", note: "Si duermes en Fort William. Muy bien valorado, mariscos frescos." }
    ],
    mapPoints: [
      { name: "Luss, Loch Lomond", lat: 56.1026, lng: -4.6365 },
      { name: "Rannoch Moor", lat: 56.6537, lng: -4.7456 },
      { name: "Glencoe — Three Sisters", lat: 56.6818, lng: -5.0200 },
      { name: "Kingshouse Hotel", lat: 56.6599, lng: -4.8785 }
    ]
  },
  {
    day: 4,
    date: "Mié 29 julio",
    title: "Fort William · Ben Nevis · Jacobite Steam Train",
    subtitle: "El techo de Gran Bretaña · El tren de Harry Potter",
    driving: "~40 km (local)",
    overnight: "Fort William",
    color: "#1a2a1a",
    mapCenter: { lat: 56.8198, lng: -5.1052 },
    highlights: [
      { icon: "⛰", text: "Ben Nevis — senderismo (ruta turística ~5-7h, 1345m altitud) o vistas desde el valle" },
      { icon: "🚂", text: "Jacobite Steam Train — de Fort William a Mallaig pasando por el viaducto de Glenfinnan (Harry Potter!)" },
      { icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", text: "Neptune's Staircase — la esclusa más larga del UK" }
    ],
    tickets: [
      { name: "Jacobite Steam Train (West Coast Railways)", price: "~35–45 £/persona ida y vuelta", link: "https://www.westcoastrailways.co.uk/jacobite", must: true, warning: "¡Reserva con meses de antelación! Se agota rápido" },
      { name: "Ben Nevis (libre acceso)", price: "Gratis · botas de montaña imprescindibles", link: null, must: false }
    ],
    hotels: [
      { name: "Inverlochy Castle Hotel", stars: 5, price: "200–300 €", note: "Castillo convertido en hotel de lujo, 5 estrellas histórico. Si queréis daros un capricho.", link: "https://www.inverlochycastlehotel.com" },
      { name: "The Grange Fort William", stars: 4, price: "90–130 €", note: "B&B boutique con vistas al loch, muy bien valorado.", link: "https://www.grangefortWilliam.com" },
      { name: "Bank Street Lodge", stars: 3, price: "60–80 €", note: "Limpio, bien situado, excelente precio.", link: null }
    ],
    restaurants: [
      { name: "The Crannog Seafood Restaurant", type: "Mariscos", price: "€€", note: "Sobre el lago, mejillones y gambas frescas del día. Imprescindible." },
      { name: "Garrison West", type: "Grill · casual", price: "€€", note: "Buena carne local, ambiente relajado." },
      { name: "Ben Nevis Inn", type: "Pub escocés", price: "€", note: "Pub en la base del Ben Nevis. Perfecto post-senderismo." }
    ],
    mapPoints: [
      { name: "Ben Nevis (cima)", lat: 56.7969, lng: -5.0035 },
      { name: "Estación Fort William (Jacobite)", lat: 56.8191, lng: -5.1073 },
      { name: "Viaducto de Glenfinnan", lat: 56.8726, lng: -5.4308 },
      { name: "Neptune's Staircase, Banavie", lat: 56.8468, lng: -5.1274 }
    ]
  },
  {
    day: 5,
    date: "Jue 30 julio",
    title: "Fort William → Inverness",
    subtitle: "Great Glen Way · Urquhart · Ness",
    driving: "~105 km por A82",
    overnight: "Inverness",
    color: "#1a1a2a",
    mapCenter: { lat: 57.4778, lng: -4.2247 },
    highlights: [
      { icon: "🦕", text: "Castillo de Urquhart a orillas del Loch Ness — parada para buscar a Nessie" },
      { icon: "🏙", text: "Inverness — la capital de los Highlands, paseo por el río Ness" },
      { icon: "🌉", text: "Culloden Battlefield — la última batalla en suelo británico (1746)" },
      { icon: "🛍", text: "Victorian Market de Inverness — mercado cubierto del s.XIX" }
    ],
    tickets: [
      { name: "Castillo de Urquhart (Historic Env. Scotland)", price: "~12 £/persona", link: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle", must: true },
      { name: "Culloden Battlefield (NTS)", price: "~14 £/persona", link: "https://www.nts.org.uk/visit/places/culloden", must: true }
    ],
    hotels: [
      { name: "Rocpool Reserve", stars: 5, price: "130–200 €", note: "El hotel más glamuroso de Inverness. Boutique, diseño contemporáneo.", link: "https://www.rocpool.com" },
      { name: "Kingsmills Hotel", stars: 4, price: "90–140 €", note: "Hotel en casa señorial con spa. A 10 min del centro.", link: "https://www.kingsmillshotel.com" },
      { name: "Inverness Palace Hotel & Spa", stars: 4, price: "80–120 €", note: "Justo al lado del río Ness, buenas vistas.", link: "https://www.invernesspalacehotel.co.uk" }
    ],
    restaurants: [
      { name: "Rocpool Restaurant", type: "Escocés moderno", price: "€€€", note: "El mejor de Inverness. Mariscos y caza. Reserva imprescindible." },
      { name: "Contrast Brasserie", type: "Brasserie", price: "€€", note: "En el Glenmoriston Hotel, frente al río. Gran menú a precio razonable." },
      { name: "The Mustard Seed", type: "Escocés · histórico", price: "€€", note: "En una iglesia convertida, vistas al Ness. Buena relación calidad-precio." }
    ],
    mapPoints: [
      { name: "Castillo de Urquhart, Loch Ness", lat: 57.3228, lng: -4.4419 },
      { name: "Culloden Battlefield", lat: 57.4770, lng: -4.0779 },
      { name: "Inverness Centre", lat: 57.4778, lng: -4.2247 },
      { name: "Victorian Market Inverness", lat: 57.4803, lng: -4.2271 }
    ]
  },
  {
    day: 6,
    date: "Vie 31 julio",
    title: "Inverness → Speyside · Whisky Trail",
    subtitle: "La meca del whisky escocés",
    driving: "~80 km por A9/A95",
    overnight: "Speyside (Aberlour / Grantown-on-Spey)",
    color: "#2a1a0a",
    mapCenter: { lat: 57.4652, lng: -3.2260 },
    highlights: [
      { icon: "🥃", text: "Destilería Glenfarclas — una de las pocas independientes de familia. Visita con cata." },
      { icon: "🥃", text: "Destilería Macallan — arquitectura espectacular (nueva bodega 2018)" },
      { icon: "🏞", text: "Speyside Way — paseo junto al río Spey" },
      { icon: "🎶", text: "Charlestown of Aberlour — pueblo encantador con pub tradicional" }
    ],
    tickets: [
      { name: "Glenfarclas Distillery Tour + Cata", price: "~15 £/persona", link: "https://www.glenfarclas.com/visit", must: true },
      { name: "The Macallan Experience", price: "~25–50 £/persona", link: "https://www.themacallan.com/visit", must: true, warning: "Reserva online imprescindible" }
    ],
    hotels: [
      { name: "Mash Tun B&B, Aberlour", stars: 4, price: "90–120 €", note: "B&B temático del whisky, excelente, junto al río Spey.", link: "https://www.mashtun-aberlour.com" },
      { name: "Grant Arms Hotel, Grantown-on-Spey", stars: 3, price: "70–100 €", note: "Hotel histórico con encanto, buen pub.", link: "https://www.grantarmshotel.com" },
      { name: "Craigellachie Hotel", stars: 4, price: "100–150 €", note: "Clásico hotel victoriano en el corazón de Speyside. El Quaich Bar es legendario.", link: "https://www.craigellachiehotel.co.uk" }
    ],
    restaurants: [
      { name: "Craigellachie Hotel — The Copper Dog", type: "Pub gourmet", price: "€€", note: "La mejor selección de whiskies de la zona. Comida de pub excelente." },
      { name: "The Mash Tun", type: "Escocés · B&B", price: "€€", note: "Cenas caseras con productos locales. Ambiente íntimo." },
      { name: "Dowans Hotel Restaurant", type: "Escocés clásico", price: "€€", note: "Junto al Spey, buena relación calidad-precio." }
    ],
    mapPoints: [
      { name: "The Macallan Distillery", lat: 57.4769, lng: -3.2069 },
      { name: "Glenfarclas Distillery", lat: 57.3919, lng: -3.3628 },
      { name: "Aberlour (Speyside Way)", lat: 57.4652, lng: -3.2260 },
      { name: "Craigellachie", lat: 57.4682, lng: -3.2075 }
    ]
  },
  {
    day: 7,
    date: "Sáb 1 agosto",
    title: "Speyside · Highland Games de Newtonmore",
    subtitle: "⚔ Lanzamiento de caber · Gaitas · Tradición pura",
    driving: "~50 km A9",
    overnight: "Speyside / Newtonmore",
    color: "#2a0a0a",
    isHighlandGames: true,
    mapCenter: { lat: 57.0590, lng: -4.1381 },
    highlights: [
      { icon: "⚔", text: "Newtonmore Highland Games — The Eilan, Newtonmore (todo el día)" },
      { icon: "🥁", text: "Concurso de pipe bands, danza highland, lanzamiento de caber y martillo" },
      { icon: "🏅", text: "Ambiente escocés auténtico, muy local, nada turístico en exceso" },
      { icon: "🦅", text: "Avistamiento de águilas calvas en Cairngorms de camino" }
    ],
    tickets: [
      { name: "Newtonmore Highland Games", price: "~10–15 £/persona en puerta", link: "https://newtonmorehighlandgames.co.uk", must: true }
    ],
    hotels: [
      { name: "Mash Tun B&B (noche anterior)", stars: 4, price: "90–120 €", note: "Quédate en Speyside y ve en coche (30 min).", link: "https://www.mashtun-aberlour.com" },
      { name: "Balavil Hotel, Newtonmore", stars: 3, price: "70–100 €", note: "A 2 min de los Games. Si quieres quedarte en el pueblo.", link: "https://www.balavil.com" }
    ],
    restaurants: [
      { name: "Food stalls en los Highland Games", type: "Comida tradicional", price: "€", note: "Haggis, venado asado, pasteles escoceses. Come allí mismo." },
      { name: "The Glen Hotel, Newtonmore", type: "Pub escocés", price: "€", note: "Para cenar tranquilos después de los juegos." }
    ],
    mapPoints: [
      { name: "Newtonmore Highland Games — The Eilan", lat: 57.0590, lng: -4.1381 },
      { name: "Cairngorms National Park (A9)", lat: 57.1200, lng: -3.8000 }
    ]
  },
  {
    day: 8,
    date: "Dom 2 agosto",
    title: "Speyside → Isle of Skye",
    subtitle: "La isla más dramática de Escocia",
    driving: "~220 km A9 → A87",
    overnight: "Portree, Isle of Skye",
    color: "#0a1a2a",
    mapCenter: { lat: 57.4127, lng: -6.1960 },
    highlights: [
      { icon: "🌉", text: "Cruzar el Skye Bridge desde Kyle of Lochalsh — momento mágico" },
      { icon: "🏔", text: "Quiraing — paisaje lunar espectacular (a pie, ~4km circular)" },
      { icon: "🏰", text: "Eilean Donan Castle — el castillo más fotografiado de Escocia (en ruta)" },
      { icon: "🐾", text: "Old Man of Storr — columna rocosa icónica, ruta ~2h" }
    ],
    tickets: [
      { name: "Eilean Donan Castle", price: "~12 £/persona", link: "https://www.eileandonancastle.com", must: true },
      { name: "Old Man of Storr / Quiraing", price: "Aparcamiento ~3 £", link: null, must: false }
    ],
    hotels: [
      { name: "Skeabost Hotel", stars: 4, price: "110–150 €", note: "Casa señorial renovada con jardines al loch. A 10 min de Portree.", link: "https://www.skeabosthotel.com" },
      { name: "Cuillin Hills Hotel", stars: 4, price: "100–140 €", note: "Vistas espectaculares a los Cuillins desde Portree.", link: "https://www.cuillinhillshotel-skye.co.uk" },
      { name: "Portree Hotel", stars: 3, price: "70–100 €", note: "Justo en el puerto de Portree, sencillo y con encanto.", link: "https://www.portreehotel.co.uk" }
    ],
    restaurants: [
      { name: "Sea Breezes, Portree", type: "Mariscos", price: "€€", note: "El mejor marisco de Skye. Langostas y mejillones del loch. Llega pronto, no admite reservas." },
      { name: "Scorrybreac", type: "Escocés fine dining", price: "€€€", note: "Solo 5 mesas, menú degustación de producto de Skye. Reserva con semanas de antelación." },
      { name: "The Bosville, Portree", type: "Bistró · casual", price: "€€", note: "Buen ambiente, buena comida local, vistas al puerto." }
    ],
    mapPoints: [
      { name: "Eilean Donan Castle", lat: 57.2739, lng: -5.5151 },
      { name: "Skye Bridge", lat: 57.2698, lng: -5.7238 },
      { name: "Old Man of Storr", lat: 57.5027, lng: -6.1822 },
      { name: "Quiraing", lat: 57.6386, lng: -6.2674 },
      { name: "Portree Harbour", lat: 57.4127, lng: -6.1960 }
    ]
  },
  {
    day: 9,
    date: "Lun 3 agosto",
    title: "Isle of Skye (día completo)",
    subtitle: "Fairy Pools · Neist Point · Coral Beaches",
    driving: "~80 km en isla",
    overnight: "Portree, Isle of Skye",
    color: "#0a1a2a",
    mapCenter: { lat: 57.2950, lng: -6.3500 },
    highlights: [
      { icon: "💧", text: "Fairy Pools (Glen Brittle) — cascadas de agua cristalina turquesa" },
      { icon: "🌊", text: "Neist Point Lighthouse — el punto más occidental de Skye, vistas oceánicas" },
      { icon: "🐚", text: "Coral Beach, Claigan — playa de coral blanco (no es arena, es algas calcáreas)" },
      { icon: "🏰", text: "Dunvegan Castle — el castillo habitado más antiguo del mundo (desde 1237)" }
    ],
    tickets: [
      { name: "Dunvegan Castle", price: "~18 £/persona", link: "https://www.dunvegancastle.com", must: true },
      { name: "Fairy Pools / Neist Point", price: "Aparcamiento ~3 £", link: null, must: false }
    ],
    hotels: [
      { name: "Skeabost Hotel (2ª noche)", stars: 4, price: "110–150 €", note: "Quédate para disfrutar Skye con calma.", link: "https://www.skeabosthotel.com" },
      { name: "Three Chimneys Cottage", stars: 5, price: "150–200 €", note: "Junto al restaurante más famoso de Skye. Si queréis una noche especial.", link: "https://www.threechimneys.co.uk" }
    ],
    restaurants: [
      { name: "The Three Chimneys", type: "Escocés · restaurante de culto", price: "€€€€", note: "Uno de los mejores de Escocia. Menú degustación con producto hyperlocal de Skye. Reserva con meses de antelación." },
      { name: "Loch Bay Restaurant, Waternish", type: "Mariscos", price: "€€€", note: "Estrella Michelin. Pequeño, íntimo, frente al loch. Reserva obligatoria." },
      { name: "Edinbane Lodge", type: "Escocés rural", price: "€€", note: "Buena cocina local en ambiente de casa de campo." }
    ],
    mapPoints: [
      { name: "Fairy Pools, Glen Brittle", lat: 57.2494, lng: -6.3020 },
      { name: "Neist Point Lighthouse", lat: 57.4234, lng: -6.7869 },
      { name: "Dunvegan Castle", lat: 57.4476, lng: -6.5907 },
      { name: "Coral Beach, Claigan", lat: 57.4827, lng: -6.5972 }
    ]
  },
  {
    day: 10,
    date: "Mar 4 agosto",
    title: "Skye → Stirling",
    subtitle: "Regreso por los Trossachs · Wallace · Rob Roy",
    driving: "~240 km A87 → A82 → M9",
    overnight: "Stirling",
    color: "#1a2a1a",
    mapCenter: { lat: 56.1165, lng: -3.9369 },
    highlights: [
      { icon: "🏰", text: "Castillo de Stirling — rival del de Edimburgo en historia. Mary Queen of Scots fue coronada aquí." },
      { icon: "🗽", text: "Monumento a William Wallace — la torre del Braveheart real, vistas 360°" },
      { icon: "⚔", text: "Bridge of Allan Highland Games al día siguiente (2 ago — ya pasó, pero Stirling es base perfecta)" },
      { icon: "🌿", text: "Loch Katrine — corazón del Parque de los Trossachs" }
    ],
    tickets: [
      { name: "Castillo de Stirling (Historic Env. Scotland)", price: "~18 £/persona", link: "https://www.historicenvironment.scot/visit-a-place/places/stirling-castle", must: true },
      { name: "National Wallace Monument", price: "~12 £/persona", link: "https://www.nationalwallacemonument.com", must: false }
    ],
    hotels: [
      { name: "Stirling Highland Hotel", stars: 4, price: "90–130 €", note: "En una escuela victoriana medieval junto al castillo. Único.", link: "https://www.cairnhotel.co.uk/stirling" },
      { name: "The Victoria Square Guest House", stars: 4, price: "80–110 €", note: "B&B boutique en casa señorial. Muy bien valorado.", link: "https://www.victoriasquare.co.uk" },
      { name: "Park Lodge Hotel", stars: 3, price: "65–90 €", note: "Pequeño hotel familiar con jardín, buen precio.", link: null }
    ],
    restaurants: [
      { name: "Portcullis Restaurant", type: "Escocés clásico", price: "€€", note: "Justo al lado del castillo. Ambiente medieval, platos escoceses tradicionales." },
      { name: "Artichoke Restaurant", type: "Moderno escocés", price: "€€", note: "El favorito de los locales. Producto de Perthshire y Stirlingshire." },
      { name: "No. 2 Baker Street", type: "Bistró", price: "€€", note: "Pequeño, encantador, buenas opciones vegetarianas y de carne local." }
    ],
    mapPoints: [
      { name: "Castillo de Stirling", lat: 56.1232, lng: -3.9467 },
      { name: "National Wallace Monument", lat: 56.1427, lng: -3.9183 },
      { name: "Bridge of Allan (Highland Games)", lat: 56.1557, lng: -3.9440 },
      { name: "Loch Katrine, Trossachs", lat: 56.2535, lng: -4.5440 }
    ]
  },
  {
    day: 11,
    date: "Mié 5 agosto",
    title: "Stirling → Edimburgo · Vuelo",
    subtitle: "Última mañana · Devolución del coche · ✈ 19:00",
    driving: "~55 km M9 → EDI",
    overnight: "Vuelo de regreso",
    color: "#1a1a1a",
    mapCenter: { lat: 55.9533, lng: -3.1883 },
    highlights: [
      { icon: "🌅", text: "Última mañana en Edimburgo — Calton Hill para vistas panorámicas de la ciudad" },
      { icon: "🛍", text: "Victoria Street — la calle curva más bonita de Edimburgo. Compras de último momento." },
      { icon: "🚗", text: "Devolución del coche en el aeropuerto EDI. Deja tiempo suficiente (mínimo 3h antes)." },
      { icon: "✈", text: "Vuelo de regreso 19:00 h desde Edimburgo (EDI)" }
    ],
    tickets: [
      { name: "Calton Hill (libre acceso)", price: "Gratis", link: null, must: false }
    ],
    hotels: [],
    restaurants: [
      { name: "The Pantry, Stockbridge", type: "Brunch escocés", price: "€€", note: "El mejor brunch de Edimburgo. Para una última mañana perfecta." },
      { name: "Café St Honoré", type: "Bistró francés-escocés", price: "€€", note: "Elegante, acogedor, buena comida antes del vuelo." }
    ],
    mapPoints: [
      { name: "Calton Hill", lat: 55.9553, lng: -3.1826 },
      { name: "Victoria Street", lat: 55.9481, lng: -3.1930 },
      { name: "Aeropuerto EDI (devolución coche)", lat: 55.9508, lng: -3.3615 }
    ]
  }
];
