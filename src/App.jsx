import { useState, useEffect, useRef } from 'react'
import { DAYS, ROUTE } from './data.js'

// ─── colours ─────────────────────────────────────────────────
const C = {
  gold:    '#c8902a',
  goldLt:  '#e8b84b',
  mist:    '#7fa8b8',
  stone:   'rgba(255,255,255,0.38)',
  faint:   'rgba(255,255,255,0.07)',
  faint2:  'rgba(255,255,255,0.05)',
  border:  '1px solid rgba(255,255,255,0.08)',
  borderG: '1px solid rgba(200,144,42,0.35)',
  bg0:     '#0d1117',
  bg1:     '#0a0e13',
  bg2:     '#111820',
  green:   '#7ecf9a',
}

// ─── Leaflet loader hook ──────────────────────────────────────
function useLeaflet() {
  const [ready, setReady] = useState(!!window.L)
  useEffect(() => {
    if (window.L) { setReady(true); return }
    const s = document.createElement('script')
    s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    s.onload = () => setReady(true)
    document.head.appendChild(s)
  }, [])
  return ready
}

// ─── Hero map ─────────────────────────────────────────────────
function HeroMap() {
  const ref = useRef(null)
  const mapRef = useRef(null)
  const L = useLeaflet()

  useEffect(() => {
    if (!L || !ref.current || mapRef.current) return
    const map = window.L.map(ref.current, {
      center: [56.8, -4.5], zoom: 6,
      zoomControl: false, scrollWheelZoom: false, attributionControl: false,
    })
    mapRef.current = map
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { subdomains: 'abcd', maxZoom: 19 }).addTo(map)
    window.L.polyline(ROUTE, { color: C.gold, weight: 2.5, opacity: 0.8, dashArray: '7 5' }).addTo(map)

    const stops = [
      [[55.9503,-3.1883],'Edimburgo'], [[55.8642,-4.2518],'Glasgow'],
      [[56.6818,-5.02],'Glencoe'],    [[56.8191,-5.1073],'Fort William'],
      [[57.4778,-4.2247],'Inverness'], [[57.4652,-3.226],'Speyside'],
      [[57.4127,-6.196],'Isle of Skye'], [[56.1232,-3.9467],'Stirling'],
    ]
    stops.forEach(([ll, name]) => {
      const icon = window.L.divIcon({
        html: `<div style="width:10px;height:10px;border-radius:50%;background:${C.mist};border:2px solid rgba(255,255,255,0.45)"></div>`,
        className: '', iconSize: [10,10], iconAnchor: [5,5],
      })
      window.L.marker(ll, { icon })
        .bindPopup(`<b style="color:${C.goldLt}">${name}</b>`, { closeButton: false })
        .addTo(map)
    })

    // Games pins pulse gold
    const gamesPins = [
      [55.8783,-4.3589, 'Commonwealth Games · Glasgow'],
      [57.059, -4.1381, 'Newtonmore Highland Games'],
      [56.1557,-3.944,  'Bridge of Allan Highland Games'],
    ]
    gamesPins.forEach(([lat, lng, label]) => {
      const icon = window.L.divIcon({
        html: `<div style="width:26px;height:26px;border-radius:50%;background:rgba(200,144,42,0.2);border:2px solid ${C.gold};display:flex;align-items:center;justify-content:center;font-size:12px;animation:pulse-gold 2s infinite">⚔</div>`,
        className: '', iconSize: [26,26], iconAnchor: [13,13],
      })
      window.L.marker([lat, lng], { icon })
        .bindPopup(`<b style="color:${C.goldLt}">${label}</b>`, { closeButton: false })
        .addTo(map)
    })
  }, [L])

  return <div ref={ref} style={{ width:'100%', height:'100%', background:'#1a2530' }} />
}

