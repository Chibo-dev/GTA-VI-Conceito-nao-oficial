# GTA VI · A capa (conceito)

Home conceito, **não oficial**, de Grand Theft Auto VI, feita por fã para gravação de tela (reels). Somente desktop. Não tem vínculo com a Rockstar Games.

## Rodar

```bash
npm install
```

```bash
npm run dev -- --port 5175
```

Abra http://localhost:5175. Para gravar, use a janela em 16:9 (1920×1080) e role do topo ao fim.

A cada carga (Cmd+R) roda a splash: o símbolo da Rockstar só em contorno, com uma faixa de luz rosa e lilás passando por ele em diagonal (cópia da tela de carregamento do site oficial em computador: 6% da largura da tela, mesmo fundo, cores, halo e ciclo de 2,15 s; conferida quadro a quadro contra o original); depois o logotipo do GTA VI, que encolhe até o lugar dele na capa enquanto o fundo escuro some e os painéis batem em volta. Somando a montagem da capa, são cerca de 6 segundos, e a rolagem só destrava no fim.

Para abrir direto num trecho, sem splash, use `?u=` com o número de telas, por exemplo http://localhost:5175/?u=4.45. Com `&cap=1` o quadro fica congelado, sem rolar (para capturas).

## Como funciona

A página é um palco fixo. A rolagem avança uma linha do tempo do GSAP (`src/App.jsx`), medida em telas (`UNITS`).

- `src/hero.jsx`: a capa em mosaico (`TILES`: cada painel é um polígono em % da tela), o painel da contagem e a placa final.
- `src/chapters.jsx`: a história em tarjas, Jason e Lucia, o mosaico de postais de Leonida, o elenco em persianas, os trailers, a Ultimate Edition e o rodapé.
- `src/ui.jsx`: contagem regressiva, navegação, assinatura.
- `src/splash.jsx`: splash de carregamento e a forma do "VI" usada como janela.
- `src/art.jsx`: ícones de seta.
- `src/reactbits/`: componentes do React Bits (Counter, DecryptedText, ScrollVelocity, ClickSpark).

A contagem aponta para **19/11/2026, 0h de Brasília** (`LAUNCH` em `src/ui.jsx`). Depois desse instante, as placas mostram "Já disponível".

## Origem dos recursos

| Recurso | Origem |
|---|---|
| `public/assets/img/logo-vi.png`, `logo-gta.png` | Logotipo oficial, da home `rockstargames.com/VI`, baixado em 15/11/2026 e recortado |
| `rockstar-contorno.svg` e a animação do símbolo na splash | Contorno e parâmetros da tela de carregamento de `rockstargames.com/VI`, lidos em 15/11/2026 |
| `capa-helicoptero`, `capa-garota`, `capa-lancha`, `capa-carro`, `capa-raul`, `capa-moto` | Recortes de painéis da arte de capa oficial (`Official_Cover_Art_landscape`, da página "Mídia e ilustrações"), baixada em 15/11/2026 |
| `trailer-1`, `trailer-2`, `trailer-lancamento-v`, `trailer-olhar-estendido-v` | Pôsteres dos quatro vídeos, da home `rockstargames.com/VI`, baixados em 15/11/2026 |
| `ultimate-02`, `ultimate-cheetah`, `ultimate-revolveres`, `vintage-01` | Capturas oficiais da Ultimate Edition e do Pacote Vintage Vice City, da página "Mídia e ilustrações", baixadas em 15/11/2026. Os nomes dos itens vêm das legendas dessa página |
| `dupla-01`, `cal`, `boobie`, `drequan`, `real-dimez`, `raul`, `brian`, `postal-*` | Ilustrações oficiais, da página "Mídia e ilustrações" (`rockstargames.com/VI/media/artwork-wallpapers`), baixadas em 15/11/2026 |
| `jason-01`, `jason-02`, `jason-04`, `lucia-01`, `lucia-02`, `lucia-03` | Capturas oficiais, da página "Só em Leonida" (`rockstargames.com/VI/only-in-leonida`), baixadas em 15/11/2026 |
| `referencias/artes-oficiais-nao-usadas/` | Outras artes oficiais baixadas no mesmo dia e não usadas na página |
| Frisos do mosaico, placas, tarjas, setas | Autorais, em CSS e SVG |
| Textos | Escritos para este conceito, a partir dos fatos públicos do jogo (nomes, lugares, data) |
| Data e horário do lançamento | Imprensa brasileira de 14/11/2026 citando a Rockstar: 19/11/2026, 0h de Brasília, PS5 e Xbox Series X\|S |
| Fontes Overpass, Barlow Condensed, Yellowtail | Pacotes `@fontsource`, licença SIL Open Font |
| Assinatura "Desenvolvido por" e `atkinson-hyperlegible-next-subset.woff2` | Bloco padrão da Chibo Dev |

A origem de cada imagem também está gravada nos metadados do próprio arquivo. As imagens foram redimensionadas para o tamanho em que aparecem na tela, para a rolagem não engasgar na gravação.

Grand Theft Auto VI, o logotipo e as artes pertencem à Rockstar Games e à Take-Two Interactive. Este projeto não deve ser publicado em hospedagem em nome da marca.
