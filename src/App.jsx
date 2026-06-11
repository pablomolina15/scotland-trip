import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importa los estilos aquí
import { useState, useEffect, useRef } from 'react'
import { DAYS, ROUTE, INITIAL_EXPENSES } from './data.js'

const C = {
  gold:'#c8902a', goldLt:'#e8b84b', mist:'#7fa8b8',
  stone:'rgba(255,255,255,0.38)', faint:'rgba(255,255,255,0.07)',
  faint2:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
  borderG:'1px solid rgba(200,144,42,0.35)', bg0:'#0d1117', bg1:'#0a0e13',
  bg2:'#111820', green:'#7ecf9a', red:'#e87a7a',
}

// function useLeaflet() {
//   const [ready, setReady] = useState(!!window.L)
//   useEffect(() => {
//     if (window.L) { setReady(true); return }
//     const s = document.createElement('script')
//     s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
//     s.onload = () => setReady(true)
//     document.head.appendChild(s)
//   }, [])
//   return ready
// }

// function HeroMap() {
//   const ref = useRef(null); const mapRef = useRef(null); const L = useLeaflet()
//   useEffect(() => {
//     if (!L || !ref.current || mapRef.current) return
//     const map = window.L.map(ref.current, { center:[56.8,-4.5], zoom:6, zoomControl:false, scrollWheelZoom:false, attributionControl:false })
//     mapRef.current = map
//     window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { subdomains:'abcd', maxZoom:19 }).addTo(map)
//     window.L.polyline(ROUTE, { color:C.gold, weight:2.5, opacity:0.8, dashArray:'7 5' }).addTo(map)
//     const stops = [[[55.9503,-3.1883],'Edimburgo'],[[55.8642,-4.2518],'Glasgow'],[[56.6818,-5.02],'Glencoe'],[[56.8191,-5.1073],'Fort William'],[[57.4778,-4.2247],'Inverness'],[[57.4652,-3.226],'Speyside'],[[57.4127,-6.196],'Isle of Skye'],[[56.1232,-3.9467],'Stirling']]
//     stops.forEach(([ll,name]) => {
//       const icon = window.L.divIcon({ html:`<div style="width:10px;height:10px;border-radius:50%;background:${C.mist};border:2px solid rgba(255,255,255,0.45)"></div>`, className:'', iconSize:[10,10], iconAnchor:[5,5] })
//       window.L.marker(ll,{icon}).bindPopup(`<b style="color:${C.goldLt}">${name}</b>`,{closeButton:false}).addTo(map)
//     })
//     [[55.8783,-4.3589,'Commonwealth Games · Glasgow'],[57.059,-4.1381,'Newtonmore Highland Games'],[56.1557,-3.944,'Bridge of Allan Highland Games']].forEach(([lat,lng,label]) => {
//       const icon = window.L.divIcon({ html:`<div style="width:26px;height:26px;border-radius:50%;background:rgba(200,144,42,0.2);border:2px solid ${C.gold};display:flex;align-items:center;justify-content:center;font-size:12px;animation:pulse-gold 2s infinite">⚔</div>`, className:'', iconSize:[26,26], iconAnchor:[13,13] })
//       window.L.marker([lat,lng],{icon}).bindPopup(`<b style="color:${C.goldLt}">${label}</b>`,{closeButton:false}).addTo(map)
//     })
//   }, [L])
//   return <div ref={ref} style={{ width:'100%', height:'100%', background:'#1a2530' }} />
// }

// function DayMap({ day }) {
//   const ref = useRef(null); const mapRef = useRef(null); const L = useLeaflet()
//   useEffect(() => {
//     if (!L || !ref.current || mapRef.current) return
//     const map = window.L.map(ref.current, { center:day.mapCenter, zoom:day.mapZoom, zoomControl:false, scrollWheelZoom:false, attributionControl:false })
//     mapRef.current = map
//     window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', { subdomains:'abcd', maxZoom:19 }).addTo(map)
//     if (day.pts.length > 1) window.L.polyline(day.pts.map(p=>[p.lat,p.lng]),{ color:C.gold, weight:2, opacity:0.7, dashArray:'5 4' }).addTo(map)
//     day.pts.forEach((p,i) => {
//       const icon = window.L.divIcon({ html:`<div style="width:22px;height:22px;border-radius:50%;background:#8b1a1a;border:2px solid rgba(255,255,255,0.35);color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;font-family:sans-serif">${i+1}</div>`, className:'', iconSize:[22,22], iconAnchor:[11,11] })
//       window.L.marker([p.lat,p.lng],{icon}).bindPopup(`<b>${p.n}</b>`,{closeButton:false,maxWidth:160}).addTo(map)
//     })
//   }, [L])
//   return <div ref={ref} style={{ width:'100%', height:'100%', background:'#1a2530' }} />
// }