// ─── Day map ──────────────────────────────────────────────────
function DayMap({ day }) {
  const ref = useRef(null)
  const mapRef = useRef(null)
  const L = useLeaflet()

  useEffect(() => {
    if (!L || !ref.current || mapRef.current) return
    const map = window.L.map(ref.current, {
      center: day.mapCenter, zoom: day.mapZoom,
      zoomControl: false, scrollWheelZoom: false, attributionControl: false,
    })
    mapRef.current = map
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', { subdomains: 'abcd', maxZoom: 19 }).addTo(map)
    if (day.pts.length > 1) {
      window.L.polyline(day.pts.map(p => [p.lat, p.lng]), { color: C.gold, weight: 2, opacity: 0.7, dashArray: '5 4' }).addTo(map)
    }
    day.pts.forEach((p, i) => {
      const icon = window.L.divIcon({
        html: `<div style="width:22px;height:22px;border-radius:50%;background:#8b1a1a;border:2px solid rgba(255,255,255,0.35);color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;font-family:sans-serif">${i+1}</div>`,
        className: '', iconSize: [22,22], iconAnchor: [11,11],
      })
      window.L.marker([p.lat, p.lng], { icon })
        .bindPopup(`<b>${p.n}</b>`, { closeButton: false, maxWidth: 160 })
        .addTo(map)
    })
  }, [L])

  return <div ref={ref} style={{ width:'100%', height:'100%', background:'#1a2530' }} />
}

// ─── Stars ────────────────────────────────────────────────────
function Stars({ n }) {
  return <span style={{ color: C.gold, fontSize: 10, letterSpacing: 1 }}>{'★'.repeat(n)}{'☆'.repeat(5-n)}</span>
}

// ─── Games note — subtle inline banner ───────────────────────
function GamesNote({ note }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 10,
      padding: '11px 14px', borderRadius: 8,
      background: 'rgba(200,144,42,0.07)',
      border: '1px solid rgba(200,144,42,0.22)',
      marginBottom: 16,
    }}>
      <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{note.emoji}</span>
      <div>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>{note.text}</span>
        {note.url && (
          <a href={note.url} target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', marginTop: 6, fontSize: 11, color: C.gold, textDecoration: 'none', borderBottom: `1px solid rgba(200,144,42,0.4)` }}>
            {note.urlLabel}
          </a>
        )}
      </div>
    </div>
  )
}

