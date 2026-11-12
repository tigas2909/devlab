# DevLab — Minicurso Vue.js

Projeto Vue 3 + Vite + TypeScript. Home original preservada e páginas-base prontas para personalização.

## Executar

Requer Node.js 20.19+.

```bash
npm install
npm run dev
```

Para verificar o build: `npm run build`.

## Páginas

- `/` — página inicial original
- `/aula/1` — aula 01: introdução a Vue.js, estrutura do projeto e Git
- `/aula/2` — aula 02: componentes, diretivas e reatividade
- `/atividades` — atividades guiadas com filtros e marcação manual de conclusão
- `/desafios` — desafios com enunciados e códigos iniciais
- `/playground` — editor HTML/CSS/JavaScript com execução em iframe isolado

## Personalizar

- `src/arquivos/conteudo.ts`: conteúdo didático, atividades e desafios.
- `src/component/LabLayout.vue`: cabeçalho, menu e estrutura compartilhada.
- `src/component/LessonPage.vue` e `TaskPage.vue`: templates reutilizáveis.
- `src/style/tokens.css` e `src/style/pages.css`: cores e estilos.
- `src/router/index.ts`: rotas.

O playground não compila componentes Vue `.vue`; use o Vite local para executar esses exemplos. O progresso das atividades é armazenado no `localStorage` do navegador. O material didático é uma base editável, não uma transcrição dos slides originais.
