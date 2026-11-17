---
name: "GTA VI · A capa"
description: "Conceito de fã da home de Grand Theft Auto VI: a capa do jogo em mosaico vivo, com contagem regressiva numa placa de rodovia."
colors:
  gutter: "#180a2e"
  ink: "#12071f"
  plum: "#1c1230"
  cream: "#fff1dc"
  white: "#ffffff"
  gold: "#ffc24b"
  sign: "#0b5e55"
  tab: "#ffd23c"
  neon-pink: "#ff3fa4"
  pink: "#ff4c8b"
typography:
  display-neon:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "23rem"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "0.01em"
  display:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "13.5rem"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "10.4rem"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "8.6rem"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  caption-plate:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "2.3rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.01em"
  sign-numeral:
    fontFamily: "'Overpass', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "16.5rem"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.02em"
  sign-text:
    fontFamily: "'Overpass', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "2.7rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Overpass', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.2
  label:
    fontFamily: "'Overpass', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.09em"
  script:
    fontFamily: "'Yellowtail', cursive"
    fontSize: "4.6rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  none: "0"
  tab: "0.5rem"
  sub: "0.7rem"
  nav: "0.9rem"
  sign-tile: "1.4rem"
  sign: "2.8rem"
  pill: "999px"
spacing:
  plate-gap: "0.5rem"
  frieze: "1.2rem"
  cover-margin: "1.8rem"
  text-margin: "5rem"
components:
  plate-plum:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.cream}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.07em 0.22em 0.03em 0.16em"
  plate-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.plum}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.07em 0.22em 0.03em 0.16em"
  caption-plate:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.cream}"
    typography: "{typography.caption-plate}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem 0.36rem"
  sub-pill:
    backgroundColor: "{colors.plum}"
    textColor: "#fbeefc"
    typography: "{typography.body}"
    rounded: "{rounded.sub}"
    padding: "0.72rem 1.5rem 0.62rem"
  cta:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1.02rem 1.7rem 0.92rem"
  cta-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  cta-sign:
    backgroundColor: "{colors.tab}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1.45rem 2.6rem 1.3rem"
  sign:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.white}"
    typography: "{typography.sign-text}"
    rounded: "{rounded.sign}"
  sign-tab:
    backgroundColor: "{colors.tab}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "0.7rem 1.2rem 0.6rem"
  nav-home:
    backgroundColor: "rgba(28, 18, 48, 0.86)"
    rounded: "{rounded.nav}"
    padding: "0.5rem 0.9rem"
---

# Design System: GTA VI · A capa

## Overview

**Creative North Star: "A capa viva"**

A página é a capa de um GTA posta em movimento: painéis de arte oficial separados por um friso roxo-escuro, com cortes levemente inclinados, que batem na tela, se desmontam e deixam cada capítulo nascer de dentro de um deles. Não existe página que rola: existe um palco fixo de uma tela, e a rolagem só avança uma linha do tempo. Tudo é grande, chapado e de alto contraste, porque o resultado é visto pequeno, numa gravação de tela dentro de um reels.

O sistema tem duas matérias e nada além delas. A primeira é a arte oficial da Rockstar, que fornece toda a imagem, toda a luz de pôr do sol e quase toda a cor. A segunda é a estrutura autoral, que é opaca e sem textura: o friso entre painéis, as tarjas de manchete em ameixa e ouro, a placa de rodovia verde com borda branca e etiqueta amarela, a tipografia e o movimento. A primeira direção deste projeto, com cenário vetorial desenhado, foi rejeitada pelo usuário por parecer cartoon e não GTA; por isso a estrutura nunca tenta ser imagem.

O movimento segue a mesma lógica de materiais rígidos: painéis voam, tarjas sobem por trás de uma máscara, persianas abrem, pôsteres são dados como cartas, a placa desce do alto girando. Cada capítulo tem uma entrada só, e nenhuma se repete. As curvas são desaceleradas (`--ease`, expo/power out); o único efeito elástico é o `back.out` de selos e botões que "carimbam".

**Key Characteristics:**
- Palco fixo de 120 × 67,5 rem (1920 × 1080 a 16px); somente desktop, sem pontos de quebra.
- Toda imagem é arte oficial; o que é desenhado é só friso, corte, tarja, placa, tipo e movimento.
- Estrutura chapada e opaca: sem textura, sem vidro, sem degradê decorativo.
- Tipo condensado itálico peso 900 em caixa alta para tudo o que grita; Overpass para tudo o que informa.
- Um amarelo de ação sobre um mundo roxo; o verde existe só na placa da contagem.
- Uma entrada de movimento por capítulo, sempre de objeto rígido.