// ─── Day card ─────────────────────────────────────────────────
function DayCard({ d, open, onToggle }) {
  const gmaps = `https://www.google.com/maps/dir/${d.pts.map(p => `${p.lat},${p.lng}`).join('/')}`

  return (
    <div style={{
      marginBottom: 12, borderRadius: 14, overflow: 'hidden',
      border: C.border, background: C.bg2,
      boxShadow: open ? '0 8px 40px rgba(0,0,0,0.45)' : 'none',
      transition: 'box-shadow 0.25s',
    }}>

      {/* Header */}
      <div onClick={onToggle} style={{
        display: 'flex', alignItems: 'center', gap: 18, padding: '18px 24px',
        cursor: 'pointer',
        background: `linear-gradient(105deg, ${d.accent}cc 0%, ${C.bg2} 100%)`,
      }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 46, fontWeight: 700, color: 'rgba(255,255,255,0.1)', lineHeight: 1, flexShrink: 0, minWidth: 50, userSelect: 'none' }}>
          {String(d.day).padStart(2,'0')}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.22em', color: C.gold, marginBottom: 3 }}>{d.date}</div>
          <div style={{ fontSize: 17, fontWeight: 500, color: '#fff', lineHeight: 1.2, marginBottom: 2 }}>{d.title}</div>
          <div style={{ fontSize: 12, color: C.stone, fontStyle: 'italic', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.sub}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, flexShrink: 0 }}>
          <Pill>🚗 {d.driving}</Pill>
          <Pill>🛏 {d.overnight}</Pill>
          {d.gamesNote && <Pill gold>⚔ Highland Games</Pill>}
        </div>
        <span style={{ fontSize: 18, color: C.stone, transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.22s', marginLeft: 4, flexShrink: 0 }}>›</span>
      </div>

      {/* Body */}
      {open && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 290px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>

          {/* Col 1 */}
          <Col>
            <Label>Qué hacer</Label>
            {d.gamesNote && <GamesNote note={d.gamesNote} />}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {d.highlights.map((h, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 6, fontSize: 13, color: '#b0c4d0', lineHeight: 1.5 }}>
                  <span style={{ fontSize: 14 }}>{h.i}</span><span>{h.t}</span>
                </li>
              ))}
            </ul>

            {d.tickets.length > 0 && <>
              <Label>Entradas</Label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {d.tickets.map((t, i) => (
                  <div key={i} style={{
                    padding: '9px 12px', borderRadius: 7,
                    background: t.must ? 'rgba(139,26,26,0.12)' : 'rgba(31,60,80,0.18)',
                    border: `1px solid ${t.must ? 'rgba(139,26,26,0.28)' : 'rgba(127,168,184,0.18)'}`,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8,
                  }}>
                    <div>
                      <div style={{ fontSize: 12, color: '#dce8f0', marginBottom: 1 }}>{t.n}</div>
                      <div style={{ fontSize: 11, color: C.stone }}>{t.p}</div>
                      {t.warn && <div style={{ fontSize: 10, color: '#e8a0a0', fontStyle: 'italic', marginTop: 2 }}>⚠ {t.warn}</div>}
                    </div>
                    {t.url && <a href={t.url} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: C.gold, border: '1px solid rgba(200,144,42,0.35)', padding: '3px 9px', borderRadius: 4, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>Reservar ↗</a>}
                  </div>
                ))}
              </div>
            </>}
          </Col>

          {/* Col 2 */}
          <Col border>
            {d.hotels.length > 0 && <>
              <Label>Dónde dormir</Label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
                {d.hotels.map((h, i) => (
                  <div key={i} style={{
                    padding: '10px 12px', borderRadius: 8,
                    background: h.top ? 'rgba(200,144,42,0.06)' : C.faint2,
                    border: h.top ? C.borderG : C.border,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                      {h.top ? <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.gold }}>⭐ Recomendado</span> : <span/>}
                      <span style={{ fontSize: 12, color: C.green, fontWeight: 500 }}>{h.p}/n</span>
                    </div>
                    <div style={{ fontSize: 13, color: '#dce8f0', fontWeight: 500, marginBottom: 2 }}><Stars n={h.s} /> {h.n}</div>
                    <div style={{ fontSize: 11, color: C.stone, lineHeight: 1.45, marginBottom: h.url ? 5 : 0 }}>{h.note}</div>
                    {h.url && <a href={h.url} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: C.mist, textDecoration: 'underline' }}>Ver hotel →</a>}
                  </div>
                ))}
              </div>
            </>}
            {d.hotels.length === 0 && <div style={{ fontSize: 12, color: C.stone, fontStyle: 'italic', marginBottom: 20 }}>Vuelo de regreso esta noche 🏠</div>}

            <Label>Dónde comer</Label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {d.rests.map((r, i) => (
                <div key={i} style={{ padding: '9px 12px', borderRadius: 7, background: C.faint2, border: C.border }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                    <span style={{ fontSize: 13, color: '#dce8f0', fontWeight: 500 }}>{r.n}</span>
                    <span style={{ fontSize: 12, color: C.gold, fontWeight: 500 }}>{r.p}</span>
                  </div>
                  <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.09em', color: C.stone, marginBottom: 2 }}>{r.ty}</div>
                  <div style={{ fontSize: 11, color: C.stone, lineHeight: 1.4 }}>{r.note}</div>
                </div>
              ))}
            </div>
          </Col>

          {/* Col 3 — map */}
          <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ flex: 1, minHeight: 260 }}>
              <DayMap day={d} />
            </div>
            <div style={{ padding: '10px 13px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: 5 }}>
              {d.pts.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', fontSize: 11, color: C.stone }}>
                  <span style={{ width: 17, height: 17, borderRadius: '50%', background: '#8b1a1a', color: '#fff', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i+1}</span>
                  {p.n}
                </div>
              ))}
            </div>
            <a href={gmaps} target="_blank" rel="noreferrer"
              style={{ display: 'block', textAlign: 'center', padding: '10px', fontSize: 11, color: C.stone, textDecoration: 'none', borderTop: '1px solid rgba(255,255,255,0.07)', letterSpacing: '0.06em', transition: 'color 0.18s' }}
              onMouseOver={e => e.currentTarget.style.color = C.gold}
              onMouseOut={e => e.currentTarget.style.color = C.stone}>
              Abrir en Google Maps ↗
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Car section ──────────────────────────────────────────────
function CarSection() {
  const cars = [
    { name: 'Enterprise Rent-A-Car', price: '~60–80 €/día', desc: 'Mejor valorado en EDI. Solicita SUV automático (Skoda Karoq o similar). Seguro completo CDW.', url: 'https://www.enterprise.co.uk', top: true },
    { name: 'Arnold Clark', price: '~50–70 €/día', desc: 'Empresa escocesa local, oficina en el aeropuerto. Excelente relación calidad-precio.', url: 'https://www.arnoldclarkrental.com', top: false },
    { name: 'Hertz / Avis', price: '~70–90 €/día', desc: 'Opción internacional para fidelización de puntos. Siempre disponibles en EDI.', url: 'https://www.hertz.co.uk', top: false },
  ]
  return (
    <div style={{ maxWidth: 1140, margin: '0 auto', padding: '48px 24px' }}>
      <SectionTitle eyebrow="Movilidad" title="🚗 Coche de alquiler" sub="Recoge en EDI el 26 julio · Devuelve el 5 agosto antes de las 19:00" />
      <div style={{ padding: '13px 17px', borderRadius: 9, background: 'rgba(200,144,42,0.08)', border: '1px solid rgba(200,144,42,0.22)', fontSize: 13, color: '#f0e0c0', marginBottom: 24, lineHeight: 1.6 }}>
        ⚠ En Escocia se conduce <strong>por la izquierda</strong>. Solicita automático si no estás habituado. Para las Highlands, un SUV compacto es ideal para pistas de tierra.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 18 }}>
        {cars.map((c, i) => (
          <div key={i} style={{ padding: 22, borderRadius: 12, border: c.top ? C.borderG : C.border, background: c.top ? 'rgba(200,144,42,0.06)' : C.faint2, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {c.top && <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.gold }}>⭐ Recomendado</span>}
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#fff' }}>{c.name}</div>
            <div style={{ fontSize: 15, color: C.green, fontWeight: 500 }}>{c.price}</div>
            <div style={{ fontSize: 12, color: C.stone, lineHeight: 1.55 }}>{c.desc}</div>
            <a href={c.url} target="_blank" rel="noreferrer" style={{ alignSelf: 'flex-start', marginTop: 4, fontSize: 11, color: C.gold, border: '1px solid rgba(200,144,42,0.38)', padding: '4px 11px', borderRadius: 4, textDecoration: 'none' }}>Ver ↗</a>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12, color: C.stone, padding: '11px 15px', borderRadius: 7, background: C.faint2, border: C.border, lineHeight: 1.6 }}>
        💡 <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Consejo:</strong> Reserva con meses de antelación. El seguro "waiver completo" (CDW + TP + personal) vale la pena. Política tanque lleno → tanque lleno.
      </div>
    </div>
  )
}

