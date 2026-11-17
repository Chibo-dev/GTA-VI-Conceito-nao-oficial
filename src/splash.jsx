// Tela de carregamento. A parte da Rockstar reproduz a do site oficial: o
// contorno do símbolo serve de máscara, uma faixa de luz rosa e lilás passa
// por baixo dele em diagonal e um halo pulsa atrás. Depois, o logotipo do
// GTA VI.
// Na saída, o logotipo encolhe até o lugar que ocupa na capa.

const IMG = '/assets/img/'

export function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-bg" />
      <div className="splash-rs">
        <div className="rs-glow" />
        <div className="rs-line" />
      </div>
      <div className="splash-logo logo">
        <img className="logo-vi" src={`${IMG}logo-vi.png`} alt="" draggable="false" />
        <img className="logo-gta" src={`${IMG}logo-gta.png`} alt="" draggable="false" />
      </div>
    </div>
  )
}
