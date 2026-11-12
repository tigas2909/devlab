<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="lab-shell">
    <header class="lab-header">
      <RouterLink to="/" class="lab-logo"><span class="logo-box">&lt;/&gt;</span> DevLab</RouterLink>
      <nav aria-label="Navegação principal" class="lab-nav">
        <RouterLink to="/">Início</RouterLink><RouterLink to="/aula/1">Aula 01</RouterLink>
        <RouterLink to="/aula/2">Aula 02</RouterLink><RouterLink to="/atividades">Atividades</RouterLink>
        <RouterLink to="/desafios">Desafios</RouterLink><RouterLink to="/playground">Playground</RouterLink>
      </nav>
    </header>
    <div class="lab-body"><aside class="lab-sidebar">
      <span class="side-label">MINICURSO VUE.JS</span>
      <RouterLink to="/aula/1">01 · Vue e Git</RouterLink><RouterLink to="/aula/2">02 · Componentes e reatividade</RouterLink>
      <span class="side-label">PRÁTICA</span>
      <RouterLink to="/atividades">◫ Atividades</RouterLink><RouterLink to="/desafios">◇ Desafios</RouterLink>
      <RouterLink to="/playground">⌘ Playground</RouterLink>
      <div class="sidebar-note">Aprenda no seu ritmo.<br>Experimente, erre e tente de novo.</div>
    </aside><main class="lab-main"><slot /></main></div>
    <footer class="lab-footer">DevLab · Minicurso Vue.js · Ambiente de aprendizagem</footer>
  </div>
</template>