// ─── Shared primitives ────────────────────────────────────────
function Pill({ children, gold }) {
  return (
    <span style={{ fontSize: 10, color: gold ? C.goldLt : C.stone, background: gold ? 'rgba(200,144,42,0.1)' : 'rgba(255,255,255,0.05)', padding: '3px 9px', borderRadius: 11, border: `1px solid ${gold ? 'rgba(200,144,42,0.3)' : 'rgba(255,255,255,0.08)'}` }}>
      {children}
    </span>
  )
}

function Col({ children, border }) {
  return (
    <div style={{ padding: '22px 22px 22px 24px', borderRight: border ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
      {children}
    </div>
  )
}

function Label({ children }) {
  return <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.24em', color: C.gold, marginBottom: 11, marginTop: 2 }}>{children}</div>
}

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.22em', color: C.gold, marginBottom: 8 }}>{eyebrow}</div>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: 26, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{title}</div>
      {sub && <div style={{ fontSize: 13, color: C.stone }}>{sub}</div>}
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────
export default function App() {
  const [openDay, setOpenDay] = useState(1)
  const [tab, setTab] = useState('itinerario')

  return (
    <div style={{ background: C.bg0, minHeight: '100vh', color: '#fff' }}>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', background: 'rgba(13,17,23,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span style={{ fontFamily: 'Georgia, serif', fontSize: 15, letterSpacing: '0.04em' }}>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia 2026</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {[['itinerario','Itinerario'], ['coche','Coche']].map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} style={{ padding: '5px 15px', borderRadius: 7, border: 'none', cursor: 'pointer', fontSize: 12, fontFamily: 'inherit', background: tab === id ? 'rgba(200,144,42,0.14)' : 'transparent', color: tab === id ? C.gold : C.stone, transition: 'all 0.18s' }}>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 50px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 52px 60px 44px', background: 'linear-gradient(140deg,#0d2018 0%,#0d1117 100%)' }}>
          <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.28em', color: C.gold, marginBottom: 20 }}>26 julio — 5 agosto 2026</div>
          <div style={{ fontFamily: 'Georgia, serif', lineHeight: 0.88, marginBottom: 12 }}>
            <div style={{ fontSize: 'clamp(52px,6vw,80px)', fontWeight: 600, color: '#fff' }}>Escocia</div>
            <div style={{ fontSize: 'clamp(28px,3.2vw,44px)', fontWeight: 300, fontStyle: 'italic', color: C.mist, marginTop: 6 }}>The Wild North</div>
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.09)', borderBottom: '1px solid rgba(255,255,255,0.09)', padding: '18px 0', margin: '28px 0', gap: 0 }}>
            {[['10','días'],['~950','km'],['3','Highland Games']].map(([n,l],i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingLeft: i === 0 ? 0 : 18, borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.09)' : 'none' }}>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: 34, fontWeight: 600, color: '#fff', lineHeight: 1 }}>{n}</span>
                <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.16em', color: C.stone, marginTop: 3 }}>{l}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
            {[
              ['✈ EDI · 09:30', 'rgba(200,144,42,0.14)', C.goldLt],
              ['🏅 Commonwealth Games', 'rgba(139,26,26,0.14)', '#e8a0a0'],
              ['⚔ Highland Games en ruta', 'rgba(255,255,255,0.04)', C.stone],
            ].map(([txt,bg,col],i) => (
              <span key={i} style={{ fontSize: 11, padding: '5px 13px', borderRadius: 20, background: bg, color: col, border: `1px solid ${col}35` }}>{txt}</span>
            ))}
          </div>
          <button onClick={() => setTab('itinerario')} style={{ alignSelf: 'flex-start', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fff', background: C.gold, padding: '12px 26px', borderRadius: 5, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500, transition: 'background 0.2s' }}
            onMouseOver={e => e.currentTarget.style.background = C.goldLt}
            onMouseOut={e => e.currentTarget.style.background = C.gold}>
            Ver el viaje ↓
          </button>
        </div>

        {/* Hero map */}
        <div style={{ borderLeft: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}><HeroMap /></div>
          <div style={{ display: 'flex', gap: 18, padding: '9px 18px', background: 'rgba(13,17,23,0.7)', borderTop: '1px solid rgba(255,255,255,0.07)', fontSize: 10, color: C.stone }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: C.mist, display: 'inline-block' }} />Ruta del viaje</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: C.gold, display: 'inline-block' }} />Highland Games</span>
          </div>
        </div>
      </div>

      {/* Strip */}
      <div style={{ background: C.bg1, borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '11px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 0, fontSize: 11, color: C.stone, letterSpacing: '0.06em' }}>
        {['🚗 Coche en EDI · día 1','🏔 Ben Nevis · Glencoe · Skye','🥃 Speyside Whisky Trail','🚂 Jacobite Steam Train','⚔ Highland Games en ruta'].map((s,i,arr) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ padding: '0 14px' }}>{s}</span>
            {i < arr.length-1 && <span style={{ opacity: 0.25 }}>·</span>}
          </span>
        ))}
      </div>

      {/* Content */}
      {tab === 'itinerario' && (
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '40px 24px' }}>
          <SectionTitle eyebrow="Planificación diaria" title="Itinerario completo" sub="Haz clic en cada día para ver el mapa, hoteles, restaurantes y entradas" />
          {DAYS.map(d => (
            <DayCard key={d.day} d={d} open={openDay === d.day} onToggle={() => setOpenDay(openDay === d.day ? null : d.day)} />
          ))}
        </div>
      )}

      {tab === 'coche' && <CarSection />}

      <div style={{ textAlign: 'center', padding: '22px', fontSize: 11, color: 'rgba(255,255,255,0.18)', borderTop: '1px solid rgba(255,255,255,0.06)', background: C.bg1 }}>
        🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia 2026 · Pablo & Partner · ¡Buen viaje!
      </div>
    </div>
  )
}
