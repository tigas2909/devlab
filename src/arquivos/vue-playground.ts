import {
  compileScript,
  compileStyle,
  parse
} from '@vue/compiler-sfc'

import * as ts from 'typescript'
import * as Vue from 'vue'

import type { Component } from 'vue'

export interface PlaygroundBuild {
  component: Component
  styles: string[]
}

function formatError(error: unknown): string {
  return error instanceof Error
    ? error.message
    : String(error)
}

export async function buildPlayground(
  source: string
): Promise<PlaygroundBuild> {

  if (!source.trim()) {
    throw new Error('O editor está vazio.')
  }

  const filename = 'App.vue'

  // 1. Interpreta o componente Vue
  const { descriptor, errors } = parse(source, {
    filename
  })

  if (errors.length) {
    throw new Error(errors.map(formatError).join('\n'))
  }

  if (!descriptor.template) {
    throw new Error('Adicione um bloco <template>.')
  }

  // 2. Compila o script e o template juntos
  const script = compileScript(descriptor, {
    id: 'devlab-preview',
    inlineTemplate: true,
    genDefaultAs: '__component'
  })

  // 3. Remove os tipos TypeScript
  let code = ts.transpileModule(script.content, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext
    },
    reportDiagnostics: true
  }).outputText

  // 4. Transforma imports do Vue em referências
  // à mesma instância utilizada pelo DevLab
  code = code.replace(
    /import\s*\{([^}]+)\}\s*from\s*['"]vue['"];?/g,
    (_match, imports: string) => {

      const bindings = imports
        .split(',')
        .map(item => item.trim())
        .filter(Boolean)
        .map(item => item.replace(/\s+as\s+/, ': '))
        .join(', ')

      return `const { ${bindings} } = Vue;`
    }
  )

  // Bloqueia imports que não foram transformados
  if (/\b(?:import|export)\s/.test(code)) {
    throw new Error(
      'Utilize apenas imports nomeados do pacote vue.'
    )
  }

  // 5. Cria o componente executável
  const factory = new Function(
    'Vue',
    `
      "use strict";

      ${code}

      return __component;
    `
  )

  const component = factory(Vue) as Component & {
    __scopeId?: string
  }

  // 6. Compila os estilos
  const styles: string[] = []

  const scopeId = 'data-v-devlab-preview'

  for (const style of descriptor.styles) {

    if (style.lang && style.lang !== 'css') {
      throw new Error(
        'O playground aceita apenas CSS.'
      )
    }

    const result = compileStyle({
      source: style.content,
      filename,
      id: scopeId,
      scoped: style.scoped
    })

    if (result.errors.length) {
      throw new Error(
        result.errors.map(formatError).join('\n')
      )
    }

    styles.push(result.code)
  }

  // 7. Aplica o identificador do CSS scoped
  if (descriptor.styles.some(style => style.scoped)) {
    component.__scopeId = scopeId
  }

  return {
    component,
    styles
  }
}