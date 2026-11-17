import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import ClickSpark from './reactbits/ClickSpark.jsx'
import { Hero, Fin, TILES, FULL } from './hero.jsx'
import { Story, Duo, Leo, Elenco, Trailers, Ultimate, Foot, UE_FROM } from './chapters.jsx'
import { Nav } from './ui.jsx'
import { Splash } from './splash.jsx'

gsap.registerPlugin(ScrollTrigger, useGSAP)
if (import.meta.env.DEV) window.gsap = gsap

// ?u=2.4 abre a página direto num ponto da rolagem (em telas), sem a abertura.
const params = new URLSearchParams(location.search)
const jump = parseFloat(params.get('u'))
// &cap=1 congela a linha do tempo nesse ponto sem rolar a página (para capturas de tela).
const still = params.has('cap') && !Number.isNaN(jump)
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches || !Number.isNaN(jump)

// A página é um palco fixo. A rolagem só avança uma linha do tempo medida em
// "telas" (1 unidade = 100vh de rolagem).
const UNITS = 12.05

export default function App() {
  const root = useRef(null)
  const lenisRef = useRef(null)
  const [duoOn, setDuoOn] = useState(false)

  useEffect(() => {
    history.scrollRestoration = 'manual'
    window.scrollTo(0, Number.isNaN(jump) || still ? 0 : jump * window.innerHeight)
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 })
    lenisRef.current = lenis
    if (import.meta.env.DEV) window.__lenis = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const raf = time => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    if (!reduced) lenis.stop()
    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  const go = at => lenisRef.current?.scrollTo(at * window.innerHeight, { duration: 2.2, easing: t => 1 - Math.pow(1 - t, 3) })

  useGSAP(
    () => {
      const el = root.current
      const q = gsap.utils.selector(el)
      const tiles = q('.tile')

      // ── Splash e abertura. A cada carga: símbolo da Rockstar, logotipo do GTA VI;
      // depois o fundo escuro some, os painéis da capa batem na tela e o logotipo
      // encolhe até o lugar dele no mosaico.
      if (!reduced) {
        // espera de verdade pela carga: imagens baixadas e fontes prontas (com teto
        // de 5 s); a decodificação segue em segundo plano para nenhum corte engasgar
        const imgs = [...el.querySelectorAll('img')]
        const ready = Promise.race([
          Promise.all([
            ...imgs.map(img =>
              (img.complete ? Promise.resolve() : new Promise(done => img.addEventListener('load', done, { once: true }) || img.addEventListener('error', done, { once: true }))).then(() => {
                img.decode?.().catch(() => {})
              }),
            ),
            document.fonts.ready,
          ]),
          new Promise(done => setTimeout(done, 5000)),
        ])

        // O logotipo da splash vira o logotipo da capa: encolhe até o lugar exato
        // em que ele fica no mosaico, e só então troca de lugar com o de verdade.
        const toCover = () => {
          const from = q('.splash-logo')[0].getBoundingClientRect()
          const to = q('.hero-logo')[0].getBoundingClientRect()
          return { x: to.left + to.width / 2 - (from.left + from.width / 2), y: to.top + to.height / 2 - (from.top + from.height / 2), scale: to.width / from.width }
        }
        let dest = null
        const aim = key => () => (dest ||= toCover())[key]
        gsap.set('.hero-logo', { autoAlpha: 0 })

        const T = 3.15 // instante em que a splash dá lugar à capa (depois de tudo carregado)
        const intro = gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: () => lenisRef.current?.start() })
        intro
          // símbolo da Rockstar: um ciclo da luz passando pelo contorno (a animação
          // em si é CSS, igual à do site oficial)
          .to('.splash-rs', { autoAlpha: 0, duration: 0.3, ease: 'power1.in' }, 1.9)
          // logotipo do jogo
          .from('.splash-logo .logo-vi', { scale: 3, autoAlpha: 0, duration: 0.6 }, 2.2)
          .from('.splash-logo .logo-gta', { scale: 0.35, autoAlpha: 0, duration: 0.5, ease: 'back.out(2.4)' }, 2.44)
          .addPause(T, () => ready.then(() => intro.play()))
          // os painéis batem na tela, do centro para as bordas, ainda atrás do fundo
          // escuro; quando ele some, a capa já está montada
          .from(tiles, { scale: 1.5, autoAlpha: 0, rotation: i => (i % 2 ? 5 : -5), duration: 0.45, ease: 'power4.out', stagger: { each: 0.05, from: 'center' } }, T)
          .to('.splash-bg', { autoAlpha: 0, duration: 0.5, ease: 'power2.inOut' }, T + 0.22)
          // o logotipo encolhe até o lugar dele na capa
          .to('.splash-logo', { x: aim('x'), y: aim('y'), scale: aim('scale'), duration: 0.8, ease: 'power3.inOut' }, T + 0.05)
          .set('.hero-logo', { autoAlpha: 1 }, T + 0.86)
          .set('.splash', { autoAlpha: 0 }, T + 0.88)
          .from('.nav', { yPercent: -220, duration: 0.9 }, T + 0.7)
      } else {
        gsap.set('.splash', { autoAlpha: 0 })
      }

      // ── Linha do tempo da rolagem.
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: q('.spacer')[0], start: 'top top', end: 'bottom bottom', scrub: 0.55 },
      })

      // 0 · A capa se desmonta: os painéis voam para fora e o de Jason e Lucia
      // cresce até tomar a tela.
      tl.to('.hero-logo', { scale: 0.55, autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, 0.04)
      TILES.forEach(t => {
        if (t.out) tl.to(`.tile-${t.id}`, { ...t.out, duration: 0.75, ease: 'power2.in' }, 0.08)
      })
      tl.to('.tile-sign', { yPercent: 62, rotation: 4, duration: 0.75, ease: 'power2.in' }, 0.08)
        .to('.tile-jl', { clipPath: FULL, duration: 0.9, ease: 'power2.inOut' }, 0.1)
        .to('.tile-jl .tile-frame', { left: '0%', top: '0%', width: '100%', height: '100%', duration: 0.9, ease: 'power2.inOut' }, 0.1)
        .to('.tile-jl img', { objectPosition: '50% 50%', duration: 0.9, ease: 'power2.inOut' }, 0.1)
        .fromTo('.hero-shade', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0.75)
        // 1 · A história, em tarjas sobre a arte.
        .from('.story .ln > span', { yPercent: 112, duration: 0.3, ease: 'power3.out', stagger: 0.07 }, 0.95)
        .to('.story', { autoAlpha: 0, x: '-6rem', duration: 0.2, ease: 'power1.in' }, 1.62)

      // 2 · Jason e Lucia.
      tl.set('.duo', { autoAlpha: 1 }, 1.75)
        .call(() => setDuoOn(true), null, 1.87)
        .fromTo('.duo-j', { yPercent: -101 }, { yPercent: 0, duration: 0.5, ease: 'power3.out' }, 1.8)
        .fromTo('.duo-l', { yPercent: 101 }, { yPercent: 0, duration: 0.5, ease: 'power3.out' }, 1.88)
        .fromTo('.duo-photo', { scale: 1.4 }, { scale: 1.05, duration: 1.4, ease: 'power2.out' }, 1.8)
        .from('.duo-text', { y: '5rem', autoAlpha: 0, duration: 0.3, ease: 'power2.out', stagger: 0.08 }, 2.1)
        .from('.chip', { yPercent: 170, rotation: i => (i % 2 ? 22 : -22), duration: 0.42, ease: 'power3.out', stagger: 0.05 }, 2.23)
        // por baixo dos painéis, a capa sai e o mosaico de Leonida fica pronto
        .set('.duo', { backgroundColor: '#12071f' }, 2.5)
        .set('.hero-wrap', { autoAlpha: 0 }, 2.55)
        .set('.leo', { autoAlpha: 1 }, 2.55)
        // sai em diagonal e revela Leonida
        .fromTo('.duo', { '--wa': '0%', '--wb': '-14%' }, { '--wa': '116%', '--wb': '102%', duration: 0.45, ease: 'power2.inOut' }, 3.1)
        .set('.duo', { autoAlpha: 0 }, 3.57)

      // 3 · Leonida: duas colunas de postais correndo em sentidos opostos.
      tl.fromTo('.leo-col-0 .leo-strip', { yPercent: -3 }, { yPercent: -36, duration: 1.8 }, 3.05)
        .fromTo('.leo-col-1 .leo-strip', { yPercent: -40 }, { yPercent: -7, duration: 1.8 }, 3.05)
        // os postais entram em cor cheia; só escurecem quando o neon acende
        .fromTo('.leo-dim', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, ease: 'power1.out' }, 3.55)
        .from('.leo-script', { autoAlpha: 0, x: '-3rem', duration: 0.2, ease: 'power2.out' }, 3.57)
        // neon: as letras acendem uma a uma, piscando
        .fromTo('.leo-word .ch', { autoAlpha: 0 }, { keyframes: { autoAlpha: [0, 1, 0.25, 1, 0.6, 1] }, duration: 0.16, ease: 'none', stagger: 0.055 }, 3.61)
        .from('.leo-sub', { autoAlpha: 0, y: '1.5rem', duration: 0.22, ease: 'power2.out' }, 3.95)
        .to('.leo-title', { autoAlpha: 0, scale: 1.12, duration: 0.25, ease: 'power1.in' }, 4.65)
        .to('.leo-dim', { autoAlpha: 0, duration: 0.2 }, 4.67)
        // as colunas escapam pelas bordas e sobra o preto
        .to('.leo-col-0', { yPercent: -112, duration: 0.42, ease: 'power2.in' }, 4.83)
        .to('.leo-col-1', { yPercent: 112, duration: 0.42, ease: 'power2.in' }, 4.83)
        .set('.elenco', { autoAlpha: 1 }, 5.2)
        .set('.leo', { autoAlpha: 0 }, 5.27)

      // 4 · O elenco: dois personagens por tela, três telas. Cada painel abre em
      // persiana por uma máscara só (uma camada por personagem), para não piscar.
      const cards = q('.cast-card')
      const pips = q('.cast-pips li')
      const PAIR = 0.8
      cards.forEach((card, i) => {
        const pair = Math.floor(i / 2)
        const t0 = 5.3 + pair * PAIR + (i % 2) * 0.12
        tl.fromTo(card, { '--p': 0 }, { '--p': 1, duration: 0.3, ease: 'power2.inOut' }, t0)
          .fromTo(card.querySelectorAll('.cast-name span'), { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.22, ease: 'power2.out', stagger: 0.06 }, t0 + 0.2)
          .fromTo(card.querySelector('.cast-line'), { autoAlpha: 0, y: '1.2rem' }, { autoAlpha: 1, y: 0, duration: 0.14, ease: 'power2.out' }, t0 + 0.36)
      })
      pips.forEach((pip, n) => {
        tl.to(pip, { '--on': 1, duration: 0.08 }, 5.35 + n * PAIR)
        if (n > 0) tl.to(pips[n - 1], { '--on': 0.3, duration: 0.08 }, 5.35 + n * PAIR)
      })
      tl.from('.cast-band', { autoAlpha: 0, duration: 0.15 }, 5.35).from('.cast-pips', { autoAlpha: 0, duration: 0.15 }, 5.35)

      // 5 · Trailers: o fundo sobe e os quatro pôsteres são dados como cartas.
      tl.fromTo('.trailers', { clipPath: 'inset(100% 0% 0% 0%)', autoAlpha: 1 }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.3, ease: 'power2.inOut' }, 8.15)
        .set('.elenco', { autoAlpha: 0 }, 8.47)
        .fromTo('.poster', { xPercent: 420, rotation: 16 }, { xPercent: 0, rotation: i => [-2.2, 1.4, -1.2, 2.4][i], duration: 0.5, ease: 'power3.out', stagger: 0.09 }, 8.3)
        .fromTo('.trailers-head span', { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.3, ease: 'power2.out' }, 8.33)
        .from('.poster-play', { scale: 0, duration: 0.2, ease: 'back.out(2.4)', stagger: 0.06 }, 8.85)
        // saem para cima, um a um
        .to('.poster', { yPercent: -150, rotation: i => (i % 2 ? 9 : -9), duration: 0.36, ease: 'power2.in', stagger: 0.05 }, 9.4)
        .to('.trailers-head', { autoAlpha: 0, duration: 0.15 }, 9.45)

      // 6 · Ultimate Edition: quatro painéis entram pelas bordas.
      tl.set('.ultimate', { autoAlpha: 1 }, 9.55)
      Object.entries(UE_FROM).forEach(([id, from], i) => {
        tl.from(`.ue-${id}`, { ...from, duration: 0.45, ease: 'power3.out' }, 9.59 + i * 0.07)
      })
      tl.set('.trailers', { autoAlpha: 0 }, 10.3)
        .fromTo('.ue-head span', { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.3, ease: 'power2.out', stagger: 0.08 }, 9.95)
        .from('.ue-sub', { autoAlpha: 0, y: '1.2rem', duration: 0.2, ease: 'power2.out' }, 10.17)
        .from('.ue-label', { autoAlpha: 0, x: '-1.5rem', duration: 0.2, ease: 'power2.out', stagger: 0.06 }, 10.13)
        .from('.ue-sticker', { scale: 2, autoAlpha: 0, duration: 0.14, ease: 'power3.in' }, 10.35)

      // 7 · Lançamento: o cabeçalho sai e a placa verde desce do alto e toma a tela.
      tl.to('.nav', { autoAlpha: 0, duration: 0.14 }, 10.85)
        .fromTo('.fin', { yPercent: -104, rotationX: -62, transformPerspective: 1600, autoAlpha: 1 }, { yPercent: 0, rotationX: 0, duration: 0.6, ease: 'power3.out' }, 11)
        .fromTo('.cta-sign', { scale: 0.5 }, { scale: 1, duration: 0.22, ease: 'back.out(2.6)' }, 11.47)
        .set('.ultimate', { autoAlpha: 0 }, 11.62)
        .fromTo('.foot', { y: '9rem', autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3, ease: 'power3.out' }, 11.65)
        .to({}, { duration: 0.001 }, UNITS - 0.001)

      if (still) {
        tl.scrollTrigger.kill()
        tl.progress(jump / UNITS)
      }
    },
    { scope: root },
  )

  return (
    <ClickSpark sparkColor="#ffc24b" sparkSize={16} sparkRadius={34} sparkCount={10} duration={520}>
      <div ref={root} id="topo">
        <main className="stage">
          <h1 className="sr-only">Grand Theft Auto VI: conceito de fã da página inicial, com contagem regressiva para o lançamento em 19 de novembro de 2026</h1>
          <Leo />
          <div className="hero-wrap">
            <Hero />
            <div className="hero-shade" />
            <Story />
          </div>
          <Duo on={duoOn} />
          <Elenco />
          <Trailers />
          <Ultimate />
          <Fin />
          <Foot />
          <Nav go={go} />
          <Splash />
        </main>
        <div className="spacer" style={{ '--units': UNITS }} />
      </div>
    </ClickSpark>
  )
}
