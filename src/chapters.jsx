import DecryptedText from './reactbits/DecryptedText.jsx'
import { ScrollVelocity } from './reactbits/ScrollVelocity.jsx'
import { Signature, OFFICIAL } from './ui.jsx'

const IMG = '/assets/img/'

export const CAST = [
  { file: 'cal.jpg', pos: '48% 50%', name: 'Cal Hampton', line: 'Amigo do Jason. Cerveja, rádio da Guarda Costeira e teoria da conspiração.', alt: 'Cal Hampton sentado num barco, de boné e camisa florida' },
  { file: 'boobie.jpg', pos: '62% 50%', name: 'Boobie Ike', line: 'Lenda de Vice City. Dono de boate, estúdio e meio bairro.', alt: 'Boobie Ike de jaqueta vermelha, com uma taça na mão' },
  { file: 'drequan.jpg', pos: '58% 50%', name: "Dre'Quan Priest", line: 'Da rua para o comando da Only Raw Records.', alt: "Dre'Quan Priest sentado no capô de um jipe" },
  { file: 'real-dimez.jpg', pos: '56% 50%', name: 'Real Dimez', line: 'Bae-Luxe e Roxy. Rap pesado e milhões de visualizações.', alt: 'A dupla Real Dimez posando num terraço' },
  { file: 'raul.jpg', pos: '56% 50%', name: 'Raul Bautista', line: 'Ladrão de banco veterano. Charme na mesma medida do risco.', alt: 'Raul Bautista de terno branco, com uma bolsa de couro' },
  { file: 'brian.jpg', pos: '74% 50%', name: 'Brian Heder', line: 'Contrabandista das Keys, do tempo em que isso era ofício.', alt: 'Brian Heder apoiado numa mesa com um mapa' },
]


const Chars = ({ text }) =>
  [...text].map((c, i) => (
    <span className="ch" key={i}>
      {c === ' ' ? ' ' : c}
    </span>
  ))

const Name = ({ text, on }) =>
  on ? (
    <DecryptedText text={text} animateOn="view" sequential revealDirection="start" speed={34} characters="ABCDEFGHJKLMNPRSTUVXZ0123456789" encryptedClassName="is-scrambled" />
  ) : (
    <span className="name-idle">{text}</span>
  )

export function Story() {
  return (
    <section className="story" id="historia" aria-label="A história">
      <h2 className="story-head">
        <span className="ln">
          <span>Um serviço simples</span>
        </span>
        <span className="ln">
          <span>deu errado.</span>
        </span>
      </h2>
      <p className="story-sub">
        <span className="ln">
          <span>Vice City, EUA. Agora Jason e Lucia têm o estado inteiro de Leonida atrás deles.</span>
        </span>
      </p>
    </section>
  )
}

export function Duo({ on }) {
  return (
    <section className="duo" id="dupla" aria-label="Jason e Lucia">
      <article className="duo-half duo-j">
        <img className="duo-photo" src={`${IMG}jason-02.jpg`} alt="Jason Duval ao volante, com o braço para fora da janela" draggable="false" />
        <div className="duo-text">
          <h3 className="duo-name">
            <Name text="Jason Duval" on={on} />
          </h3>
          <p>Cresceu entre golpistas, passou pelo exército e hoje faz serviço para os traficantes das Keys. Quer uma vida fácil. Escolheu o lugar errado.</p>
        </div>
        <img className="chip chip-a" src={`${IMG}jason-01.jpg`} alt="Jason ao lado de uma moto esportiva verde" draggable="false" />
        <img className="chip chip-b" src={`${IMG}jason-04.jpg`} alt="Jason olhando o celular numa rua de bares à noite" draggable="false" />
      </article>
      <article className="duo-half duo-l">
        <img className="duo-photo" src={`${IMG}lucia-01.jpg`} alt="Lucia Caminos de luvas, treinando boxe" draggable="false" />
        <div className="duo-text">
          <h3 className="duo-name">
            <Name text="Lucia Caminos" on={on} />
          </h3>
          <p>Aprendeu a lutar assim que aprendeu a andar. Saiu da penitenciária de Leonida por sorte e decidiu que, daqui para frente, só joga com a cabeça.</p>
        </div>
        <img className="chip chip-a" src={`${IMG}lucia-02.jpg`} alt="Lucia de óculos escuros na beira de uma piscina" draggable="false" />
        <img className="chip chip-b" src={`${IMG}lucia-03.jpg`} alt="Lucia sentada numa moto em frente a um bar com letreiro de neon" draggable="false" />
      </article>
    </section>
  )
}