## Colors

A paleta autoral é quase toda escura e roxa para sumir atrás da arte; a cor de verdade vem das imagens, e os dois amarelos e o verde ficam reservados para o que precisa ser lido primeiro.

### Primary
- **Ouro Vice City** (`gold`): a cor de ação e de ênfase no mundo roxo. Botão "Reserve agora" do cabeçalho, segunda linha das manchetes em tarja, botão de reproduzir dos pôsteres, marcadores e faixa do elenco, barra de carga, anel de foco, seleção de texto e faíscas do clique.

### Secondary
- **Verde Placa de Rodovia** (`sign`): fundo da placa da contagem, no painel da capa e na placa final em tela cheia. Sempre com borda branca interna e texto branco.
- **Amarelo Etiqueta** (`tab`): o amarelo da própria placa, mais frio e mais claro que o ouro. Etiqueta de data no painel da contagem, linha de plataformas e botão "Reserve agora" da placa final.

### Tertiary
- **Rosa Neon** (`neon-pink`): brilho do letreiro "Bem-vindo a Leonida", aplicado como halo (text-shadow e drop-shadow) sobre letras brancas, nunca como preenchimento.
- **Rosa Estrela** (`pink`): separador em estrela da faixa do elenco. Um único uso na build.

### Neutral
- **Friso** (`gutter`): o roxo-escuro entre os painéis e o fundo do palco, do `html` e dos capítulos em mosaico. É a cor que se vê quando não há arte.
- **Tinta** (`ink`): o tom mais escuro. Fundo da splash e das metades de Jason e Lucia, texto sobre amarelo, base dos véus escuros sob o texto (a 86–94% no pé da imagem, sumindo antes de 60% da altura).
- **Ameixa** (`plum`): fundo das tarjas, das legendas e das pílulas de subtítulo; texto sobre ouro.
- **Creme** (`cream`): texto sobre ameixa e a moldura das fotos e pôsteres soltos (0,42–0,5rem), além do traço da janela da splash.
- **Branco** (`white`): tudo o que é placa (texto, borda, divisórias), nomes de personagens sobre a arte e o corpo do neon.

O texto corrido sobre arte ou ameixa é um branco levemente lilás, sem token próprio na build (varia entre `#f6e8fa` e `#fbeefc`); sobre a placa verde, um branco esverdeado (`#d9f2ec`).

### Named Rules
**A Regra do Verde.** O verde só existe na placa da contagem. Nenhum outro fundo, botão ou tarja usa `sign`; é isso que faz a placa ser reconhecida num relance.

**A Regra dos Dois Amarelos.** `gold` pertence ao mundo roxo (cabeçalho, tarjas, marcadores); `tab` pertence à placa verde. Sobre o verde, o amarelo é sempre `tab`.

**A Regra do Neon Único.** `neon-pink` acende um letreiro só, o de Leonida. Brilho colorido em qualquer outro texto apaga o efeito.

## Typography

**Display Font:** Barlow Condensed, itálico 900 (com Arial Narrow, sans-serif)
**Body Font:** Overpass, pesos 500, 700, 800 e 900 (com Helvetica Neue, Arial, sans-serif)
**Label/Mono Font:** Overpass 800 em caixa alta; Yellowtail 400 como letreiro manuscrito de uso único

**Character:** Barlow Condensed itálico pesado é a voz de capa e de pôster: inclinado, apertado, em caixa alta, com entrelinha abaixo de 0,9. Overpass descende das letras de sinalização rodoviária e fala tanto na placa quanto no texto corrido, o que amarra a contagem ao resto da página.

