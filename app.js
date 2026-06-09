// Scotland Trip App - Dynamic Renderer

const GOOGLE_MAPS_BASE = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=";
const GOOGLE_MAPS_DIR = "https://www.google.com/maps/dir/";

function buildGoogleMapsStaticUrl(points) {
  if (!points || points.length === 0) return null;
  const markers = points.map(p => `markers=color:red|label:${points.indexOf(p)+1}|${p.lat},${p.lng}`).join('&');
  const center = points[0];
  return `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=10&size=600x300&${markers}&key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY`;
}

function buildOSMEmbed(points, center) {
  if (!points || points.length === 0) return null;
  const bbox_pad = 0.5;
  const lats = points.map(p => p.lat);
  const lngs = points.map(p => p.lng);
  const minLat = Math.min(...lats) - bbox_pad;
  const maxLat = Math.max(...lats) + bbox_pad;
  const minLng = Math.min(...lngs) - bbox_pad;
  const maxLng = Math.max(...lngs) + bbox_pad;
  
  const layerUrl = points.map(p => 
    `mlat=${p.lat}&mlon=${p.lng}`
  ).join('&');

  return `https://www.openstreetmap.org/export/embed.html?bbox=${minLng},${minLat},${maxLng},${maxLat}&layer=mapnik&${layerUrl}`;
}

function buildGoogleMapsLink(points) {
  if (!points || points.length === 0) return "#";
  const waypoints = points.map(p => `${p.lat},${p.lng}`).join('/');
  return `${GOOGLE_MAPS_DIR}${waypoints}`;
}

