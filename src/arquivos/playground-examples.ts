export interface PlaygroundExample {
  id: string
  label: string
  description: string
  code: string
}

export const playgroundExamples: PlaygroundExample[] = [
  {
    id: 'contador',
    label: 'Contador reativo',
    description: 'Aprenda a utilizar ref e eventos.',
    code: `<script setup>
import { ref, computed } from 'vue'

const contador = ref(0)

const dobro = computed(() => contador.value * 2)

function incrementar() {
  contador.value++
}

function diminuir() {
  contador.value--
}

function zerar() {
  contador.value = 0
}
<\/script>

<template>
  <div class="app">
    <h1>Contador Vue 3</h1>

    <p>Aprendendo reatividade!</p>

    <h2>{{ contador }}</h2>

    <p>Dobro: {{ dobro }}</p>

    <div class="actions">
      <button @click="diminuir">-</button>
      <button @click="zerar">Zerar</button>
      <button @click="incrementar">+</button>
    </div>

    <p v-if="contador >= 5">
      Parabéns! Você chegou a 5!
    </p>
  </div>
</template>

<style scoped>
.app {
  text-align: center;
  padding: 30px;
}

h1 {
  color: #e8dfcf;
}

h2 {
  font-size: 48px;
  color: #ffffff;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  background: #e8dfcf;
  color: #171717;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
}

button:hover {
  background: #ffffff;
}
</style>`
  },

  {
    id: 'formulario',
    label: 'Formulário com v-model',
    description: 'Aprenda a trabalhar com formulários.',
    code: `<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const mensagem = ref('')

function enviar() {
  if (!nome.value || !email.value) {
    mensagem.value = 'Preencha todos os campos!'
    return
  }

  mensagem.value = 'Cadastro realizado com sucesso!'
}
<\/script>

<template>
  <div class="formulario">
    <h1>Cadastro</h1>

    <form @submit.prevent="enviar">
      <label>Nome</label>

      <input
        v-model="nome"
        placeholder="Digite seu nome"
      />

      <label>Email</label>

      <input
        v-model="email"
        type="email"
        placeholder="Digite seu email"
      />

      <button type="submit">
        Cadastrar
      </button>
    </form>

    <p v-if="mensagem">
      {{ mensagem }}
    </p>

    <div v-if="nome">
      <h3>Prévia</h3>
      <p>Nome: {{ nome }}</p>
      <p>Email: {{ email }}</p>
    </div>
  </div>
</template>

<style scoped>
.formulario {
  max-width: 400px;
  margin: auto;
  padding: 24px;
}

h1 {
  color: #e8dfcf;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 12px;
  border: 1px solid #555;
  border-radius: 8px;
  background: #252525;
  color: white;
}

button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #e8dfcf;
  color: #171717;
  cursor: pointer;
}
</style>`
  },

  {
    id: 'lista',
    label: 'Lista dinâmica',
    description: 'Aprenda a utilizar v-for e arrays reativos.',
    code: `<script setup>
import { ref } from 'vue'

const novaTarefa = ref('')

const tarefas = ref([
  { id: 1, texto: 'Estudar Vue', feita: true },
  { id: 2, texto: 'Aprender componentes', feita: false },
  { id: 3, texto: 'Criar um projeto', feita: false }
])

function adicionar() {
  const texto = novaTarefa.value.trim()

  if (!texto) return

  tarefas.value.push({
    id: Date.now(),
    texto,
    feita: false
  })

  novaTarefa.value = ''
}

function remover(id) {
  tarefas.value = tarefas.value.filter(
    tarefa => tarefa.id !== id
  )
}
<\/script>

<template>
  <div class="tarefas">
    <h1>Lista de tarefas</h1>

    <form @submit.prevent="adicionar">
      <input
        v-model="novaTarefa"
        placeholder="Nova tarefa"
      />

      <button type="submit">Adicionar</button>
    </form>

    <ul>
      <li
        v-for="tarefa in tarefas"
        :key="tarefa.id"
      >
        <input
          v-model="tarefa.feita"
          type="checkbox"
        />

        <span :class="{ concluida: tarefa.feita }">
          {{ tarefa.texto }}
        </span>

        <button @click="remover(tarefa.id)">
          Remover
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tarefas {
  max-width: 500px;
  margin: auto;
  padding: 24px;
}

h1 {
  color: #e8dfcf;
}

form {
  display: flex;
  gap: 10px;
}

input {
  padding: 10px;
}

button {
  background: #e8dfcf;
  color: #171717;
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
}

li span {
  flex: 1;
}

.concluida {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>`
  }
]

export const playgroundPreviewBaseStyles = `
:host {
  display: block;
  min-height: 100%;
  background: #171717;
  color: #e8dfcf;
  font-family: Inter, system-ui, sans-serif;
}

* {
  box-sizing: border-box;
}

.playground-mount {
  min-height: 100%;
  padding: 24px;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  transition: 0.2s ease;
}

button:hover {
  opacity: 0.85;
}

a {
  color: #e8dfcf;
}
`