### Hierarchy
- **Display neon** (900 itálico, 23rem, 0,84): a palavra "Leonida", uma vez só, branca com halo rosa.
- **Display** (900 itálico, 13,5rem, 0,84): nome do personagem em tela cheia no elenco, branco, sem tarja, numa linha só.
- **Headline** (900 itálico, 10,4rem, 0,86): manchetes em tarja. A build usa 6,6rem (título de capítulo com conteúdo abaixo), 10,4rem, 11rem e 11,5rem (frase carimbada sobre a foto dos dois).
- **Title** (900 itálico, 8,6rem, 0,86): nomes de Jason e Lucia, em duas linhas, brancos.
- **Legenda em tarja** (900 itálico, 2,3–2,5rem, 1): nome de pôster e de item sobre ameixa; também a faixa do elenco, em ouro.
- **Numeral da placa** (Overpass 900, 16,5rem, 0,86 na placa final; 800, 7,6rem no painel da capa): os dígitos da contagem.
- **Texto da placa** (Overpass 800, 2,7rem no painel; 3,3–5,2rem na placa final, 1): "Faltam", "Vice City", a data. Caixa mista, como em placa de destino.
- **Body** (Overpass 500, 1,42–1,85rem, 1,2–1,42): uma ou duas frases por capítulo; largura máxima de 35 a 46rem.
- **Label** (Overpass 800, 1,02–1,12rem, 0,07–0,09em, caixa alta): botão e etiquetas. Nomes das unidades da contagem usam 700 com 0,14–0,3em.
- **Script** (Yellowtail 400, 4,6rem, girado −4°): só "Bem-vindo a", acima de "Leonida".

### Named Rules
**A Regra da Caixa Alta Inclinada.** Barlow Condensed aparece sempre em itálico, peso 900 e caixa alta. Não há Barlow reto, leve ou em caixa mista em nenhum lugar.

**A Regra dos Trinta por Cento.** O vídeo é visto a cerca de 30% do tamanho. O menor texto que carrega mensagem tem 1,02rem em peso 800 e caixa alta; frase corrida começa em 1,42rem. Só o aviso legal e a assinatura do rodapé ficam abaixo disso.

## Layout

O palco é uma camada fixa que ocupa a janela, e toda medida é em rem sobre uma grade de 120 × 67,5 rem: `html { font-size: min(0.83333vw, 1.48148vh) }`, de modo que 1rem vale 16px em 1920 × 1080 e encolhe junto com a janela. Não há pontos de quebra nem versão móvel, por decisão de briefing. A geometria dos mosaicos é dada em porcentagem do palco (polígonos TL, TR, BR, BL), e a tipografia e os objetos soltos em rem; as duas contas só coincidem em 16:9.

A rolagem não move conteúdo: um espaçador de 13,7 telas avança uma linha do tempo de 12,7 unidades (1 unidade = 100vh), com `scrub` de 0,55 e rolagem suave (Lenis, `lerp` 0,085). Os capítulos são camadas absolutas empilhadas que se revelam e se escondem por máscara e por `autoAlpha`.

Medidas recorrentes:
- **Margem da capa** (1,8rem): do friso externo até a borda do palco, em mosaicos de painéis (1,5% na horizontal, 2,7% na vertical).
- **Friso** (1,2rem): entre painéis vizinhos, nos dois sentidos, e entre postais empilhados.
- **Margem de texto** (5rem): borda esquerda (ou direita, espelhada) de manchetes e textos; a base fica entre 4,4 e 5,2rem do pé do palco.
- **Entre tarjas** (0,5rem): vão entre as linhas de uma manchete; o subtítulo vem 1,4rem abaixo.
- **Cabeçalho** (1,5rem do topo, 2,5rem das laterais): só a marca "VI" à esquerda e o botão à direita.

O texto mora no terço inferior esquerdo, sobre a arte; o topo fica para os rostos. A exceção é o título de capítulo com conteúdo abaixo (trailers), no alto à esquerda.

### Named Rules
**A Regra dos 120 por 67,5.** Toda medida é rem dessa grade ou porcentagem do palco. Nada em px, nada em vw ou vh solto, nenhuma media query de largura.

**A Regra de Uma Tela.** Cada capítulo é uma composição de tela cheia que funciona como miniatura. Nada depende de rolar dentro do capítulo para ser entendido.

## Elevation & Depth

O sistema é chapado. Painéis, tarjas, friso e placa não têm sombra: a profundidade vem de sobreposição, de máscara (`clip-path`, `mask`) e do véu escuro `ink` no pé das imagens que recebem texto. Sombra existe só em objetos soltos, que estão "em cima" do palco: fotos e pôsteres com moldura creme, o logotipo sobre o encontro dos painéis e os botões amarelos. Todas caem para baixo, são difusas e têm espalhamento negativo, como papel apoiado, nunca como cartão flutuante.