// 1. Reemplaza tu HeroMap actual por este:
function HeroMap() {
  const ref = useRef(null); 
  const mapRef = useRef(null); 
  
  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, { center:[56.8,-4.5], zoom:6, zoomControl:false, scrollWheelZoom:false, attributionControl:false });
    mapRef.current = map;
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { subdomains:'abcd', maxZoom:19 }).addTo(map);
    L.polyline(ROUTE, { color:C.gold, weight:2.5, opacity:0.8, dashArray:'7 5' }).addTo(map);
    
    const stops = [[[55.9503,-3.1883],'Edimburgo'],[[55.8642,-4.2518],'Glasgow'],[[56.6818,-5.02],'Glencoe'],[[56.8191,-5.1073],'Fort William'],[[57.4778,-4.2247],'Inverness'],[[57.4652,-3.226],'Speyside'],[[57.4127,-6.196],'Isle of Skye'],[[56.1232,-3.9467],'Stirling']];
    stops.forEach(([ll,name]) => {
      const icon = L.divIcon({ html:`<div style="width:10px;height:10px;border-radius:50%;background:${C.mist};border:2px solid rgba(255,255,255,0.45)"></div>`, className:'', iconSize:[10,10], iconAnchor:[5,5] });
      L.marker(ll,{icon}).bindPopup(`<b style="color:${C.goldLt}">${name}</b>`,{closeButton:false}).addTo(map);
    });
    
    [[55.8783,-4.3589,'Commonwealth Games · Glasgow'],[57.059,-4.1381,'Newtonmore Highland Games'],[56.1557,-3.944,'Bridge of Allan Highland Games']].forEach(([lat,lng,label]) => {
      const icon = L.divIcon({ html:`<div style="width:26px;height:26px;border-radius:50%;background:rgba(200,144,42,0.2);border:2px solid ${C.gold};display:flex;align-items:center;justify-content:center;font-size:12px;animation:pulse-gold 2s infinite">⚔</div>`, className:'', iconSize:[26,26], iconAnchor:[13,13] });
      L.marker([lat,lng],{icon}).bindPopup(`<b style="color:${C.goldLt}">${label}</b>`,{closeButton:false}).addTo(map);
    });
  }, []);
  
  return <div ref={ref} style={{ width:'100%', height:'100%', background:'#1a2530' }} />;
}

// 2. Reemplaza tu DayMap actual por este:
function DayMap({ day }) {
  const ref = useRef(null); 
  const mapRef = useRef(null); 
  
  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, { center:day.mapCenter, zoom:day.mapZoom, zoomControl:false, scrollWheelZoom:false, attributionControl:false });
    mapRef.current = map;
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', { subdomains:'abcd', maxZoom:19 }).addTo(map);
    if (day.pts.length > 1) L.polyline(day.pts.map(p=>[p.lat,p.lng]),{ color:C.gold, weight:2, opacity:0.7, dashArray:'5 4' }).addTo(map);
    
    day.pts.forEach((p,i) => {
      const icon = L.divIcon({ html:`<div style="width:22px;height:22px;border-radius:50%;background:#8b1a1a;border:2px solid rgba(255,255,255,0.35);color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;font-family:sans-serif">${i+1}</div>`, className:'', iconSize:[22,22], iconAnchor:[11,11] });
      L.marker([p.lat,p.lng],{icon}).bindPopup(`<b>${p.n}</b>`,{closeButton:false,maxWidth:160}).addTo(map);
    });
  }, [day]);
  
  return <div ref={ref} style={{ width:'100%', height:'100%', background:'#1a2530' }} />;
}

