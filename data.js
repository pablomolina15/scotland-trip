const DAYS = [
  {
    day: 1, date: "Dom 26 julio",
    title: "Llegada a Edimburgo",
    sub: "Aterrizaje 09:30 · Old Town · Whisky · Grassmarket",
    driving: "0 km (avión)", overnight: "Edimburgo",
    games: false,
    bg: "linear-gradient(100deg,rgba(30,51,40,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"✈", t:"Aterrizaje EDI 09:30 — recoge el coche de alquiler en el aeropuerto"},
      {i:"🏰", t:"Castillo de Edimburgo (tarde) — entrada pre-reservada"},
      {i:"🥃", t:"Paseo por el Royal Mile hasta Holyrood"},
      {i:"🌆", t:"Barrio Grassmarket para cenar y primer pub escocés"}
    ],
    tickets: [
      {n:"Castillo de Edimburgo", p:"~21 £/p", must:true, warn:"Reserva online", url:"https://www.edinburghcastle.scot"},
      {n:"Real Palacio de Holyrood", p:"~17 £/p", must:false, url:"https://www.rct.uk/visit/palace-of-holyroodhouse"}
    ],
    hotels: [
      {n:"Hotel Indigo Edinburgh – Royal Mile", s:4, p:"90–130 €/n", t:"Buen diseño contemporáneo, ubicación perfecta en el Royal Mile.", url:"https://www.ihg.com"},
      {n:"The Witchery by the Castle", s:5, p:"140–180 €/n", t:"Icónico gótico victoriano, solo 9 suites. Reserva pronto.", url:"https://www.thewitchery.com"},
      {n:"Grassmarket Hotel", s:3, p:"70–100 €/n", t:"Ambiente animado en el corazón del Old Town.", url:"https://www.grassmarkethotel.co.uk"}
    ],
    rests: [
      {n:"Timberyard", ty:"Escocés moderno · km 0", p:"€€€", note:"Uno de los mejores de la ciudad. Producto local de temporada."},
      {n:"Café Royal", ty:"Mariscos · pub victoriano", p:"€€", note:"Interior impresionante del siglo XIX. Oysters y cerveza artesanal."},
      {n:"The Grain Store", ty:"Brasserie · escocés", p:"€€", note:"Buena carne y pescado local, precio razonable."}
    ],
    mapCenter: [55.9503, -3.1883], mapZoom: 14,
    pts: [
      {n:"Aeropuerto EDI", lat:55.9508, lng:-3.3615},
      {n:"Castillo de Edimburgo", lat:55.9486, lng:-3.1999},
      {n:"Royal Mile", lat:55.9503, lng:-3.1883},
      {n:"Grassmarket", lat:55.9462, lng:-3.1956}
    ]
  },
  {
    day: 2, date: "Lun 27 julio",
    title: "Edimburgo → Glasgow · Commonwealth",
    sub: "Arthur's Seat · Glasgow · Atletismo de élite",
    driving: "~75 km · A8/M8 · 1h", overnight: "Glasgow",
    games: true, gamesLabel: "🏅 Commonwealth Games — Atletismo",
    bg: "linear-gradient(100deg,rgba(11,20,35,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"🏔", t:"Subida a Arthur's Seat (45 min, vistas 360° sobre Edimburgo)"},
      {i:"🚗", t:"Conducción a Glasgow por la M8 (~1h) — devuelve la clave del hotel"},
      {i:"🏅", t:"Commonwealth Games — sesión de atletismo en Scotstoun Stadium (tarde/noche)"},
      {i:"🍺", t:"West End de Glasgow para cenar — Byres Road"}
    ],
    tickets: [
      {n:"Commonwealth Games Atletismo", p:"20–50 £/sesión", must:true, warn:"¡Reserva ya!", url:"https://www.glasgow2026.com"},
      {n:"Arthur's Seat (Holyrood Park)", p:"Gratis", must:false, url:null}
    ],
    hotels: [
      {n:"Kimpton Blythswood Square", s:5, p:"120–160 €/n", t:"El mejor de Glasgow, en palacete georgiano. Spa excelente.", url:"https://www.kimptonblythswoodsquare.com"},
      {n:"Hotel Indigo Glasgow", s:4, p:"80–120 €/n", t:"Buen diseño, zona céntrica, bien conectado al estadio.", url:"https://www.ihg.com"},
      {n:"Grasshoppers Hotel Glasgow", s:3, p:"60–90 €/n", t:"Boutique muy bien valorado, relación calidad-precio excelente.", url:"https://www.grasshoppersglasgow.com"}
    ],
    rests: [
      {n:"Ox and Finch", ty:"Tapas escocesas · sharing", p:"€€", note:"El más de moda en Glasgow. Platos pequeños para compartir."},
      {n:"Cail Bruich", ty:"Fine dining · Michelin", p:"€€€", note:"Estrella Michelin. Reserva con mucha antelación."},
      {n:"Ubiquitous Chip", ty:"Escocés clásico · West End", p:"€€", note:"Institución desde 1971. Ambiente único, jardín interior."}
    ],
    mapCenter: [55.8650, -4.2600], mapZoom: 12,
    pts: [
      {n:"Arthur's Seat, Edimburgo", lat:55.9442, lng:-3.1611},
      {n:"Scotstoun Stadium (Commonwealth)", lat:55.8783, lng:-4.3589},
      {n:"West End Glasgow", lat:55.8759, lng:-4.2886}
    ]
  },
  {
    day: 3, date: "Mar 28 julio",
    title: "Glasgow → Loch Lomond → Glencoe",
    sub: "Los primeros Highlands · Majestuosidad pura",
    driving: "~150 km · A82 · 2.5h sin paradas", overnight: "Glencoe / Fort William",
    games: false,
    bg: "linear-gradient(100deg,rgba(25,15,10,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"🏞", t:"Luss (Loch Lomond) — el pueblo más bonito del parque nacional, paseo al lago"},
      {i:"🌫", t:"Rannoch Moor — la llanura más salvaje de Escocia, infinita y neblinosa"},
      {i:"🏔", t:"Valle de Glencoe — parada con vistas al Three Sisters. Fotogénico total."},
      {i:"🦌", t:"Signal Rock — bosque antiguo con posible avistamiento de ciervos"}
    ],
    tickets: [
      {n:"Glencoe Visitor Centre (NTS)", p:"~7 £/p", must:true, url:"https://www.nts.org.uk/visit/places/glencoe"},
      {n:"Aparcamiento Luss", p:"~3 £", must:false, url:null}
    ],
    hotels: [
      {n:"Kingshouse Hotel", s:4, p:"110–150 €/n", t:"Hotel histórico en mitad de Glencoe, vistas espectaculares. Muy icónico.", url:"https://www.kingshousehotel.co.uk"},
      {n:"Glencoe Inn", s:3, p:"70–100 €/n", t:"Pub-hotel acogedor en el pueblo de Glencoe.", url:"https://www.glencoeinn.com"},
      {n:"Alexandra Hotel Fort William", s:3, p:"80–110 €/n", t:"Si prefieres Fort William (~30 min). Vistas al Ben Nevis.", url:null}
    ],
    rests: [
      {n:"Kingshouse Hotel Restaurant", ty:"Escocés highland", p:"€€", note:"Cordero y venado local, ambiente rústico de montaña. Imprescindible."},
      {n:"Glencoe Café", ty:"Café · ligero", p:"€", note:"Sopas caseras, sándwiches y tartas para reponer fuerzas."},
      {n:"Lime Tree Fort William", ty:"Escocés moderno", p:"€€€", note:"Si duermes en Fort William. Mariscos frescos, muy bien valorado."}
    ],
    mapCenter: [56.6820, -5.0200], mapZoom: 9,
    pts: [
      {n:"Luss, Loch Lomond", lat:56.1026, lng:-4.6365},
      {n:"Rannoch Moor", lat:56.6537, lng:-4.7456},
      {n:"Glencoe — Three Sisters", lat:56.6818, lng:-5.0200},
      {n:"Kingshouse Hotel", lat:56.6599, lng:-4.8785}
    ]
  },
  {
    day: 4, date: "Mié 29 julio",
    title: "Fort William · Ben Nevis · Jacobite Train",
    sub: "El techo de Gran Bretaña · El tren de Harry Potter",
    driving: "~40 km local", overnight: "Fort William",
    games: false,
    bg: "linear-gradient(100deg,rgba(10,20,18,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"⛰", t:"Ben Nevis — senderismo por la ruta turística (5–7h, 1345m) o vistas desde el valle"},
      {i:"🚂", t:"Jacobite Steam Train — Fort William a Mallaig cruzando el Viaducto de Glenfinnan (Harry Potter!)"},
      {i:"🌊", t:"Mallaig — puerto de pescadores con las mejores gambas de Escocia para comer"},
      {i:"🔒", t:"Neptune's Staircase en Banavie — la esclusa en escalera más larga del Reino Unido"}
    ],
    tickets: [
      {n:"Jacobite Steam Train (West Coast Railways)", p:"~35–45 £/p", must:true, warn:"¡Se agota meses antes! Reserva ya.", url:"https://www.westcoastrailways.co.uk/jacobite"},
      {n:"Ben Nevis (libre acceso)", p:"Gratis · botas impermeables imprescindibles", must:false, url:null}
    ],
    hotels: [
      {n:"The Grange Fort William", s:4, p:"90–130 €/n", t:"B&B boutique con vistas al loch. Muy bien valorado.", url:null},
      {n:"Bank Street Lodge", s:3, p:"60–80 €/n", t:"Limpio, bien situado, excelente relación calidad-precio.", url:null},
      {n:"Inverlochy Castle Hotel", s:5, p:"200–300 €/n", t:"Si queréis daros un capricho. Castillo convertido en hotel de lujo.", url:"https://www.inverlochycastlehotel.com"}
    ],
    rests: [
      {n:"The Crannog Seafood Restaurant", ty:"Mariscos · sobre el lago", p:"€€", note:"Mejillones y gambas frescas del día. Imprescindible en Fort William."},
      {n:"Garrison West", ty:"Grill · casual", p:"€€", note:"Buena carne local, ambiente relajado y animado."},
      {n:"Ben Nevis Inn", ty:"Pub · base de montaña", p:"€", note:"Perfecto post-senderismo. En la base del Ben Nevis."}
    ],
    mapCenter: [56.8200, -5.1050], mapZoom: 11,
    pts: [
      {n:"Ben Nevis (cima)", lat:56.7969, lng:-5.0035},
      {n:"Estación Fort William (Jacobite)", lat:56.8191, lng:-5.1073},
      {n:"Viaducto de Glenfinnan", lat:56.8726, lng:-5.4308},
      {n:"Neptune's Staircase, Banavie", lat:56.8468, lng:-5.1274}
    ]
  },
  {
    day: 5, date: "Jue 30 julio",
    title: "Fort William → Inverness",
    sub: "Great Glen · Loch Ness · Culloden",
    driving: "~105 km · A82 · 1.5h sin paradas", overnight: "Inverness",
    games: false,
    bg: "linear-gradient(100deg,rgba(12,18,30,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"🦕", t:"Castillo de Urquhart a orillas del Loch Ness — busca a Nessie"},
      {i:"⚔", t:"Culloden Battlefield — la última batalla en suelo británico (1746). Muy emotivo."},
      {i:"🏙", t:"Inverness — la capital de los Highlands, paseo por el río Ness"},
      {i:"🛍", t:"Victorian Market de Inverness — mercado cubierto del siglo XIX"}
    ],
    tickets: [
      {n:"Castillo de Urquhart (HES)", p:"~12 £/p", must:true, url:"https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle"},
      {n:"Culloden Battlefield (NTS)", p:"~14 £/p", must:true, url:"https://www.nts.org.uk/visit/places/culloden"}
    ],
    hotels: [
      {n:"Rocpool Reserve", s:5, p:"130–200 €/n", t:"El hotel más glamuroso de Inverness. Boutique, diseño contemporáneo.", url:"https://www.rocpool.com"},
      {n:"Kingsmills Hotel", s:4, p:"90–140 €/n", t:"Casa señorial con spa, a 10 minutos del centro.", url:"https://www.kingsmillshotel.com"},
      {n:"Inverness Palace Hotel & Spa", s:4, p:"80–120 €/n", t:"Junto al río Ness, buenas vistas, bien comunicado.", url:"https://www.invernesspalacehotel.co.uk"}
    ],
    rests: [
      {n:"Rocpool Restaurant", ty:"Escocés moderno · best in town", p:"€€€", note:"El mejor de Inverness. Mariscos y caza. Reserva imprescindible."},
      {n:"The Mustard Seed", ty:"Escocés · iglesia convertida", p:"€€", note:"En una antigua iglesia, vistas al Ness. Gran relación calidad-precio."},
      {n:"Contrast Brasserie", ty:"Brasserie · río", p:"€€", note:"Frente al Ness en el Glenmoriston Hotel. Menú a precio razonable."}
    ],
    mapCenter: [57.3800, -4.3000], mapZoom: 10,
    pts: [
      {n:"Castillo de Urquhart, Loch Ness", lat:57.3228, lng:-4.4419},
      {n:"Culloden Battlefield", lat:57.4770, lng:-4.0779},
      {n:"Inverness Centre", lat:57.4778, lng:-4.2247}
    ]
  },
  {
    day: 6, date: "Vie 31 julio",
    title: "Inverness → Speyside · Whisky Trail",
    sub: "La meca del single malt escocés",
    driving: "~80 km · A9/A95 · 1.5h", overnight: "Speyside (Aberlour / Craigellachie)",
    games: false,
    bg: "linear-gradient(100deg,rgba(30,18,5,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"🥃", t:"Destilería The Macallan — arquitectura espectacular. Visita y cata. Reserva imprescindible."},
      {i:"🥃", t:"Destilería Glenfarclas — una de las pocas de familia. Ambiente auténtico."},
      {i:"🏞", t:"Speyside Way — paseo junto al río Spey entre destilerías"},
      {i:"🎶", t:"Charlestown of Aberlour — pueblo encantador con pub de whisky de colección"}
    ],
    tickets: [
      {n:"The Macallan Experience", p:"~25–50 £/p", must:true, warn:"Reserva online imprescindible", url:"https://www.themacallan.com/visit"},
      {n:"Glenfarclas Distillery Tour + Cata", p:"~15 £/p", must:true, url:"https://www.glenfarclas.com/visit"}
    ],
    hotels: [
      {n:"Craigellachie Hotel", s:4, p:"100–150 €/n", t:"Victoriano icónico en el corazón de Speyside. El Quaich Bar tiene 1.000 referencias de whisky.", url:"https://www.craigellachiehotel.co.uk"},
      {n:"Mash Tun B&B, Aberlour", s:4, p:"90–120 €/n", t:"B&B temático del whisky junto al río Spey. Excelente.", url:"https://www.mashtun-aberlour.com"},
      {n:"Grant Arms Hotel, Grantown-on-Spey", s:3, p:"70–100 €/n", t:"Hotel histórico con encanto, buen pub.", url:"https://www.grantarmshotel.com"}
    ],
    rests: [
      {n:"Craigellachie Hotel — The Copper Dog", ty:"Pub gourmet · whisky bar", p:"€€", note:"La mejor selección de whiskies de la zona. Comida de pub excelente."},
      {n:"The Mash Tun", ty:"Escocés · íntimo", p:"€€", note:"Cenas caseras con productos locales. Ambiente de casa de campo."},
      {n:"Dowans Hotel Restaurant", ty:"Escocés clásico", p:"€€", note:"Junto al Spey, buena relación calidad-precio."}
    ],
    mapCenter: [57.4200, -3.2500], mapZoom: 11,
    pts: [
      {n:"The Macallan Distillery", lat:57.4769, lng:-3.2069},
      {n:"Glenfarclas Distillery", lat:57.3919, lng:-3.3628},
      {n:"Aberlour (Speyside Way)", lat:57.4652, lng:-3.2260},
      {n:"Craigellachie Hotel", lat:57.4682, lng:-3.2075}
    ]
  },
  {
    day: 7, date: "Sáb 1 agosto",
    title: "Speyside · Newtonmore Highland Games",
    sub: "⚔ Caber · Gaitas · Danza · Tradición pura",
    driving: "~50 km · A9", overnight: "Speyside / Newtonmore",
    games: true, gamesLabel: "⚔ Newtonmore Highland Games — The Eilan",
    bg: "linear-gradient(100deg,rgba(40,5,5,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"⚔", t:"Newtonmore Highland Games — The Eilan, Newtonmore (todo el día)"},
      {i:"🥁", t:"Concurso de pipe bands, danza highland, lanzamiento de caber y martillo"},
      {i:"🏅", t:"Ambiente escocés auténtico, muy local, familias y clanes en atuendo tradicional"},
      {i:"🦅", t:"Cairngorms National Park de camino — avistamiento de águilas calvas"}
    ],
    tickets: [
      {n:"Newtonmore Highland Games", p:"~10–15 £/p en puerta", must:true, url:"https://newtonmorehighlandgames.co.uk"}
    ],
    hotels: [
      {n:"Mash Tun B&B (base en Speyside)", s:4, p:"90–120 €/n", t:"Quédate en Speyside y ve en coche (30 min). Lo mejor.", url:"https://www.mashtun-aberlour.com"},
      {n:"Balavil Hotel, Newtonmore", s:3, p:"70–100 €/n", t:"A 2 min de los Games. Si quieres quedarte en el pueblo.", url:"https://www.balavil.com"}
    ],
    rests: [
      {n:"Food stalls — Highland Games", ty:"Comida tradicional escocesa", p:"€", note:"Haggis, venado asado, pasteles escoceses. Come allí mismo. Experiencia única."},
      {n:"The Glen Hotel, Newtonmore", ty:"Pub escocés", p:"€", note:"Para cenar tranquilos después de los juegos."}
    ],
    mapCenter: [57.0800, -4.1000], mapZoom: 11,
    pts: [
      {n:"Newtonmore Highland Games — The Eilan", lat:57.0590, lng:-4.1381},
      {n:"Cairngorms National Park", lat:57.1200, lng:-3.8000}
    ]
  },
  {
    day: 8, date: "Dom 2 agosto",
    title: "Speyside → Isle of Skye",
    sub: "La isla más dramática de Escocia",
    driving: "~220 km · A9 → A87 · 3h sin paradas", overnight: "Portree, Isle of Skye",
    games: false,
    bg: "linear-gradient(100deg,rgba(8,18,28,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"🏰", t:"Eilean Donan Castle — el castillo más fotografiado de Escocia (en ruta, parada de 1h)"},
      {i:"🌉", t:"Cruzar el Skye Bridge desde Kyle of Lochalsh — momento mágico de llegada a la isla"},
      {i:"🗿", t:"Old Man of Storr — columna rocosa icónica, ruta senderismo ~2h"},
      {i:"🎨", t:"Portree harbour — el puerto de colores, perfecto para el atardecer"}
    ],
    tickets: [
      {n:"Eilean Donan Castle", p:"~12 £/p", must:true, url:"https://www.eileandonancastle.com"},
      {n:"Old Man of Storr (aparcamiento)", p:"~3 £", must:false, url:null}
    ],
    hotels: [
      {n:"Skeabost Hotel", s:4, p:"110–150 €/n", t:"Casa señorial renovada con jardines al loch. A 10 min de Portree.", url:"https://www.skeabosthotel.com"},
      {n:"Cuillin Hills Hotel", s:4, p:"100–140 €/n", t:"Vistas espectaculares a los Cuillins desde Portree.", url:"https://www.cuillinhillshotel-skye.co.uk"},
      {n:"Portree Hotel", s:3, p:"70–100 €/n", t:"Justo en el puerto de Portree, sencillo y con encanto.", url:null}
    ],
    rests: [
      {n:"Sea Breezes, Portree", ty:"Mariscos · sin reservas", p:"€€", note:"El mejor marisco de Skye. Langostas y mejillones del loch. Llega pronto."},
      {n:"Scorrybreac", ty:"Fine dining · solo 5 mesas", p:"€€€", note:"Menú degustación de producto de Skye. Reserva con semanas de antelación."},
      {n:"The Bosville, Portree", ty:"Bistró · casual", p:"€€", note:"Buen ambiente, vistas al puerto, buena comida local."}
    ],
    mapCenter: [57.3000, -5.8000], mapZoom: 9,
    pts: [
      {n:"Eilean Donan Castle", lat:57.2739, lng:-5.5151},
      {n:"Skye Bridge", lat:57.2698, lng:-5.7238},
      {n:"Old Man of Storr", lat:57.5027, lng:-6.1822},
      {n:"Portree Harbour", lat:57.4127, lng:-6.1960}
    ]
  },
  {
    day: 9, date: "Lun 3 agosto",
    title: "Isle of Skye — día completo",
    sub: "Fairy Pools · Neist Point · Dunvegan",
    driving: "~80 km en isla", overnight: "Portree, Isle of Skye",
    games: false,
    bg: "linear-gradient(100deg,rgba(8,22,35,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"💧", t:"Fairy Pools (Glen Brittle) — cascadas de agua turquesa cristalina, impresionantes"},
      {i:"🌊", t:"Neist Point Lighthouse — el punto más occidental de Skye, vistas al océano"},
      {i:"🐚", t:"Coral Beach, Claigan — playa de coral blanco (algas calcáreas). Irreal."},
      {i:"🏰", t:"Dunvegan Castle — el castillo habitado más antiguo del mundo (desde 1237)"}
    ],
    tickets: [
      {n:"Dunvegan Castle", p:"~18 £/p", must:true, url:"https://www.dunvegancastle.com"},
      {n:"Fairy Pools / Neist Point (aparcamiento)", p:"~3 £", must:false, url:null}
    ],
    hotels: [
      {n:"Skeabost Hotel (2ª noche)", s:4, p:"110–150 €/n", t:"Quédate para disfrutar Skye con calma.", url:"https://www.skeabosthotel.com"},
      {n:"Three Chimneys Cottage", s:5, p:"150–200 €/n", t:"Junto al restaurante más famoso de Skye. Para una noche especial.", url:"https://www.threechimneys.co.uk"}
    ],
    rests: [
      {n:"The Three Chimneys", ty:"Escocés · restaurante de culto", p:"€€€€", note:"Uno de los mejores de Escocia. Menú degustación de Skye. Reserva con meses de antelación."},
      {n:"Loch Bay Restaurant, Waternish", ty:"Mariscos · Michelin", p:"€€€", note:"Estrella Michelin. Pequeño e íntimo, frente al loch. Reserva obligatoria."},
      {n:"Edinbane Lodge", ty:"Escocés rural", p:"€€", note:"Buena cocina local en ambiente de casa de campo acogedora."}
    ],
    mapCenter: [57.3500, -6.4000], mapZoom: 10,
    pts: [
      {n:"Fairy Pools, Glen Brittle", lat:57.2494, lng:-6.3020},
      {n:"Neist Point Lighthouse", lat:57.4234, lng:-6.7869},
      {n:"Dunvegan Castle", lat:57.4476, lng:-6.5907},
      {n:"Coral Beach, Claigan", lat:57.4827, lng:-6.5972}
    ]
  },
  {
    day: 10, date: "Mar 4 agosto",
    title: "Skye → Stirling",
    sub: "Regreso · Trossachs · Wallace · Rob Roy",
    driving: "~240 km · A87 → A82 → M9 · 3.5h", overnight: "Stirling",
    games: true, gamesLabel: "⚔ Bridge of Allan Highland Games (mañana, 5 ago)",
    bg: "linear-gradient(100deg,rgba(15,25,12,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"🏰", t:"Castillo de Stirling — rival del de Edimburgo. Mary Queen of Scots fue coronada aquí."},
      {i:"🗽", t:"Monumento a William Wallace (el Braveheart real) — vistas 360° desde la torre"},
      {i:"🌿", t:"Loch Katrine — corazón del Parque Nacional de los Trossachs (ruta en barco)"},
      {i:"⚔", t:"Bridge of Allan Highland Games al día siguiente — a solo 15 min de Stirling"}
    ],
    tickets: [
      {n:"Castillo de Stirling (HES)", p:"~18 £/p", must:true, url:"https://www.historicenvironment.scot/visit-a-place/places/stirling-castle"},
      {n:"National Wallace Monument", p:"~12 £/p", must:false, url:"https://www.nationalwallacemonument.com"}
    ],
    hotels: [
      {n:"Stirling Highland Hotel", s:4, p:"90–130 €/n", t:"En una escuela victoriana junto al castillo. Único y con mucho carácter.", url:"https://www.cairnhotel.co.uk/stirling"},
      {n:"The Victoria Square Guest House", s:4, p:"80–110 €/n", t:"B&B boutique en casa señorial victoriana. Muy bien valorado.", url:"https://www.victoriasquare.co.uk"},
      {n:"Park Lodge Hotel", s:3, p:"65–90 €/n", t:"Pequeño hotel familiar con jardín, buen precio.", url:null}
    ],
    rests: [
      {n:"Portcullis Restaurant", ty:"Escocés clásico · medieval", p:"€€", note:"Justo al lado del castillo, ambiente medieval auténtico."},
      {n:"Artichoke Restaurant", ty:"Moderno escocés", p:"€€", note:"El favorito de los locales. Producto de Perthshire y Stirlingshire."},
      {n:"No. 2 Baker Street", ty:"Bistró · encantador", p:"€€", note:"Pequeño y acogedor, buenas opciones locales."}
    ],
    mapCenter: [56.1200, -3.9400], mapZoom: 12,
    pts: [
      {n:"Castillo de Stirling", lat:56.1232, lng:-3.9467},
      {n:"National Wallace Monument", lat:56.1427, lng:-3.9183},
      {n:"Bridge of Allan (Highland Games)", lat:56.1557, lng:-3.9440},
      {n:"Loch Katrine, Trossachs", lat:56.2535, lng:-4.5440}
    ]
  },
  {
    day: 11, date: "Mié 5 agosto",
    title: "Stirling → Edimburgo · Vuelo",
    sub: "Última mañana · ✈ 19:00 desde EDI",
    driving: "~55 km · M9 → EDI", overnight: "Vuelo de regreso",
    games: true, gamesLabel: "⚔ Bridge of Allan Highland Games — ¡esta mañana!",
    bg: "linear-gradient(100deg,rgba(18,12,8,0.95) 0%,rgba(11,15,19,0.7) 100%)",
    highlights: [
      {i:"⚔", t:"Bridge of Allan Highland Games (mañana) — a 15 min de Stirling, antes de la ruta"},
      {i:"🌅", t:"Calton Hill, Edimburgo — vistas panorámicas de la ciudad para la despedida"},
      {i:"🛍", t:"Victoria Street — la calle curva más bonita, compras de último momento"},
      {i:"✈", t:"Devolución del coche en EDI (mínimo 2–3h antes del vuelo). Vuelo 19:00 h."}
    ],
    tickets: [
      {n:"Bridge of Allan Highland Games", p:"~10 £/p en puerta", must:true, url:null},
      {n:"Calton Hill (libre acceso)", p:"Gratis", must:false, url:null}
    ],
    hotels: [],
    rests: [
      {n:"The Pantry, Stockbridge", ty:"Brunch escocés · el mejor de EDI", p:"€€", note:"El mejor brunch de Edimburgo. Para una última mañana perfecta."},
      {n:"Café St Honoré", ty:"Bistró · francés-escocés", p:"€€", note:"Elegante y acogedor para comer antes del vuelo."}
    ],
    mapCenter: [55.9500, -3.2000], mapZoom: 12,
    pts: [
      {n:"Bridge of Allan Highland Games", lat:56.1557, lng:-3.9440},
      {n:"Calton Hill, Edimburgo", lat:55.9553, lng:-3.1826},
      {n:"Victoria Street, Edimburgo", lat:55.9481, lng:-3.1930},
      {n:"Aeropuerto EDI (devolver coche)", lat:55.9508, lng:-3.3615}
    ]
  }
];

// Full route for hero map
const ROUTE_COORDS = [
  [55.9508, -3.3615], // EDI airport
  [55.9503, -3.1883], // Edinburgh
  [55.8642, -4.2518], // Glasgow
  [56.1026, -4.6365], // Loch Lomond
  [56.6818, -5.0200], // Glencoe
  [56.8191, -5.1073], // Fort William
  [57.3228, -4.4419], // Loch Ness
  [57.4778, -4.2247], // Inverness
  [57.4652, -3.2260], // Speyside
  [57.0590, -4.1381], // Newtonmore (Highland Games)
  [57.4127, -6.1960], // Isle of Skye
  [56.1232, -3.9467], // Stirling
  [56.1557, -3.9440], // Bridge of Allan
  [55.9503, -3.1883], // Edinburgh return
  [55.9508, -3.3615], // EDI airport
];

const GAMES_STOPS = [
  { lat: 55.8783, lng: -4.3589, name: "Commonwealth Games · Glasgow" },
  { lat: 57.0590, lng: -4.1381, name: "Newtonmore Highland Games" },
  { lat: 56.1557, lng: -3.9440, name: "Bridge of Allan Highland Games" },
];
