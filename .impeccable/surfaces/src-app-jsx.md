---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

# Home (conceito para reels)

Scope: `src/App.jsx`, home única, somente desktop. Visitor mode: Persuade.

Audience and job: quem assiste ao reels no celular; o site aparece em 16:9 dentro de um quadro vertical, rolando de cima a baixo em ~25 s. Ação: parar de rolar o feed, comentar, compartilhar. Conteúdo: logotipo, capa, artes e postais oficiais baixados do site da Rockstar em 15/11/2026; textos próprios em português. Restrições: sem responsividade, links mortos, contagem regressiva real até 19/11/2026 0h de Brasília.

Chosen direction: "A capa". Em 15/11/2026 o usuário rejeitou a primeira direção ("Estrada para Vice City", rodovia desenhada em vetor): disse que parecia cartoon e não GTA. Manteve só a transição dos personagens (divisão Jason/Lucia e montagem do elenco em persianas) e a placa verde final. Escolheu então, numa rodada de pergunta, "Capa do GTA": o mosaico de painéis com frisos das capas da série, montado com as artes oficiais. Direção fixada pelo usuário; não houve novo sorteio.

Lição da rodada: neste projeto, tudo o que é imagem vem da arte oficial; o que eu desenho é só estrutura (frisos, placas, tipografia). Ilustração vetorial autoral lê como cartoon.

Pedidos do usuário depois de aprovar a direção (15/11/2026): cabeçalho só com o ícone à esquerda e "Reserve agora" à direita, sem o botão seguir o mouse; a troca dos personagens não pode piscar (resolvido com uma camada por personagem e persiana por máscara); aproveitar mais o conteúdo do site oficial, mostrando os quatro trailers existentes (sem tocar) e a Ultimate Edition.

## Direction contract

THESIS: A home é a capa do jogo viva: os painéis batem na tela, se desmontam e cada capítulo nasce de dentro de um deles. Recusa o padrão da categoria: uma arte única em tela cheia com botão de reserva embaixo.

OWN-WORLD: friso roxo-escuro #180A2E entre painéis de arte oficial, com cortes levemente inclinados; logotipo oficial sobre o encontro dos painéis; placa de rodovia verde #0B5E55 com borda branca e etiqueta amarela #FFD23C para a contagem; tarjas cheias (ameixa #1C1230 e ouro #FFC24B) para manchetes. Tipos: Barlow Condensed itálico pesado (títulos), Overpass (placas e texto), Yellowtail só em "Bem-vindo a". Neon rosa #FF3FA4 só em "Leonida".

STORY: entende em 1 s que é GTA VI (é a capa) e que faltam dias (a placa ocupa um painel); rola e entra no painel de Jason e Lucia; passa por Leonida e pelo elenco; vê que já há quatro trailers e uma Ultimate Edition; termina com a placa verde tomando a tela.

FIRST VIEWPORT: mosaico de nove painéis em 16:9 com frisos: helicóptero e garota à esquerda; Jason e Lucia grande no centro-esquerda; lancha e Boobie no centro-direita; carro amarelo embaixo; Raul e moto à direita. O logotipo oficial (~27rem) fica sobre o encontro dos painéis centrais. O painel inferior central é a placa verde com "↓ Vice City", "Faltam" e os dígitos da contagem girando. Nav no topo sobre os painéis; "Reserve agora" em pílula no topo direito.

SIGNATURE INTERACTION: ao rolar, os painéis voam para fora e o de Jason e Lucia cresce até virar a tela inteira. Motion grammar: uma entrada por capítulo: painéis batendo do centro para as bordas (capa); tarjas subindo (história); divisão em diagonal (Jason e Lucia; a cena "Um depende do outro" foi retirada a pedido do usuário em 15/11/2026); colunas de postais em sentidos opostos e neon piscando (Leonida); persianas (elenco); pôsteres dados como cartas (trailers); painéis entrando pelas bordas (Ultimate Edition); placa que desce do alto girando (lançamento). Na carga, a splash: selo da Rockstar, logotipo, e o miolo do "VI" vira janela para a capa.

FORM: capa em mosaico; direção escolhida pelo usuário depois de rejeitar a sorteada (seed key cf900b57, índice 7).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
