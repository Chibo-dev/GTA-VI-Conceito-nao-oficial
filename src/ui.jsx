import { useEffect, useState } from 'react'
import Counter from './reactbits/Counter.jsx'

// 19/11/2026, 0h no horário de Brasília (UTC−3).
export const LAUNCH = Date.UTC(2026, 10, 19, 3, 0, 0)
export const OFFICIAL = 'https://www.rockstargames.com/VI'

const left = () => {
  const ms = Math.max(0, LAUNCH - Date.now())
  const t = Math.floor(ms / 1000)
  return { d: Math.floor(t / 86400), h: Math.floor((t % 86400) / 3600), m: Math.floor((t % 3600) / 60), s: t % 60, done: ms <= 0 }
}

export function useCountdown() {
  const [v, setV] = useState(left)
  useEffect(() => {
    const id = setInterval(() => {
      setV(prev => {
        const next = left()
        return next.s === prev.s && next.m === prev.m && next.done === prev.done ? prev : next
      })
    }, 200)
    return () => clearInterval(id)
  }, [])
  return v
}

const UNITS = [
  ['d', 'dias', 'dia'],
  ['h', 'horas', 'hora'],
  ['m', 'min', 'min'],
  ['s', 'seg', 'seg'],
]

export function Countdown({ className = '', calm = false }) {
  const v = useCountdown()
  const label = v.done ? 'Grand Theft Auto VI já está disponível' : `Faltam ${v.d} dias, ${v.h} horas, ${v.m} minutos e ${v.s} segundos para o lançamento`
  if (v.done) {
    return (
      <div className={`cd is-done ${className}`} role="timer" aria-label={label}>
        <span className="cd-done">Já disponível</span>
      </div>
    )
  }
  return (
    <div className={`cd ${className}`} role="timer" aria-label={label}>
      {UNITS.map(([key, plural, singular]) => (
        <div className="cd-unit" key={key} aria-hidden="true">
          <Counter value={v[key]} minDigits={2} fontSize="1em" direction="down" duration={calm ? 0.34 : 0.55} bounce={calm ? 0 : 0.12} fade={0.1} intro={false} motionBlur={false} />
          <span className="cd-name">{v[key] === 1 ? singular : plural}</span>
        </div>
      ))}
    </div>
  )
}

export function Nav({ go }) {
  return (
    <header className="nav">
      <a
        href="#topo"
        className="nav-home"
        aria-label="Grand Theft Auto VI, voltar ao início"
        onClick={e => {
          e.preventDefault()
          go(0)
        }}
      >
        <img className="nav-mark" src="/assets/img/logo-vi.png" alt="" draggable="false" />
      </a>
      <a className="cta" href={OFFICIAL} target="_blank" rel="noopener noreferrer">
        Reserve agora
      </a>
    </header>
  )
}

export function Signature() {
  return (
    <div className="footer-signature">
      <span className="footer-signature-label">Desenvolvido por</span>
      <div className="footer-signature-pills">
        <a href="https://chibodev.com" target="_blank" rel="noopener noreferrer" className="is-site" aria-label="Chibo Dev, site oficial">
          <svg className="footer-signature-stamp" viewBox="0 0 100 100" aria-hidden="true">
            <g transform="rotate(-1.4 50 50)">
              <rect width="100" height="100" fill="#C9171E" />
              <g stroke="#FFFFFF" fill="none">
                <path strokeWidth="3" d="M9 9H62M78 9H91M9 9V91M9 91H91M91 9V91" />
                <path strokeWidth="8.5" d="M69.65 16.82L15.55 26.35" />
                <path strokeWidth="8.5" d="M9 48.55H82" />
                <path strokeWidth="8.5" d="M45.62 21.04L45.46 90.07" />
              </g>
            </g>
          </svg>
          <span className="chibo-name">Chibo Dev</span>
        </a>
        <span className="footer-signature-divider" aria-hidden="true" />
        <a href="https://instagram.com/chibodev" target="_blank" rel="noopener noreferrer" className="is-ig" aria-label="Instagram @chibodev">
          <svg className="ig-icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <defs>
              <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FEDA75" />
                <stop offset="25%" stopColor="#FA7E1E" />
                <stop offset="50%" stopColor="#D62976" />
                <stop offset="75%" stopColor="#962FBF" />
                <stop offset="100%" stopColor="#4F5BD5" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#ig-grad)" />
            <circle cx="12" cy="12" r="3.5" stroke="url(#ig-grad)" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="url(#ig-grad)" stroke="none" />
          </svg>
          @chibodev
        </a>
      </div>
    </div>
  )
}
