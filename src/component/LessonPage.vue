<script setup lang="ts">
import LabLayout from './LabLayout.vue'
import { lessons } from '../arquivos/conteudo'
import { RouterLink } from 'vue-router'
const props = defineProps<{ number: 1 | 2 }>()
const lesson = lessons[props.number]!
</script>
<template><LabLayout>
  <div class="page-kicker">TRILHA VUE.JS / {{ lesson.duration.toUpperCase() }}</div>
  <div class="page-heading"><div><h1>{{ lesson.title }}</h1><p>{{ lesson.subtitle }}</p></div><span class="badge">{{ lesson.duration }}</span></div>
  <section class="panel"><h2>Objetivos da aula</h2><ul class="check-list"><li v-for="item in lesson.objectives" :key="item">{{ item }}</li></ul></section>
  <div class="section-title"><h2>Conteúdo da aula</h2><span>{{ lesson.sections.length }} tópicos</span></div>
  <section v-for="(section, i) in lesson.sections" :key="section.title" class="panel lesson-section">
    <span class="topic-number">TÓPICO {{ String(i + 1).padStart(2, '0') }}</span><h3>{{ section.title }}</h3><p>{{ section.body }}</p>
    <pre v-if="section.code"><code>{{ section.code }}</code></pre><div v-if="section.hint" class="callout">💡 {{ section.hint }}</div>
  </section>
  <div class="page-actions"><RouterLink class="btn btn-primary" to="/atividades">Praticar atividades →</RouterLink><RouterLink class="btn btn-outline" to="/playground">Abrir playground</RouterLink><RouterLink v-if="number === 1" class="btn btn-outline" to="/aula/2">Próxima aula →</RouterLink></div>
</LabLayout></template>