### Shadow Vocabulary
- **Botão** (`box-shadow: 0 0.8rem 1.4rem -0.7rem rgba(18, 7, 31, 0.7)`): "Reserve agora" e, um pouco maior, o botão de reproduzir.
- **Foto solta** (`box-shadow: 0 1.6rem 2.2rem -1rem rgba(8, 3, 16, 0.75)`): fotos pequenas com moldura creme sobre a arte.
- **Pôster** (`box-shadow: 0 2.2rem 2.8rem -1.4rem rgba(6, 2, 14, 0.85)`): pôsteres de trailer sobre o friso.
- **Logotipo** (`filter: drop-shadow(0 1.4rem 1.5rem rgba(22, 6, 44, 0.6))`): logotipo oficial sobre a capa.
- **Neon** (`filter: drop-shadow(0 0 1rem var(--neon-pink)) drop-shadow(0 0 3.4rem rgba(255, 63, 164, 0.8))`): o letreiro de Leonida; é luz, não elevação.

### Named Rules
**A Regra do Objeto Solto.** Só ganha sombra o que poderia ser pego com a mão: foto, pôster, logotipo, botão. Painel, tarja e placa são a própria superfície e ficam sem sombra.

## Shapes

A forma dominante é o quadrilátero de canto vivo com um lado levemente fora do esquadro. Cada painel é um polígono recortado em que um ou dois vértices saem do alinhamento entre 0,4% e 1,8% do palco, o suficiente para o friso entre dois painéis afinar de uma ponta à outra, como nas capas da série. O corte grande, em diagonal (12% de desvio na largura), é reservado à divisão entre Jason e Lucia e às transições que varrem a tela.

Tarjas, legendas, pôsteres e fotos têm canto vivo (raio 0). O arredondamento pertence à sinalização e ao que se toca: a placa (borda branca interna de 0,4rem com raio de 1,4rem no painel; 0,55rem com raio de 2,8rem na placa final, recuada 1,3–1,5rem da borda), a etiqueta amarela (0,5rem), a pílula de subtítulo (0,7rem), a marca do cabeçalho (0,9rem) e o botão em pílula (999px). Objetos soltos ficam girados entre 1° e 5°, alternando o sentido; tarjas e painéis nunca giram em repouso.

Os ícones são três setas de traço grosso (7 em caixa de 48), ponta quadrada e junta viva, desenhadas como as de placa de rodovia, mais o triângulo de reproduzir. Não há biblioteca de ícones.

## Components

Tudo aqui é sinalização ou material impresso: placa, etiqueta, tarja, pôster, foto. Nada parece interface de aplicativo.

### Buttons
- **Shape:** pílula (999px), Overpass 800 em caixa alta, 1,02rem com 0,09em de espaçamento.
- **Primary:** fundo `gold`, texto `ink`, espaço interno 1,02rem 1,7rem 0,92rem, sombra de botão. Fica no canto superior direito durante toda a rolagem.
- **Hover / Focus:** o fundo passa a branco em 0,2s. Foco visível: contorno `gold` de 0,2rem afastado 0,2rem.
- **Na placa:** fundo `tab`, 1,8rem, espaço interno 1,45rem 2,6rem 1,3rem, com a seta de saída à direita; entra com `back.out` (escala de 0,5 a 1).

### Chips
- **Etiqueta amarela:** fundo `tab`, texto `ink`, Overpass 800 em caixa alta (1,05–1,12rem, 0,07–0,08em), raio 0,5rem na placa. É a etiqueta da placa de rodovia: carrega data e condição ("19 nov 2026 · 0h de Brasília"), não categoria.
- **Marcadores do elenco:** tiras chapadas de 2,8 × 0,42rem em `gold`, 30% de opacidade em repouso e 100% na vez.

### Cards / Containers
- **Painel de arte:** polígono recortado sobre o friso, sem raio, sem borda, sem sombra; a imagem cobre o quadro com leve zoom (1,06) e "respira" em ciclos de 9, 12 e 15s (escala +0,12, alternada).
- **Foto solta e pôster:** moldura `cream` (0,42rem na foto 16:10; 0,5rem no pôster 27:40), canto vivo, sombra de objeto solto, giro de 1° a 5°. O pôster sobe 0,8rem no hover e leva uma legenda em tarja que vaza 0,6rem para fora da moldura.
- **Véu de texto:** degradê de `ink` do pé da imagem para transparente, só onde há texto branco sem tarja.

### Navigation
- **Cabeçalho:** a marca "VI" oficial (4,6rem) numa base `plum` a 86% com raio de 0,9rem à esquerda; o botão primário à direita. Sem menu, sem links de seção. No hover a marca gira −4° e cresce 6%. O cabeçalho some quando a placa final desce.

