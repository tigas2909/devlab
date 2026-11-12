<script setup lang="ts">

</script>

<template>
  <div class="home">
    <!-- CABEÇALHO -->
    <header class="header">
      <div class="container header-content">
        <a to="/" class="brand">
          <span class="brand-icon">&lt;/&gt;</span>
          <span>DevLab</span>
        </a>

        <nav class="navigation">
          <RouterLink to="/aula/1">Aula 1</RouterLink>
          <RouterLink to="/aula/2">Aula 2</RouterLink>
          <RouterLink to="/atividades">Atividades</RouterLink>
          <RouterLink to="/desafios">Desafios</RouterLink>
          <RouterLink to="/playground">Playground</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <!-- APRESENTAÇÃO -->
      <section id="inicio" class="hero">
        <div class="container hero-content">
          <div class="hero-text">
            <span class="eyebrow">APRENDA • PRATIQUE • DESENVOLVA</span>

            <h1>
              Seu espaço para
              <span>aprender programação.</span>
            </h1>

            <p class="hero-description">
              Aprenda novas tecnologias, explore materiais,
              pratique com exercícios e desenvolva suas
              habilidades em programação.
            </p>

            <div class="hero-details">
              <span>◈ Conteúdo organizado</span>
              <span>◈ Aprendizado prático</span>
              <span>◈ Projetos reais</span>
            </div>
          </div>

          <!-- ESPAÇO PARA O MASCOTE -->
          <div class="hero-visual">
            <div class="mascot-placeholder">
              <span class="mascot-symbol">&lt;/&gt;</span>
              <p>Espaço para o Vuati</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CURSOS -->
      <section id="cursos" class="section courses">
        <div class="container">
          <div class="section-heading">
            <div>
              <span class="eyebrow">EXPLORE</span>
              <h2>Cursos disponíveis</h2>
              <p>
                Escolha uma tecnologia e comece sua jornada.
              </p>
            </div>
          </div>

          <div class="course-grid">
            <!-- CARD DE EXEMPLO -->
            <article class="course-card">
              <div class="course-top">
                <span class="course-category">DESENVOLVIMENTO WEB</span>
                <span class="course-status">Disponível</span>
              </div>

              <div class="course-icon">
                &lt;/&gt;
              </div>

              <h3>Vue.js</h3>

              <p>
                Aprenda os fundamentos do Vue.js,
                componentes, reatividade e desenvolvimento
                de interfaces modernas.
              </p>

              <div class="course-tags">
                <span>Vue 3</span>
                <span>JavaScript</span>
                <span>Git</span>
              </div>

              <div class="course-footer">
                <span>Minicurso</span>
                <a href="/aula/1" aria-label="Acessar curso Vue.js">
                  Acessar curso →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- SOBRE -->
      <section id="sobre" class="section about">
        <div class="container about-content">
          <div>
            <span class="eyebrow">SOBRE A PLATAFORMA</span>

            <h2>
              Aprender é mais do que
              <span>assistir a uma aula.</span>
            </h2>
          </div>

          <div class="about-description">
            <p>
              O DevLab é um ambiente dedicado ao aprendizado
              prático de programação.
            </p>

            <p>
              Aqui, materiais, exercícios, desafios e
              exemplos são organizados para facilitar
              o acompanhamento de cada etapa.
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- RODAPÉ -->
    <footer class="footer">
      <div class="container footer-content">
        <span class="footer-brand">&lt;/&gt; DevLab</span>

        <p>
          Aprenda. Experimente. Desenvolva.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: var(--bg, #0b0f14);
  color: var(--text, #f3f4f6);
}

.container {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
}

/* HEADER */

.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(11, 15, 20, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border, #303843);
}

.header-content {
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 19px;
  font-weight: 750;
  color: var(--brand, #ece8df);
  text-decoration: none;
}

.brand-icon {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  background: var(--surface-2, #1d2630);
  border: 1px solid var(--border, #303843);
  border-radius: 8px;
  font-family: monospace;
  font-size: 13px;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 28px;
}

.navigation a {
  color: var(--text-2, #9ca3af);
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s;
}

.navigation a:hover {
  color: var(--text, #f3f4f6);
}

/* HERO */

.hero {
  padding: 110px 0 100px;
  border-bottom: 1px solid var(--border, #303843);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  align-items: center;
  gap: 60px;
}

.eyebrow {
  display: inline-block;
  color: var(--brand, #ece8df);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.hero h1 {
  margin: 22px 0;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.12;
}

.hero h1 span {
  display: block;
  color: var(--brand, #ece8df);
}

.hero-description {
  max-width: 580px;
  color: var(--text-2, #9ca3af);
  font-size: 17px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 46px;
  padding: 12px 22px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: 0.2s ease;
}

.button-primary {
  background: var(--brand, #ece8df);
  color: var(--brand-ink, #0b0f14);
  border: 1px solid var(--brand, #ece8df);
}

.button-primary:hover {
  transform: translateY(-2px);
  background: transparent;
  color: var(--brand, #ece8df);
}

.button-secondary {
  color: var(--text, #f3f4f6);
  background: var(--surface, #151b23);
  border: 1px solid var(--border, #303843);
}

.button-secondary:hover {
  background: var(--surface-2, #1d2630);
}

.hero-details {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  color: var(--text-2, #9ca3af);
  font-size: 12px;
}

/* MASCOTE */

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mascot-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 330px;
  aspect-ratio: 1;
  background: var(--surface, #151b23);
  border: 1px dashed var(--border-strong, #3d4754);
  border-radius: 24px;
}

.mascot-symbol {
  font-size: 70px;
  font-family: monospace;
  color: var(--brand, #ece8df);
}

.mascot-placeholder p {
  color: var(--text-2, #9ca3af);
  font-size: 13px;
}

/* SEÇÕES */

.section {
  padding: 90px 0;
}

.section-heading {
  margin-bottom: 36px;
}

.section-heading h2,
.about h2 {
  margin: 14px 0;
  font-size: clamp(28px, 3vw, 38px);
  letter-spacing: -1px;
}

.section-heading p {
  color: var(--text-2, #9ca3af);
}

/* CURSOS */

.course-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.course-card {
  display: flex;
  flex-direction: column;
  min-height: 330px;
  padding: 28px;
  background: var(--surface, #151b23);
  border: 1px solid var(--border, #303843);
  border-radius: 14px;
  transition: border-color 0.2s, transform 0.2s;
}

.course-card:hover {
  border-color: var(--border-strong, #3d4754);
  transform: translateY(-3px);
}

.course-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.course-category {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--text-2, #9ca3af);
}

.course-status {
  padding: 5px 10px;
  border-radius: 20px;
  background: rgba(236, 232, 223, 0.1);
  color: var(--brand, #ece8df);
  font-size: 11px;
}

.course-status.pending {
  color: var(--text-2, #9ca3af);
  background: var(--surface-2, #1d2630);
}

.course-icon {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  margin: 28px 0 12px;
  border-radius: 12px;
  background: var(--surface-2, #1d2630);
  border: 1px solid var(--border, #303843);
  color: var(--brand, #ece8df);
  font-family: monospace;
  font-size: 20px;
  font-weight: 700;
}

.course-card h3 {
  margin: 8px 0 12px;
  font-size: 24px;
}

.course-card > p {
  margin: 0;
  color: var(--text-2, #9ca3af);
  font-size: 14px;
  line-height: 1.8;
}

.course-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.course-tags span {
  padding: 6px 10px;
  background: var(--surface-2, #1d2630);
  border-radius: 6px;
  font-size: 11px;
  color: var(--text-2, #9ca3af);
}

.course-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 26px;
  color: var(--text-2, #9ca3af);
  font-size: 12px;
}

.course-footer a {
  color: var(--brand, #ece8df);
  font-weight: 700;
  text-decoration: none;
}

.course-footer a:hover {
  text-decoration: underline;
}

.coming-soon {
  opacity: 0.7;
}

/* SOBRE */

.about {
  background: var(--surface, #151b23);
  border-top: 1px solid var(--border, #303843);
  border-bottom: 1px solid var(--border, #303843);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: center;
}

.about h2 span {
  color: var(--brand, #ece8df);
}

.about-description p {
  color: var(--text-2, #9ca3af);
  line-height: 1.9;
  font-size: 15px;
}

/* FOOTER */

.footer {
  padding: 30px 0;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-brand {
  color: var(--brand, #ece8df);
  font-weight: 800;
}

.footer p {
  color: var(--text-2, #9ca3af);
  font-size: 12px;
}

/* RESPONSIVIDADE */

@media (max-width: 850px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero {
    padding: 75px 0;
  }

  .hero-visual {
    order: -1;
  }

  .mascot-placeholder {
    max-width: 200px;
  }

  .course-grid,
  .about-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 550px) {
  .container {
    width: min(100% - 32px, 1120px);
  }

  .header-content {
    flex-wrap: wrap;
    padding: 14px 0;
  }

  .navigation {
    gap: 16px;
  }

  .hero h1 {
    letter-spacing: -1px;
  }

  .section {
    padding: 60px 0;
  }

  .course-card {
    padding: 22px;
  }

  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