function renderDay(day) {
  const mapUrl = buildOSMEmbed(day.mapPoints, day.mapCenter);
  const gmapsLink = buildGoogleMapsLink(day.mapPoints);

  const ticketsHtml = day.tickets && day.tickets.length > 0 ? `
    <div class="day-block">
      <h4>🎫 Entradas necesarias</h4>
      <div class="tickets-list">
        ${day.tickets.map(t => `
          <div class="ticket-item ${t.must ? 'must' : 'optional'}">
            <div class="ticket-info">
              <span class="ticket-name">${t.name}</span>
              <span class="ticket-price">${t.price}</span>
              ${t.warning ? `<span class="ticket-warning">⚠ ${t.warning}</span>` : ''}
            </div>
            ${t.link ? `<a href="${t.link}" target="_blank" class="btn-ticket">${t.must ? 'Reservar ↗' : 'Ver más ↗'}</a>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const hotelsHtml = day.hotels && day.hotels.length > 0 ? `
    <div class="day-block">
      <h4>🛏 Dónde dormir</h4>
      <div class="hotels-list">
        ${day.hotels.map((h, i) => `
          <div class="hotel-item ${i === 0 ? 'recommended' : ''}">
            <div class="hotel-header">
              ${i === 0 ? '<span class="rec-badge">⭐ Recomendado</span>' : ''}
              <span class="hotel-stars">${'★'.repeat(h.stars)}${'☆'.repeat(5-h.stars)}</span>
              <span class="hotel-price">${h.price} / noche</span>
            </div>
            <h5 class="hotel-name">${h.name}</h5>
            <p class="hotel-note">${h.note}</p>
            ${h.link ? `<a href="${h.link}" target="_blank" class="btn-small">Ver hotel →</a>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const restaurantsHtml = day.restaurants && day.restaurants.length > 0 ? `
    <div class="day-block">
      <h4>🍽 Dónde comer</h4>
      <div class="restaurants-list">
        ${day.restaurants.map(r => `
          <div class="restaurant-item">
            <div class="rest-header">
              <span class="rest-name">${r.name}</span>
              <span class="rest-price">${r.price}</span>
            </div>
            <span class="rest-type">${r.type}</span>
            <p class="rest-note">${r.note}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const highlightsHtml = `
    <div class="day-block">
      <h4>📍 Qué hacer</h4>
      <ul class="highlights-list">
        ${day.highlights.map(h => `<li><span class="h-icon">${h.icon}</span>${h.text}</li>`).join('')}
      </ul>
    </div>
  `;

  return `
    <div class="day-card ${day.isHighlandGames ? 'games-day' : ''}" id="day-${day.day}">
      <div class="day-header" style="background: ${day.color}">
        <div class="day-meta">
          <span class="day-num">Día ${day.day}</span>
          <span class="day-date">${day.date}</span>
          ${day.isHighlandGames ? '<span class="games-flag">⚔ HIGHLAND GAMES</span>' : ''}
        </div>
        <h3 class="day-title">${day.title}</h3>
        <p class="day-subtitle">${day.subtitle}</p>
        <div class="day-stats">
          <span>🚗 ${day.driving}</span>
          <span>🛏 ${day.overnight}</span>
        </div>
      </div>
      <div class="day-body">
        <div class="day-content">
          ${highlightsHtml}
          ${ticketsHtml}
          ${hotelsHtml}
          ${restaurantsHtml}
        </div>
        <div class="day-map-col">
          <div class="day-map-wrap">
            <iframe 
              src="${mapUrl}"
              width="100%" 
              height="320" 
              style="border:0;border-radius:8px;" 
              allowfullscreen="" 
              loading="lazy"
              title="Mapa día ${day.day}">
            </iframe>
          </div>
          <div class="map-points-list">
            ${day.mapPoints.map((p, i) => `
              <div class="map-point">
                <span class="mp-num">${i+1}</span>
                <span class="mp-name">${p.name}</span>
              </div>
            `).join('')}
          </div>
          <a href="${gmapsLink}" target="_blank" class="btn-map">Abrir ruta en Google Maps ↗</a>
        </div>
      </div>
    </div>
  `;
}

function renderGeneralMap() {
  const allPoints = [
    { name: "Edimburgo", lat: 55.9533, lng: -3.1883 },
    { name: "Glasgow", lat: 55.8642, lng: -4.2518 },
    { name: "Loch Lomond", lat: 56.1026, lng: -4.6365 },
    { name: "Glencoe", lat: 56.6818, lng: -5.0200 },
    { name: "Fort William", lat: 56.8198, lng: -5.1052 },
    { name: "Inverness", lat: 57.4778, lng: -4.2247 },
    { name: "Speyside", lat: 57.4652, lng: -3.2260 },
    { name: "Isle of Skye", lat: 57.4127, lng: -6.1960 },
    { name: "Stirling", lat: 56.1165, lng: -3.9369 }
  ];
  
  const mapEl = document.getElementById('map-general');
  if (!mapEl) return;

  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=-7.2,55.5,-2.8,57.9&layer=mapnik&mlat=56.5&mlon=-4.5`;
  
  mapEl.innerHTML = `
    <iframe 
      src="${osmUrl}"
      width="100%" 
      height="400" 
      style="border:0;border-radius:12px;" 
      allowfullscreen="" 
      loading="lazy"
      title="Ruta completa por Escocia">
    </iframe>
    <div class="general-map-points">
      ${allPoints.map((p, i) => `
        <div class="gmp-item">
          <span class="gmp-n">${i+1}</span>
          <span>${p.name}</span>
        </div>
      `).join('')}
    </div>
    <a href="https://www.google.com/maps/dir/Edinburgh/Glasgow/Loch+Lomond/Glencoe/Fort+William/Inverness/Speyside/Isle+of+Skye/Stirling/Edinburgh" 
       target="_blank" class="btn-map" style="margin-top:12px;display:inline-block;">
      Ver ruta completa en Google Maps ↗
    </a>
  `;
}

function init() {
  const container = document.getElementById('days-container');
  if (!container) return;
  
  container.innerHTML = itinerary.map(day => renderDay(day)).join('');
  renderGeneralMap();
  
  // Smooth scroll for nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Intersection observer for card animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.day-card').forEach(card => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', init);