function GMStars({ rating }) {
  if (!rating) return null
  const full = Math.floor(rating), half = rating % 1 >= 0.4
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:2 }}>
      {Array.from({length:5},(_,i) => (
        <span key={i} style={{ color:i<full?'#fbbc04':i===full&&half?'#fbbc04':'rgba(255,255,255,0.18)', fontSize:11 }}>
          {i<full?'★':i===full&&half?'½':'☆'}
        </span>
      ))}
      <span style={{ color:'rgba(255,255,255,0.35)', fontSize:10, marginLeft:2 }}>{rating} Google</span>
    </span>
  )
}

function HStars({ n }) {
  return <span style={{ color:C.gold, fontSize:10, letterSpacing:1 }}>{'★'.repeat(n)}{'☆'.repeat(5-n)}</span>
}

function GamesNote({ note }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap:10, padding:'10px 13px', borderRadius:8, background:'rgba(200,144,42,0.07)', border:'1px solid rgba(200,144,42,0.22)', marginBottom:14 }}>
      <span style={{ fontSize:15, flexShrink:0, marginTop:1 }}>{note.emoji}</span>
      <div>
        <span style={{ fontSize:12, color:'rgba(255,255,255,0.58)', lineHeight:1.55 }}>{note.text}</span>
        {note.url && <a href={note.url} target="_blank" rel="noreferrer" style={{ display:'inline-block', marginTop:5, fontSize:11, color:C.gold, textDecoration:'none', borderBottom:`1px solid rgba(200,144,42,0.4)` }}>{note.urlLabel}</a>}
      </div>
    </div>
  )
}

function CarNote({ note }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap:10, padding:'10px 13px', borderRadius:8, background:'rgba(127,168,184,0.07)', border:'1px solid rgba(127,168,184,0.22)', marginBottom:14 }}>
      <span style={{ fontSize:15, flexShrink:0, marginTop:1 }}>{note.emoji}</span>
      <span style={{ fontSize:12, color:'rgba(255,255,255,0.58)', lineHeight:1.55 }}>{note.text}</span>
    </div>
  )
}

function Pill({ children, gold, blue }) {
  const bg=gold?'rgba(200,144,42,0.1)':blue?'rgba(127,168,184,0.1)':'rgba(255,255,255,0.05)'
  const col=gold?C.goldLt:blue?C.mist:C.stone
  const brd=gold?'rgba(200,144,42,0.3)':blue?'rgba(127,168,184,0.3)':'rgba(255,255,255,0.08)'
  return <span style={{ fontSize:10, color:col, background:bg, padding:'3px 9px', borderRadius:11, border:`1px solid ${brd}` }}>{children}</span>
}

function Col({ children, border }) {
  return <div className={border?'day-col-2':''} style={{ padding:'20px 20px 20px 22px', borderRight:border?'1px solid rgba(255,255,255,0.07)':'none' }}>{children}</div>
}

function Label({ children }) {
  return <div style={{ fontSize:9, textTransform:'uppercase', letterSpacing:'0.24em', color:C.gold, marginBottom:10, marginTop:2 }}>{children}</div>
}

