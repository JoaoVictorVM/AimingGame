# AimingGame

## Visão geral

AimingGame é um aim trainer simples desenvolvido com módulos JavaScript e CSS modular. O jogo centraliza em acertar um alvo móvel dentro de um tempo limitado, mensurar a pontuação e manter o usuário no controle da mira com opções visuais e sonoras.

## Sumário

- [AimingGame](#aiminggame)
  - [Visão geral](#visão-geral)
  - [Sumário](#sumário)
  - [Recursos](#recursos)
  - [Pilha técnica](#pilha-técnica)
  - [Como executar](#como-executar)
    - [Pré-requisitos](#pré-requisitos)
    - [Abrindo diretamente](#abrindo-diretamente)
    - [Usando um servidor local leve](#usando-um-servidor-local-leve)
  - [Como jogar](#como-jogar)
  - [Estrutura do projeto](#estrutura-do-projeto)
  - [Possíveis melhorias](#possíveis-melhorias)
  - [Contribuindo](#contribuindo)
  - [Licença](#licença)

## Recursos

- Temporizador de 30 segundos com atualização visual em `Timer`.
- Contador de pontuação incremental em `Score`.
- Alvo circular que reaparece em posições aleatórias por meio de `Target` e `randomPosition`.
- Mira customizável com os componentes `Crosshair` e `CrosshairSelector`, incluindo previews interativos.
- Feedback sonoro leve acionado pelo `SoundManager` ao acertar o alvo.
- Modal final (`EndModal`) que resume a pontuação quando o tempo acaba.
- Layout responsivo e organizado com estilos em `src/css` para manter contraste, tipografia e responsividade.

## Pilha técnica

- **HTML**: `index.html` carrega a cena básica e os elementos de interface.
- **CSS**: Arquivos divididos em `base/`, `layout/` e `components/` importados por `src/css/main.css`.
- **JavaScript**: Parcela lógica em módulos dentro de `src/js` (Game, Timer, Score, Target, Crosshair, CrosshairSelector, SoundManager, EndModal e utilitários).
- **Assets**: Ícone `favicon` e estilos compartilhados garantem identidade visual consistente.

## Como executar

### Pré-requisitos

- Navegador moderno (Chrome, Edge, Firefox) com suporte a módulos ES e Web Audio.

### Abrindo diretamente

1. Abra `index.html` em `src/` com duplo clique ou arraste para o navegador.

### Usando um servidor local leve

1. No terminal, navegue até a raiz do projeto.
2. Execute `npx serve . -l 4173` ou `python -m http.server 4173` (sintaxe válida para Python 3).
3. Acesse `http://localhost:4173` no navegador e interaja com o jogo.

## Como jogar

1. Clique no botão `Iniciar` para começar a contagem regressiva de 30 segundos.
2. Mire com o cursor e clique sobre o `#target` para marcar pontos. O alvo se reposiciona automaticamente usando `randomPosition`.
3. Use a seção de seleção de mira para alternar entre a cruz ou o ponto central; a classe ativa muda no DOM para realçar a escolha.
4. O `Score` aumenta e o `SoundManager` emite um toque breve sempre que um acerto é registrado.
5. Quando o `Timer` chega a zero, o `EndModal` aparece com o placar final e o botão volta a mostrar "Iniciar".

## Estrutura do projeto

- `index.html`: entrada da aplicação.
- `src/css/`: temas e componentes visuais segmentados (`base/`, `layout/`, `components/`).
- `src/js/main.js`: ponto de montagem que instancia `Game` e conecta o botão `start`.
- `src/js/game/`: lógica de jogo (Game, Timer, Score, Target, SoundManager).
- `src/js/components/`: elementos reutilizáveis (Crosshair, CrosshairSelector, EndModal, Target).
- `src/js/utils/randomPosition.js`: cálculo de posição aleatória para o alvo.
- `src/assets/favicon/`: recursos visuais fixos.

## Possíveis melhorias

1. Adicionar níveis de dificuldade ajustando a duração do `Timer` e a velocidade de reposicionamento do alvo.
2. Persistir melhores pontuações no `localStorage` para exibir um ranking.
3. Implementar suporte para telas sensíveis ao toque ou controles com gamepad.
4. Permitir personalização de cores/temas via CSS custom properties.
5. Incluir testes automáticos (unitários) para as classes `Timer`, `Score` e `Game`.

## Contribuindo

1. Abra uma issue descrevendo uma sugestão ou bug.
2. Crie um branch com prefixo `feature/` ou `fix/`.
3. Submeta um pull request com descrição clara das alterações e impactos visuais.
4. Atualize as seções acima se a arquitetura mudar.

## Licença

MIT
