# Entrevista: TI — oportunidade ou risco?

Página web estática que apresenta uma entrevista com cards interativos, seções de tecnologias utilizadas, prós e contras da profissão e qualidades essenciais. O foco do projeto é responsividade, acessibilidade e um visual limpo, usando apenas HTML, CSS e JavaScript sem dependências de frameworks.

## Visão geral

- Cards de perguntas e respostas com efeito flip (clique, Enter ou Espaço)
- Grade responsiva com CSS Grid (colunas automáticas via `auto-fit`/`minmax`)
- Tipografia fluida (`clamp`) e breakpoints para diferentes larguras
- Suporte a conteúdo longo no verso do card (scroll interno)
- Acessível: foco visível, navegação por teclado e cores com bom contraste

## Estrutura do projeto

```
work_dad/
├── index.html        # Estrutura da página
├── index.css         # Estilos, responsividade e temas
├── script.js         # Lógica dos cards (flip, teclado, pequenos aprimoramentos)
└── assets/
		└── img/         # Imagens e ícones (inclui favicons)
```

## Tecnologias

- HTML5, CSS3, JavaScript (vanilla)
- Google Fonts (Open Sans)
- Ícones de tecnologias via Devicon (CDN)

## Como executar localmente

Opção 1 — abrir direto no navegador:
- Dê um duplo clique em `index.html` (ou arraste para o navegador).

Opção 2 — servidor local (recomendado para testes de rota/recursos):

```
# Windows (cmd)
python -m http.server 5500

# Em seguida, abra no navegador:
http://localhost:5500/
```

Se usa VS Code, a extensão “Live Server” também funciona muito bem para auto-reload.

## Como editar o conteúdo

- Cards de perguntas/respostas: em `index.html`, seção `<section class="card-grid">`.
	- Para criar um novo card, duplique um `<article class="card" ...>` e edite os textos dentro de `.card-front` (pergunta) e `.card-back` (resposta).
- Destaque da resposta da seção “Vantagens/Desvantagens”: em `index.html`, o parágrafo da resposta tem a classe `answer` dentro de `.entry-adv`. Os estilos ficam em `index.css` (`.adv-disadv .entry-adv .answer`).
- Tecnologias: em `index.html`, seção `<section class="card-tech">`.

## Personalização de estilos

- Cores principais: ajustáveis em `index.css` nos seletores `header`, `body` (gradiente), `.card-front`, e na borda/fundo da `.answer`.
- Layout dos cards: `.card-grid`, `.card`, `.card-front`, `.card-back`.
- Breakpoints principais: `@media (min-width: 640px)` e `@media (min-width: 1024px)`.

## Acessibilidade

- Navegação por teclado nos cards (`Click`/`Enter`/`Espaço` para virar)
- `:focus-visible` para foco claro ao tabular
- Conteúdo longo no verso com rolagem sem interromper o estado do card

## Publicação (GitHub Pages)

1. Crie um repositório e envie os arquivos.
2. No GitHub, acesse Settings → Pages.
3. Em “Build and deployment”, escolha “Deploy from a branch”.
4. Selecione a branch principal (ex.: `main`) e a pasta root (`/`).
5. Salve; aguarde a URL ficar disponível.

## Créditos

- Ícones de tecnologias: [Devicon](https://devicon.dev/)
- Fonte: [Open Sans](https://fonts.google.com/specimen/Open+Sans)

## Licença

Projeto com fim educacional. Adicione um arquivo `LICENSE` (por exemplo, MIT) se desejar publicar sob uma licença específica.