function DayCard({ d, open, onToggle }) {
  const gmaps = `https://www.google.com/maps/dir/${d.pts.map(p=>`${p.lat},${p.lng}`).join('/')}`
  return (
    <div style={{ marginBottom:10, borderRadius:14, overflow:'hidden', border:C.border, background:C.bg2, boxShadow:open?'0 8px 40px rgba(0,0,0,0.45)':'none', transition:'box-shadow 0.25s' }}>
      <div className="day-header" onClick={onToggle} style={{ display:'flex', alignItems:'center', gap:16, padding:'16px 20px', cursor:'pointer', background:`linear-gradient(105deg,${d.accent}cc 0%,${C.bg2} 100%)` }}>
        <div className="day-num" style={{ fontFamily:'Georgia,serif', fontSize:42, fontWeight:700, color:'rgba(255,255,255,0.1)', lineHeight:1, flexShrink:0, minWidth:46, userSelect:'none' }}>{String(d.day).padStart(2,'0')}</div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:C.gold, marginBottom:2 }}>{d.date}</div>
          <div style={{ fontSize:16, fontWeight:500, color:'#fff', lineHeight:1.2, marginBottom:1 }}>{d.title}</div>
          <div style={{ fontSize:11, color:C.stone, fontStyle:'italic', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{d.sub}</div>
        </div>
        <div className="dh-stats" style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:4, flexShrink:0 }}>
          <Pill>🚗 {d.driving}</Pill>
          <Pill>🛏 {d.overnight}</Pill>
          {d.gamesNote && <Pill gold>⚔ Highland Games</Pill>}
          {d.carNote && <Pill blue>🚗 Info coche</Pill>}
        </div>
        <span style={{ fontSize:18, color:C.stone, transform:open?'rotate(90deg)':'none', transition:'transform 0.22s', marginLeft:4, flexShrink:0 }}>›</span>
      </div>

      {open && (
        <div className="day-body-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 280px', borderTop:'1px solid rgba(255,255,255,0.07)' }}>
          <Col>
            <Label>Qué hacer</Label>
            {d.carNote && <CarNote note={d.carNote} />}
            {d.gamesNote && <GamesNote note={d.gamesNote} />}
            <ul style={{ listStyle:'none', padding:0, margin:'0 0 18px', display:'flex', flexDirection:'column', gap:8 }}>
              {d.highlights.map((h,i) => (
                <li key={i} style={{ display:'grid', gridTemplateColumns:'24px 1fr', gap:6, fontSize:13, color:'#b0c4d0', lineHeight:1.5 }}>
                  <span style={{ fontSize:14 }}>{h.i}</span><span>{h.t}</span>
                </li>
              ))}
            </ul>
            {d.tickets.length > 0 && <>
              <Label>Entradas</Label>
              <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                {d.tickets.map((t,i) => (
                  <div key={i} style={{ padding:'9px 11px', borderRadius:7, background:t.must?'rgba(139,26,26,0.12)':'rgba(31,60,80,0.18)', border:`1px solid ${t.must?'rgba(139,26,26,0.28)':'rgba(127,168,184,0.18)'}`, display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:8 }}>
                    <div>
                      <div style={{ fontSize:12, color:'#dce8f0', marginBottom:1 }}>{t.n}</div>
                      <div style={{ fontSize:11, color:C.stone }}>{t.p}</div>
                      {t.warn && <div style={{ fontSize:10, color:'#e8a0a0', fontStyle:'italic', marginTop:2 }}>⚠ {t.warn}</div>}
                    </div>
                    {t.url && <a href={t.url} target="_blank" rel="noreferrer" style={{ fontSize:11, color:C.gold, border:'1px solid rgba(200,144,42,0.35)', padding:'3px 9px', borderRadius:4, textDecoration:'none', whiteSpace:'nowrap', flexShrink:0 }}>Reservar ↗</a>}
                  </div>
                ))}
              </div>
            </>}
          </Col>

          <Col border>
            {d.hotels.length > 0 && <>
              <Label>Dónde dormir — precios jul/ago 2026</Label>
              <div style={{ display:'flex', flexDirection:'column', gap:7, marginBottom:18 }}>
                {d.hotels.map((h,i) => (
                  <div key={i} style={{ padding:'10px 12px', borderRadius:8, background:h.top?'rgba(200,144,42,0.06)':C.faint2, border:h.top?C.borderG:C.border }}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:2 }}>
                      {h.top?<span style={{ fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:C.gold }}>⭐ Recomendado</span>:<span/>}
                      <span style={{ fontSize:12, color:C.green, fontWeight:500 }}>{h.p}/n</span>
                    </div>
                    <div style={{ fontSize:13, color:'#dce8f0', fontWeight:500, marginBottom:2 }}><HStars n={h.s} /> {h.n}</div>
                    <div style={{ fontSize:11, color:C.stone, lineHeight:1.45, marginBottom:h.url?5:0 }}>{h.note}</div>
                    {h.url && <a href={h.url} target="_blank" rel="noreferrer" style={{ fontSize:11, color:C.mist, textDecoration:'underline' }}>Ver hotel →</a>}
                  </div>
                ))}
              </div>
            </>}
            {d.hotels.length === 0 && <div style={{ fontSize:12, color:C.stone, fontStyle:'italic', marginBottom:18 }}>Vuelo de regreso esta noche 🏠</div>}
            <Label>Dónde comer</Label>
            <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
              {d.rests.map((r,i) => (
                <div key={i} style={{ padding:'9px 11px', borderRadius:7, background:C.faint2, border:C.border }}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:2 }}>
                    <span style={{ fontSize:13, color:'#dce8f0', fontWeight:500 }}>{r.n}</span>
                    <span style={{ fontSize:12, color:C.gold, fontWeight:500 }}>{r.p}</span>
                  </div>
                  <div style={{ fontSize:10, textTransform:'uppercase', letterSpacing:'0.09em', color:C.stone, marginBottom:3 }}>{r.ty}</div>
                  <GMStars rating={r.gm} />
                  <div style={{ fontSize:11, color:C.stone, lineHeight:1.4, marginTop:3 }}>{r.note}</div>
                </div>
              ))}
            </div>
          </Col>

          <div className="day-map-col" style={{ display:'flex', flexDirection:'column', borderLeft:'1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ flex:1, minHeight:260 }}><DayMap day={d} /></div>
            <div style={{ padding:'10px 12px', borderTop:'1px solid rgba(255,255,255,0.07)', display:'flex', flexDirection:'column', gap:5 }}>
              {d.pts.map((p,i) => (
                <div key={i} style={{ display:'flex', gap:7, alignItems:'flex-start', fontSize:11, color:C.stone }}>
                  <span style={{ width:17, height:17, borderRadius:'50%', background:'#8b1a1a', color:'#fff', fontSize:9, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>{i+1}</span>
                  {p.n}
                </div>
              ))}
            </div>
            <a href={gmaps} target="_blank" rel="noreferrer"
              style={{ display:'block', textAlign:'center', padding:'10px', fontSize:11, color:C.stone, textDecoration:'none', borderTop:'1px solid rgba(255,255,255,0.07)', letterSpacing:'0.06em', transition:'color 0.18s' }}
              onMouseOver={e=>e.currentTarget.style.color=C.gold} onMouseOut={e=>e.currentTarget.style.color=C.stone}>
              Abrir en Google Maps ↗
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Expenses ────────────────────────────────────────────────
const CATEGORIES = ['✈ Transporte','🏨 Alojamiento','🍽 Comida','🎫 Entradas','📋 Documentación','🚗 Coche alquiler','🛍 Otros']

function ExpensesPanel() {
  const [expenses, setExpenses] = useState(() => {
    try { const s = localStorage.getItem('scotland26_exp'); return s ? JSON.parse(s) : INITIAL_EXPENSES } catch { return INITIAL_EXPENSES }
  })
  const [form, setForm] = useState({ concept:'', total:'', category:CATEGORIES[0], date:'' })
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    try { localStorage.setItem('scotland26_exp', JSON.stringify(expenses)) } catch {}
  }, [expenses])

  const add = () => {
    if (!form.concept || !form.total) return
    const total = parseFloat(form.total)
    setExpenses(p => [...p, { id:Date.now(), concept:form.concept, total, perPerson:total/2, category:form.category, date:form.date||'—' }])
    setForm({ concept:'', total:'', category:CATEGORIES[0], date:'' })
    setShowForm(false)
  }
  const remove = id => setExpenses(p => p.filter(e=>e.id!==id))
  const totalAll = expenses.reduce((a,e)=>a+e.total,0)
  const byCategory = CATEGORIES.map(cat=>({ cat, total:expenses.filter(e=>e.category===cat).reduce((a,e)=>a+e.total,0) })).filter(c=>c.total>0)

  return (
    <div style={{ maxWidth:1140, margin:'0 auto', padding:'40px 20px' }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:24, flexWrap:'wrap', gap:14 }}>
        <div>
          <Label>Presupuesto del viaje</Label>
          <div style={{ fontFamily:'Georgia,serif', fontSize:24, fontWeight:600, color:'#fff', marginBottom:3 }}>💰 Gastos — Bea y Pablo</div>
          <div style={{ fontSize:12, color:C.stone }}>Escocia 2026 · Ve añadiendo gastos a medida que los confirmes</div>
        </div>
        <div style={{ display:'flex', gap:16 }}>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:10, color:C.stone, textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:2 }}>Total viaje</div>
            <div style={{ fontFamily:'Georgia,serif', fontSize:26, color:C.goldLt, fontWeight:600 }}>{totalAll.toFixed(2)} €</div>
          </div>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:10, color:C.stone, textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:2 }}>Por persona</div>
            <div style={{ fontFamily:'Georgia,serif', fontSize:26, color:C.green, fontWeight:600 }}>{(totalAll/2).toFixed(2)} €</div>
          </div>
        </div>
      </div>

      {byCategory.length > 0 && (
        <div className="cat-totals" style={{ display:'flex', flexWrap:'wrap', gap:7, marginBottom:20 }}>
          {byCategory.map(c=>(
            <div key={c.cat} style={{ padding:'5px 13px', borderRadius:20, background:C.faint2, border:C.border, fontSize:11, color:'rgba(255,255,255,0.5)' }}>
              {c.cat} · <strong style={{ color:'#fff' }}>{c.total.toFixed(2)} €</strong>
            </div>
          ))}
        </div>
      )}

      <div style={{ display:'flex', flexDirection:'column', gap:5, marginBottom:14 }}>
        {expenses.map(e=>(
          <div key={e.id} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:9, background:C.bg2, border:C.border }}>
            <div style={{ fontSize:11, color:C.stone, minWidth:88, flexShrink:0 }}>{e.category}</div>
            <div style={{ flex:1, fontSize:13, color:'#dce8f0' }}>{e.concept}</div>
            <div style={{ fontSize:11, color:C.stone, minWidth:58, textAlign:'right' }}>{e.date}</div>
            <div style={{ textAlign:'right', minWidth:88 }}>
              <div style={{ fontSize:14, color:C.goldLt, fontWeight:500 }}>{e.total.toFixed(2)} €</div>
              <div style={{ fontSize:10, color:C.stone }}>{e.perPerson.toFixed(2)} €/p</div>
            </div>
            <button onClick={()=>remove(e.id)} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.2)', fontSize:18, padding:'0 2px', flexShrink:0, lineHeight:1, transition:'color 0.18s' }}
              onMouseOver={ev=>ev.currentTarget.style.color=C.red} onMouseOut={ev=>ev.currentTarget.style.color='rgba(255,255,255,0.2)'}>×</button>
          </div>
        ))}
      </div>

      {showForm ? (
        <div style={{ padding:'14px', borderRadius:10, background:C.bg2, border:C.border, display:'flex', flexDirection:'column', gap:9 }}>
          <div className="expenses-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:9 }}>
            <input value={form.concept} onChange={e=>setForm(f=>({...f,concept:e.target.value}))} placeholder="Concepto (ej: Hotel Glencoe 2 noches)"
              style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, padding:'8px 11px', color:'#fff', fontSize:13, fontFamily:'inherit' }}/>
            <input value={form.total} onChange={e=>setForm(f=>({...f,total:e.target.value}))} type="number" placeholder="Total €"
              style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, padding:'8px 11px', color:'#fff', fontSize:13, fontFamily:'inherit' }}/>
            <select value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))}
              style={{ background:'#1a2530', border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, padding:'8px 11px', color:'#fff', fontSize:13, fontFamily:'inherit' }}>
              {CATEGORIES.map(c=><option key={c} value={c}>{c}</option>)}
            </select>
            <input value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} placeholder="Fecha (ej: Pre-viaje, 26 jul…)"
              style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, padding:'8px 11px', color:'#fff', fontSize:13, fontFamily:'inherit' }}/>
          </div>
          <div style={{ display:'flex', gap:8 }}>
            <button onClick={add} style={{ padding:'8px 18px', background:C.gold, border:'none', borderRadius:5, color:'#fff', fontSize:12, cursor:'pointer', fontFamily:'inherit', fontWeight:500 }}>Añadir</button>
            <button onClick={()=>setShowForm(false)} style={{ padding:'8px 14px', background:'rgba(255,255,255,0.06)', border:C.border, borderRadius:5, color:C.stone, fontSize:12, cursor:'pointer', fontFamily:'inherit' }}>Cancelar</button>
          </div>
        </div>
      ) : (
        <button onClick={()=>setShowForm(true)} style={{ padding:'9px 20px', background:'rgba(200,144,42,0.12)', border:C.borderG, borderRadius:7, color:C.gold, fontSize:12, cursor:'pointer', fontFamily:'inherit', letterSpacing:'0.08em' }}
          onMouseOver={e=>e.currentTarget.style.background='rgba(200,144,42,0.2)'} onMouseOut={e=>e.currentTarget.style.background='rgba(200,144,42,0.12)'}>
          + Añadir gasto
        </button>
      )}
    </div>
  )
}