### Tarja de manchete
A assinatura tipográfica. Cada linha da manchete é uma faixa opaca justa ao texto (espaço interno 0,07em 0,22em 0,03em 0,16em), empilhada à esquerda com 0,5rem de vão: primeira linha `plum` com texto `cream`, segunda linha `gold` com texto `plum`. Manchete de uma linha só usa a faixa `gold`. Entra subindo por trás de uma máscara ou abrindo da esquerda para a direita. Nomes de personagens não usam tarja: vão em branco direto sobre a arte, com véu.

### Pílula de subtítulo
Uma frase de apoio em Overpass 500 (1,75rem) sobre `plum`, raio de 0,7rem, espaço interno 0,72rem 1,5rem 0,62rem, logo abaixo da manchete. É a única caixa arredondada sobre a arte.

### Legenda em tarja
Nome curto de um item (pôster, objeto da edição) em Barlow itálico 900 de 2,3–2,5rem sobre `plum`, texto `cream`, canto vivo, ancorada no canto inferior esquerdo da imagem a que pertence.

### Placa de rodovia
O componente da contagem. Fundo `sign`, borda branca interna arredondada, texto branco em Overpass 800. No painel da capa: "Faltam" à esquerda, seta e "Vice City" à direita, quatro unidades com dígitos de 7,6rem e nomes em caixa alta espaçada, etiqueta amarela no canto inferior direito. Na placa final, em tela cheia: logotipo, "Você chega em", destino com seta para cima, dígitos de 16,5rem separados por divisórias brancas de 0,34rem, data, botão `tab`, e um brilho que varre a face a cada 6s. Os dígitos rolam para baixo a cada troca. Depois do lançamento a contagem vira a frase "Já disponível". A seta do painel balança na vertical (1,5s) para indicar a rolagem.

### Letreiro de neon
"Bem-vindo a" em Yellowtail girado −4° e "Leonida" em display neon, brancos com halo `neon-pink`, centrados sobre os postais escurecidos a 42% de `ink`. As letras acendem uma a uma, piscando.

### Rodapé
Dentro da placa final: fio branco a 40% no topo, aviso de conceito não oficial à esquerda (Overpass 500, 0,9rem) e a assinatura Chibo Dev à direita, que segue o padrão próprio do autor (Atkinson Hyperlegible Next, pílulas escuras com contorno, vermelho `#c9171e` e magenta `#c13584` só no hover).

## Do's and Don'ts

### Do:
- **Do** usar só arte oficial da Rockstar como imagem, com a origem registrada no README.
- **Do** separar painéis vizinhos por 1,2rem de `gutter` e tirar um lado de cada painel do esquadro (0,4% a 1,8% do palco).
- **Do** escrever toda medida em rem da grade de 120 × 67,5 ou em porcentagem do palco.
- **Do** pôr manchetes sobre arte em tarjas opacas: `plum` com `cream`, depois `gold` com `plum`.
- **Do** compor títulos em Barlow Condensed itálico 900, caixa alta, entrelinha de 0,84 a 0,86.
- **Do** usar `tab` para qualquer amarelo sobre a placa verde, e `gold` no resto.
- **Do** dar sombra difusa, para baixo e com espalhamento negativo, só a foto, pôster, logotipo e botão.
- **Do** dar a cada capítulo uma entrada própria, de objeto rígido (voar, subir, abrir, carimbar, dar cartas).
- **Do** manter o aviso de conceito não oficial e a assinatura Chibo Dev no rodapé.

### Don't:
- **Don't** desenhar cenário, personagem ou ilustração em vetor: a primeira direção fez isso e foi rejeitada como "cartoon, não GTA".
- **Don't** usar `sign` fora da placa da contagem.
- **Don't** acender `neon-pink` em outro texto além do letreiro de Leonida.
- **Don't** usar Barlow Condensed reto, leve ou em caixa mista.
- **Don't** arredondar painéis, tarjas, pôsteres ou fotos; o raio é da placa, da etiqueta, da pílula e do botão.
- **Don't** pôr sombra em painel, tarja ou placa.
- **Don't** usar a etiqueta amarela ou o letreiro manuscrito como rótulo genérico acima de títulos; eles são peças da placa e do postal.
- **Don't** escrever texto que carrega mensagem abaixo de 1,02rem.
- **Don't** criar pontos de quebra ou versão móvel; o palco é 16:9 por briefing.
- **Don't** apresentar a página como site oficial da Rockstar nem inventar preço, nota ou número de pré-venda.
