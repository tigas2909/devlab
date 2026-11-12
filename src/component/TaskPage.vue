<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import LabLayout from './LabLayout.vue'
import { activities, challenges } from '../arquivos/conteudo'
const props = defineProps<{ kind: 'activities' | 'challenges' }>()
const tasks = props.kind === 'activities' ? activities : challenges
const title = props.kind === 'activities' ? 'Atividades práticas' : 'Desafios de programação'
const filter = ref(0)
const selected = ref(tasks[0]!.id)
const completed = ref<string[]>(JSON.parse(localStorage.getItem('devlab-completed') || '[]') as string[])
const visible = computed(() => tasks.filter(t => filter.value === 0 || t.lesson === filter.value))
const current = computed(() => tasks.find(t => t.id === selected.value) || visible.value[0]!)
function selectFilter(n: number) { filter.value = n; if (!visible.value.some(t => t.id === selected.value)) selected.value = visible.value[0]!.id }
function toggle(id: string) { completed.value = completed.value.includes(id) ? completed.value.filter(x => x !== id) : [...completed.value, id]; localStorage.setItem('devlab-completed', JSON.stringify(completed.value)) }
async function copy(text: string) { try { await navigator.clipboard.writeText(text) } catch { /* Clipboard may be unavailable on insecure origins. */ } }
</script>
<template><LabLayout>
  <div class="page-kicker">TRILHA VUE.JS / PRÁTICA</div><div class="page-heading"><div><h1>{{ title }}</h1><p>{{ kind === 'activities' ? 'Exercícios guiados para fixar os conceitos das aulas.' : 'Projetos para colocar o conhecimento à prova.' }}</p></div><span class="badge">{{ tasks.filter(t => completed.includes(t.id)).length }}/{{ tasks.length }} concluídos</span></div>
  <div class="tabs"><button v-for="n in [0, 1, 2]" :key="n" :class="['tab', { active: filter === n }]" @click="selectFilter(n)">{{ n === 0 ? 'Todas' : `Aula 0${n}` }}</button></div>
  <div class="task-layout"><div class="task-list"><button v-for="task in visible" :key="task.id" :class="['task-card', { selected: current.id === task.id }]" @click="selected = task.id"><span class="task-meta">AULA 0{{ task.lesson }} · {{ task.level }}</span><strong>{{ task.title }}</strong><small>{{ completed.includes(task.id) ? '✓ Concluído' : 'Pendente' }}</small></button></div>
  <article class="panel task-detail"><span class="topic-number">AULA 0{{ current.lesson }} · {{ current.level.toUpperCase() }}</span><h2>{{ current.title }}</h2><p>{{ current.description }}</p><h3>O que fazer</h3><ol><li v-for="step in current.steps" :key="step">{{ step }}</li></ol><div class="code-heading"><h3>Código inicial</h3><button class="text-btn" @click="copy(current.starter)">Copiar código</button></div><pre><code>{{ current.starter }}</code></pre><div class="page-actions"><button class="btn btn-primary" @click="toggle(current.id)">{{ completed.includes(current.id) ? 'Marcar como pendente' : 'Marcar como concluído' }}</button><RouterLink to="/playground" class="btn btn-outline">Abrir playground →</RouterLink></div><p class="muted-note">O progresso é salvo neste navegador. A conclusão é manual; não há correção automática.</p></article></div>
</LabLayout></template>
