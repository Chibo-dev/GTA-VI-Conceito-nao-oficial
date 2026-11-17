# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React (Vite) + GSAP + componentes do React Bits (+ Lenis para rolagem suave). Escolha do usuário. Somente desktop; responsividade fora de escopo.

## Users

Público do Instagram que assiste a um reels de ~30 s no celular. O site aparece como gravação de tela 16:9 dentro de um quadro vertical, rolando do topo ao rodapé. Quem "usa" o site de fato é o autor do reels (Chibo Dev), gravando a rolagem no desktop.

## Product Purpose

Um conceito de fã, não oficial, da home de Grand Theft Auto VI, feito "do jeito" do autor para a série de reels "pego um assunto viral e faço a minha versão do site". Sucesso = a pessoa para de rolar o feed nos primeiros 2 segundos e a rolagem entrega um momento novo a cada trecho.

## Positioning

GTA VI é o lançamento mais aguardado da década e sai em 19/11/2026. O reels sai nos dias anteriores, então a contagem regressiva ao vivo até o lançamento é o gancho que nenhum outro conceito de site tem nesta semana.

## Operating Context

Gravação de tela em desktop (~1440–1920 px de largura), rolagem contínua com mouse/trackpad. O vídeo final é visto pequeno, no celular: formas grandes, cor e movimento contam mais que detalhe fino.

## Capabilities and Constraints

- Apenas a home. Links e botões não precisam levar a lugar nenhum.
- Sem compra real, sem login, sem formulários.
- Contagem regressiva ao vivo (dias, horas, minutos, segundos) até 19/11/2026 00:00 no horário de Brasília (UTC−3). Depois desse instante, mostra estado "já disponível".
- Textos em português do Brasil; nomes próprios em inglês (Grand Theft Auto VI, Vice City, Leonida).
- Clima visual fixado pelo usuário em 15/11/2026: pôr do sol de Vice City (rosa, laranja, roxo, neon).
- No mesmo dia o usuário rejeitou cenários desenhados em vetor ("parece cartoon, não GTA"): a imagem vem sempre da arte oficial.
- Não publicar como Artifact nem em endereço que se passe pela marca; manter o aviso de conceito não oficial no rodapé e o `noindex`. A pedido do usuário, o projeto vai para um repositório privado no GitHub e para a Vercel, como peça de portfólio para mostrar a um interessado.

## Brand Commitments

- Nome "Grand Theft Auto VI" e o numeral VI são da Rockstar Games; o conceito os usa como fã, sem se passar pelo site oficial.
- Rodapé com a assinatura padrão Chibo Dev ("Desenvolvido por" + pílula do site + pílula do Instagram @chibodev), no modelo de daphinesantana.com.br.

## Evidence on Hand

- Data e horário de lançamento no Brasil: 19/11/2026, 0h de Brasília, PS5 e Xbox Series X|S (imprensa brasileira de 14/11/2026 citando a Rockstar). Sem data para PC.
- Protagonistas: Jason Duval e Lucia Caminos. Estado fictício de Leonida; cidade de Vice City.
- Imagens oficiais: o usuário autorizou baixar artes e capturas do site da Rockstar para `public/assets/`. A origem de cada arquivo fica registrada no README.
- Conteúdo do site oficial em 15/11/2026: quatro vídeos (1º trailer, 2º trailer, Trailer de lançamento, Um Olhar Estendido); Ultimate Edition ("coleção exclusiva de itens" ligados à história de Jason e Lucia; entre eles o Grotti Cheetah (1995) e os revólveres Hawk & Little Morgan); bônus de reserva Pacote Vintage Vice City.
- Não há: preços, notas de imprensa, números de pré-venda. Nada disso deve ser inventado como fato.

## Product Principles

1. Lê-se a 30% do tamanho: cada trecho da rolagem precisa funcionar como miniatura.
2. Os dois primeiros segundos decidem tudo: a abertura já é o momento mais forte.
3. Um momento novo a cada rolagem, sem repetir o mesmo truque.
4. A contagem regressiva é o coração: é o que torna o vídeo "desta semana".
5. Conceito de fã, não site oficial.