export default function App() {
  const [openDay, setOpenDay] = useState(1)
  const [tab, setTab] = useState('itinerario')
  return (
    <div style={{ background:C.bg0, minHeight:'100vh', color:'#fff' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
        @keyframes pulse-gold{0%,100%{box-shadow:0 0 8px rgba(200,144,42,0.4)}50%{box-shadow:0 0 22px rgba(200,144,42,0.85)}}
        .leaflet-container{background:#1a2530!important}
        .leaflet-tile-pane{filter:brightness(0.85) saturate(0.65)}
        .leaflet-control-zoom a{background:#1a2530!important;color:#aaa!important;border-color:rgba(255,255,255,0.1)!important}
        .leaflet-control-attribution{background:rgba(11,15,19,0.7)!important;color:#444!important;font-size:9px!important}
        .leaflet-popup-content-wrapper{background:#1e2a35;color:#dce8f0;border:1px solid rgba(255,255,255,0.1);border-radius:8px;box-shadow:0 8px 32px rgba(0,0,0,0.5)}
        .leaflet-popup-tip{background:#1e2a35}
        .leaflet-popup-content{font-family:'Inter',sans-serif;font-size:13px;line-height:1.5;margin:10px 14px}
        *{box-sizing:border-box}
        input::placeholder{color:rgba(255,255,255,0.25)}
        input:focus,select:focus{outline:1px solid rgba(200,144,42,0.5)}
        @media(max-width:768px){
          .hero-grid{grid-template-columns:1fr!important;min-height:auto!important}
          .hero-map-col{height:280px;border-left:none!important;border-top:1px solid rgba(255,255,255,0.07)}
          .hero-text-col{padding:64px 20px 28px!important}
          .strip{display:none!important}
          .day-body-grid{grid-template-columns:1fr!important}
          .day-col-2{border-right:none!important;border-top:1px solid rgba(255,255,255,0.07)!important}
          .day-map-col{border-left:none!important;border-top:1px solid rgba(255,255,255,0.07)!important}
          .day-header{padding:12px 14px!important;gap:10px!important}
          .day-num{font-size:30px!important;min-width:34px!important}
          .dh-stats{display:none!important}
          .expenses-grid{grid-template-columns:1fr!important}
          .cat-totals{display:none!important}
        }
      `}</style>

      <nav style={{ position:'sticky', top:0, zIndex:100, height:50, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 20px', background:'rgba(13,17,23,0.92)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
        <span style={{ fontFamily:'Georgia,serif', fontSize:14, letterSpacing:'0.04em' }}>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia 2026 · Bea y Pablo</span>
        <div style={{ display:'flex', gap:2 }}>
          {[['itinerario','Itinerario'],['gastos','💰 Gastos']].map(([id,label])=>(
            <button key={id} onClick={()=>setTab(id)} style={{ padding:'5px 13px', borderRadius:7, border:'none', cursor:'pointer', fontSize:12, fontFamily:'inherit', background:tab===id?'rgba(200,144,42,0.14)':'transparent', color:tab===id?C.gold:C.stone, transition:'all 0.18s' }}>{label}</button>
          ))}
        </div>
      </nav>

      <div className="hero-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'calc(100vh - 50px)', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
        <div className="hero-text-col" style={{ display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 48px 60px 44px', background:'linear-gradient(140deg,#0d2018 0%,#0d1117 100%)' }}>
          <div style={{ fontSize:10, textTransform:'uppercase', letterSpacing:'0.28em', color:C.gold, marginBottom:16 }}>26 julio — 5 agosto 2026</div>
          <div style={{ fontFamily:'Georgia,serif', lineHeight:0.88, marginBottom:8 }}>
            <div style={{ fontSize:'clamp(44px,5vw,76px)', fontWeight:600, color:'#fff' }}>Escocia</div>
            <div style={{ fontSize:'clamp(24px,2.6vw,40px)', fontWeight:300, fontStyle:'italic', color:C.mist, marginTop:6 }}>The Wild North</div>
          </div>
          <div style={{ display:'flex', borderTop:'1px solid rgba(255,255,255,0.09)', borderBottom:'1px solid rgba(255,255,255,0.09)', padding:'14px 0', margin:'22px 0 20px' }}>
            {[['10','días'],['~950','km'],['3','Highland Games']].map(([n,l],i)=>(
              <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', paddingLeft:i===0?0:14, borderLeft:i>0?'1px solid rgba(255,255,255,0.09)':'none' }}>
                <span style={{ fontFamily:'Georgia,serif', fontSize:30, fontWeight:600, color:'#fff', lineHeight:1 }}>{n}</span>
                <span style={{ fontSize:10, textTransform:'uppercase', letterSpacing:'0.16em', color:C.stone, marginTop:2 }}>{l}</span>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginBottom:26 }}>
            {[['✈ EDI · 09:30','rgba(200,144,42,0.14)',C.goldLt],['🏅 Commonwealth Games','rgba(139,26,26,0.14)','#e8a0a0'],['⚔ Highland Games en ruta','rgba(255,255,255,0.04)',C.stone]].map(([txt,bg,col],i)=>(
              <span key={i} style={{ fontSize:11, padding:'5px 12px', borderRadius:20, background:bg, color:col, border:`1px solid ${col}35` }}>{txt}</span>
            ))}
          </div>
          <button onClick={()=>setTab('itinerario')} style={{ alignSelf:'flex-start', fontSize:12, textTransform:'uppercase', letterSpacing:'0.12em', color:'#fff', background:C.gold, padding:'11px 22px', borderRadius:5, border:'none', cursor:'pointer', fontFamily:'inherit', fontWeight:500 }}
            onMouseOver={e=>e.currentTarget.style.background=C.goldLt} onMouseOut={e=>e.currentTarget.style.background=C.gold}>
            Ver el viaje ↓
          </button>
        </div>
        <div className="hero-map-col" style={{ borderLeft:'1px solid rgba(255,255,255,0.07)', display:'flex', flexDirection:'column' }}>
          <div style={{ flex:1 }}><HeroMap /></div>
          <div style={{ display:'flex', gap:14, padding:'8px 16px', background:'rgba(13,17,23,0.7)', borderTop:'1px solid rgba(255,255,255,0.07)', fontSize:10, color:C.stone }}>
            <span style={{ display:'flex', alignItems:'center', gap:5 }}><span style={{ width:8, height:8, borderRadius:'50%', background:C.mist, display:'inline-block' }}/>Ruta</span>
            <span style={{ display:'flex', alignItems:'center', gap:5 }}><span style={{ width:8, height:8, borderRadius:'50%', background:C.gold, display:'inline-block' }}/>Highland Games</span>
          </div>
        </div>
      </div>

      <div className="strip" style={{ background:C.bg1, borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'10px 20px', display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap', fontSize:11, color:C.stone, letterSpacing:'0.06em' }}>
        {['🚗 Coche en EDI · día 1','🏔 Ben Nevis · Glencoe · Skye','🥃 Speyside Whisky Trail','🚂 Jacobite Steam Train','⚔ Highland Games en ruta'].map((s,i,arr)=>(
          <span key={i} style={{ display:'flex', alignItems:'center' }}>
            <span style={{ padding:'0 12px' }}>{s}</span>
            {i<arr.length-1&&<span style={{ opacity:0.25 }}>·</span>}
          </span>
        ))}
      </div>

      {tab==='itinerario' && (
        <div style={{ maxWidth:1140, margin:'0 auto', padding:'32px 20px' }}>
          <div style={{ marginBottom:24 }}>
            <Label>Planificación diaria</Label>
            <div style={{ fontFamily:'Georgia,serif', fontSize:24, fontWeight:600, color:'#fff', marginBottom:3 }}>Itinerario completo</div>
            <div style={{ fontSize:12, color:C.stone }}>Haz clic en cada día para ver el mapa, hoteles, restaurantes y entradas</div>
          </div>
          {DAYS.map(d=>(
            <DayCard key={d.day} d={d} open={openDay===d.day} onToggle={()=>setOpenDay(openDay===d.day?null:d.day)} />
          ))}
        </div>
      )}
      {tab==='gastos' && <ExpensesPanel />}

      <div style={{ textAlign:'center', padding:'18px', fontSize:11, color:'rgba(255,255,255,0.18)', borderTop:'1px solid rgba(255,255,255,0.06)', background:C.bg1 }}>
        🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia 2026 · Bea y Pablo · ¡Buen viaje!
      </div>
    </div>
  )
}
