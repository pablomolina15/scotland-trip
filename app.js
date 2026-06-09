/* Scotland 2026 — App JS
   Leaflet hero map + per-day mini maps + dynamic card rendering */

// ─── HERO MAP ───────────────────────────────────────────────
function initHeroMap() {
  const map = L.map('hero-map', {
    center: [56.8, -4.5],
    zoom: 6,
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CARTO',
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map);

  // Animated route polyline
  const routeLine = L.polyline(ROUTE_COORDS, {
    color: '#c8902a',
    weight: 2.5,
    opacity: 0.75,
    dashArray: '6 4',
    lineJoin: 'round'
  }).addTo(map);

  // Stop markers — numbered
  const stopCoords = [
    { ll: [55.9503, -3.1883], n: "1. Edimburgo" },
    { ll: [55.8642, -4.2518], n: "2. Glasgow" },
    { ll: [56.6818, -5.0200], n: "3. Glencoe" },
    { ll: [56.8191, -5.1073], n: "4. Fort William" },
    { ll: [57.4778, -4.2247], n: "5. Inverness" },
    { ll: [57.4652, -3.2260], n: "6. Speyside" },
    { ll: [57.4127, -6.1960], n: "7. Isle of Skye" },
    { ll: [56.1232, -3.9467], n: "8. Stirling" },
  ];

  stopCoords.forEach(s => {
    const icon = L.divIcon({
      html: `<div class="map-pin-stop" title="${s.n}"></div>`,
      className: '', iconSize: [12, 12], iconAnchor: [6, 6]
    });
    L.marker(s.ll, { icon })
      .bindPopup(`<strong>${s.n}</strong>`, { closeButton: false })
      .addTo(map);
  });

  // Highland Games markers (gold)
  GAMES_STOPS.forEach(g => {
    const icon = L.divIcon({
      html: `<div class="map-pin-games" title="${g.name}">⚔</div>`,
      className: '', iconSize: [24, 24], iconAnchor: [12, 12]
    });
    L.marker([g.lat, g.lng], { icon })
      .bindPopup(`<strong style="color:#e8b84b">${g.name}</strong>`, { closeButton: false })
      .addTo(map);
  });
}

// ─── DAY MAP ────────────────────────────────────────────────
function initDayMap(containerId, center, zoom, pts) {
  const map = L.map(containerId, {
    center, zoom,
    zoomControl: false,
    scrollWheelZoom: false,
    attributionControl: false,
    dragging: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map);

  if (pts && pts.length > 1) {
    const lls = pts.map(p => [p.lat, p.lng]);
    L.polyline(lls, { color: '#c8902a', weight: 2, opacity: 0.6, dashArray: '5 4' }).addTo(map);
  }

  pts.forEach((p, i) => {
    const icon = L.divIcon({
      html: `<div class="dmap-pin">${i + 1}</div>`,
      className: '', iconSize: [22, 22], iconAnchor: [11, 11]
    });
    L.marker([p.lat, p.lng], { icon })
      .bindPopup(`<strong>${p.n}</strong>`, { closeButton: false, maxWidth: 160 })
      .addTo(map);
  });
}

// ─── GOOGLE MAPS LINK ────────────────────────────────────────
function gmapsLink(pts) {
  if (!pts.length) return '#';
  const coords = pts.map(p => `${p.lat},${p.lng}`).join('/');
  return `https://www.google.com/maps/dir/${coords}`;
}

// ─── RENDER DAY CARD ─────────────────────────────────────────
function renderCard(d) {
  const mapId = `dmap-${d.day}`;

  const highlightsHtml = d.highlights.map(h =>
    `<li><span class="hl-icon">${h.i}</span>${h.t}</li>`
  ).join('');

  const ticketsHtml = d.tickets.length ? `
    <div class="db-col-title" style="margin-top:20px">🎫 Entradas</div>
    <div class="tk-list">
      ${d.tickets.map(t => `
        <div class="tk-item ${t.must ? 'must' : 'opt'}">
          <div class="tk-left">
            <span class="tk-name">${t.n}</span>
            <span class="tk-price">${t.p}</span>
            ${t.warn ? `<span class="tk-warn">⚠ ${t.warn}</span>` : ''}
          </div>
          ${t.url ? `<a href="${t.url}" target="_blank" class="tk-btn">Reservar ↗</a>` : ''}
        </div>
      `).join('')}
    </div>
  ` : '';

  const hotelsHtml = d.hotels.length ? `
    <div class="db-col-title">🛏 Dónde dormir</div>
    <div class="hotel-list">
      ${d.hotels.map((h, i) => `
        <div class="hotel-item ${i === 0 ? 'top-hotel' : ''}">
          <div class="hi-top">
            ${i === 0 ? '<span class="hi-tag">⭐ Recomendado</span>' : '<span class="hi-tag"></span>'}
            <span class="hi-price">${h.p}</span>
          </div>
          <div class="hi-name">★${h.s} · ${h.n}</div>
          <div class="hi-note">${h.t}</div>
          ${h.url ? `<a href="${h.url}" target="_blank" class="hi-link">Ver hotel →</a>` : ''}
        </div>
      `).join('')}
    </div>
  ` : '<p style="font-size:0.82rem;color:#6b7a8a;font-style:italic">Vuelo de regreso esta noche 🏠</p>';

  const restsHtml = d.rests.length ? `
    <div class="db-col-title" style="margin-top:20px">🍽 Dónde comer</div>
    <div class="rest-list">
      ${d.rests.map(r => `
        <div class="rest-item">
          <div class="ri-top">
            <span class="ri-name">${r.n}</span>
            <span class="ri-price">${r.p}</span>
          </div>
          <span class="ri-type">${r.ty}</span>
          <div class="ri-note">${r.note}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const mapPtsHtml = d.pts.map((p, i) =>
    `<div class="mp-item"><span class="mp-dot">${i+1}</span>${p.n}</div>`
  ).join('');

  const gamesBanner = d.games
    ? `<div class="games-banner">🏴󠁧󠁢󠁳󠁣󠁴󠁿 ${d.gamesLabel}</div>`
    : '';

  return `
    <div class="day-card" id="day-${d.day}">
      <div class="day-inner">
        <div class="dh" style="--dh-bg:${d.bg}">
          <div class="dh-num">${String(d.day).padStart(2,'0')}</div>
          <div class="dh-info">
            <div class="dh-date">${d.date}</div>
            <div class="dh-title">${d.title}</div>
            <div class="dh-sub">${d.sub}</div>
          </div>
          <div class="dh-stats">
            <span class="dh-stat">🚗 ${d.driving}</span>
            <span class="dh-stat">🛏 ${d.overnight}</span>
          </div>
        </div>
        ${gamesBanner}
        <div class="db">
          <div class="db-col">
            <div class="db-col-title">📍 Qué hacer</div>
            <ul class="hl-list">${highlightsHtml}</ul>
            ${ticketsHtml}
          </div>
          <div class="db-col mid">
            ${hotelsHtml}
            ${restsHtml}
          </div>
          <div class="db-col map-col">
            <div class="day-map" id="${mapId}"></div>
            <div class="map-pts">${mapPtsHtml}</div>
            <a href="${gmapsLink(d.pts)}" target="_blank" class="map-gmaps-btn">
              Abrir en Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ─── INIT ────────────────────────────────────────────────────
function init() {
  // Hero map
  initHeroMap();

  // Render all day cards
  const root = document.getElementById('days-root');
  root.innerHTML = DAYS.map(d => renderCard(d)).join('');

  // Intersection observer — animate cards in + init day maps lazily
  const initializedMaps = new Set();

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      card.classList.add('vis');

      // Init the day map once visible
      const dayNum = parseInt(card.id.replace('day-', ''));
      if (!initializedMaps.has(dayNum)) {
        initializedMaps.add(dayNum);
        const d = DAYS.find(x => x.day === dayNum);
        if (d) {
          setTimeout(() => {
            initDayMap(`dmap-${dayNum}`, d.mapCenter, d.mapZoom, d.pts);
          }, 100);
        }
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.day-card').forEach(c => obs.observe(c));
}

document.addEventListener('DOMContentLoaded', init);