const POSTALS = [
  ['postal-vice-city.jpg', 'Vice City'],
  ['postal-leonida-keys.jpg', 'Leonida Keys'],
  ['postal-grassrivers.jpg', 'Grassrivers'],
  ['postal-port-gellhorn.jpg', 'Port Gellhorn'],
  ['postal-ambrosia.jpg', 'Ambrosia'],
  ['postal-mount-kalaga.jpg', 'Mount Kalaga'],
]
// Duas colunas largas, três lugares em cada, repetidos uma vez: assim nenhum
// postal aparece duas vezes na tela ao mesmo tempo.
const LEO_COLS = [
  [0, 1, 2, 0, 1, 2],
  [3, 4, 5, 3, 4, 5],
].map(order => order.map(i => POSTALS[i]))

export function Leo() {
  return (
    <section className="leo" id="leonida" aria-label="Leonida">
      <div className="leo-grid">
        {LEO_COLS.map((col, c) => (
          <div className={`leo-col leo-col-${c}`} key={c}>
            <div className="leo-strip">
              {col.map(([file, name], i) => (
                <img key={i} src={`${IMG}${file}`} alt={i < 3 ? `Cartão-postal de ${name}` : ''} draggable="false" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="leo-dim" />
      <div className="leo-title">
        <p className="leo-script">Bem-vindo a</p>
        <h2 className="leo-word" aria-label="Leonida">
          <Chars text="Leonida" />
        </h2>
        <p className="leo-sub">Seis destinos. Um estado inteiro para se meter em encrenca.</p>
      </div>
    </section>
  )
}

// Dois personagens por tela: painel esquerdo e painel direito, com o friso
// inclinado no meio, como na capa.
const CAST_POLY = [
  [[1.5, 2.7], [50.6, 2.7], [49, 97.3], [1.5, 97.3]],
  [[51.7, 2.7], [98.5, 2.7], [98.5, 97.3], [50.1, 97.3]],
]
const castClip = poly => `polygon(${poly.map(([x, y]) => `${x}% ${y}%`).join(', ')})`
const castBox = poly => {
  const xs = poly.map(p => p[0])
  const ys = poly.map(p => p[1])
  const l = Math.min(...xs)
  const t = Math.min(...ys)
  return { left: `${l}%`, top: `${t}%`, width: `${Math.max(...xs) - l}%`, height: `${Math.max(...ys) - t}%` }
}

export function Elenco() {
  return (
    <section className="elenco" id="elenco" aria-label="O elenco">
      <div className="cast">
        {CAST.map((c, i) => {
          const side = i % 2
          const [first, ...rest] = c.name.split(' ')
          return (
            <article className={`cast-card ${side ? 'is-h' : 'is-v'}`} key={c.file} aria-label={c.name} style={{ clipPath: castClip(CAST_POLY[side]) }}>
              <div className="cast-frame" style={castBox(CAST_POLY[side])}>
                <img src={`${IMG}${c.file}`} alt={c.alt} draggable="false" style={{ objectPosition: c.pos }} />
                <div className="cast-text">
                  <h3 className="cast-name" aria-label={c.name}>
                    <span>{first}</span>
                    <span>{rest.join(' ')}</span>
                  </h3>
                  <p className="cast-line">{c.line}</p>
                </div>
              </div>
            </article>
          )
        })}
        <div className="cast-band">
          <ScrollVelocity
            texts={['O elenco de Vice City']}
            velocity={38}
            numCopies={8}
            separator={
              <svg className="band-star" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
              </svg>
            }
            gap={34}
            className="cast-band-text"
          />
        </div>
        <ol className="cast-pips" aria-hidden="true">
          {[0, 1, 2].map(n => (
            <li key={n} />
          ))}
        </ol>
      </div>
    </section>
  )
}

const TRAILERS = [
  { file: 'trailer-1.jpg', name: '1º trailer', alt: 'Pôster do primeiro trailer: Jason e Lucia sentados num carro' },
  { file: 'trailer-2.jpg', name: '2º trailer', alt: 'Pôster do segundo trailer: Jason apontando uma arma num píer, com Lucia ao lado' },
  { file: 'trailer-lancamento-v.jpg', name: 'Trailer de lançamento', alt: 'Pôster do trailer de lançamento' },
  { file: 'trailer-olhar-estendido-v.jpg', name: 'Um olhar estendido', alt: 'Pôster do vídeo Um Olhar Estendido' },
]

const Play = () => (
  <svg className="play" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4.2v15.6L20 12z" />
  </svg>
)

// Os quatro vídeos que já existem no site oficial; cada pôster leva para lá.
export function Trailers() {
  return (
    <section className="trailers" id="trailers" aria-label="Trailers">
      <h2 className="plate-head trailers-head">
        <span>Para assistir</span>
      </h2>
      <ul className="posters">
        {TRAILERS.map(t => (
          <li className="poster" key={t.file}>
            <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" aria-label={`${t.name}: assistir no site oficial`}>
              <img src={`${IMG}${t.file}`} alt={t.alt} draggable="false" />
              <span className="poster-play">
                <Play />
              </span>
              <span className="poster-name">{t.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

const UE_TILES = [
  { id: 'main', file: 'ultimate-02.jpg', pos: '32% 30%', poly: [[1.5, 2.7], [56.4, 2.7], [54.6, 97.3], [1.5, 97.3]], from: { xPercent: -70 }, alt: 'Jason e Lucia em trajes da Ultimate Edition, encostados num carro verde' },
  { id: 'cheetah', file: 'ultimate-cheetah.jpg', pos: '50% 62%', poly: [[57.5, 2.7], [98.5, 2.7], [98.5, 33.4], [56.9, 34.6]], from: { yPercent: -60 }, label: 'Grotti Cheetah (1995)', alt: 'Carro esportivo branco Grotti Cheetah de 1995' },
  { id: 'revolveres', file: 'ultimate-revolveres.jpg', pos: '40% 50%', poly: [[56.9, 36.4], [98.5, 35.2], [98.5, 65.2], [56.3, 66]], from: { xPercent: 60 }, label: 'Revólveres Hawk & Little Morgan', alt: 'Revólver cromado com luneta' },
  { id: 'vintage', file: 'vintage-01.jpg', pos: '50% 30%', poly: [[56.3, 67.8], [98.5, 67], [98.5, 97.3], [55.7, 97.3]], from: { yPercent: 60 }, label: 'Pacote Vintage Vice City', tab: 'Bônus de reserva', alt: 'Casal em trajes dos anos 80 em frente a um hotel com letreiro de neon' },
]

const polyClip = poly => `polygon(${poly.map(([x, y]) => `${x}% ${y}%`).join(', ')})`
const polyBox = poly => {
  const xs = poly.map(p => p[0])
  const ys = poly.map(p => p[1])
  const l = Math.min(...xs)
  const t = Math.min(...ys)
  return { left: `${l}%`, top: `${t}%`, width: `${Math.max(...xs) - l}%`, height: `${Math.max(...ys) - t}%` }
}

export const UE_FROM = Object.fromEntries(UE_TILES.map(t => [t.id, t.from]))

export function Ultimate() {
  return (
    <section className="ultimate" id="ultimate" aria-label="Ultimate Edition">
      {UE_TILES.map(t => (
        <div key={t.id} className={`ue-tile ue-${t.id}`} style={{ clipPath: polyClip(t.poly) }}>
          <div className="ue-frame" style={polyBox(t.poly)}>
            <img src={`${IMG}${t.file}`} alt={t.alt} draggable="false" style={{ objectPosition: t.pos }} />
            {t.tab && <p className="ue-sticker">{t.tab}</p>}
            {t.label && (
              <p className="ue-label">
                <span>{t.label}</span>
              </p>
            )}
          </div>
        </div>
      ))}
      <div className="ue-text">
        <h2 className="plate-head ue-head">
          <span>Ultimate</span>
          <span>Edition</span>
        </h2>
        <p className="ue-sub">Itens exclusivos ligados à história de Jason e Lucia.</p>
      </div>
    </section>
  )
}

export function Foot() {
  return (
    <footer className="foot">
      <p className="foot-note">Conceito de fã, não oficial e sem vínculo com a Rockstar Games. Grand Theft Auto VI, o logotipo e as artes pertencem à Rockstar Games e à Take-Two Interactive.</p>
      <Signature />
    </footer>
  )
}
