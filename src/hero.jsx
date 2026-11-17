import { ArrowDown, ArrowUp, ArrowExit } from './art.jsx'
import { Countdown, OFFICIAL } from './ui.jsx'

const IMG = '/assets/img/'

// Mosaico da capa: cada painel é um polígono em % do palco (TL, TR, BR, BL),
// com os frisos escuros entre eles e leves inclinações, como nas capas de GTA.
export const TILES = [
  { id: 'heli', file: 'capa-helicoptero.jpg', pos: '50% 40%', poly: [[1.5, 2.7], [19.6, 2.7], [19.6, 41.2], [1.5, 42.8]], alt: 'Helicóptero sobrevoando Vice City', out: { xPercent: -42, yPercent: -30, rotation: -7 } },
  { id: 'garota', file: 'capa-garota.jpg', pos: '50% 12%', poly: [[1.5, 44.6], [19.6, 43], [19.6, 97.3], [1.5, 97.3]], alt: 'Mulher de óculos escuros na orla de Vice City', out: { xPercent: -42, yPercent: 34, rotation: 6 } },
  { id: 'jl', file: 'dupla-01.jpg', pos: '50% 20%', poly: [[20.6, 2.7], [52.4, 2.7], [51.6, 56.4], [20.6, 55.6]], alt: 'Jason e Lucia sentados no capô de um carro em Vice City' },
  { id: 'lancha', file: 'capa-lancha.jpg', pos: '50% 50%', poly: [[53.4, 2.7], [79.4, 2.7], [79.4, 27.6], [53, 28.4]], alt: 'Lancha em alta velocidade ao lado de um flamingo', out: { xPercent: 16, yPercent: -62, rotation: 5 } },
  { id: 'boobie', file: 'boobie.jpg', pos: '50% 50%', zoom: 1.75, focus: '60% 23%', ty: '18%', tx: '10%', poly: [[53, 30.2], [79.4, 29.4], [79.4, 56.9], [52.6, 56.6]], alt: 'Boobie Ike de óculos escuros e jaqueta vermelha', out: { xPercent: 52, yPercent: -8, rotation: 4 } },
  { id: 'carro', file: 'capa-carro.jpg', pos: '30% 70%', poly: [[20.6, 57.4], [35.6, 57.8], [36.2, 97.3], [20.6, 97.3]], alt: 'Carro esportivo amarelo com a porta aberta', out: { xPercent: -30, yPercent: 62, rotation: -5 } },
  { id: 'raul', file: 'capa-raul.jpg', pos: '45% 10%', poly: [[80.4, 2.7], [98.5, 2.7], [98.5, 51.6], [80.4, 50.4]], alt: 'Raul Bautista de terno branco, com um fuzil', out: { xPercent: 42, yPercent: -30, rotation: 7 } },
  { id: 'moto', file: 'capa-moto.jpg', pos: '100% 100%', poly: [[80.4, 52.2], [98.5, 53.4], [98.5, 97.3], [80.4, 97.3]], alt: 'Motociclista empinando uma moto rosa diante de uma viatura', out: { xPercent: 42, yPercent: 34, rotation: -6 } },
]

export const SIGN_POLY = [[36.6, 57.8], [79.4, 58.7], [79.4, 97.3], [37.2, 97.3]]

export const clip = poly => `polygon(${poly.map(([x, y]) => `${x}% ${y}%`).join(', ')})`
export const FULL = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'

const box = poly => {
  const xs = poly.map(p => p[0])
  const ys = poly.map(p => p[1])
  const l = Math.min(...xs)
  const t = Math.min(...ys)
  return { left: l, top: t, width: Math.max(...xs) - l, height: Math.max(...ys) - t }
}
const pct = b => ({ left: `${b.left}%`, top: `${b.top}%`, width: `${b.width}%`, height: `${b.height}%` })
const origin = poly => {
  const b = box(poly)
  return `${b.left + b.width / 2}% ${b.top + b.height / 2}%`
}

export function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <img className="logo-vi" src={`${IMG}logo-vi.png`} alt="" draggable="false" />
      <img className="logo-gta" src={`${IMG}logo-gta.png`} alt="Grand Theft Auto VI" draggable="false" />
    </span>
  )
}

export function Hero() {
  const signBox = box(SIGN_POLY)
  return (
    <section className="hero" aria-label="Capa">
      {TILES.map(t => (
        <div key={t.id} className={`tile tile-${t.id}`} style={{ clipPath: clip(t.poly), transformOrigin: origin(t.poly) }}>
          <span className="tile-frame" style={pct(box(t.poly))}>
            <img src={`${IMG}${t.file}`} alt={t.alt} draggable="false" style={{ objectPosition: t.pos, '--zoom': t.zoom || 1.06, '--focus': t.focus, '--tx': t.tx, '--ty': t.ty }} />
          </span>
        </div>
      ))}

      {/* Painel da contagem: a placa verde ocupa um quadro da capa. */}
      <div className="tile tile-sign" style={{ clipPath: clip(SIGN_POLY), transformOrigin: origin(SIGN_POLY) }}>
        <div className="tile-frame sign-tile" style={pct(signBox)}>
          <div className="sign-tile-dest">
            <ArrowDown />
            <span>Vice City</span>
          </div>
          <span className="sign-tile-word">Faltam</span>
          <Countdown className="sign-tile-cd" />
          <p className="sign-tile-tab">19 nov 2026 · 0h de Brasília</p>
        </div>
      </div>

      <Logo className="hero-logo" />
    </section>
  )
}

// Placa final: toma a tela inteira com a contagem.
export function Fin() {
  return (
    <section className="fin" id="lancamento" aria-label="Lançamento">
      <div className="fin-face sign">
        <div className="fin-top">
          <Logo className="fin-logo" />
          <div className="fin-dest">
            <ArrowUp />
            <span>Vice City</span>
          </div>
          <p className="fin-word">Você chega em</p>
        </div>
        <Countdown className="fin-cd" calm />
        <div className="fin-bottom">
          <p className="fin-date">
            <strong>19 de novembro de 2026</strong>
            <span>0h de Brasília · PlayStation 5 · Xbox Series X|S</span>
          </p>
          <a className="cta cta-sign" href={OFFICIAL} target="_blank" rel="noopener noreferrer">
            Reserve agora
            <ArrowExit />
          </a>
        </div>
        <span className="fin-sheen" />
      </div>
    </section>
  )
}
